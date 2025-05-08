---
title: Restore Configuration
description: Logik des Wiederherstellungsskripts
---

:::note

> "Wiederherstellen" im weiteren Kontext bedeutet, die Dotfiles aus dem Repository in Ihr $HOME zu übertragen, nicht umgekehrt.

```sh
./restore_cfg.sh </path/to/file.psv > <optional /path/to/hyde/clone>
```

:::

## Pipe-Separierte Werte (PSV)

Dies ist eine Datei mit pipe-separierten Werten. Sie enthält die Pfade der Dotfiles und deren jeweilige Paketabhängigkeiten.

#### Hinweis

- Zeilen, die mit `#` beginnen, sind Kommentare.
- Die einzige bekannte Variable ist `${HOME}`.
- Dies ist eine Datei mit 4 Spalten, die durch `|` getrennt sind.
- Jede Spalte sollte Leerzeichen verwenden, um Array-Elemente zu trennen.

#### Struktur

```shell
flag|path|target|dependency
```

#### Flags

- **( P ) Populate/Preserved**

  - Dieses Flag stellt sicher, dass das Ziel nur kopiert wird, wenn es nicht bereits existiert. Es ist nützlich, um den aktuellen Zustand des Ziels zu bewahren und Überschreibungen oder Änderungen an vorhandenen Dateien oder Verzeichnissen zu verhindern.

- **( S ) Sync**

  - Wenn die Zieldatei(en) existieren, werden sie überschrieben.
  - Wenn das Ziel ein Verzeichnis ist, werden nur die aufgelisteten Dateien überschrieben.
  - Andere Dateien im Zielverzeichnis, die nicht aufgelistet sind, bleiben erhalten.
  - Dieses Verhalten ähnelt dem Befehl `cp -r`.

- **( O ) Overwrite**

  - Dieses Flag führt eine aggressive Synchronisation durch. Es stellt sicher, dass das Ziel vollständig durch die Quelle ersetzt wird.
  - Wenn das Ziel ein Verzeichnis ist, wird jede Datei und jedes Unterverzeichnis darin durch die entsprechenden Elemente aus der Quelle ersetzt.
  - Wenn das Ziel eine Datei ist, wird sie vollständig durch die Quelldatei überschrieben.
  - Diese Operation bewahrt keine vorhandenen Dateien oder Verzeichnisse im Zielort; alles wird ersetzt.
  - Nützlich für die Aktualisierung von Kernkonfigurationen und Skripten.

- **( B ) Backup**
  - Sichert das Ziel.
  - Alle P-, S-, O-Flags sichern auch die Zieldatei/-verzeichnis.

<details>
<summary>Beispiel für eine PSV-Datei</summary>

```shell
 Hyde-Kerndateien 
P|${HOME}/.config/hyde|config.toml|hyprland
P|${HOME}/.config/hypr|hyde.conf animations.conf windowrules.conf keybindings.conf userprefs.conf monitors.conf|hyprland
P|${HOME}/.config/hypr|nvidia.conf|hyprland nvidia-utils
P|${HOME}/.config/hypr/themes|theme.conf wallbash.conf colors.conf|hyprland
P|${HOME}/.local/state|hyde|hyprland

S|${HOME}/.config/hypr|hyprland.conf|hyprland
S|${HOME}/.local|bin|hyprland
S|${HOME}/.config|gtk-3.0|nwg-look
S|${HOME}/.config|nwg-look|nwg-look
S|${HOME}/.config|xsettingsd|nwg-look
S|${HOME}|.gtkrc-2.0|nwg-look
S|${HOME}/.config|Kvantum|kvantum
S|${HOME}/.config|qt5ct|qt5ct
S|${HOME}/.config|qt6ct|qt6ct
S|${HOME}/.config/hyde|wallbash|hyprland
S|${HOME}/.config/hypr|animations|hyprland

O|${HOME}/.local/share|hyde|hyprland
O|${HOME}/.local/lib|hyde|hyprland

 Editor 
P|${HOME}/.config/Code - OSS/User|settings.json|code
P|${HOME}/.config/Code/User|settings.json|visual-studio-code-bin
P|${HOME}/.config/VSCodium/User|settings.json|vscodium-bin

 Bar 
P|${HOME}/.config/waybar|config.ctl|waybar
S|${HOME}/.config/waybar|modules config.jsonc theme.css style.css|waybar

 Terminal 
P|${HOME}/.config|lsd|lsd
S|${HOME}/.config|fastfetch|fastfetch
S|${HOME}/.config/kitty|hyde.conf theme.conf|kitty
P|${HOME}/.config/kitty|kitty.conf|kitty

 Shell 
P|${HOME}/.config|fish|fish
P|${HOME}|.zshrc .hyde.zshrc .p10k.zsh|zsh zsh-theme-powerlevel10k pokego-bin
S|${HOME}|.zshenv|zsh zsh-theme-powerlevel10k

 Dateiexplorer 
P|${HOME}/.local/state|dolphinstaterc|dolphin
P|${HOME}/.config|baloofilerc|dolphin
S|${HOME}/.config/menus|applications.menu|dolphin
S|${HOME}/.config|dolphinrc|dolphin
S|${HOME}/.config|kdeglobals|dolphin
S|${HOME}/.local/share/kio/servicemenus|hydewallpaper.desktop|dolphin
S|${HOME}/.local/share/kxmlgui5|dolphin|dolphin
S|${HOME}/.local/share|dolphin|dolphin

 Eingabe 
P|${HOME}/.config|libinput-gestures.conf|libinput-gestures

 Wayland 
P|${HOME}/.config|spotify-flags.conf|spotify
P|${HOME}/.config|code-flags.conf|code
P|${HOME}/.config|code-flags.conf|visual-studio-code-bin
P|${HOME}/.config|vscodium-flags.conf|vscodium-bin
P|${HOME}/.config|electron-flags.conf|electron

 Benachrichtigungen 
S|${HOME}/.config|dunst|dunst

 Gaming 
S|${HOME}/.config|MangoHud|mangohud

 Launcher 
S|${HOME}/.config|rofi|rofi
S|${HOME}/.config|wlogout|wlogout

 Sperrbildschirm 
S|${HOME}/.config|swaylock|swaylock-effects
P|${HOME}/.config/hypr|hyprlock.conf|hyprlock
S|${HOME}/.config/hypr|hyprlock|hyprlock

 Idle-Daemon 
P|${HOME}/.config/hypr|hypridle.conf|hypridle
```

</details>

## TOML-Konfiguration

🚧 🚧 In Arbeit 🚧🚧

Die PSV-Konfigurationsdatei ist praktisch für das Skript zum Lesen und Schreiben. Sie ist jedoch sehr einschränkend und nicht benutzerfreundlich.
Für weitere Anpassungen können wir TOML-Konfigurationsdateien verwenden.
