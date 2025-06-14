---
title: Hyprland
description: Hyprland 相关配置
sidebar:
  order: 3
---

<link rel="stylesheet" href="/src/styles/configuring/hyprland.css">

# 配置目录树

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

# HyDE 的 Hyprland 配置

由于 Hyprland 会加载 `~/.config/hypr/hyprland.conf`，HyDE 的 Hyprland 配置被分为三个部分：

- [模板配置](#1-模板配置)
- [覆盖配置](#2-覆盖配置)
- [用户配置](#3-用户配置)

## 1. 模板配置

此部分包含 HyDE 的默认配置，建议不要修改此部分。

**文件路径：** `$XDG_DATA_HOME/hyde/hyprland.conf`

此文件会在 `~/.config/hypr/hyprland.conf` 的其他配置之前加载。

```ini
# 模板配置
source = ~/.local/share/hyde/hyprland.conf
```

## 2. 覆盖配置

此部分用于覆盖 HyDE 的默认配置。

:::caution

`xdg_config/hypr/hyde.conf`文件已弃用。用`xdg_config/hyde/config.toml`取而代之。

:::

要覆盖HyDE的默认Hyprland设置，您可以在`config.toml`中配置以下部分：

- **[hyprland]** - 默认应用程序、主题和显示设置
- **[hyprland_start]** - 启动命令和服务

**配置文件路径:** `$XDG_STATE_HOME/hyde/hyprland.conf`

有关详细选项，请参阅：
- [hyprland 配置](../config_toml/#hyprland)
- [hyprland_start 启动配置](../config_toml/#hyprland_start)

## 3. 用户配置

此部分用于用户自定义配置。建议根据您的需求进行更改。

**文件路径：**

- `./keybindings.conf`
- `./windowrules.conf`
- `./monitors.conf`
- `./userprefs.conf`

---

:::tip

通常您只需要修改这些文件来配置您的偏好设置。  
Hyprland 的变量可以被覆盖，因此您可以根据需要更改默认值。  

此外，Hyprland 支持热加载配置文件，因此您可以编辑文件并立即查看更改效果。

:::

现在您应该知道每个文件的用途了。请参考 [Hyprland Wiki](https://wiki.hyprland.org) 以获取更多信息，打造您的理想桌面体验。

另请参阅 [FAQs 和提示](../help/faq#how-can-i-change-keyboard-layout)。
