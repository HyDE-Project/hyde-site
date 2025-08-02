---
title: Hyprland
description: Конфигурация, связанная с Hyprland
sidebar:
  order: 3
---

<link rel="stylesheet" href="/src/styles/tables.css">

# Иерархическая структура

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

**Сначала прочитайте [Hyprland Wiki](https://wiki.hyprland.org/)!**

:::

# HyDE's Hyprland конфигурация

Поскольку источником Hyprland является `~/.config/hypr/hyprland.conf`, конфигурация HyDE hyprland разделена на три раздела:

- [Boilerplate](#1-boilerplate)
- [Overrides](#2-overrides)
- [Users](#3-users)

## 1. Шаблон (Boilerplate)

В этом разделе содержатся настройки HyDE по умолчанию. Рекомендуется не изменять этот раздел.

**Путь к файлу:** `$XDG_DATA_HOME/hyde/hyprland.conf`

Этот файл создается поверх других конфигураций в `~/.config/hypr/hyprland.conf`.

```ini
# Boilerplate configuration
source = ~/.local/share/hyde/hyprland.conf
```

## 2. Переопределения (Overrides)

Этот раздел предназначен для переопределения конфигурации HyDE по умолчанию.

:::caution

Файл `xdg_config/hypr/hyde.conf` устарел. Вместо него используйте `xdg_config/hyde/config.toml`.

:::

Чтобы переопределить настройки HyDE по умолчанию для Hyprland, настройте следующие разделы в файле `config.toml`:

- **[hyprland]** - Настройки приложений по умолчанию, темы и параметры дисплея
- **[hyprland_start]** - Команды и службы автозапуска

**Файл конфигурации:** `$XDG_STATE_HOME/hyde/hyprland.conf`

Для получения подробной информации о параметрах см.:
- [конфигурация hyprland](../config_toml/#hyprland)
- [конфигурация hyprland_start](../config_toml/#hyprland_start)

## 3. Пользовательские настройки (Users)

Этот раздел предназначен для пользовательской конфигурации. Рекомендуется изменять этот раздел по своему усмотрению.

**Путь к файлам:**

- `./keybindings.conf`
- `./windowrules.conf`
- `./monitors.conf`
- `./userprefs.conf`

---

:::tip

Скорее всего, для настройки ваших предпочтений вам понадобятся только эти файлы.
Переменные Hyprland можно переопределять, поэтому вы можете изменять значения по умолчанию по своему усмотрению.

Также Hyprland может «на лету» перезагружать файлы конфигурации, так что вы можете редактировать их и сразу видеть изменения.

:::

Теперь вы должны знать, какой файл за что отвечает. Обратитесь к [Hyprland Wiki](https://wiki.hyprland.org) для получения дополнительной информации и для создания идеального рабочего стола.

Также смотрите [FAQ & Tips](../../help/faq#keyboard-layout).
