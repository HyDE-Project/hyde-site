---
title: Часті запитання та поради
description: Часті запитання про HyDE
---

<link rel="stylesheet" href="/src/styles/tables.css">

:::tip
Питання, пов'язані з Hyprland, варто шукати у [Вікі Hyprland](https://wiki.hyprland.org)
:::

<details>
<summary id="wallpapers">Як додати глобальні або власні шпалери?</summary>
<div>

#### Глобальні шпалери

Глобальні шпалери показуються в селекторі для всіх тем.

У файлі `xdg_config/hyde/config.toml` додайте наступне.

```toml
[wallpaper]
custom_paths = [
    "$XDG_PICTURES_DIR",
    "/path/to/pretty/wallpapers",
] # Список шляхів для пошуку шпалер

```

#### Власні шпалери для конкретної теми

##### Варіант 1: GUI

Використання dolphin для вибору шпалери/шпалер для теми

![image](https://github.com/user-attachments/assets/a72458fc-da94-45e4-8dd4-dba48b910e82)

1. Виберіть зображення
2. Клацніть правою кнопкою миші й наведіть курсор на "Встановити як шпалеру"
3. Оберіть цільову тему

##### Варіант 2: CLI

Власні шпалери додаються окремо для кожної теми.

1. Додайте шпалеру в `~/.config/hyde/themes/Theme-Name/wallpapers/*`.
2. Потім виконайте `hyde-shell reload`

</div>
</details>

<details>
<summary id="screen-record">Як зробити запис екрана?</summary>
<div>

Ви можете записувати екран за допомогою наступних пакетів запису на базі wayland.

`wl-screenrec`

`wf-recorder`

`kooha `

`obs`

</div>
</details>

<details>
<summary id="preferences">Як налаштувати власні уподобання?</summary>
<div>

Ви можете встановити власні налаштування Hyprland у файлі `xdg_config/hypr/userprefs.conf`. Ці налаштування зберігаються навіть під час оновлення репозиторію.

Дивіться розділ `Налаштування` > `Hyprland`, щоб дізнатися, як структуровані конфігурації Hyprland.

</div>
</details>

<details>
<summary id="update-dotfiles">Як оновити мої dotfiles до останньої версії?</summary>
<div>

```sh
cd ~/HyDE/Scripts
git pull
./install.sh -r
```

Дивіться розділ `Ресурси` > `Відновлення конфігурації`, щоб дізнатися, як це працює

</div>
</details>

<details>
<summary id="monitor-resolution">Як встановити роздільну здатність монітора та частоту оновлення?</summary>
<div>

Детальніше читайте тут: https://wiki.hyprland.org/Configuring/Monitors/

Ви можете встановити роздільну здатність монітора та частоту оновлення у файлі `~/.config/hypr/monitors.conf`

Приклад: `monitor = DP-1,2560x1440@144,0x0, 1` >> Символ @ встановлює частоту оновлення, але зверніть увагу, що ваш монітор може не підтримувати всі частоти оновлення.

</div>
</details>

<details>
<summary id="pokemon-terminal">Як прибрати персонажів pokemon?</summary>
<div>

Видаліть pokego-bin.

</div>
</details>

<details>
<summary id="startup intro">Як змінити вступ під час запуску термінала?</summary>
<div>

Відредагуйте `~/.config/zsh/user.zsh`

</div>
</details>

<details>
<summary id="sddm-settings">Як редагувати шпалеру або налаштування sddm?</summary>
<div>

- Зміна шпалери
  Потрібно вручну запустити скрипт `~/.config/hypr/sddmwall.sh` на шпалері, яку ви хочете встановити для екрана входу; ви можете вибрати шпалеру з тем, переконавшись, що це поточна шпалера swww.
- Зміна налаштувань SDDM
  (кольори, фон, формат дати, шрифт) можна налаштувати у файлі `/usr/share/sddm/themes/corners/theme.conf`

якщо ви хочете змінити структуру, вам доведеться відредагувати файли qml у /usr/share/sddm/themes/corners/components

</div>
</details>

<details>
<summary id="keyboard-layout">Як змінити розкладку клавіатури?</summary>
<div>

Детальніше читайте тут: https://wiki.hyprland.org/Configuring/Variables/#input

У HyDE є файл `~/.config/hypr/userprefs.conf`, куди слід додати відповідну конфігурацію.

```
input {
  kb_layout = us,de
}
```

Використовуйте `SUPER` + `K` для перемикання між розкладками.

</div>
</details>

<details>
<summary id="thumbnails-selectors">Немає мініатюр у селекторах?</summary>
<div>

Якщо ваші мініатюри не завантажуються, спробуйте перебудувати кеш шпалер.

`swwwallcache.sh`

</div>
</details>

<details>
<summary id="edit-waybar">Як редагувати waybar?</summary>
<div>

Ви можете створити власну конфігурацію waybar, додавши власний файл у ~/.config/waybar/layouts/<filename>.jsonc. Потім його можна буде обрати в меню HyDE або запустивши скрипт з репозиторію `HyDE/Scripts/waybar.py -S`

Дивіться документацію з теми оформлення у [Вікі Waybar](https://github.com/Alexays/Waybar/wiki).

</div>
</details>

<details>
<summary id="waybar-blur">Як прибрати розмиття на waybar?</summary>
<div>

Ви можете прибрати розмиття на waybar, видаливши blurls = waybar в директорії тем, закоментувавши цей рядок наприкінці кожного файлу `theme.conf`.
Директорія тем: `~/.config/hypr/themes/`

</div>
</details>

<details>
<summary id="gamebar">Як запустити gamebar, показану в попередньому перегляді?</summary>
<div>

Вам знадобиться встановлена бібліотека steam або lutris, після чого запустіть:

`~/.config/hypr/scripts/gamelauncher.sh <n>` # де n — стиль [1-4]

</div>
</details>

<details>
<summary id="app-launcher">Як запустити це через засіб запуску застосунків?</summary>
<div>

Знайдіть запис .desktop за допомогою зручної команди find /usr/share/applications -name '\*code.desktop' image
Вам слід скопіювати, а потім відредагувати запис .desktop кожного застосунку в `~/.local/share/applications/`
Знайдіть частину Exec = і додайте прапорці
image

:::note
📢 Пам'ятайте: якщо ви хочете відредагувати або створити файл .desktop, гарною практикою буде розмістити його в ~/.local/share/applications/, щоб уникнути змін у системних файлах. Це гарантує, що ваші зміни стосуються лише вашого користувача й не потребують адміністративних прав
:::

Ось [вікі](https://wiki.archlinux.org/title/Desktop_entries) про роботу із записами .desktop.

</div>
</details>

<details>
<summary id="xwayland">Xwayland(👹)</summary>
<div>

Будь ласка, зверніться до [Вікі Hyprland](https://wiki.hyprland.org) за поясненнями.

[XWayland](https://wiki.hyprland.org/Configuring/XWayland/)
Зверніть увагу: якщо застосунок не підтримує Wayland, ні HyDE, ні Hyprland, ні сам Wayland не мають сили магічно виправити цю проблему! Не повідомляйте про це як про проблему, спробуйте задати питання на [панелі обговорень](https://github.com/HyDE-Project/Hyde-cli), щоб отримати допомогу.

Відомі проблеми

- Незначні проблеми з масштабуванням у конфігураціях rofi, оскільки вони створені на основі мого широкоформатного (21:9) дисплея.
- Випадкове аварійне завершення блокування екрана, див. https://github.com/swaywm/sway/issues/7046
- Запуск rofi через Waybar порушує введення з миші (додано sleep 0.1 як обхідний шлях), див. https://github.com/Alexays/Waybar/issues/1850
- Застосунки Flatpak QT не дотримуються системної теми

</div>
</details>

<details>
<summary id="sddm-login-loop">Цикл "Помилка входу!" у SDDM?</summary>
<div>

Якщо ваше ім'я користувача (або логін) містить великі літери чи спеціальні символи, вам потрібно відредагувати тему SDDM, щоб мати змогу увійти через SDDM.

Для цього виконайте такі кроки:

1. На екрані SDDM відкрийте tty за допомогою `Ctrl + Alt + F6` (або іншої функціональної клавіші)
2. Увійдіть в обліковий запис, з яким виникла проблема
3. `nano usr/share/sddm/themes/[theme name]/theme.conf`
4. Знайдіть параметр `AllowBadUsername` і встановіть значення true
5. Перезавантажте систему

Якщо ви все ще не можете увійти після цих кроків, у тому ж файлі встановіть `AllowEmptyPassword` в true, перезавантажте систему, увійдіть, все одно ввівши пароль, а після входу можна безпечно повернути значення false.

Ось [GitHub Issue](https://github.com/HyDE-Project/HyDE/issues/404) про цю поведінку. 

</div>
</details>
