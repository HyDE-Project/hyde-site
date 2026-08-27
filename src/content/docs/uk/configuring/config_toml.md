---
title: Головна конфігурація
description: Посібник із налаштування HyDE
sidebar:
  order: 2
---

<link rel="stylesheet" href="/src/styles/tables.css">

<!-- TODO:

Translators:
Request a translation for config.toml schema at
https://github.com/HyDE-Project/HyDE/blob/master/Configs/.local/share/hyde/schema/config.toml

translate the schema to your language
example:
config.en.toml

run `./gen-table.py config.en.toml` to generate the table
then paste it in here. 

 -->

---
Наразі HyDE надає файл `~/.local/share/hyde/schema/config.toml` для редагування користувачами. Це дає можливість взаємодіяти зі скриптами без використання аргументів командного рядка.

Користувачам рекомендується використовувати редактор, що підтримує валідацію за схемою, щоб переконатися, що файл конфігурації коректний.
```toml
"$schema" = "https://raw.githubusercontent.com/HyDE-Project/HyDE/refs/heads/master/Configs/.local/share/hyde/schema/config.toml.json"
```
---
### [battery.notify]

Конфігурація batterynotify.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| dock | Статус для сповіщень про заряд батареї. | true |
| interval | Інтервал для сповіщень про заряд батареї. | 5 |
| notify | Поріг сповіщення. | 1140 |
| timer | Таймер для сповіщень про заряд батареї. | 120 |

### [battery.notify.execute]

Команди, що виконуються для сповіщень про заряд батареї.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| charging | Команда, що виконується під час заряджання. |  |
| critical | Команда, що виконується при критичному заряді батареї. | systemctl suspend |
| discharging | Команда, що виконується під час розряджання. |  |
| low | Команда, що виконується при низькому заряді батареї. |  |
| unplug | Команда, що виконується після відключення від живлення. |  |

### [battery.notify.threshold]

Пороги для сповіщень про заряд батареї.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| critical | Поріг критичного заряду батареї. | 10 |
| full | Поріг повного заряду батареї. | 90 |
| low | Поріг низького заряду батареї. | 20 |
| unplug | Поріг відключення від живлення. | 100 |

### [brightness]

Конфігурація brightnesscontrol.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| notify | Увімкнути сповіщення для керування яскравістю. | true |
| steps | Кількість кроків для збільшення/зменшення яскравості. | 5 |

### [cava]

Конфігурація візуалізатора Cava.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| channels | Аудіоканали: stereo або mono. | stereo |
| range | Чутливість смуг. | 8 |
| reverse | Реверс руху спектра (0 або 1). | 1 |

### [cava.hyprlock]

Конфігурація 'cava.sh hyprlock'.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| bar | Символи смуг для cava. | ▁▂▃▄▅▆▇█ |
| bar_array | Масив смуг для пресету hyprlock. | ["▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"] |
| range | Кількість смуг мінус одна. | 7 |
| standby | Символ очікування для cava. | 🎶 |
| width | Ширина виводу cava. | 20 |

### [cava.stdout]

Конфігурація 'cava.sh stdout'.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| bar | Символи смуг для cava. | ▁▂▃▄▅▆▇█ |
| bar_array | Масив смуг для пресету stdout. | ["░", "▒", "▓", "█"] |
| range | Кількість смуг мінус одна. | 7 |
| standby | Символ очікування для cava. | 🎶 |
| width | Ширина виводу cava. | 20 |

### [cava.waybar]

Конфігурація 'cava.sh waybar'.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| bar | Символи смуг для cava. | ▁▂▃▄▅▆▇█ |
| bar_array | Масив смуг для пресету waybar. | ["◜", "◝", "◞", "◟", "◠", "◡", "◢", "◣"] |
| range | Кількість смуг мінус одна. | 7 |
| standby | Символ очікування для cava. | 🎶 |
| width | Ширина виводу cava. | 20 |

### [hyprland]

Конфігурація Hyprland.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| background_path | Шлях до фонового зображення екрана блокування. |  |
| bar | Панель. | waybar |
| browser | Браузер. | firefox |
| button_layout | Розкладка кнопок (лише gtk). |  |
| color_scheme | Колірна схема. | prefer-dark |
| cursor_size | Розмір курсора. | 24 |
| cursor_theme | Тема курсора. | Bibata-Modern-Ice |
| document_font_size | Розмір шрифту документів. | 10 |
| editor | Редактор. | code |
| explorer | Файловий менеджер. | dolphin |
| font | Шрифт. | Canterell |
| font_antialiasing | Згладжування шрифту. | rgba |
| font_hinting | Хінтинг шрифту. | full |
| font_size | Розмір шрифту. | 10 |
| gtk_theme | Тема GTK. | Wallbash-Gtk |
| icon_theme | Тема іконок. | Tela-circle-dracula |
| idle | Менеджер бездіяльності. | hypridle |
| lockscreen | Екран блокування. | lockscreen.sh |
| monospace_font | Моноширинний шрифт. | CaskaydiaCove Nerd Font Mono |
| monospace_font_size | Розмір моноширинного шрифту. | 9 |
| quickapps | Швидкі застосунки. | kitty |
| terminal | Термінал. | kitty |

### [hyprland-start]

Конфігурація запуску Hyprland.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| apptray_bluetooth | Аплет Bluetooth. | blueman-applet |
| auth_dialogue | Діалог автентифікації. | polkitkdeauth.sh |
| bar | Панель. | hyde-shell waybar --watch |
| battery_notify | Скрипт сповіщень про заряд батареї. | batterynotify.sh |
| dbus_share_picker | Вибір спільного доступу через DBus. | dbus-update-activation-environment --systemd --all |
| idle_daemon | Демон бездіяльності. | hypridle |
| image_clipboard | Буфер обміну зображень. | wl-paste --type image --watch cliphist store |
| network_manager | Менеджер мережі. | nm-applet --indicator |
| notifications | Сповіщення. | swaync |
| removable_media | Менеджер знімних носіїв. | udiskie --no-automount --smart-tray |
| systemd_share_picker | Вибір спільного доступу через systemd. | systemctl --user import-environment QT_QPA_PLATFORMTHEME WAYLAND_DISPLAY XDG_CURRENT_DESKTOP |
| text_clipboard | Текстовий буфер обміну. | wl-paste --type text --watch cliphist store |
| wallpaper | Скрипт шпалер. | $scrPath/wallpaper.sh --global |
| xdg_portal_reset | Скрипт скидання XDG portal. | resetxdgportal.sh |

### [mediaplayer]

Конфігурація mediaplayer.py.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| artist_track_separator | Символи-роздільники між виконавцем і треком. |    |
| max_length | Максимальна довжина рядка пісні та виконавця. | 70 |
| prefix_paused | Префікс для призупиненого відтворення. |    |
| prefix_playing | Префікс для активного відтворення. |  |
| standby_text | Текст для відображення в режимі очікування. |   Music |

### [notification]

Конфігурація скрипта сповіщень.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| font | Шрифт для сповіщень. | mononoki Nerd Font |
| font_size | Розмір шрифту для сповіщень. | 10 |

### [rofi]

Глобальна конфігурація rofi.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| scale | Типовий масштаб rofi. | 10 |

### [rofi.animation]

Конфігурація 'animation.sh select'.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| scale | Масштаб для анімації. | 10 |

### [rofi.bookmarks]

Конфігурація hyde-shell rofi.bookmarks.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| args | Додаткові аргументи для закладок. | [] |
| font | Шрифт для закладок. | JetBrainsMono Nerd Font |
| scale | Масштаб для закладок. | 10 |
| style | Стиль для rofi bookmarks. |  |

### [rofi.cliphist]

Конфігурація cliphist.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| scale | Масштаб для cliphist. | 10 |

### [rofi.emoji]

Конфігурація emoji-picker.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| args | Додаткові аргументи для вибору emoji. | ["-multi-select"] |
| scale | Масштаб для вибору emoji. | 10 |
| style | Стиль для вибору emoji. | 1 |

### [rofi.glyph]

Конфігурація glyph-picker.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| args | Додаткові аргументи для вибору гліфів. | ["-multi-select"] |
| scale | Масштаб для вибору гліфів. | 10 |

### [rofi.hyprlock]

Конфігурація 'hyprlock.sh select'.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| scale | Масштаб для hyprlock. | 10 |

### [rofi.launch]

Конфігурація rofilaunch.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| drun_args | Додаткові аргументи для режиму drun. | [] |
| drun_style | Стиль для режиму drun. | style_1 |
| filebrowser_args | Додаткові аргументи для режиму огляду файлів. | [] |
| filebrowser_style | Стиль для режиму огляду файлів. | style_1 |
| run_args | Додаткові аргументи для режиму run. | [] |
| run_style | Стиль для режиму run. | style_1 |
| scale | Масштаб для запуску. | 5 |
| window_args | Додаткові аргументи для режиму вибору вікна. | [] |
| window_style | Стиль для режиму вибору вікна. | style_1 |

### [rofi.theme]

Конфігурація themeselect.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| scale | Масштаб для вибору теми оформлення. | 6 |

### [rofi.wallpaper]

Конфігурація swwwallselect.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| scale | Масштаб для шпалер. | 10 |

### [rofi.websearch]

Конфігурація hyde-shell rofi.websearch.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| args | Додаткові аргументи для пошуку в мережі. | [] |
| font | Шрифт для пошуку в мережі. | JetBrainsMono Nerd Font |
| scale | Масштаб для пошуку в мережі. | 10 |
| style | Стиль для rofi websearch. |  |

### [rofi.keybind.hint]

Конфігурація keybind_hint.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| delimiter | Роздільник для підказок клавіатурних скорочень. | \t |
| height | Висота для підказок клавіатурних скорочень. | 40em |
| line | Кількість рядків для підказок клавіатурних скорочень. | 16 |
| width | Ширина для підказок клавіатурних скорочень. | 40em |

### [screenshot]

Конфігурація screenshot.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| annotation_post_command | Команда, що виконується після інструменту анотацій. | [""] |
| annotation_pre_command | Команда, що виконується перед інструментом анотацій. | [] |
| annotation_tool | Інструмент анотацій для знімків екрана. | satty |

### [screenshot.ocr]

Конфігурація OCR.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| tesseract_languages | Вказати бажані мови для розпізнавання тексту. Щоб переглянути встановлені мови, виконайте `tesseract --list-langs`. | ["eng"] |

### [sysmonitor]

Конфігурація sysmonlaunch.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| commands | Резервні варіанти команд. | [""] |
| execute | Типова команда для виконання. |  |

### [volume]

Конфігурація volumecontrol.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| boost | Увімкнути посилення гучності. | false |
| boost_limit | Ліміт посилення гучності. | 120 |
| notify | Увімкнути сповіщення для керування гучністю. | true |
| steps | Кількість кроків для збільшення/зменшення гучності. | 5 |

### [wallbash]

Конфігурація wallbash.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| skip_template | Шаблони, які слід пропускати під час використання wallbash. | [""] |

### [wallpaper]

Конфігурація шпалер.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| backend | Бекенд шпалер, потребує 'wallpaper.<backend>.sh' як обробний скрипт у $PATH | swww |
| custom_paths | Список шляхів для пошуку шпалер. | [] |

### [wallpaper.swww]

Конфігурація swwwallselect.sh.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| duration | Тривалість переходу. | 1 |
| framerate | Частота кадрів переходу. | 60 |
| transition_default | Тип переходу для типової шпалери. | grow |
| transition_next | Тип переходу для наступної шпалери. | grow |
| transition_prev | Тип переходу для попередньої шпалери. | outer |

### [waybar]

Конфігурація waybar.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| font | Шрифт для waybar. | JetBrainsMono Nerd Font |
| icon_size | Розмір іконок для waybar. | 10 |
| position | Резервна позиція waybar.   | top |
| scale | Загальний масштаб для waybar. | 10 |

### [weather]

Конфігурація погоди.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| forecast_days | Кількість днів для показу прогнозу (0-3). | 3 |
| location | Рядок місцезнаходження/координат для виведення погоди. |  |
| show_icon | Показувати іконку погоди у waybar. | true |
| show_location | Показувати місцезнаходження у waybar. | true |
| show_today | Показувати детальний опис на сьогодні у спливній підказці. | true |
| temperature_unit | Одиниця вимірювання температури ('c' або 'f'). | c |
| time_format | Формат часу ('12h' або '24h'). | 24h |
| windspeed_unit | Одиниця вимірювання швидкості вітру ('km/h' або 'mph'). | km/h |

### [wlogout]

Конфігурація wlogout.

| Ключ | Опис | Типове значення |
| --- | ----------- | ------- |
| style | Стиль для wlogout. | 2 |

