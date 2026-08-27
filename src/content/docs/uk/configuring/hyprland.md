---
title: Hyprland
description: Налаштування, пов'язані з Hyprland
sidebar:
  order: 3
---

<link rel="stylesheet" href="/src/styles/tables.css">

## Дерево конфігурації

```text
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

**Спершу прочитайте [Hyprland Wiki](https://wiki.hyprland.org/)!**

**А також освіжте знання про використані XDG-змінні [тут](https://specifications.freedesktop.org/basedir/latest/)**

:::

## Налаштування Hyprland у HyDE

Оскільки Hyprland підключає `~/.config/hypr/hyprland.conf`, HyDE розділяє свою конфігурацію на три частини:

- [Базова конфігурація](#1-базова-конфігурація)
- [Перевизначення](#2-перевизначення)
- [Користувацькі налаштування](#3-користувацькі-налаштування)

## 1. Базова конфігурація

Цей розділ містить конфігурацію HyDE за замовчуванням, яку рекомендується *не* змінювати безпосередньо.

**Шлях до файлу:** `$XDG_DATA_HOME/hyde/hyprland.conf`

Цей файл підключається поверх інших конфігурацій у `~/.config/hypr/hyprland.conf`.

```ini
# Базова конфігурація
source = ~/.local/share/hyde/hyprland.conf
```

## 2. Перевизначення

Цей розділ призначений для перевизначення конфігурації HyDE за замовчуванням.

:::caution

Файл `xdg_config/hypr/hyde.conf` застарілий, замість нього використовуйте `$XDG_DATA_HOME/hyde/schema/config.toml`

:::

Щоб перевизначити параметри Hyprland за замовчуванням у HyDE, налаштуйте ці розділи у своєму `config.toml`:

- **[hyprland]** — параметри застосунків за замовчуванням, оформлення теми та налаштування дисплея
- **[hyprland-start]** — команди запуску та служби

**Файл конфігурації:** `~/.local/share/hyde/schema/config.toml`

Детальні параметри дивіться тут:
- [конфігурація hyprland](../config_toml/#hyprland)
- [конфігурація hyprland_start](../config_toml/#hyprland-start)

## 3. Користувацькі налаштування

Цей розділ призначений для користувацьких налаштувань, які ви можете змінювати за потреби.

**Шляхи до файлів:**

- `$XDG_CONFIG_HOME/hypr/keybindings.conf`
- `$XDG_CONFIG_HOME/hypr/windowrules.conf`
- `$XDG_CONFIG_HOME/hypr/monitors.conf`
- `$XDG_CONFIG_HOME/hypr/userprefs.conf`

---

:::tip

Найімовірніше, вам потрібно буде налаштовувати лише ці файли; ви можете перевизначати змінні Hyprland, тож змінюйте їх на власний розсуд.

Крім того, Hyprland може перезавантажувати конфігураційні файли "на льоту" (hot reload), тож ви можете редагувати їх і одразу бачити зміни.

Якщо ви хочете убезпечити себе під час редагування конфігурації за замовчуванням, спершу скопіюйте її в резервне місце:

```bash
cp ~/.local/share/hyde/schema/config.toml ~/config.toml.bak
```

Або ще краще — просто обмежтеся редагуванням `~/.config/hypr`. Рекомендую редагувати userprefs.conf, якщо хочете додати розкладку клавіатури (яку потім можна перемикати комбінацією super + k), windowrules.conf, якщо хочете увімкнути повну прозорість, змінивши правила шарів (layer rules) внизу файлу, або ж просто залишити їх такими, як є, якщо вас усе влаштовує.

:::

Тепер ви повинні знати, який файл за що відповідає. Звертайтеся до [Hyprland Wiki](https://wiki.hyprland.org) для отримання додаткової інформації, щоб досягти ідеального робочого середовища.

Про те, як UWSM керує вашою системою на рівні служб і змінних середовища сесії, дивіться [Автозапуск і UWSM](../../help/secrets/).
Також дивіться [Поширені запитання та поради](../../help/faq#keyboard-layout).
