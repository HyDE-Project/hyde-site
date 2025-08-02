---
title: ЧАВО и советы
description: Часто задаваемые вопросы о HyDE
---

<link rel="stylesheet" href="/src/styles/tables.css">

:::tip
Вопросы, связанные с Hyprland, следует искать в [вики Hyprland](https://wiki.hyprland.org)
:::

<details>
<summary id="wallpapers">Как добавить глобальные или пользовательские обои?</summary>
<div>

#### Глобальные обои

Глобальные обои будут отображаться в селекторе для всех тем.

В ваш `xdg_config/hyde/config.toml` добавьте это.

```toml
[wallpaper]
custom_paths = [
    "$XDG_PICTURES_DIR",
    "/path/to/pretty/wallpapers",
] # Список путей для поиска обоев

```

#### Пользовательские обои для каждой темы

##### Option 1: GUI

Использование dolphin для выбора обоев для темы

![image](https://github.com/user-attachments/assets/a72458fc-da94-45e4-8dd4-dba48b910e82)

1. Выберите изображение
2. Щелкните правой кнопкой мыши и наведите курсор на "Установить как обои"
3. Выберите целевую тему

##### Option 2: CLI

Пользовательские обои добавляются для каждой темы.

1. Добавьте обои в `~/.config/hyde/themes/Theme-Name/wallpapers/*`.
2. Затем выполните `hyde-shell reload`

</div>
</details>
<details>

<summary id="screen-record">Как записать экран?</summary>
<div>

Вы можете записывать экран, используя следующие пакеты для записи на основе Wayland.

`wl-screenrec`

`wf-recorder`

`kooha `

`obs`

</div>
</details>

<details>
<summary id="preferences">Как установить собственные настройки?</summary>
<div>

Вы можете установить свои настройки Hyprland в `xdg_config/hypr/userprefs.conf`. Эти настройки сохраняются даже при обновлении репозитория.

Смотрите `Конфигурирование` > `Hyprland`, чтобы узнать, как мы структурируем конфигурации Hyprland.


</div>
</details>

<details>
<summary id="update-dotfiles">Как обновить мои дотфайлы до последней версии?</summary>
<div>

```sh
cd ~/HyDE/Scripts
git pull
./install.sh -r
```

Смотрите `Ресурсы` > `Восстановление конфигурации` о том, как это работает

</div>
</details>

<details>
<summary id="monitor-resolution">Как установить разрешение и частоту обновления монитора?</summary>
<div>

Прочтите это для получения подробной информации: https://wiki.hyprland.org/Configuring/Monitors/

Вы можете установить разрешение и частоту обновления монитора в `~/.config/hypr/monitors.conf`

Пример: `monitor = DP-1,2560x1440@144,0x0, 1` >> @ устанавливает частоту обновления, но обратите внимание, что ваш монитор может не поддерживать все частоты обновления.

</div>
</details>

<details>
<summary id="pokemon-terminal">Как убрать покемонов?</summary>
<div>

Удалите pokego-bin.

</div>
</details>

<details>
<summary id="startup intro">Как изменить приветствие при запуске терминала?</summary>
<div>

Отредактируйте `~/.config/zsh/user.zsh`

</div>
</details>

<details>
<summary id="sddm-settings">Как отредактировать обои или настройки sddm?</summary>
<div>

- Изменить обои
    Вам нужно вручную запустить скрипт `~/.config/hypr/sddmwall.sh` на обоях, которые вы хотите для экрана входа, вы можете выбрать обои из тем и убедиться, что это текущие обои swww.
- Изменить настройки SDDM
    (цвета, фон, формат даты, шрифт) можно настроить в `/usr/share/sddm/themes/corners/theme.conf`

если вы хотите изменить структуру, вам придется изменить файлы `qml` в `/usr/share/sddm/themes/corners/components`

</div>
</details>

<details>
<summary id="keyboard-layout">Как изменить раскладку клавиатуры?</summary>
<div>

Прочтите это для получения подробной информации: https://wiki.hyprland.org/Configuring/Variables/#input

В HyDE у нас есть `~/.config/hypr/userprefs.conf`, добавьте конфигурацию туда.

```
input {
  kb_layout = us, ru
}
```

Используйте `SUPER + K` для переключения между раскладками.

</div>
</details>

<details>
<summary id="thumbnails-selectors">Нет миниатюр в селекторах?</summary>
<div>

Если ваши миниатюры не загружаются, попробуйте перестроить кэш обоев.

`swwwallcache.sh`

</div>
</details>

<details>
<summary id="edit-waybar">Как отредактировать waybar?</summary>
<div>

Вы можете создать пользовательскую конфигурацию waybar, добавив пользовательский файл в `~/.config/waybar/layouts/<filename>.jsonc`. Затем он будет доступен для выбора в меню HyDE или при запуске скрипта в репозитории `HyDE/Scripts/waybar.py -S`

Обратитесь к документации по темам в [вики Waybar](https://github.com/Alexays/Waybar/wiki).

</div>
</details>

<details>
<summary id="waybar-blur">Как убрать размытие на waybar?</summary>
<div>

Вы можете убрать размытие на waybar, удалив `blurls = waybar` в каталоге тем, закомментировав строку в конце каждого файла `theme.conf`.
Каталог тем: `~/.config/hypr/themes/`

</div>
</details>

<details>
<summary id="gamebar">Как запустить игровую панель, показанную на превью?</summary>
<div>

Вам нужно установить библиотеку Steam game или Lutris, а затем запустить это:

`~/.config/hypr/scripts/gamelauncher.sh <n>` # где n - стиль [1-4]

</div>
</details>

<details>
<summary id="app-launcher">Как запустить его из лаунчера приложений?</summary>
<div>

Найдите запись `.desktop` с помощью этой удобной команды `find /usr/share/applications -name '*code.desktop'`
Вам следует скопировать, а затем отредактировать запись `.desktop` каждого приложения в `~/.local/share/applications/`
Найдите часть `Exec =`, затем добавьте флаги
image

:::note
📢 Помните, если вы хотите отредактировать или создать файл `.desktop`, рекомендуется размещать его в `~/.local/share/applications/`, чтобы избежать изменения системных файлов. Это гарантирует, что ваши изменения будут специфичны для пользователя и не потребуют прав администратора.
:::

Вот [вики](https://wiki.archlinux.org/title/Desktop_entries) о том, как работать с записями `.desktop`.

</div>
</details>

<details>
<summary id="xwayland">Xwayland(👹)</summary>
<div>

Пожалуйста, обратитесь к [вики hyprland](https://wiki.hyprland.org) для объяснения.

[XWayland](https://wiki.hyprland.org/Configuring/XWayland/)
Обратите внимание, что если приложение не поддерживает Wayland, HyDE, Hyprland и сам Wayland не могут волшебным образом исправить проблему! Не сообщайте об этом как о проблеме, попробуйте задать вопросы на [панели обсуждения](https://github.com/HyDE-Project/Hyde-cli) за помощью.

Известные проблемы

- Несколько проблем с масштабированием в конфигурациях rofi, так как они созданы на основе моего сверхширокого (21:9) дисплея.
- Случайный сбой экрана блокировки, см. https://github.com/swaywm/sway/issues/7046
- Запуск rofi из Waybar нарушает ввод с мыши (добавлено sleep 0.1 в качестве обходного пути), см. https://github.com/Alexays/Waybar/issues/1850
- Приложения Flatpak QT не следуют системной теме

</div>
</details>

<details>
<summary id="sddm-login-loop">Циклическая ошибка "Вход не удался!" в SDDM?</summary>
<div>

Если ваше имя пользователя (или логин) содержит заглавные буквы или специальные символы, вам нужно будет отредактировать вашу тему SDDM, чтобы иметь возможность войти через SDDM.

Для этого выполните следующие действия:

1. Находясь на экране SDDM, откройте tty с помощью `Ctrl + Alt + F6` (или другой клавиши F)
2. Войдите в учетную запись с проблемой
3. `nano /usr/share/sddm/themes/[название темы]/theme.conf`
4. Найдите параметр `AllowBadUsername` и установите его в `true`
5. Перезагрузитесь

Если вы все еще не можете войти после этих шагов, вы можете установить в том же файле `AllowEmptyPassword` в `true`, перезагрузиться, войти, все еще вводя свой пароль, и после входа вы можете безопасно установить его обратно в `false`.

Вот [проблема на GitHub](https://github.com/HyDE-Project/HyDE/issues/404) об этом поведении.

</div>
</details>
