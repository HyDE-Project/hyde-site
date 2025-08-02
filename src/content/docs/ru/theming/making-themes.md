---
title: Создание тем
description: Как создавать темы для HyDE
---

Здесь мы шаг за шагом проведем вас через процесс создания тем для HyDE.
Это руководство подойдет как для hyprdots, так и для HyDE.

### Краткое руководство

Клонируйте репозиторий hyde-theme-starter в ваш каталог с темами.

:::tip
Переименуйте `MyTheme` в название вашей темы, убедитесь, что оно не конфликтует с названиями в [HyDE-Gallery](https://github.com/HyDE-Project/hyde-gallery)
:::

```bash
git clone https://github.com/richen604/hyde-theme-starter ~/MyTheme
```

1. Обязательные компоненты - все должны быть в формате `tar.*`:

   - Тема GTK (обязательно)
     - ищите существующие темы на [Gnome-Look Themes](https://www.gnome-look.org/browse?cat=135&ord=latest)
     - или смотрите [Generate GTK4](#generate-gtk4-from-wallbash) для генерации темы GTK из обоев
   - Набор иконок (необязательно) - по умолчанию используется Tela-circle
     - ищите существующие наборы иконок на [Gnome-Look Icons](https://www.gnome-look.org/browse?cat=132&ord=latest)
   - Тема курсора (необязательно) - по умолчанию используется Bibata-Modern-Ice
     - ищите существующие темы курсоров на [Gnome-Look Cursors](https://www.gnome-look.org/browse?cat=107&ord=latest)
   - Шрифт (необязательно)
     - ищите веб-шрифты на [fonts.google.com](https://fonts.google.com/)
     - ищите пропатченные шрифты для разработчиков на [nerdfonts.com](https://www.nerdfonts.com/)

2. Коллекция обоев, которые соответствуют вашему желаемому стилю/цветовой схеме

   - [Wallhaven](https://wallhaven.cc/) - для обоев
   - [farbenfroh.io](https://farbenfroh.io/) - для обоев, подходящих по цвету, если у вас есть желаемая цветовая схема
   - Не добавляйте слишком много обоев, 8-10 - хорошее количество

3. Установите `just` для запуска вспомогательных скриптов `yay -S just`

Перейдите в каталог вашей темы `cd ~/MyTheme` (замените `MyTheme` на название вашей темы)

:::tip
Переименуйте `MyTheme` в `justfile` на название вашей темы
:::

```bash
theme = "MyTheme"
```

Запустите `just init` для создания начальной структуры каталогов

Ваша тема должна иметь следующую структуру:

```bash
~/MyTheme/
├── Config/                  # Часть вашей финальной темы - Файлы конфигурации
│   └── hyde/
│       └── themes/
│           └── MyTheme/     # основной каталог темы
│               └── wallpapers/
├── refs/                    # для генерируемых нами справочных файлов
├── screenshots/             # для скриншотов вашей темы
├── Source/                  # Часть вашей финальной темы - Архивы, т.е. gtk, курсор, иконки, шрифт
│   └── arcs/
├── .gitignore
├── justfile                 # для запуска вспомогательных скриптов
└── README.md                # ссылки на эту веб-страницу
```

### Архивы (Arcs)

Архивы (Arcs) - это компоненты темы GTK, иконок, курсора и шрифтов, которые составляют части вашей темы.
Давайте сразу добавим их в каталог `Source/arcs`, чтобы они были готовы к тестированию.

Структура вашей папки должна выглядеть примерно так:

```bash
~/MyTheme/
├── Source/
│   └── arcs/
│       ├── Gtk_<Ваша-GTK-Тема>.tar.*
│       ├── Cursor_<Ваша-Тема-Курсора>.tar.*
│       └── Icon_<Ваша-Тема-Иконок>.tar.*
│       └── Font_<Название-Вашего-Шрифта>.tar.*
```

**Убедитесь, что используете правильный префикс для каждого архива**. Например, `Gtk_<Ваша-GTK-Тема>.tar.*`

### Просмотр вашей темы с помощью Wallbash

Скопируйте ваши обои в каталог вашей темы

```bash
cp -r ~/wallpapers ~/MyTheme/Config/.config/hyde/themes/MyTheme/wallpapers
```

Перейдите в каталог вашей темы

```bash
cd ~/MyTheme
```

установите вашу тему

```bash
just install
```

### Тестирование вашей темы с помощью wallbash

Есть два способа инициализировать вашу тему: из wallbash или из существующей темы.

В этом руководстве мы будем использовать wallbash, так как это дает хорошее понимание того, как wallbash генерирует цвета для вашей темы. Вы можете узнать больше о wallbash [здесь](#understanding-wallbash).

Откройте Wallbash, установив автоматический, темный или светлый режим (`Meta + Shift + R`). </br>
Установите выбранные вами обои в качестве текущих (`Meta + Shift + W`)

Понаблюдайте, как wallbash адаптирует цвета к вашим обоям для следующих приложений:

- GTK (nwg-look)
  - чтобы протестировать вашу архивную тему gtk, переключитесь из режима wallbash в режим темы (Meta + Shift + R)
  - затем проверьте `pavucontrol`, чтобы увидеть, не выглядит ли ваша тема gtk странно. если да, следуйте инструкциям в [Generate GTK4](#generate-gtk4-from-wallbash) для генерации файлов темы GTK4 с помощью wallbash
- Kitty (kitty)
- QT (qt5ct + qt6ct)
- Waybar (waybar)
- Spotify (spotify)
- VSCode (code) - требуется, чтобы wallbash был включен в качестве цветовой темы
- Cava (cava)

### Генерация файлов темы

Убедитесь, что выбранные вами обои - лучшие, для которых wallbash генерирует вашу тему. </br>
Теперь выполните следующие команды для генерации файлов wallbash.

```bash
just gen-all
just set-wall
```

Вы увидите кучу новых файлов в каталоге `refs` вашей темы.

```bash
~/MyTheme/
├── refs/                   # для генерируемых нами справочных файлов
│   ├── gtk-4.0/            # Файлы темы GTK4
│   │   ├── gtk.css         # Светлая тема
│   │   └── gtk-dark.css    # Темная тема
│   ├── kvantum/            # Файлы темы Kvantum
│   │   ├── kvantum.theme   # Конфигурация темы Kvantum
│   │   └── kvconfig.theme  # Конфигурация Kvantum
│   ├── hypr.theme          # Тема Hyprland
│   ├── kitty.theme         # Тема терминала Kitty
│   ├── rofi.theme          # Тема Rofi
│   ├── theme.dcol          # переопределения для режима "темы" wallbash
│   └── waybar.theme        # Тема Waybar
│   └── wall.set            # Первые обои, которые использует тема
```

Вы можете скопировать все файлы в ваш каталог  `Config/.config/hyde/themes/MyTheme`.

```bash
cp -r ./refs/* ./Config/.config/hyde/themes/MyTheme
```

запустите установку еще раз, чтобы обновить вашу тему

```bash
just install
```

Эти файлы используются для установки режима "темы" для вашей темы. (`Meta + Shift + R`)

### Редактирование файлов \*.theme

Эти файлы важны для правильной работы тем.

Вам следует сверяться с темой, такой как [Bad Blood](https://github.com/HyDE-Project/hyde-gallery/blob/Bad-Blood/Configs/.config/hyde/themes/Bad%20Blood), в ходе этого руководства.

Каждый файл \*.theme содержит строки конфигурации

Первая строка имеет формат: путь_к_файлу | команда_для_выполнения

- hypr.theme - `$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf`
- kitty.theme - `$HOME/.config/kitty/theme.conf|killall -SIGUSR1 kitty`
- rofi.theme - `$HOME/.config/rofi/theme.rasi`
- waybar.theme - `$HOME/.config/waybar/theme.css|${scrDir}/wbarconfgen.sh`

самый важный файл - `hypr.theme`

```bash
$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf
# ~/.config/hypr/theme/theme.conf - это автоматически сгенерированный файл. Не редактируйте.

$GTK_THEME=Bad-Blood # имя папки внутри `Source/arcs/Gtk_<Ваша-GTK-Тема>.tar.*`
$ICON_THEME=besgnulinux-mono-red # имя папки внутри `Source/arcs/Icon_<Ваша-Тема-Иконок>.tar.*`
$COLOR_SCHEME=prefer-dark # prefer-dark, prefer-light, или auto
$CURSOR_THEME=Night-Diamond-Red # имя папки внутри `Source/arcs/Cursor_<Ваша-Тема-Курсора>.tar.*`
$CURSOR_SIZE=30 # размер курсора в пикселях```
```

-   Отредактируйте переменные для архивов, они должны совпадать с названием папки **внутри** каждого архива в `Source/arcs`, как указано выше
-   Установите рамки, цвета и другие настройки, связанные с темой Hyprland
-   Вы можете использовать hypr.theme для настройки дополнительных программ для вашей темы, таких как SDDM или тема Vscode
-   Становится `$HOME/.config/hypr/themes/theme.conf`

Любые обновления вашей темы в `Config` или `Source` должны быть применены с помощью `just install` для обновления вашей темы.

### Редактирование theme.dcol

Файл `theme.dcol` используется для переопределения некоторых сгенерированных цветов wallbash для режимов wallbash.
Ознакомьтесь с [пониманием wallbash](#понимание-wallbash) для получения дополнительной информации.

Этот файл полностью необязателен

### Завершение вашей темы

Ваша тема теперь должна быть готова к добавлению в hyde-gallery!

Еще несколько последних штрихов:

-   Добавьте несколько скриншотов в `~/screenshots`
-   Добавьте вашу тему в Hyde-Gallery

### Добавление тем в Hyde-Gallery

В каталоге вашей темы сгенерируйте readme с помощью

```bash
python3 generate_readme.py
```

Инициализируйте git

```bash
git init && git branch -M main && git add . && git commit -m "My first HyDE theme"
```

[создайте репозиторий на github](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

Сделайте форк hyde-gallery <https://github.com/HyDE-Project/hyde-gallery> </br>
Добавьте вашу тему в список и в `hyde-themes.json`

## Дополнительная информация

### Сгенерировать GTK4 из wallbash

Если ваша тема не включает поддержку GTK4, pavucont1rol и другие приложения GTK4 могут отображаться с простой белой темой.

Выполните следующую команду для генерации файлов темы GTK4

```bash
just gen-gtk4
```

Скопируйте каталог `refs/gtk-4.0` в каталог вашей темы

```bash
mkdir -p ./Config/.config/hyde/themes/MyTheme/gtk-4.0
cp -r ./refs/gtk-4.0/* ./Config/.config/hyde/themes/MyTheme/gtk-4.0/
```

### Понимание wallbash

Wallbash генерирует 4 основных цвета из ваших обоев, затем создает цветовые группы вокруг каждого основного цвета со следующей структурой:

Для каждого основного цвета (`wallbash_pry1` до `wallbash_pry4`):

- Цвет текста (`wallbash_txt1` до `wallbash_txt4`)
- Цвет текста (`wallbash_1xa1` до `wallbash_1xa9` для группы 1 и т.д.)

Каждый цвет имеет вариант RGBA с настраиваемой непрозрачностью (например, `wallbash_pry1_rgba(0.95)`)

Всего: 44 базовых цвета (4 группы × 11 цветов) плюс варианты RGBA

Используйте `just gen-dcol` для генерации `theme.dcol` со всеми сгенерированными wallbash цветами для ваших активных обоев для справки
