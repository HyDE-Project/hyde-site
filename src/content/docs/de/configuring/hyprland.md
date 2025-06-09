---
title: Hyprland
description: Hyprland relevante Konfiguration
---

<link rel="stylesheet" href="/src/styles/configuring/hyprland.css">

# Konfigurationsbaum

```
. 📂 ~/.config/hypr
└── 📂 animations/
├── 📄 animations.conf
├── 📄 hyde.conf
├── 📄 hypridle.conf
├── 📄 hyprland.conf
└── 📂 hyprlock/
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
│ ├── 📄 hyprland.conf
```

---

:::caution

**Lies zuerst das [Hyprland Wiki](https://wiki.hyprland.org/)!**

:::

# HyDE's Hyprland Konfiguration

Da Hyprland `~/.config/hypr/hyprland.conf` einbindet, ist HyDE's Hyprland-Konfiguration in drei Abschnitte unterteilt:

- [Vorlage](#1-vorlage)
- [Überschreibungen](#2-überschreibungen)
- [Benutzer](#3-benutzer)

## 1. Vorlage

Dieser Abschnitt enthält die Standardkonfiguration von HyDE. Es wird empfohlen, diesen Abschnitt nicht zu ändern.

**Dateipfad:** `$XDG_DATA_HOME/hyde/hyprland.conf`

Diese Datei wird vor anderen Konfigurationen in `~/.config/hypr/hyprland.conf` eingebunden.

```ini
# Boilerplate-Konfiguration
source = ~/.local/share/hyde/hyprland.conf
```

## 2. Überschreibungen

Dieser Abschnitt dient dazu, die Standardkonfiguration von HyDE zu überschreiben.

Gemäß Hyprlands [Definieren von Variablen](https://wiki.hyprland.org/Hypr-Ecosystem/hyprlang/#defining-variables) verwendet HyDE `$VARIABLES`, um Standardkonfigurationen zur Überschreibung bereitzustellen.

Ändere diesen Abschnitt, wenn du Folgendes vorhast:

- Start- und Umgebungsvariablen ändern
- Das Starten einer App/eines Dienstes verhindern
- HyDE's Standardvariablen überschreiben

:::note

Um eine Variable zurückzusetzen, lasse sie leer.

:::

**Dateipfad:** `$XDG_CONFIG_HOME/hypr/hyde.conf`

### HyDE Konfigurationsvariablen

| Variable             | Beschreibung                | Standardwert                |
| -------------------- | --------------------------- | ---------------------------- |
| $mainMod             | Tastaturmodifikator        | SUPER (Windows-Taste)        |
| $QUICKAPPS           | Für den Schnellstarter     | (Leer)                       |
| $BROWSER             | Standardbrowser            | firefox                      |
| $EDITOR              | Standardeditor             | code                         |
| $EXPLORER            | Standard-Dateimanager      | dolphin                      |
| $TERMINAL            | Standard-Terminal          | kitty                        |
| $LOCKSCREEN          | Standard-Bildschirmsperre  | hyprlock                     |
| $IDLE                | Standard-Idle-Manager      | hypridle                     |
| $GTK_THEME           | GTK-Theme                  | Wallbash-Gtk                 |
| $ICON_THEME          | Icon-Theme                 | Tela-circle-dracula          |
| $COLOR_SCHEME        | Farbschema                 | prefer-dark                  |
| $CURSOR_THEME        | Cursor-Theme               | Bibata-Modern-Ice            |
| $CURSOR_SIZE         | Cursor-Größe               | 30                           |
| $FONT                | Schriftart                 | Canterell                    |
| $FONT_SIZE           | Schriftgröße               | 10                           |
| $DOCUMENT_FONT       | Dokumentenschriftart       | Cantarell                    |
| $DOCUMENT_FONT_SIZE  | Dokumentenschriftgröße     | 10                           |
| $MONOSPACE_FONT      | Monospace-Schriftart       | CaskaydiaCove Nerd Font Mono |
| $MONOSPACE_FONT_SIZE | Monospace-Schriftgröße     | 9                            |
| $FONT_ANTIALIASING   | Schrift-Antialiasing       | rgba                         |
| $FONT_HINTING        | Schrift-Hinting            | full                         |

### Startup Commands ($start.\*`)

Die Standardbefehle beim Start.

| Variable                    | Beschreibung                                              | Standardwert                                                                                |
| --------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| $start.XDG_PORTAL_RESET     | Setzt das XDG-Portal zurück                                  | $scrPath/resetxdgportal.sh                                                                   |
| $start.DBUS_SHARE_PICKER    | Aktualisiert die DBus-Umgebung für den Share-Picker          | dbus-update-activation-environment --systemd --all                                           |
| $start.SYSTEMD_SHARE_PICKER | Importiert Umgebungsvariablen für den Share-Picker mit systemd | systemctl --user import-environment QT_QPA_PLATFORMTHEME WAYLAND_DISPLAY XDG_CURRENT_DESKTOP |
| $start.BAR                  | Startet die Waybar                                            | waybar                                                                                       |
| $start.NOTIFICATIONS        | Startet den Benachrichtigungs-Daemon                         | swaync                                                                                       |
| $start.APPTRAY_BLUETOOTH    | Startet das Bluetooth-Applet                                  | blueman-applet                                                                               |
| $start.WALLPAPER            | Setzt den Hintergrund                                          | $scrPath/swwwallpaper.sh                                                                     |
| $start.TEXT_CLIPBOARD       | Startet den Text-Clipboard-Manager                          | wl-paste --type text --watch cliphist store                                                  |
| $start.IMAGE_CLIPBOARD      | Startet den Bild-Clipboard-Manager                           | wl-paste --type image --watch cliphist store                                                 |
| $start.BATTERY_NOTIFY       | Startet das Batterieskript                                     | $scrPath/batterynotify.sh                                                                    |
| $start.NETWORK_MANAGER      | Startet das Netzwerkmanager-Applet                            | nm-applet --indicator                                                                        |
| $start.REMOVABLE_MEDIA      | Startet den verwaltbaren Medienmanager                        | udiskie --no-automount --smart-tray                                                          |
| $start.AUTH_DIALOGUE        | Startet das Authentifizierungsdialog-Skript                   | $scrPath/polkitkdeauth.sh                                                                    |
| $start.IDLE_DAEMON          | Startet den Idle-Daemon                                       | $IDLE                                                                                        |

### Environment Variables ($env.\*`)

| Variable                                 | Beschreibung                                | Standardwert                 |
| ---------------------------------------- | ---------------------------------------------- | ----------------------------- |
| $env.GDK_BACKEND                         | GTK-Backend zu verwenden (Wayland bevorzugt)     | wayland,x11,\*                |
| $env.QT_QPA_PLATFORM                     | Qt-Plattform zu verwenden (Wayland)             | wayland                       |
| $env.SDL_VIDEODRIVER                     | SDL2-Videotreiber (Wayland)                    | wayland                       |
| $env.CLUTTER_BACKEND                     | Clutter-Backend (Wayland)                      | wayland                       |
| $env.XDG_CURRENT_DESKTOP                 | Aktuelle XDG-Desktop-Umgebung                  | Hyprland                      |
| $env.XDG_SESSION_TYPE                    | XDG-Sitzungstyp                               | wayland                       |
| $env.XDG_SESSION_DESKTOP                 | XDG-Sitzungsdesktop                            | Hyprland                      |
| $env.QT_AUTO_SCREEN_SCALE_FACTOR         | Qt automatische Bildschirmskalierung            | 1                             |
| $env.QT_QPA_PLATFORM                     | Qt-Plattform                                  | wayland                       |
| $env.QT_WAYLAND_DISABLE_WINDOWDECORATION | Deaktiviert die Fensterdekorationen in Qt-Anwendungen | 1                             |
| $env.QT_QPA_PLATFORMTHEME                | Qt-Plattform-Theme                            | qt6ct                         |
| $env.PATH                                | Pfad-Umgebungsvariable                        | (Leer)                       |
| $env.MOZ_ENABLE_WAYLAND                  | Aktiviert Wayland für Firefox                  | 1                             |
| $env.GDK_SCALE                           | GDK-Skalierung für Xwayland bei HiDPI          | 1                             |
| $env.ELECTRON_OZONE_PLATFORM_HINT        | Electron Ozone Plattform-Hinweis               | auto                          |
| $env.XDG_RUNTIME_DIR                     | XDG-Laufzeitverzeichnis                        | $XDG_RUNTIME_DIR              |
| $env.XDG_CONFIG_HOME                     | XDG-Konfigurationsverzeichnis                 | $HOME/.config                 |
| $env.XDG_CACHE_HOME                      | XDG-Cache-Verzeichnis                          | $HOME/.cache                  |
| $env.XDG_DATA_HOME                       | XDG-Datenverzeichnis                           | $HOME/.local/share            |
| $LAYOUT_PATH                             | Pfad zur Hyprlock-Layout-Konfiguration        | /path/to/hyprlock/layout.conf |
| $BACKGROUND_PATH                         | Pfad zum Hintergrundbild für Hyprlock          | $HYPRLOCK_BACKGROUND          |

:::danger

Das Ändern bedeutet, dass du weißt, was du tust!

:::

## 3. Users

Dieser Abschnitt dient der Benutzerkonfiguration. Es wird empfohlen, diesen Abschnitt nach deinen Wünschen zu ändern.

**Dateipfade:**

- ./keybindings.conf`
- ./windowrules.conf`
- ./monitors.conf`
- ./userprefs.conf`

---

:::tip

Wahrscheinlich benötigst du nur diese Dateien, um deine Einstellungen zu konfigurieren.
Hyprland-Variablen können überschrieben werden, daher kannst du die Standardwerte nach deinem Geschmack ändern.

Außerdem kann Hyprland die Konfigurationsdateien im laufenden Betrieb neu laden, sodass du sie bearbeiten und die Änderungen sofort sehen kannst.

:::

Jetzt solltest du wissen, welche Datei welche ist. Siehe das [Hyprland Wiki](https://wiki.hyprland.org) für weitere Informationen und um dein perfektes Desktop-Erlebnis zu erzielen.

Siehe auch [FAQs und Tipps](../help/faq#how-can-i-change-keyboard-layout)
