---
title: Hyprland
description: Hyprland related configuration
---

# Configuration Tree

```
. 📂 ~/.config/hypr
└── 📂 animations/
│ ├── 📄 *.conf
├── 📄 animations.conf
├── 📄 hyde.conf
├── 📄 hypridle.conf
├── 📄 hyprland.conf
└── 📂 hyprlock/
│ ├── 📄 *.conf
├── 📄 hyprlock.conf
├── 📄 keybindings.conf
├── 📄 monitors.conf
├── 📄 nvidia.conf
└── 📂 themes/
│ ├── 📄 colors.conf
│ ├── 📄 theme.conf
│ ├── 📄 wallbash.conf
├── 📄 userprefs.conf
└── 📄 windowrules.conf
├──
. 📂 ~/.local/share/hyde
├── 📄 hyprland.conf
```

---

**Read the [Hyprland Wiki](https://wiki.hyprland.org/) first!**

# HyDE's Hyprland Configuration

Since Hyprland sources `~/.config/hypr/hyprland.conf`, HyDE's Hyprland configuration is divided into three sections:

- [Boilerplate](#1-boilerplate)
- [Overrides](#2-overrides)
- [Users](#3-users)

## 1. Boilerplate

This section contains the default configuration of HyDE. It is recommended not to change this section.

**Filepath:** `$XDG_DATA_HOME/hyde/hyprland.conf`

This file is sourced on top of other configurations in `~/.config/hypr/hyprland.conf`.

```ini
# Boilerplate configuration
source = ~/.local/share/hyde/hyprland.conf
```

## 2. Overrides

This section is for overriding the default configuration of HyDE.

As per Hyprland's [Defining Variables](https://wiki.hyprland.org/Hypr-Ecosystem/hyprlang/#defining-variables), HyDE uses `$VARIABLES` to expose default configurations to be overridden.

Change this section if you intend to:

- Change the startup and environment variables
- Stop an app/service from starting
- Override HyDE's default variables

:::note

To unset a variable, leave it blank

:::

**Filepath:** `$XDG_CONFIG_HOME/hypr/hyde.conf`

### HyDE Configuration Variables

| Variable               | Description                 | Default Value                  |
| ---------------------- | --------------------------- | ------------------------------ |
| `$mainMod`             | Keyboard modifier           | `SUPER` (Windows key)          |
| `$QUICKAPPS`           | Used for quick app launcher | (Empty)                        |
| `$BROWSER`             | Default browser             | `firefox`                      |
| `$EDITOR`              | Default editor              | `code`                         |
| `$EXPLORER`            | Default file manager        | `dolphin`                      |
| `$TERMINAL`            | Default terminal            | `kitty`                        |
| `$LOCKSCREEN`          | Default lockscreen          | `hyprlock`                     |
| `$IDLE`                | Default idle manager        | `hypridle`                     |
| `$GTK_THEME`           | GTK theme                   | `Wallbash-Gtk`                 |
| `$ICON_THEME`          | Icon theme                  | `Tela-circle-dracula`          |
| `$COLOR_SCHEME`        | Color scheme                | `prefer-dark`                  |
| `$CURSOR_THEME`        | Cursor theme                | `Bibata-Modern-Ice`            |
| `$CURSOR_SIZE`         | Cursor size                 | `30`                           |
| `$FONT`                | Font                        | `Canterell`                    |
| `$FONT_SIZE`           | Font size                   | `10`                           |
| `$DOCUMENT_FONT`       | Document font               | `Cantarell`                    |
| `$DOCUMENT_FONT_SIZE`  | Document font size          | `10`                           |
| `$MONOSPACE_FONT`      | Monospace font              | `CaskaydiaCove Nerd Font Mono` |
| `$MONOSPACE_FONT_SIZE` | Monospace font size         | `9`                            |
| `$FONT_ANTIALIASING`   | Font antialiasing           | `rgba`                         |
| `$FONT_HINTING`        | Font hinting                | `full`                         |

### Startup Commands (`$start.*`)

The default commands on startup.

| Variable                      | Description                                                  | Default Value                                                                                  |
| ----------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| `$start.XDG_PORTAL_RESET`     | Resets XDG Portal                                            | `$scrPath/resetxdgportal.sh`                                                                   |
| `$start.DBUS_SHARE_PICKER`    | Updates DBus environment for share picker                    | `dbus-update-activation-environment --systemd --all`                                           |
| `$start.SYSTEMD_SHARE_PICKER` | Imports environment variables for share picker using systemd | `systemctl --user import-environment QT_QPA_PLATFORMTHEME WAYLAND_DISPLAY XDG_CURRENT_DESKTOP` |
| `$start.BAR`                  | Starts the Waybar                                            | `waybar`                                                                                       |
| `$start.NOTIFICATIONS`        | Starts the notification daemon                               | `swaync`                                                                                       |
| `$start.APPTRAY_BLUETOOTH`    | Starts the Bluetooth applet                                  | `blueman-applet`                                                                               |
| `$start.WALLPAPER`            | Sets the wallpaper                                           | `$scrPath/swwwallpaper.sh`                                                                     |
| `$start.TEXT_CLIPBOARD`       | Starts the text clipboard manager                            | `wl-paste --type text --watch cliphist store`                                                  |
| `$start.IMAGE_CLIPBOARD`      | Starts the image clipboard manager                           | `wl-paste --type image --watch cliphist store`                                                 |
| `$start.BATTERY_NOTIFY`       | Starts the battery notification script                       | `$scrPath/batterynotify.sh`                                                                    |
| `$start.NETWORK_MANAGER`      | Starts the network manager applet                            | `nm-applet --indicator`                                                                        |
| `$start.REMOVABLE_MEDIA`      | Starts the removable media manager                           | `udiskie --no-automount --smart-tray`                                                          |
| `$start.AUTH_DIALOGUE`        | Starts the authentication dialogue script                    | `$scrPath/polkitkdeauth.sh`                                                                    |
| `$start.IDLE_DAEMON`          | Starts the idle daemon                                       | `$IDLE`                                                                                        |

### Environment Variables (`$env.*`)

| Variable                                   | Description                                    | Default Value                   |
| ------------------------------------------ | ---------------------------------------------- | ------------------------------- |
| `$env.GDK_BACKEND`                         | GTK backend to use (Wayland preferred)         | `wayland,x11,*`                 |
| `$env.QT_QPA_PLATFORM`                     | Qt platform to use (Wayland)                   | `wayland`                       |
| `$env.SDL_VIDEODRIVER`                     | SDL2 video driver (Wayland)                    | `wayland`                       |
| `$env.CLUTTER_BACKEND`                     | Clutter backend (Wayland)                      | `wayland`                       |
| `$env.XDG_CURRENT_DESKTOP`                 | XDG current desktop environment                | `Hyprland`                      |
| `$env.XDG_SESSION_TYPE`                    | XDG session type                               | `wayland`                       |
| `$env.XDG_SESSION_DESKTOP`                 | XDG session desktop                            | `Hyprland`                      |
| `$env.QT_AUTO_SCREEN_SCALE_FACTOR`         | Qt automatic screen scaling                    | `1`                             |
| `$env.QT_QPA_PLATFORM`                     | Qt platform                                    | `wayland`                       |
| `$env.QT_WAYLAND_DISABLE_WINDOWDECORATION` | Disables window decorations on Qt applications | `1`                             |
| `$env.QT_QPA_PLATFORMTHEME`                | Qt platform theme                              | `qt6ct`                         |
| `$env.PATH`                                | Path environment variable                      | (Empty)                         |
| `$env.MOZ_ENABLE_WAYLAND`                  | Enables Wayland for Firefox                    | `1`                             |
| `$env.GDK_SCALE`                           | GDK scale for Xwayland on HiDPI                | `1`                             |
| `$env.ELECTRON_OZONE_PLATFORM_HINT`        | Electron Ozone Platform Hint                   | `auto`                          |
| `$env.XDG_RUNTIME_DIR`                     | XDG runtime directory                          | `$XDG_RUNTIME_DIR`              |
| `$env.XDG_CONFIG_HOME`                     | XDG config directory                           | `$HOME/.config`                 |
| `$env.XDG_CACHE_HOME`                      | XDG cache directory                            | `$HOME/.cache`                  |
| `$env.XDG_DATA_HOME`                       | XDG data directory                             | `$HOME/.local/share`            |
| `$LAYOUT_PATH`                             | Path to Hyprlock layout configuration          | `/path/to/hyprlock/layout.conf` |
| `$BACKGROUND_PATH`                         | Path to Hyprlock background image              | `$HYPRLOCK_BACKGROUND`          |

:::caution

Modifying this means you know what you are doing!

:::

## 3. Users

This section is for user configuration. It is recommended to change this section to your liking.

**Filepaths:**

- `./keybindings.conf`
- `./windowrules.conf`
- `./monitors.conf`
- `./userprefs.conf`

---

Now you should know which file is which. Refer to the [Hyprland Wiki](https://wiki.hyprland.org) for more information and to achieve your perfect desktop experience.
