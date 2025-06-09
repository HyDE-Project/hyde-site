---
title: Hyprland
description: Hyprland related configuration
sidebar:
  order: 3
---

<style>
  .sl-markdown-content :is(th:first-child, td:first-child){
    padding-inline-start: 0.5rem;
  }

  .sl-markdown-content :is(th:last-child, td:last-child){
    padding-inline-end: 0.5rem;
  }

  table {
    width: 100%;
    margin: 0em 1em;
  }
  th, td {
    border: 0.1em solid var(--sl-color-gray-5);
    padding: 1em 2em;
    text-align: left;
  }
  th {
    background-color: #A984CC !important; /* HyDE purple */
    color: #D9D9D9 !important; /* HyDE light */
    text-align: center;
    margin: 0;
    padding: 1em 2em;
  }
  :root[data-theme="light"] th {
    background-color: #A984CC !important; /* HyDE purple for light theme too */
    color: #ffffff !important; /* White text for better contrast in light theme */
  }
</style>

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

:::

# HyDE's Hyprland Configuration

Since Hyprland sources `~/.config/hypr/hyprland.conf`, HyDE's hyprland configuration is divided into three sections:

- [Boilerplate](#1-boilerplate)
- [Overrides](#2-overrides)
- [Users](#3-users)

## 1. Boilerplate

This section contains the default configuration of HyDE. It is recommended not to change this section.

**Filepath:** `$XDG_DATA_HOME/hyde/hyprland.conf`

This file is sourced on top of other configurations in `~/.config/hypr/hyprland.conf`.

```ini
# Boilerplate configuration
source = ~/.local/share/hyde/hyprland.conf
```

## 2. Overrides

This section is for overriding the default configuration of HyDE.

:::caution

The `xdg_config/hypr/hyde.conf` file is deprecated. Use `xdg_config/hyde/config.toml` instead.

:::

To override HyDE's default Hyprland settings, configure these sections in your `config.toml`:

- **[hyprland]** - Application defaults, theming, and display settings
- **[hyprland_start]** - Startup commands and services

**Configuration File:** `$XDG_STATE_HOME/hyde/hyprland.conf`

For detailed options, see:
- [hyprland configuration](../config_toml/#hyprland)
- [hyprland_start configuration](../config_toml/#hyprland_start)

## 3. Users

This section is for user configuration. It is recommended to change this section to your liking.

**Filepaths:**

- `./keybindings.conf`
- `./windowrules.conf`
- `./monitors.conf`
- `./userprefs.conf`

---

:::tip

Likely you only need this files to configure your preferences.
Hyprland variables can be overridden, therefore you can change the default values to your liking.

Also Hyprland can hot reload the configuration files, so you can edit them and see the changes immediately.

:::

Now you should know which file is which. Refer to the [Hyprland Wiki](https://wiki.hyprland.org) for more information and to achieve your perfect desktop experience.

Also see [FAQs and Tips](../help/faq#how-can-i-change-keyboard-layout).
