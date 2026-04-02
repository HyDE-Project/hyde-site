---
title: Hyprland
description: Hyprland related configuration
sidebar:
  order: 3
---

<link rel="stylesheet" href="/src/styles/tables.css">

# Configuration Tree

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

**Read the [Hyprland Wiki](https://wiki.hyprland.org/) first!**

**And refresh on the variables used [Right Here](https://specifications.freedesktop.org/basedir/latest/)**

:::

# HyDE's Hyprland Configuration

Since Hyprland sources `~/.config/hypr/hyprland.conf`, HyDE divides its configuration into three sections:

- [Boilerplate](#1-boilerplate)
- [Overrides](#2-overrides)
- [Users](#3-users)

## 1. Boilerplate

This section contains the default configuration of HyDE, which you are recommended *not* to modify.

**Filepath:** `$XDG_DATA_HOME/hyde/hyprland.conf`

This file is sourced on top of other configurations in `~/.config/hypr/hyprland.conf`.

```ini
# Boilerplate configuration
source = ~/.local/share/hyde/hyprland.conf
```

## 2. Overrides

This section is for overriding HyDE's default configuration.

:::caution

The `xdg_config/hypr/hyde.conf` file is deprecated, use `$XDG_DATA_HOME/hyde/schema/config.toml` instead

:::

To override HyDE's default Hyprland settings, configure these sections in your `config.toml`:

- **[hyprland]** - Application defaults, theming, and display settings
- **[hyprland-start]** - Startup commands and services

**Configuration File:** `~/.local/share/hyde/schema/config.toml`

For detailed options, see:
- [hyprland configuration](../config_toml/#hyprland)
- [hyprland_start configuration](../config_toml/#hyprland_start)

## 3. Users

This section is for user configuration, which you may adjust as needed. 

**Filepaths:**

- `./keybindings.conf`
- `./windowrules.conf`
- `./monitors.conf`
- `./userprefs.conf`

---

:::tip

You will likely need to configure only these files; you can override Hyprland's variables, so change them as you wish.

Also, Hyprland can hot reload the configuration files, so you can edit them and immediately see the changes.

mv ~/.local/share/hyde/schema/config.toml -> ~/Clone/config.toml then edit at the latter location if you wish to be safe about editing the default values for all configuration options.

:::

Now you should know which file is which. Refer to the [Hyprland Wiki](https://wiki.hyprland.org) for more information to achieve your perfect desktop experience.

Also see [FAQs and Tips](../help/faq#how-can-i-change-keyboard-layout).
