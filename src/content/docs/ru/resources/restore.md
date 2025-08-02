---
title: Восстановление конфигурации
description: Логика скрипта восстановления
---

:::note

"restore" в дальнейшем контексте означает восстановление дотфайлов из репозитория в ваш $HOME, а не наоборот.

```sh
./restore_cfg.sh </path/to/file.psv > <optional /path/to/hyde/clone>
```

:::

## Значения, разделенные вертикальной чертой (PSV)

Это файл со значениями, разделенными вертикальной чертой. Он содержит пути к дотфайлам и их соответствующие зависимости пакетов.

#### Примечание:

- Строки, начинающиеся с `#`, являются комментариями.
- Единственная известная переменная — `${HOME}`.
- Это файл с 4 столбцами, разделенными `|`.
- Каждый столбец должен использовать пробелы для разделения элементов массива.

#### Структура:

```shell
флаг|путь|цель|зависимость
```

#### Флаги:

-   **(P) Заполнение/Сохранение (Populate/Preserved)**

    -   Этот флаг гарантирует, что цель копируется только в том случае, если она еще не существует. Это полезно для сохранения текущего состояния цели, предотвращая любые перезаписи или изменения существующих файлов или каталогов.

-   **(S) Синхронизация (Sync)**

    -   Если целевой файл(ы) существуют, перезаписать их.
    -   Если цель — каталог, перезаписать только перечисленные файлы.
    -   Сохранить другие файлы в целевом каталоге, которые не перечислены.
    -   Это поведение похоже на команду `cp -r`.

-   **(O) Перезапись (Overwrite)**

    -   Этот флаг выполняет агрессивную операцию синхронизации. Он гарантирует, что цель будет полностью заменена источником.
    -   Если цель — каталог, каждый файл и подкаталог в нем будут перезаписаны соответствующими элементами из источника.
    -   Если цель — файл, он будет полностью перезаписан исходным файлом.
    -   Эта операция не сохраняет никаких существующих файлов или каталогов в целевом расположении; все заменяется.
    -   Полезно для обновления основных конфигураций и скриптов.

-   **(B) Резервное копирование (Backup)**
    -   Создать резервную копию цели.
    -   Все флаги P, S, O также создадут резервную копию целевого файла/каталога.

<details>
<summary>Пример файла PSV</summary>

```shell
#  Основные файлы Hyde 
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

#  Редактор 
P|${HOME}/.config/Code - OSS/User|settings.json|code
P|${HOME}/.config/Code/User|settings.json|visual-studio-code-bin
P|${HOME}/.config/VSCodium/User|settings.json|vscodium-bin

#  Панель 
P|${HOME}/.config/waybar|config.ctl|waybar
S|${HOME}/.config/waybar|modules config.jsonc theme.css style.css|waybar

#  Терминал 
P|${HOME}/.config|lsd|lsd
S|${HOME}/.config|fastfetch|fastfetch
S|${HOME}/.config/kitty|hyde.conf theme.conf|kitty
P|${HOME}/.config/kitty|kitty.conf|kitty

#  Оболочка 
P|${HOME}/.config|fish|fish
P|${HOME}|.zshrc .hyde.zshrc .p10k.zsh|zsh zsh-theme-powerlevel10k pokego-bin
S|${HOME}|.zshenv|zsh zsh-theme-powerlevel10k

#  Файловый менеджер 
P|${HOME}/.local/state|dolphinstaterc|dolphin
P|${HOME}/.config|baloofilerc|dolphin
S|${HOME}/.config/menus|applications.menu|dolphin
S|${HOME}/.config|dolphinrc|dolphin
S|${HOME}/.config|kdeglobals|dolphin
S|${HOME}/.local/share/kio/servicemenus|hydewallpaper.desktop|dolphin
S|${HOME}/.local/share/kxmlgui5|dolphin|dolphin
S|${HOME}/.local/share|dolphin|dolphin

#  Ввод 
P|${HOME}/.config|libinput-gestures.conf|libinput-gestures

#  Wayland 
P|${HOME}/.config|spotify-flags.conf|spotify
P|${HOME}/.config|code-flags.conf|code
P|${HOME}/.config|code-flags.conf|visual-studio-code-bin
P|${HOME}/.config|vscodium-flags.conf|vscodium-bin
P|${HOME}/.config|electron-flags.conf|electron

#  Уведомления 
S|${HOME}/.config|dunst|dunst

#  Игры 
S|${HOME}/.config|MangoHud|mangohud

#  Лаунчер 
S|${HOME}/.config|rofi|rofi
S|${HOME}/.config|wlogout|wlogout

#  Экран блокировки 
S|${HOME}/.config|swaylock|swaylock-effects
P|${HOME}/.config/hypr|hyprlock.conf|hyprlock
S|${HOME}/.config/hypr|hyprlock|hyprlock

#  Демон бездействия 
P|${HOME}/.config/hypr|hypridle.conf|hypridle
```

</details>

## Конфигурация TOML

🚧 🚧 В разработке 🚧🚧

Файл конфигурации PSV удобен для чтения и записи скриптом. Однако он очень ограничен и не удобен для пользователя.
Для дальнейшей настройки мы можем использовать файлы конфигурации TOML.

...
