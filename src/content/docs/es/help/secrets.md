---
title: Secretos y portales
description: Cómo una instalación estándar de HyDE maneja secretos, compatibilidad con XDG, inicio automático y portales de escritorio.
sidebar:
  order: 3
---

Este documento busca explicar cómo HyDE maneja secretos, compatibilidad con XDG, inicio automático y portales de escritorio. Está pensado para aclarar confusiones comunes y prevenir problemas reportados frecuentemente. Este documento es un trabajo en progreso y puede no estar completo.

## Secretos

Un **secreto** es cualquier dato sensible que una aplicación necesita almacenar de forma segura — generalmente una contraseña o un token de autenticación que la app debe persistir entre sesiones.

### El estándar org.freedesktop.secrets

Muchas aplicaciones de Linux dependen de la API [org.freedesktop.secrets](https://specifications.freedesktop.org/secret-service/latest/) (_abreviada como_ **o.f.s.**) para guardar y recuperar credenciales. Esta API es provista por implementaciones como **KDE Wallet (KWallet)** y **GNOME Keyring**. Ya sea por compatibilidad o dependencia, es muy probable que la tengas en tu sistema:

```bash
sudo pacman -Qi libsecret
```

:::tip[Cómo funciona o.f.s. en resumen]
La API de o.f.s. guarda tus contraseñas junto con **atributos de búsqueda** que una aplicación puede consultar vía **D-Bus**. Los secretos solo pueden ser *desbloqueados* cuando hay una sesión de usuario activa, y solo pueden ser *modificados* cuando su estado `isLocked` es `false`.
:::

### Cómo HyDE maneja secretos por defecto

En una instalación contemporánea de HyDE, la API de libsecret definida por `org.freedesktop.secrets` está presente porque **KWallet** es jalada como dependencia de `kio`. `kio` está instalado porque **Dolphin** es el explorador de archivos por defecto de HyDE, según lo definido en `pkg_core.lst`.

Para la escalación de privilegios a nivel de sistema (por ejemplo, montar una unidad o usar Dolphin como root), HyDE utiliza **`polkit`** como framework de autorización. El prompt gráfico que pide tu contraseña es provisto por un **agente de autenticación polkit**. En vez de forzar un solo agente, la configuración de inicio de HyDE invoca **`polkitkdeauth.sh`** — una script de despacho que recorre una lista priorizada de agentes polkit conocidos y ejecuta el primero que encuentra en tu sistema. El agente preferido es **`hyprpolkitagent`**, pero **`polkit-gnome`**, **`polkit-kde`** y otros están definidos como respaldo en la script (junto al resto de las scripts de hyde-shell).

Solo necesitas **un** agente polkit corriendo a la vez, a menos que tengas una configuración específica en mente.

:::tip[Consejo sobre KWallet]
Si KWallet está instalado pero inactivo, deberías deshabilitarlo mediante la GUI de KWalletManager. No es lo ideal, pero dejar un servicio KWallet inactivo habilitado puede causar inestabilidad.
:::

:::tip[¿Problemas abriendo apps viejas desde rofi?]
Puede ser que instalar `xorg-xhost` resuelva tu problema:

```bash
sudo pacman -Sy xorg-xhost
```

Luego reinicia.
:::

1. **Un servicio requiere elevación** — Un servicio (como GParted o Dolphin) requiere elevación para realizar una tarea. El sistema usa las políticas definidas por `polkit` (establecidas en `/usr/share/polkit-1/...`) para determinar si la tarea requiere privilegios elevados. Si se necesita elevación, el agente polkit que `polkitkdeauth.sh` lanzó renderiza un prompt pidiendo la contraseña al usuario. Si es válida, el servicio puede escalar privilegios temporalmente.

2. **Recuperar una credencial** — Cuando la aplicación necesite esas credenciales de nuevo, el agente gráfico de polkit solicita tu contraseña. Esto debería ser fluido siempre y cuando no te falten dependencias o tengas una mala configuración por haber instalado [HyDE incorrectamente](../../getting-started/installation/).

---

## Compatibilidad con XDG

La [Especificación de Directorios Base XDG](https://specifications.freedesktop.org/basedir-spec/latest/) define ubicaciones estándar para datos de usuario, configuración, caché y archivos de tiempo de ejecución. HyDE intenta seguir esta especificación mediante varios paquetes esenciales:

### Paquetes relevantes en `pkg_core.lst`

| Paquete | Propósito |
|---|---|
| `hyprpolkitagent` | Agente gráfico y general de autenticación para prompts de escalación de privilegios. |
| `xdg-user-dirs` | Establece los directorios estándar de usuario (`Documents`, `Pictures`, etc.) según la especificación XDG. |
| `xdg-desktop-portal-hyprland` (XDPH) | Habilita la comunicación D-Bus entre aplicaciones y Hyprland. Esencial para apps Flatpak — compartir pantalla, integración con PipeWire, y más. |
| `xdg-desktop-portal-gtk` | Portal de respaldo para aplicaciones basadas en GTK (ej., gnome) que necesitan comunicarse vía D-Bus. |

---

## Autostart y UWSM

[UWSM](https://github.com/Vladimir-csp/uwsm) (Universal Wayland Session Manager) gestiona el lanzamiento de aplicaciones tratándolas como **unidades de systemd**, habilitando el control de ciertas variables de entorno. Por sí solo, permite que scripts se ejecuten a nivel de servicio (incluso antes de Hyprland) y usa systemd para vincularse con `graphical-session-pre.target`, `graphical-session.target` y `xdg-desktop-autostart.target` para proveer (en teoría):

- Una experiencia limpia de inicio/apagado.
- Scripts y configuración de HyDE establecidos a nivel de servicio.
- Mejor manejo automático de recursos del sistema y respaldos.
- Una frontera más clara entre lo que pertenece a la *sesión gráfica* y lo que no.

Lo que UWSM _no_ hace:

- Dar un incremento mágico de rendimiento.
- Contenerizar o aislar todas tus apps.
- Arreglar problemas relacionados con algo fuera de la sesión gráfica que ejecuta UWSM.

### Scripts de configuración UWSM de HyDE

HyDE incluye tres scripts de configuración para integrarse con UWSM y aplicar los estándares que debe seguir:

| Script | Ubicación | Rol |
|---|---|---|
| `00-hyde.sh` | `$XDG_CONFIG_HOME/uwsm/env.d/` | Establece variables de entorno para la sesión. |
| `01-gpu.sh` | `$XDG_CONFIG_HOME/uwsm/env.d/` | Variables de entorno específicas de GPU. |
| `00-hyde.sh` | `$XDG_CONFIG_HOME/uwsm/env-hyprland.d/` | Establece valores por defecto para apps Electron, rutas de configuración de Hyprland y respaldos de toolkit. |

:::note[No necesitas editar estos]
Estas scripts son opinionadas para que las variables, keybinds y configuración de tema de HyDE tengan respaldos redundantes (buenos). Si tienes problemas de autostart, la recomendación es asegurarte de que UWSM esté seleccionado en tu gestor de inicio de sesión. Alternativamente, reinstala HyDE y asegura de que UWSM esté correctamente configurado.
:::

Consulta [la sección de configuración de Hyprland](../../configuring/hyprland/) para un control más preciso de lo que ocurre al iniciar sesión bajo HyDE.

---

## Portales de escritorio

Los portales de escritorio proveen una interfaz aislada para que las aplicaciones soliciten capacidades del sistema vía D-Bus — selectores de color, compartir pantalla, almacenamiento de secretos, impresión, y más. Las aplicaciones (especialmente Flatpaks) típicamente no pueden acceder a estos recursos directamente; deben pasar por el portal.

Puedes listar los portales instalados en tu sistema con:

```bash
ls /usr/share/xdg-desktop-portal/portals/
```

### Portales incluidos con HyDE

| Portal | Puede manejar | Notas |
|---|---|---|
| `hyprland.portal` | Captura de pantalla, selección de ventana, escritorio remoto | Portal principal; nativo de Hyprland. |
| `gtk.portal` | Entradas de escritorio, explorador de archivos, seguridad | Respaldo para apps GTK. Funciona como manejador secundario aquí. |
| `kwallet.portal` | Almacenamiento de secretos vía KWallet | Presente por la cadena de dependencias `kio` → KWallet; no configurado explícitamente por HyDE. |

La prioridad se establece en `/usr/share/xdg-desktop-portal/hyprland-portals.conf` — Hyprland es el predeterminado, GTK es respaldo. Puedes sobreescribir esto creando `~/.config/xdg-desktop-portal/hyprland-portals.conf`.

:::note
Si una aplicación ignora los portales completamente (común en apps nativas viejas y algunas de Electron), ninguna configuración de portal afectará su comportamiento. Esto puede explicar por qué una app ignora tu tema o preferencias.
:::

---

## Cambio de tema y confusión común

El stack de temas de HyDE actualmente apunta a *cuatro* categorías de aplicaciones explicadas a continuación, cada una temada mediante un mecanismo diferente. Saber en cuál categoría cae tu app te dice inmediatamente dónde buscar cuando algo se ve mal.

### Cómo funciona el cambio de tema

HyDE tiene dos conceptos separados que los usuarios suelen confundir:

- **Tema** (<kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd> o `hyde-shell theme select`) — selecciona un paquete completo de tema: conjunto de fondos de pantalla, GTK arc, pack de íconos, cursor, preset de Kvantum y sobreescrituras de color predefinidas.
- **Modo** (<kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>) — cicla entre los modos de _wallbash_ (colores extraídos en tiempo real de tu fondo de pantalla actual) y el modo _tema_ (colores de la paleta predefinida del tema). Esto afecta las apps controladas por wallbash sin cambiar el tema en sí.

Ambas acciones convergen en la misma tubería. Seleccionar un tema (`hyde-shell themeselect`) presenta un selector rofi, luego llama a `theme.switch.sh` — el orquestador central. Cambiar de modo (`hyde-shell wallbashtoggle -m`) presenta un selector rofi para los cuatro modos (theme, auto, dark, light), escribe la elección al estado, y también llama a `theme.switch.sh`.

`theme.switch.sh` hace el trabajo pesado: carga `globalcontrol.sh` para configurar el entorno, carga las variables del tema (tema GTK, pack de íconos, cursor, fuentes), y las escribe en cada archivo de configuración relevante — qt5ct, qt6ct, kdeglobals, gtk-2.0, gtk-3.0, gtk-4.0, xsettingsd, overrides de Flatpak y Xresources. Luego llama a `wallpaper.sh` para establecer el fondo de pantalla del tema, lo cual a su vez dispara `color.set.sh` — el motor de plantillas de wallbash. `color.set.sh` carga los datos de color dominante (dcol) cacheados del fondo de pantalla actual, construye scripts de sustitución sed a partir de esos colores, y los aplica en paralelo a cada plantilla `.dcol` y `.theme` registrada en los directorios de wallbash.

`globalcontrol.sh` es la script de entorno compartida que cargan casi todas las demás scripts de HyDE. Establece rutas XDG, carga el estado persistido del tema, exporta el directorio del tema actual y el modo de wallbash, y provee funciones utilitarias (`pkg_installed`, `set_conf`, `get_hashmap`, `get_themes`, `toml_write`) de las que depende el resto de la tubería.

`hyde-shell` envuelve todas estas scripts en una sola herramienta inicializada, así que para la mayoría de usuarios la forma recomendada de interactuar con el temado es mediante comandos de `hyde-shell` en vez de llamar scripts individuales.

### Rofi

Rofi maneja su propio temado independientemente de Qt, GTK o Kvantum. Las plantillas por defecto de Rofi en HyDE viven en `~/.local/share/hyde/rofi/themes/` — no las edites directamente ya que se sobreescriben con cada actualización.

Cambia el estilo de Rofi con <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd>. Si quieres un tema personalizado de Rofi, colócalo en `~/.config/rofi/` y consulta la [sección de temas](../../theming/wallbash-and-dcol/).

#### Apps Qt (Dolphin, ark, apps de KDE en general)

Temadas vía **Kvantum** (el motor de estilos) y **qt5ct** / **qt6ct** (los puentes de configuración). Wallbash genera un tema Kvantum a partir de tus colores activos y lo escribe en `~/.config/Kvantum/`. Las apps Qt lo toman automáticamente porque HyDE establece `QT_QPA_PLATFORMTHEME=qt6ct` en el entorno de la sesión mediante las scripts de configuración UWSM.

Si una app Qt se ve sin estilo, verifica que `kvantum`, `qt5ct` y `qt6ct` estén instalados y que la variable de entorno esté presente en tu sesión:

```bash
echo $QT_QPA_PLATFORMTHEME  # debería retornar: qt6ct
```

#### Apps GTK2, GTK3, GTK4 (de GParted a PavuControl)

Temadas principalmente vía **nwg-look**, que escribe ajustes en `~/.gtkrc-2.0` y `~/.config/gtk-3.0/settings.ini`. El GTK arc activo de HyDE (el archivo `.tar.*` dentro del paquete de tema) se aplica aquí.

Abre `nwg-look` o — preferiblemente — presiona <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> / ejecuta `hyde-shell wallbashtoggle` y compara con PavuControl o Blueman-Manager. Los cambios toman efecto en el siguiente lanzamiento de la app. El manejo de GTK4 debería seguir el diseño de tu tema, pero el comportamiento puede depender de cómo fue creado el tema.

Si una app GTK4 se ve blanca o ignora tu tema, el archivo `gtk.css` requerido podría faltar, no estar correctamente generado, o la app está aislada (Flatpak) y no puede leerlo.

#### Apps Electron (VS Code, Spotify, Discord)

Las apps Electron usan su propia tubería de renderizado Chromium y no participan nativamente en el temado de Qt o GTK. Las plantillas wallbash de HyDE intentan empujar colores a estas apps vía su capa de integración GTK, con resultados variables:

- **VS Code** — wallbash puede aplicar un tema de color si la extensión wallbash o el tema de color está activo en el editor.
- **Spotify** — potencialmente poderoso si hay una configuración adecuada de Spicetify.
- **Discord** — típicamente requiere un cliente personalizado (ej., Vencord) que lea CSS; plantillas wallbash existen para esto en la comunidad.
- **Zen** — tiene soporte de la comunidad vía una script wallbash (https://github.com/dim-ghub/ZenBash/tree/main)
- **neovim** — no es Electron, pero también tiene un plugin dedicado de wallbash en desarrollo. (https://github.com/iamharshdabas/hyde.nvim)

:::tip
Para apps Electron, el enfoque más confiable es una plantilla wallbash específica por app en `~/.config/hyde/wallbash/scripts/`. Esto permite a wallbash empujar color y otros datos directamente al formato de configuración de la app en cada cambio de fondo de pantalla o tema.
:::

### Apps Flatpak

Las apps Flatpak corren en un sandbox y están aisladas de la mayoría de las librerías compartidas o del sistema. Tienden a incluir sus propios runtimes de Qt y GTK integrados. Con una instalación limpia de HyDE puedes usar **Warehouse** para ver lo instalado vía Flathub, o ejecutar `./install_fpk.sh` en el directorio `~/HyDE/Scripts/extra` para configurarlo si Flathub fue rechazado durante `./install.sh`. Los portales permiten excepciones controladas al sandbox, y la integración de HyDE con proyectos más amplios de la comunidad significa que apps como Spotify y Discord, dependiendo de los clientes instalados, pueden beneficiarse de algo de interacción del usuario:
https://github.com/HyDE-Project/HyDE/discussions/137#discussioncomment-11918528

El temado mediado por portales (como con ARCs) es el camino más limpio a largo plazo y depende de que `xdg-desktop-portal-gtk` esté activo en tu sesión.

### Conclusión

Este documento busca proveer definiciones confiables de conceptos clave que suelen estar dispersos en hilos de Discord y reportes de usuarios. Está principalmente orientado a resolver problemas comunes — temas que no cargan, apps que no toman los colores, prompts de autenticación que fallan — pero también debería ser útil para desarrolladores que quieran entender cómo encajan los componentes internos de HyDE. Si quieres profundizar u optimizar, consulta las scripts mencionadas a lo largo del documento, teniendo en cuenta que muchas están estrechamente interrelacionadas y los cambios pueden tener efectos en cascada.
