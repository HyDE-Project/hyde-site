---
title: Створення тем
description: Як створювати теми для HyDE
---

Тут ми покроково розповімо про процес створення тем для HyDE.
Цей посібник підходить як для hyprdots, так і для HyDE.

### Короткий посібник з початку роботи

Клонуйте репозиторій hyde-theme-starter у вашу директорію тем

:::tip
Перейменуйте `MyTheme` на назву вашої теми, переконавшись, що вона не конфліктує з назвами в [Галереї HyDE](https://github.com/HyDE-Project/hyde-gallery)
:::

```bash
git clone https://github.com/richen604/hyde-theme-starter ~/MyTheme
```

1. Обов'язкові компоненти — усі мають бути у форматі `tar.*`:

   - Тема GTK (обов'язково)
     - шукайте наявні теми на [Gnome-Look Themes](https://www.gnome-look.org/browse?cat=135&ord=latest)
     - або дивіться [Генерація GTK4](#генерація-gtk4-з-wallbash) для генерування теми GTK зі шпалери
   - Набір іконок (необов'язково) — типово Tela-circle
     - шукайте наявні набори іконок на [Gnome-Look Icons](https://www.gnome-look.org/browse?cat=132&ord=latest)
   - Тема курсора (необов'язково) — типово Bibata-Modern-Ice
     - шукайте наявні теми курсора на [Gnome-Look Cursors](https://www.gnome-look.org/browse?cat=107&ord=latest)
   - Шрифт (необов'язково)
     - шукайте веб-шрифти на [fonts.google.com](https://fonts.google.com/)
     - шукайте патчені шрифти для розробників на [nerdfonts.com](https://www.nerdfonts.com/)

2. Набір шпалер, що відповідає бажаному стилю/кольоровій схемі

   - [Wallhaven](https://wallhaven.cc/) — для шпалер
   - [farbenfroh.io](https://farbenfroh.io/) — для шпалер, що відповідають кольору, якщо у вас є бажана кольорова схема
   - Не додавайте забагато шпалер, 8-10 — гарна кількість

3. Встановіть `just` для запуску допоміжних скриптів `yay -S just`

Перейдіть до директорії вашої теми `cd ~/MyTheme` (замініть `MyTheme` на назву вашої теми)

:::tip
Перейменуйте `MyTheme` у `justfile` на назву вашої теми
:::

```bash
theme = "MyTheme"
```

Запустіть `just init`, щоб згенерувати початкову структуру директорій

Ваша тема повинна мати таку структуру:

```bash
~/MyTheme/
├── Config/                  # Частина вашої фінальної теми — конфігураційні файли
│   └── hyde/
│       └── themes/
│           └── MyTheme/     # основна директорія теми
│               └── wallpapers/
├── refs/                    # для довідкових файлів, які ми генеруємо
├── screenshots/             # для знімків екрана вашої теми
├── Source/                  # Частина вашої фінальної теми — архіви, тобто gtk, курсор, іконки, шрифт
│   └── arcs/
├── .gitignore
├── justfile                 # для запуску допоміжних скриптів
└── README.md                # посилання на цю веб-сторінку
```

### Архіви (Arcs)

Архіви (Arcs) — це компоненти теми GTK, іконок, курсора та шрифту, з яких складаються частини вашої теми.
Додаймо їх одразу в директорію `Source/arcs`, щоб вони були готові для тестування.

Ваша структура папок має виглядати приблизно так:

```bash
~/MyTheme/
├── Source/
│   └── arcs/
│       ├── Gtk_<Your-GTK-Theme>.tar.*
│       ├── Cursor_<Your-Cursor-Theme>.tar.*
│       └── Icon_<Your-Icon-Theme>.tar.*
│       └── Font_<Your-Font-Name>.tar.*
```

**Обов'язково використовуйте правильний префікс для кожного архіву**. Наприклад, `Gtk_<Your-GTK-Theme>.tar.*`

### Перегляд вашої теми через Wallbash

Скопіюйте свої шпалери в директорію теми

```bash
cp -r ~/wallpapers ~/MyTheme/Config/.config/hyde/themes/MyTheme/wallpapers
```

перейдіть у директорію вашої теми

```bash
cd ~/MyTheme
```

встановіть свою тему

```bash
just install
```

### Тестування теми з wallbash

Існує два способи ініціалізації теми: з wallbash або з наявної теми.

У цьому посібнику ми будемо використовувати wallbash, оскільки це дає добре зрозуміти, як wallbash генерує кольори для вашої теми. Дізнатися більше про wallbash можна [тут](#розуміння-wallbash).

Відкрийте Wallbash, встановивши auto, dark або light (`Meta + Shift + R`). </br>
Встановіть обрану шпалеру як поточну (`Meta + Shift + W`)

Спостерігайте, як wallbash адаптує кольори до вашої шпалери для наступних застосунків:

- GTK (nwg-look)
  - щоб перевірити тему GTK свого архіву, перемкніться з режиму wallbash у режим theme (Meta + Shift + R)
  - потім перевірте `pavucontrol`, чи ваша тема GTK не виглядає дивно. якщо так, дотримуйтеся інструкцій у [Генерація GTK4](#генерація-gtk4-з-wallbash), щоб згенерувати файли теми GTK4 за допомогою wallbash
- Kitty (kitty)
- QT (qt5ct + qt6ct)
- Waybar (waybar)
- Spotify (spotify)
- VSCode (code) — потребує ввімкненого wallbash як кольорової теми
- Cava (cava)

### Генерація файлів теми

Переконайтеся, що обрана вами шпалера — найкраща з тих, які wallbash генерує для вашої теми. </br>
Тепер запустіть наступні команди, щоб згенерувати файли wallbash.

```bash
just gen-all
just set-wall
```

Ви побачите купу нових файлів у директорії теми `refs`.

```bash
~/MyTheme/
├── refs/                   # для довідкових файлів, які ми генеруємо
│   ├── gtk-4.0/            # файли теми GTK4
│   │   ├── gtk.css         # Світла тема
│   │   └── gtk-dark.css    # Темна тема
│   ├── kvantum/            # файли теми Kvantum
│   │   ├── kvantum.theme   # конфігурація теми Kvantum
│   │   └── kvconfig.theme  # конфігурація Kvantum
│   ├── hypr.theme          # Тема Hyprland
│   ├── kitty.theme         # Тема термінала Kitty
│   ├── rofi.theme          # Тема Rofi
│   ├── theme.dcol          # перевизначення для режимів wallbash "theme"
│   └── waybar.theme        # Тема Waybar
│   └── wall.set            # Перша шпалера, яку використовує тема
```

Ви можете скопіювати всі файли в директорію `Config/.config/hyde/themes/MyTheme`.

```bash
cp -r ./refs/* ./Config/.config/hyde/themes/MyTheme
```

запустіть встановлення знову, щоб оновити вашу тему

```bash
just install
```

Ці файли використовуються для встановлення режиму "theme" для вашої теми. (`Meta + Shift + R`)

### Редагування файлів \*.theme

Ці файли важливі для правильної роботи тем.

Варто орієнтуватися на тему на кшталт [Bad Blood](https://github.com/HyDE-Project/hyde-gallery/blob/Bad-Blood/Configs/.config/hyde/themes/Bad%20Blood), користуючись цим посібником.

Кожен файл \*.theme містить рядки конфігурації

Перший рядок має формат: шлях_до_файлу | команда_для_виконання

- hypr.theme - `$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf`
- kitty.theme - `$HOME/.config/kitty/theme.conf|killall -SIGUSR1 kitty`
- rofi.theme - `$HOME/.config/rofi/theme.rasi`
- waybar.theme - `$HOME/.config/waybar/theme.css|${scrDir}/wbarconfgen.sh`

найважливіший файл — `hypr.theme`

```bash
$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf
# ~/.config/hypr/theme/theme.conf is an auto-generated file. Do not edit.

$GTK_THEME=Bad-Blood # folder name inside `Source/arcs/Gtk_<Your-GTK-Theme>.tar.*`
$ICON_THEME=besgnulinux-mono-red # folder name inside `Source/arcs/Icon_<Your-Icon-Theme>.tar.*`
$COLOR_SCHEME=prefer-dark # prefer-dark, prefer-light, or auto
$CURSOR_THEME=Night-Diamond-Red # folder name inside `Source/arcs/Cursor_<Your-Cursor-Theme>.tar.*`
$CURSOR_SIZE=30 # cursor size in pixels
```

- Відредагуйте змінні для архівів; вони мають збігатися з назвою папки **всередині** кожного архіву в `Source/arcs`, як показано вище
- Встановіть межі вікон, кольори та інші налаштування, пов'язані з темою, для hyprland
- Ви можете використовувати hypr.theme, щоб налаштувати додаткові програми для своєї теми, наприклад SDDM або тему Vscode
- Стає файлом `$HOME/.config/hypr/themes/theme.conf`

Будь-які оновлення вашої теми — у `Config` чи `Source` — слід виконувати через `just install`, щоб оновити тему.

### Редагування theme.dcol

Файл `theme.dcol` використовується для перевизначення деяких згенерованих кольорів wallbash для режимів wallbash.
Дізнайтеся більше в розділі [розуміння wallbash](#розуміння-wallbash).

Цей файл повністю необов'язковий

### Завершення роботи над темою

Ваша тема тепер має бути готова до додавання в hyde-gallery!

Ще кілька фінальних штрихів:

- Додайте кілька знімків екрана до `~/screenshots`
- Додайте свою тему в Hyde-Gallery

### Додавання тем до Hyde-Gallery

У директорії вашої теми згенеруйте readme за допомогою

```bash
python3 generate_readme.py
```

Ініціалізуйте git

```bash
git init && git branch -M main && git add . && git commit -m "My first HyDE theme"
```

[створіть репозиторій на github](https://docs.github.com/uk/repositories/creating-and-managing-repositories/creating-a-new-repository)

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

Зробіть форк hyde-gallery <https://github.com/HyDE-Project/hyde-gallery> </br>
Додайте свою тему до списку та `hyde-themes.json`

## Додаткова інформація

### Генерація GTK4 з wallbash

Якщо ваша тема не включає підтримку GTK4, pavucontrol та інші застосунки GTK4 можуть відображатися з простою білою темою.

Запустіть наступну команду, щоб згенерувати файли теми GTK4

```bash
just gen-gtk4
```

Скопіюйте директорію `refs/gtk-4.0` у директорію вашої теми

```bash
mkdir -p ./Config/.config/hyde/themes/MyTheme/gtk-4.0
cp -r ./refs/gtk-4.0/* ./Config/.config/hyde/themes/MyTheme/gtk-4.0/
```

### Розуміння wallbash

Wallbash — це спеціальний інструмент HyDE, який генерує 4 основні кольори з вашої шпалери, а потім створює групи кольорів навколо кожного основного кольору за такою структурою:

Для кожного основного кольору (`wallbash_pry1` до `wallbash_pry4`):

- Колір тексту (`wallbash_txt1` до `wallbash_txt4`)
- 9 акцентних кольорів (`wallbash_1xa1` до `wallbash_1xa9` для групи 1 тощо)

Кожен колір має варіант RGBA з можливістю налаштування прозорості (наприклад, `wallbash_pry1_rgba(0.95)`)

Загалом: 44 базові кольори (4 групи × 11 кольорів) плюс варіанти RGBA

Використовуйте `just gen-dcol`, щоб згенерувати `theme.dcol` з усіма кольорами, згенерованими wallbash, для вашої активної шпалери, для довідки
