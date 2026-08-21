---
title: Runtime de Lua y migración
description: Cómo se despliega, configura y migra el runtime de Hyprland basado en Lua de HyDE desde el layout heredado de Hyprlang.
---

Este documento explica el stack de Hyprland basado en Lua introducido por [la migración a Lua](https://github.com/HyDE-Project/HyDE/discussions/1717). Está escrito para usuarios existentes de HyDE que están decidiendo si migrar —y cómo hacerlo— desde la configuración heredada de Hyprlang.

:::caution[Documentación de la era de migración]
La migración a Lua modifica y elimina dot-files, así como directorios completos. Haz una copia de seguridad de tu configuración de Hyprland y HyDE antes de restaurar los dotfiles de Lua, solo si has editado los directorios de HyDE `.local/lib`, `.local/share`, `.local/state` o `.config/` (los drop-ins deberían sobrevivir). El artículo actual de [configuración de Hyprland](../../configuring/hyprland/) documenta el layout heredado en `.conf`; usa esta página como referencia complementaria de migración hasta que ese artículo se actualice.
:::

## De un vistazo 👁️‍🗨️

HyDE no está reemplazando cada formato de configuración con Lua. Tampoco estamos forzando un refactor de cada script y componente.
Se trata principalmente de longevidad: sellar el **runtime de Hyprland**, llevándolo de un árbol de `.conf` en Hyprlang hacia algo más estable.
Además, la incorporación de módulos Lua y el mantener TOML para los ajustes declarativos de HyDE y los manifiestos de dotfiles encajan de forma natural.
En esencia, estamos migrando a algo con mejor soporte: **Lua**. Un lenguaje de scripting y de sistemas bastante popular que, entre otras tareas, crea variables como `hl`, `start`, `hyde`, `hs`, etc. Esta es una mejora central:

Hyprlang era el material antiguo que usábamos para transportar variables de entorno importantes, y su funcionalidad era limitada. Aquí un ejemplo tomado del antiguo startup.conf:

```sh
exec-once = dbus-update-activation-environment --systemd --all #? Might fail so we hardcode the variables below
exec-once = $start.DBUS_SHARE_PICKER    # dbus-update-activation-environment (one-time setup)
exec-once = $start.SYSTEMD_SHARE_PICKER # systemctl --user import-environment (one-time setup)
exec-once = $start.XDG_PORTAL_RESET     # resetxdgportal.sh (one-time setup)
```

Como puedes ver, la infraestructura siempre fue algo desequilibrada en cuanto a viabilidad a largo plazo. En pocas palabras, Hyprlang era bueno para tener una tabla de variables, pero no para piezas en movimiento como las que requieren las operaciones en tiempo de ejecución (runtime).

``` lua [.local/share/hypr/lua/start_up.lua]
    hl.on(
            "hyprland.start",
            function()
                check_exec(hs.dbus_share_picker)
                check_exec(hs.systemd_share_picker)
                check_exec(hs.auth_dialogue)
    )
```

En lugar de esperar que `startup.conf` se dispare antes de que Hyprland inicie, declaramos un evento `hyprland.start` o `hyde.activate` que se encadena hacia la operación en runtime; `hyde-shell reload` lo demuestra al reconstruir los entornos principales.

## Layouts

Layouts es una función nueva y exclusiva de Lua que permite al usuario cambiar el comportamiento de todo su WM en una sola acción rápida: keybinds, transiciones entre espacios de trabajo y ventanas, además de la sensación (_feel_) general de tu equipo.
El flujo de trabajo y los ajustes de layout predeterminados no están configurados por defecto, lo que significa que algo más tiene que activarlos.

Elige un layout:

```sh
hyde-shell layouts --select
```

### Archivos y aspectos destacados

| Aspecto | Configuración heredada | Configuración en Lua |
| --- | --- | --- |
| Punto de entrada de Hyprland | `~/.config/hypr/hyprland.conf` o `$XDG_DATA_HOME/hyprland.conf` | `$XDG_DATA_HOME/hypr/hyde.lua` y `~/.config/hypr/hyprland.lua` |
| Reglas de ventana | `~/.config/hypr/windowrules.conf` | `/.local/share/hypr/lua/window_rules.lua`, aunque preferiblemente deberías migrarlas a `hyprland.lua` |
| Ajustes de inicio | `[hyprland-start]` en `config.toml` | `[desktop.start]` en `$XDG_DATA_HOME/hyde/config-registry.toml` |
| Preferencias de usuario (UserPrefs) | `.config/hypr/userprefs.conf` | `~/.local/share/hypr/lua/defaults.lua` |
| Copia de seguridad y restauración | [listas de restauración heredadas](../resources/restore.md) | [manifiestos de `deez` invocados por `install.sh -r`](../resources/restore.md#tomlConfiguration) |

:::tip[HyDE+Lua trae un límite de módulos completamente nuevo]
Si estás acostumbrado a editar archivos conf debido a temas con bugs visuales o actualizaciones mal sincronizadas, te va a encantar la nueva rigidez de Lua; y si nunca has tenido que lidiar con eso, considéralo el momento perfecto para sumarte y ayudar a mejorar HyDE.
:::

Lua evita muchos de los trucos puntuales que empezamos a usar para lograr que Hyprlang funcionara en rutinas más finas, pero **no** es una mejora de rendimiento garantizada. Su principal beneficio es una configuración más mantenible y soporte a largo plazo. La siguiente tabla toma los 'cambios' como las diferencias entre la última rama de desarrollo disponible y una versión 'estable' anterior al 12 de mayo de 2026 [95adf01]:

| Archivos modificados | | Cambios de LOC | Scripts | Descripción |
| --- | --- | --- | --- | --- |
| 44 | +2,074, | −159 | 33 añadidos, 11 modificados, 29 sin cambios | Añade manifiestos y migraciones de dotfiles; actualiza el soporte de instalación y restauración. |

las nuevas carpetas `dots` y `dots-groups` en ~/HyDE/Scripts/ que contienen los esquemas de dotfiles.

`Funciones auxiliares` para `install.sh` que se supone hacen la migración más simple y refuerzan el entorno de Python.
_~/HyDE/Scripts/dots/hyprland.toml_ despliega el árbol de Lua.

Todos los puntos de entrada anteriores han sido actualizados;

| Punto de entrada | Descripción |
| --- | --- |
| $XDG_DATA_HOME/.local/share/hypr/hyde.lua | Cumple promesas hacia el entorno, tales como el entorno de runtime, los scripts principales de Lua, todas las preferencias de usuario en `.config/` y los fallbacks de `.local/` |
| $XDG_CONFIG_HOME/hypr/hyprland.lua | Capa de sobrescritura del usuario, o simplemente 'preferencias de usuario'; forma parte de la zona deseada para interactuar con esta actualización, desde añadir keybinds hasta invocar scripts de HyDE con Lua. La directiva `require("")` es de mucha ayuda |

---

:::danger
No toques datos de TOML o Lua que no reconozcas: el costo de tener una configuración de dotfiles rota es mucho mayor, al igual que lo es nuestra capacidad de seguir construyendo HyDE. $XDG_DATA_HOME/hypr/lua/* define gran parte de lo que ocurre después de que uwsm inicia y monta la configuración drop-in de HyDE, y está en el corazón de la funcionalidad de HyDE.
:::

### Actualizaciones de runtime

Dado que Lua ahora corre en paralelo respecto a nuestro entorno de Python, HyDE activa el stack de Lua a través de UWSM:

```text
UWSM environment scripts
  -> ~/.local/lib/hyde/shell/activate
  -> HYDE_MODE=lua and HYPRLAND_CONFIG=.../hypr/hyde.lua
  -> Hyprland loads hyde.lua
  -> HyDE loads its Lua modules and ~/.config/hypr/hyprland.lua
```

El runtime compartido vive bajo `$XDG_DATA_HOME/hypr/`; tus cambios de usuario van bajo `$XDG_CONFIG_HOME/hypr/`. Esto sigue la separación habitual de HyDE entre datos mantenidos por el proyecto y configuración propiedad del usuario. Consulta [Secretos y Portales](../secrets/) para el modelo de sesión de UWSM y XDG relacionado.

:::note[No edites el runtime compartido sin una razón]
Los archivos bajo `~/.local/share/hypr/lua/` y `~/.local/share/hypr/hyde.lua` son desplegados por HyDE y pueden cambiar en cada restauración. Diversifica colocando tus sobrescrituras directas en `~/.config/hypr/hyprland.lua`, y divide las personalizaciones más grandes en archivos Lua que puedan cargarse después con `require()`.
:::

## De Hyprlang a Lua

**Los archivos de Hyprlang son declarativos**: describen ajustes y despachan comandos. Lo que había dentro de un archivo .conf era, en cierto modo, una mentira: siempre fue y tenderá a ser sintaxis compatible con `Hypr`. Lua puede expresar los mismos ajustes, y además añadir funciones, manejadores de eventos y helpers compartidos donde tenga sentido; algo que, de todas formas, ya hacían algunos archivos conf.

Por ejemplo, un bloque de input heredado como el siguiente:

```ini
# ~/.config/hypr/userprefs.conf
input {
    kb_layout = us,es
    accel_profile = flat
}
```

se convierte en un perfil más expresivo:

```lua
# ~/.config/hypr/hyprland.lua
hl.config({
    input = {
        kb_layout = "us,es",
        accel_profile = "flat",
    },
})
```

De igual forma, un keybind puede usar los helpers de Lua de HyDE en lugar de una línea `bind` delimitada por comas:

```lua
hl.bind(
    "SUPER + Q",
    hl.dsp.window.close(),
    { description = "[Window Management] close focused window" }
)
```

```ini
#~/.config/hypr/hyprland Conf -> Lua guide
MOD=hyde.config.modifiers.main
_F = {description = "[Launcher|Apps] Demuestra layouts"}
hl.bind(MOD .. " + ALT + L", hl.dsp.exec_cmd("hyde-shell layouts --select"), _F)
```

Empieza con los módulos que trae HyDE de fábrica para patrones que coincidan con el runtime instalado; incluso podrías restaurar tus keybinds anteriores a tu gusto y experimentar con el start_up, como veremos a continuación.

### TOML todavía tiene un papel

TOML sigue siendo la capa de datos entre el scripting y las llamadas en runtime. `$XDG_DATA_HOME/hyde/config-registry.toml` contiene preferencias portables de HyDE, como aplicaciones de escritorio, comandos de inicio y alias útiles, mientras que el esquema instalado describe los campos válidos. El registro de configuración de HyDE también usa TOML para describir los archivos editables y sus hooks, incluyendo `~/.config/hypr/hyprland.lua`.

La separación:

+ Usa **TOML** para las opciones de HyDE y datos respaldados por un esquema.
+ Usa **Lua** para los ajustes, bindings, reglas, layouts y comportamiento orientado a eventos de Hyprland.
+ No toques los archivos gestionados por HyDE en `$XDG_DATA_HOME`, a menos que estés desarrollando el propio HyDE.

### Qué debe migrarse manualmente

Como mínimo:

+ `keybindings.conf`
+ `windowrules.conf`
+ `monitors.conf`
+ `userprefs.conf`

El manifiesto de Lua entra en conflicto de forma intencional con el manifiesto heredado de Hyprland. Los archivos antiguos pueden permanecer en disco después de una restauración, pero ya no son la fuente de configuración. Conserva una copia de seguridad hasta que hayas revisado cada bind, monitor, regla y servicio de inicio en una sesión nueva.

## Layouts e inicio

Usa `hyde-shell layouts --select` para elegir un layout incluido de fábrica o uno personalizado.

```text
~/.config/hypr/lua/layouts/custom.lua
```

La antigua sección `[hyprland-start]` ha sido reemplazada por `[desktop.start]` en `$XDG_DATA_HOME/hyde/schema/config.toml`. El `start_up.lua` de Lua ejecuta estos eventos de acuerdo con el esquema local, cuando Hyprland emite su evento de inicio. El esquema instalado con HyDE documenta las claves soportadas.

### Restauración y `deez`

`deez` es el backend de despliegue de dotfiles de HyDE dentro de la migración a Lua. Normalmente es un detalle de implementación: `./install.sh -r` usa el ejecutable privado dentro del entorno de Python de HyDE para desplegar los manifiestos adecuados. Honestamente, se necesita muy poca intervención manual para usar el nuevo cliente de dotfiles.

Si la restauración reporta que falta `deez-dots`, asegúrate de que tu carpeta local `~/HyDE` esté actualizada, y luego prepara el entorno rápidamente:

```bash
cd /path/to/HyDE/Scripts
./install.sh -p
./install.sh -r
```

Para un reintento intencionalmente controlado, usa la misma forma de comando que el instalador, no un subcomando `dot` más antiguo:

```bash
"$HOME/.local/state/hyde/python_env/bin/deez" \
  --source /path/to/HyDE \
  --config /path/to/HyDE/Scripts/dots-groups/core.toml \
  dots --skip-git --list
```

**Reemplaza la bandera `--list` por `--deploy all` solo si estás seguro de que no causará conflictos.**
Si lo hace, por favor no lo reportes. Como se mencionó, `deez-dots` es un _detalle de implementación_;
es muy práctico fuera de nuestro contexto, pero dentro de él ha sido restringido de forma que exista muy poco
riesgo de que falle fuera de un error del usuario.

:::tip[Usa el instalador completo]
Ejecuta `./install.sh -p` para establecer la configuración del entorno según el último `git pull` de HyDE, y `./install.sh -r` para una restauración de Lua. **No convierte .conf -> .lua.** Despliega tanto los manifiestos principales como los adicionales, restaura el estado del tema y ejecuta los pasos posteriores de HyDE. Puedes priorizar ciertas configuraciones dentro del directorio `HyDE/Scripts/dots` para que sobrevivan a las sobrescrituras.
:::

+ Archivos antiguos de Hyprlang y sus reemplazos en Lua

```ini
#Este es el mapa práctico de migración, útil si quieres limpiar una migración:
  -- ~/.config/hypr/hyprland.conf -> ~/.local/share/hypr/hyde.lua:1
  -- ~/.config/hypr/keybindings.conf -> ~/.local/share/hypr/lua/key_binds.lua:1
  -- ~/.config/hypr/userprefs.conf -> ~/.config/hypr/hyprland.lua:17
  -- ~/.config/hypr/windowrules.conf, monitors.conf, nvidia.conf -> user hyprland.lua o un módulo de Lua bajo lua/
  -- ~/.config/hypr/animations.conf, workflows.conf -> Lua workflow/animation selectors, no los archivos de conf antiguos
  -- ~/.local/share/hypr/_.conf and ~/.local/share/hyde/_.conf files -> Sobras mantenidas para migraciones/respaldos, la carpeta de schema en partícular es solo útil respaldar si has editado las instrucciones relevantes de corrida.
```

## Lista de verificación de migración

1. Revisa la [Instalación](../../getting-started/installation/) y clona la revisión de HyDE con soporte para Lua que planeas usar.
2. Haz una copia de seguridad inteligente. Recomiendo: `~/.config/hypr`, `~/.config/hyde`, `~/.config/dconf`, `~/.config/gtk-3.0`, `~/.config/qt5ct`, `~/.config/qt6ct`, `~/.config/kdeglobals`, `~/.gtkrc-2.0`, y `~/.config/uwsm`.
3. Asegúrate definitivamente de tener `luarocks` y el preface configurados con: `./install.sh -p`. Ejecutar `./install.sh -r` no va a **ni puede** traducir o transferir tu sintaxis .conf existente a una sintaxis utilizable de HyDE+Lua.
4. Migra tus personalizaciones heredadas de Hyprlang a los directorios descritos a lo largo de este documento. ($XDG_DATA_HOME, $HYPRLAND_CONFIG, $UWSM_FINALIZE_VARNAMES)
5. Inicia una nueva sesión de HyDE (debería ocurrir automáticamente), y luego verifica el runtime y recarga Hyprland:

```bash
sh -c '
printf "%-18s %s\n" "HYDE_MODE"        "${HYDE_MODE:-<unset>}"
printf "%-18s %s\n" "HYPRLAND_CONFIG"  "${HYPRLAND_CONFIG:-<unset>}"
printf "%-18s %s\n" "DCONF_PROFILE"    "${DCONF_PROFILE:-<unset>}"
printf "%-18s %s\n" "HYDE_ACTIVATED"   "${HYDE_ACTIVATED:-<unset>}"
printf "%-18s %s\n" "HYDE_FEATURE_LUA" "${HYDE_FEATURE_LUA:-<unset>}"
printf "%-18s %s\n" "QT_QPA_PLATFORM"  "${QT_QPA_PLATFORM:-<unset>}"
echo
need_p=0
if command -v luarocks >/dev/null 2>&1; then
    echo "luarocks: "
else
    echo "luarocks: no encontrado"
    need_p=1
fi
if [ -x "$HOME/.local/state/hyde/python_env/bin/deez" ]; then
    echo "deez (python env): encontrado"
else
    echo "deez (python env): no encontrado "
    need_p=1
fi
if [ -n "$HYPRLAND_CONFIG" ] && [ -f "$HYPRLAND_CONFIG" ]; then
    echo "HYPRLAND_CONFIG: "
else
    echo "HYPRLAND_CONFIG: unset!"
    exit 1
fi
if [ -n "$DCONF_PROFILE" ] && [ ! -f "$DCONF_PROFILE" ]; then
    echo "Existe variable, falta el archivo."
fi
echo
if [ "$need_p" -eq 1 ]; then
    echo "=> corre ./install.sh -p antes de ./install.sh -r"
else
    echo "=> ./install.sh -p hecho, seguro para correr restauración -r"
fi
'
```

:::note[¿Necesitas la guía heredada?]
La página actual de [configuración de Hyprland](../../configuring/hyprland/) sigue siendo la referencia para una instalación de HyDE sin Lua. No mezcles sus ejemplos en `.conf` con un runtime de Lua activo sin antes decidir qué stack de configuración está usando tu sesión.
:::
