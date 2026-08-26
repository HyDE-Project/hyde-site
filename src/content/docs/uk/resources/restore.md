---
title: Відновлення конфігурації
description: Логіка скрипта відновлення
---

:::note

"відновлення" в подальшому контексті означає відновлення dotfiles з репозиторію у вашу $HOME, а не навпаки.

```sh
./restore_cfg.sh </path/to/file.psv > <optional /path/to/hyde/clone>
```

:::

## Значення, розділені вертикальною рискою (PSV)

Це файл значень, розділених вертикальною рискою. Він містить шляхи до dotfiles та відповідні залежності пакетів.

#### Примітка:

- Рядки, що починаються з `#`, є коментарями.
- Єдина відома змінна — `${HOME}`.
- Це файл із 4 стовпцями, розділеними символом `|`.
- У кожному стовпці елементи масиву слід розділяти пробілами.

#### Структура:

```shell
flag|path|target|dependency
```

#### Прапорці:

- **( P ) Populate/Preserved (Заповнити/Зберегти)**

  - Цей прапорець гарантує, що ціль копіюється лише якщо вона ще не існує. Це корисно для збереження поточного стану цілі, запобігаючи будь-яким перезаписам чи змінам наявних файлів або директорій.

- **( S ) Sync (Синхронізувати)**

  - Якщо цільовий файл(и) існує, перезаписати його.
  - Якщо ціль — директорія, перезаписуються лише перелічені файли.
  - Інші файли в цільовій директорії, яких немає в списку, зберігаються.
  - Ця поведінка подібна до команди `cp -r`.

- **( O ) Overwrite (Перезаписати)**

  - Цей прапорець виконує агресивну операцію синхронізації. Він гарантує, що ціль повністю замінюється джерелом.
  - Якщо ціль — директорія, кожен файл і піддиректорія в ній буде перезаписано відповідними елементами з джерела.
  - Якщо ціль — файл, він буде повністю перезаписаний вихідним файлом.
  - Ця операція не зберігає жодних наявних файлів чи директорій у цільовому розташуванні; все замінюється.
  - Корисно для оновлення основних конфігурацій і скриптів.

- **( B ) Backup (Резервна копія)**
  - Створити резервну копію цілі.
  - Усі прапорці P, S, O також створюють резервну копію цільового файлу/директорії.

<details>
<summary>Приклад файлу PSV</summary>

```shell
 Hyde core files 
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

 Editor 
P|${HOME}/.config/Code - OSS/User|settings.json|code
P|${HOME}/.config/Code/User|settings.json|visual-studio-code-bin
P|${HOME}/.config/VSCodium/User|settings.json|vscodium-bin

 Bar 
P|${HOME}/.config/waybar|config.ctl|waybar
S|${HOME}/.config/waybar|modules config.jsonc theme.css style.css|waybar

 Terminal 
P|${HOME}/.config|lsd|lsd
S|${HOME}/.config|fastfetch|fastfetch
S|${HOME}/.config/kitty|hyde.conf theme.conf|kitty
P|${HOME}/.config/kitty|kitty.conf|kitty

 Shell 
P|${HOME}/.config|fish|fish
P|${HOME}|.zshrc .hyde.zshrc .p10k.zsh|zsh zsh-theme-powerlevel10k pokego-bin
S|${HOME}|.zshenv|zsh zsh-theme-powerlevel10k

 File Explorer 
P|${HOME}/.local/state|dolphinstaterc|dolphin
P|${HOME}/.config|baloofilerc|dolphin
S|${HOME}/.config/menus|applications.menu|dolphin
S|${HOME}/.config|dolphinrc|dolphin
S|${HOME}/.config|kdeglobals|dolphin
S|${HOME}/.local/share/kio/servicemenus|hydewallpaper.desktop|dolphin
S|${HOME}/.local/share/kxmlgui5|dolphin|dolphin
S|${HOME}/.local/share|dolphin|dolphin

 Input 
P|${HOME}/.config|libinput-gestures.conf|libinput-gestures

 Wayland 
P|${HOME}/.config|spotify-flags.conf|spotify
P|${HOME}/.config|code-flags.conf|code
P|${HOME}/.config|code-flags.conf|visual-studio-code-bin
P|${HOME}/.config|vscodium-flags.conf|vscodium-bin
P|${HOME}/.config|electron-flags.conf|electron

 Notifications 
S|${HOME}/.config|dunst|dunst

 Gaming 
S|${HOME}/.config|MangoHud|mangohud

 Launcher 
S|${HOME}/.config|rofi|rofi
S|${HOME}/.config|wlogout|wlogout

 Lock Screen 
S|${HOME}/.config|swaylock|swaylock-effects
P|${HOME}/.config/hypr|hyprlock.conf|hyprlock
S|${HOME}/.config/hypr|hyprlock|hyprlock

 Idle daemon 
P|${HOME}/.config/hypr|hypridle.conf|hypridle
```

</details>

## Конфігурація TOML

🚧 🚧 У розробці 🚧🚧

Файл конфігурації PSV зручний для читання й запису скриптом. Однак він дуже обмежений і не зручний для користувача.
Для подальшого налаштування ми можемо використовувати файли конфігурації TOML.

...
