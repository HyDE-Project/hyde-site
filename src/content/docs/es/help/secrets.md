---
title: Secretos y Portals
descprion: Como una instalación estandar de HyDE maneja secretos, compatibilidad con XDG, inicio automatico y portales de desktop.
sidebar:
  order: 3
  badge:
    text: Draft
    variant: caution
---

## Propósito

Este documento busca servir como apoyo para usuarios perdidos sobre algunos conceptos que veo traen confusión, en específico:

*Manejo de secretos por HyDE.
*Como esque HyDE maneja XDG
*Explicación concreta de UWSM/Secretos/desktop-portals/
*Una guía para prevenir problemas con rofi/theme swtiching.

## Secrets

Un **secreto** (secret de ahora en adelante) es cualquier pedazo de información que una aplicación requiere guardar de forma ¨segura" - Generalmente es una contraseña o _token_ que la app debe hacer persistente atravez de sessiones. 

### El estandard org.freedesktop.secrets

Muchas aplicaciones de Linux usan la [org.freedesktop.secrets](https://specifications.freedesktop.org/secret-service/latest/) API (_resumido a_ **o.f.s.**) para guardar y manejar credenciales. Esta API es provenida por las implementaciones mas populares como **KDE Wallet (KWallet)** y el **GNOME Keyring**, ya sea por combatibilidad o dependencia, es muy probable que la tengas como "libsecret".

:::tip[Como funciona o.f.s.]
La o.f.s. API guarda tu secret junto unos **lookup attributes** que la aplicación puede generalmente buscar con **D-Bus**. Puede estar *unlocked* cuando una sesion de usuario esta activa, y solo se pueden *modificar* cuando su `isLocked` state es `false`.
:::

### Como HyDE maneja secretos de fabrica

En una instalación contemporania de HyDE, libsecret esta presente poque **KWallet** es jalada como dependencia de `kio`. `kio` esta instalado porque **Dolphin** es el recomendado y estanadar para explorar archivos, como definido en `pkg_core.lst`.
Para que aplicaciones suban la escalera de privilego (como correr GParted, o Dolphin como root), HyDE 0utiliza **`polkit`** como el framework de politica para el sistema (cual explicaremos en un poco) y **`polkit-gnome`** para pedir contraseñas mediante un ¨Prompt" gráfico. 

:::tip[¿Problemas con aplicaciones?]
Puede ser que no tienes `xorg-xhost` instalado. 
 `sudo pacman -Sy xorg-xhost` luego reinicia tu sistema para verificar cambios.
:::



1. **Un servicio requiere elevarze** - Un servicio (gparted, dolphin, etc) requiere privilegios para cumplir una tarea. El sistema llama las politicas establecidas por `polkit` en `/usr/share/polkit-1/...` para saber si o no la tarea requiere privilegio. Si requiere un secreto, `polkit-gnome` renderiza un prompt cual pide una contraseña al usuario, si es valida, el servicio puede subir de privilegios temporalment.

2. **Llamar una credencial** - Cuando la aplicacion necesita esos credenciales de nuevo, te pedira tu contraseña otra vez mediante polkit-gnome, esto debería ser limpio, contanto con que no te falten dependencias o tengas una mala configuración, por haber instalado [HyDE Incorrectamente](../getting-started/installation.md)

---

## Cumpliendo con 

Las [Especificaciones de directorios gracias a XDG](https://specifications.freedesktop.org/basedir-spec/latest/)  define las ubicaciones estandares para _userdata, configuración, cache, archivos de autoinicio_. HyDE intenta seguir estas especificaciónes mediante varios paquetes esenciales:

### Paquetes relevantes en `pkg_core.lst`

| Paquete | Próposito |
|---|---|
| `polkit-gnome` | Agente general de autenticacion para ¨prompts-de-escala" |
| `xdg-user-dirs` | Define los directorios estandares de usuario (`Documents`, `Pictures`, etc.) acorde con la espeíficaciones XDG |
| `xdg-desktop-portal-hyprland` (XDPH) | Habilita/facílita comunicación de D-Bus entre aplicaciones y Hyprland. Esencial para flatpak apps — espejar pantalla, inegrar pipewire, entre más. |
| `xdg-desktop-portal-gtk` | Fallback portal for GTK-based applications (e.g., polkit-gnome) that need to communicate via D-Bus. |

---

## Autostart & UWSM

[UWSM](https://github.com/Vladimir-csp/uwsm)(Universal Wayland Session Manager) maneja el lanzamiento de aplicaciones tratandolas como **Unidades de systemd**. Asolas, usa systemd para empezar varias configuraciones relacionadas con correr nuestro Window Manager y el tratamiento de apps como servicios, para (en teorìa) dar:

- Una experiencia limpia de inicio.
- Establecer variables de HyDE y sus configuraciones.
- Manejo automatíco de recursos del sistema, además de fallbacks.
- Una diferencia más clara entre lo que le pertenece a la *sesion gráfica* y lo que no.

### HyDE's scripts para establecer UWSM

HyDE viene de fábrica con 3 scripts que se integran junto UWSM para aplicar los estandáres que debe seguir:

| Script | Ubicación | Role |
|---|---|---|
| `00-hyde.sh` | `$XDG_CONFIG_HOME/uwsm/env.d/` | Establece variables de entorno para la sesion. |
| `01-gpu.sh` | `$XDG_CONFIG_HOME/uwsm/env.d/` | GPU-specific variables específicos al gpu. |
| `00-hyde.sh` | `$XDG_CONFIG_HOME/uwsm/env-hyprland.d/` | Establece comportamiento de Electron apps, Hyprland config paths, y toolkit fallbacks. |

:::note[No tienes porque editar estos]
Estas scripts son opinionadas para que las variables, keybinds y configuración de tema funcionesn fuera de la caja con HyDE. Si tienes problemas relacionados con UWSM, se recomienda simplemente salir de tu sesión y asegurar que en sddm selecciones la opcion con UWSM, alternativamente reinstala tu instancia de HyDE para estar al tiro con las configuraciones más nuevas.
:::

Usa [la secion de hyprland en la categoría de configuracion](../configuring/hyprland.md) si deseas contorl más preciso sobre lo que occura al iniciar sessíon bajo HyDE.


## Portales de Desktop

Los portales de desktop le dan una interfaz contenida para que aplicaciones
pidan capacidades del sistema mediante D-Bus - escogedores de color, compartir pantalla con obs,
almacenamiento de secretos/colleciones, entre más. Aplicaciones (En especial Flatpaks) no pueden
tipicamente acceder estos recursos directamente; depen traducir su pedido mediante el portal.

Puedes ver los portales de tu sistema con:
```bash
ls /usr/share/xdg-desktop-portal/portals/
```

### Portales que encontraras en HyDE

| Portal | puede manejar | Notas |
|---|---|---|
| `hyprland.portal` | Screen capture, window selection, remote desktop | Portal principal; Hyprland-native. |
| `gtk.portal` | Desktop entries, file explorer, security  | Fallback para apps GTK. Funciona como respaldo. |
| `kwallet.portal` | Secret storage por KWallet | Presente por la `kio` → KWallet dependency chain; no configurado epxlicitamente por HyDE. |

Prioridad es establecida en `/usr/share/xdg-desktop-portal/hyprland-portals.conf` — 
Hyprland como default, GTK de respaldo. Puedes establecer tu propia configuración haciendo `~/.config/xdg-desktop-portal/hyprland-portals.conf`.

:::note
Si la aplicación salta los portales completamente (común con aplicaciones viejas y algunas de elctron), es posible que ninguna configuración del portal afecte como se comporta. Esto puede explicar porque una app parece ignorar tu tema o preferencias.
:::

--- 

## Theming

El stack de tema de HyDE intenta enfocarze en 4 categorias que en breve describire, cada una temada mediante un diferente mecanismo. Saber en cual categoria tu app cae te puede decir de inmediato donde ir, si algo parece mal.

### Como funciona el cambio de tema

HyDE tiene 2 conceptos distinctos que usuarios confunden con regularidad:

-**Theme** (`Super + Shift + T` or `hyde-shell theme select`) - seleciona un bundle entero, cual puede incluir una serie de imagenes de fondo, GTK arc, el cursor, un preset de Kvantum y reglas de color predefinidas.
-**Mode**(`Super + Shift + R` o `Super + Shift + A`) - Cicla entre modos de wallbash (colores extraidos por tu actual imagen de fondo) y modos de tema (colores que vienen pre-definidos por tu tema). Esto afecta la tonalidad de tu tema, sin cambiarlo en si.

Cambiar un tema causa (entre otras cosas) que wallbash regenere las tokens de color y las empuje hacia cada plantilla registrada. Cambiar de modo hace lo mismo pero con una fuente de color diferente.

### Categorias de aplicaciones

### Rofi

Rofi maneja su tema independientemente de Qt, GTK o Kvantum. HyDE's plantillas para Rofi viven
en `~/.local/share/hyde/rofi/themes/` — no las edites directamente ya que son sobre escritas con cada actualización.

Cambia estilo de Rofi con `Super + Shift + A`. Si deseas un tema especial, 
diseñalo en `~/.config/rofi/` y busca en la [sección de temas](../theming/wallbash-and-dcol.md). No uses la app de rofi theme selector.

#### Qt apps (Dolphin, Kwrite)

Obtienen su tema mediante una fusion de **Kvantum** y **qt5ct** / **qt6ct** . Wallbash genera un tema Kvantum usando tus colores activos y lo escribe a `~/.config/Kvantum/`. Apps de Qt pueden luego levantar esto automaticamente porque HyDE indica `QT_QPA_PLATFORMTHEME=-qt6ct` en el entorno de la session con las aformentadas scripts.

Si una app de Qt parece no tener estilo, asegurate de que `kvantum`, `qt5ct`, y `qt6ct` esten instaladas y que el variable de entorno este presente en tu sesión:
```bash
echo $QT_QPA_PLATFORMTHEME  # should return: qt6ct
```

#### GTK2, GTK3, GTK4 apps (de gparted hasta pavucontrol)

Principalmente personalizada por **nwg-look**, cual escribe ajustes a `~/.gtkrc-2.0` y 
`~/.config/gtk-3.0/settings.ini`. La GTK arc activa de HyDE es aplicada aqui. Abre `nwg-look` o preferiblemente `Super + Shift + r`/ `hyde-shell wallbashtoggle` y compara con pavucontrol o blueman-manager. Cambios toman efecto al momento de abrir una app e incluye manejo de GTK4 que debería seguir el diseño de tu tema, pero parece depender de como fue hecho el tema.

Si una aplicación de GTK4 parece blanca o ignora tu teme, es posible que falte el generado `gtk.css` (¿Mala instalación?) o tu app este contenida (Flatpak) y no lo puede leer.

#### Apps de Electron (VS code, Spotify, Discord)

Aplicaciones de Electron usan su propia tuberia para renderizar un tema y no participan nativamente
en la configuración de Qt o GTK. Las plantillas de wallbash de HyDE intentan empujar colores a estas applicaciones mediante su capa de integración para GTK, con resultados variantes:

- **VS code** - Wallbash puede aplicar el tema si la extension de wallbash o el tema esta activo en el editor.
- **Spotify** - Potencialmente poderoso si es configurado apropiadamente con spicetify.
- **Discord** - Typicamente requiere un cliente configurable que pueda leer CSS; plantillas existen para esto en la comunidad.

:::tip
Para apps de Electron, lo más confiable es una plantilla especifica por-app 
en  `~/.config/hyde/wallbash/scripts/`. Esto permite wallbash empujar color
y otra data directamente a la app en su formato en cada cambio de tema o imágen de fondo.
:::


### Flatpak apps

Flatpak apps corren en una "caja de arena" y estan genuinamente configuradas bien, dado una instalación sana de HyDE. Puedes usar la `warehouse` para ver lo que esta instalado mediante la flathub o correr `./install_fpk.sh` en el directorio de `~/HyDE/Scripts/extra` para asegurarte de que todo este concruente y estable.
 
Personalización mediante portal (como con ARC) es la manera más limpia y depende en `xdg-desktop-portal-gtk` estando activo en tu sesión.