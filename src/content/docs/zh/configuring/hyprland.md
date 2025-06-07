---
title: Hyprland
description: Hyprland 相关配置
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
    background-color: var(--sl-color-accent);
    color: var(--sl-color-accent-high-contrast);
    text-align: center;
    margin: 10em;
    padding: 10em;
  }
  :root[data-theme="light"] th {
    color: var(--sl-color-white);
  }
</style>

# 目录树

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

根据 Hyprland 的[定义变量](https://wiki.hyprland.org/Hypr-Ecosystem/hyprlang/#defining-variables)，HyDE 使用 $VARIABLES 来暴露默认配置以供覆盖。

如果您打算进行以下操作，请修改此部分：

- 更改启动和环境变量
- 停止某个应用/服务的启动
- 覆盖 HyDE 的默认变量

:::note

要取消设置某个变量，请将其留空。

:::

**文件路径：** `$XDG_CONFIG_HOME/hypr/hyde.conf`

### HyDE 配置变量

| 变量名                | 描述                       | 默认值                       |
| -------------------- | --------------------------| ---------------------------- |
| $mainMod             | 键盘修饰键                  | SUPER (Windows 键)           |
| $QUICKAPPS           | 快速启动应用的变量           | (empty)                      |
| $BROWSER             | 默认浏览器                  | firefox                     |
| $EDITOR              | 默认编辑器                 | code                         |
| $EXPLORER            | 默认文件管理器              | dolphin                      |
| $TERMINAL            | 默认终端                   | kitty                        |
| $LOCKSCREEN          | 默认锁屏工具                | hyprlock                     |
| $IDLE                | 默认空闲管理器              | hypridle                      |
| $GTK_THEME           | GTK 主题                  | Wallbash-Gtk                |
| $ICON_THEME          | 图标主题                   | Tela-circle-dracula          |
| $COLOR_SCHEME        | 配色方案                   | prefer-dark                  |
| $CURSOR_THEME        | 鼠标指针主题                | Bibata-Modern-Ice            |
| $CURSOR_SIZE         | 鼠标指针大小                | 30                           |
| $FONT                | 字体                      | Canterell                    |
| $FONT_SIZE           | 字体大小                   | 10                           |
| $DOCUMENT_FONT       | 文档字体                   | Cantarell                    |
| $DOCUMENT_FONT_SIZE  | 文档字体大小               | 10                           |
| $MONOSPACE_FONT      | 等宽字体                   | CaskaydiaCove Nerd Font Mono |
| $MONOSPACE_FONT_SIZE | 等宽字体大小               | 9                            |
| $FONT_ANTIALIASING   | 字体抗锯齿                 | rgba                         |
| $FONT_HINTING        | 字体提示                   | full                         |

### 启动命令 (`$start.\*`)

默认的启动命令。

| 变量名                    | 描述                                                         | 默认值                                                                                     |
| ------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| $start.XDG_PORTAL_RESET   | 重置 XDG Portal                                              | $scrPath/resetxdgportal.sh                                                                |
| $start.DBUS_SHARE_PICKER  | 更新 DBus 环境变量以支持共享选择器                           | dbus-update-activation-environment --systemd --all                                        |
| $start.SYSTEMD_SHARE_PICKER | 使用 systemd 导入共享选择器的环境变量                      | systemctl --user import-environment QT_QPA_PLATFORMTHEME WAYLAND_DISPLAY XDG_CURRENT_DESKTOP |
| $start.BAR                | 启动 Waybar                                                  | waybar                                                                                     |
| $start.NOTIFICATIONS      | 启动通知守护程序                                             | swaync                                                                                     |
| $start.APPTRAY_BLUETOOTH  | 启动蓝牙托盘小程序                                           | blueman-applet                                                                             |
| $start.WALLPAPER          | 设置壁纸                                                     | $scrPath/swwwallpaper.sh                                                                   |
| $start.TEXT_CLIPBOARD     | 启动文本剪贴板管理器                                         | wl-paste --type text --watch cliphist store                                                |
| $start.IMAGE_CLIPBOARD    | 启动图片剪贴板管理器                                         | wl-paste --type image --watch cliphist store                                               |
| $start.BATTERY_NOTIFY     | 启动电池通知脚本                                             | $scrPath/batterynotify.sh                                                                  |
| $start.NETWORK_MANAGER    | 启动网络管理器托盘小程序                                     | nm-applet --indicator                                                                      |
| $start.REMOVABLE_MEDIA    | 启动可移动媒体管理器                                         | udiskie --no-automount --smart-tray                                                       |
| $start.AUTH_DIALOGUE      | 启动认证对话框脚本                                           | $scrPath/polkitkdeauth.sh                                                                  |
| $start.IDLE_DAEMON        | 启动空闲守护程序                                             | $IDLE                                                                                      |

### 环境变量 (`$env.\*`)

| 变量名                                 | 描述                                           | 默认值                       |
| ------------------------------------- | -------------------------------------------- | --------------------------- |
| $env.GDK_BACKEND                      | 要使用的 GTK 后端（优先 Wayland）             | wayland,x11,\*              |
| $env.QT_QPA_PLATFORM                  | 要使用的 Qt 平台（Wayland）                   | wayland                     |
| $env.SDL_VIDEODRIVER                  | SDL2 视频驱动（Wayland）                      | wayland                     |
| $env.CLUTTER_BACKEND                  | Clutter 后端（Wayland）                       | wayland                     |
| $env.XDG_CURRENT_DESKTOP              | 当前桌面环境                                  | Hyprland                    |
| $env.XDG_SESSION_TYPE                 | 会话类型                                      | wayland                     |
| $env.XDG_SESSION_DESKTOP              | 会话桌面                                      | Hyprland                    |
| $env.QT_AUTO_SCREEN_SCALE_FACTOR      | Qt 自动屏幕缩放                               | 1                           |
| $env.QT_QPA_PLATFORM                  | Qt 平台                                       | wayland                     |
| $env.QT_WAYLAND_DISABLE_WINDOWDECORATION | 禁用 Qt 应用程序的窗口装饰                   | 1                           |
| $env.QT_QPA_PLATFORMTHEME             | Qt 平台主题                                   | qt6ct                       |
| $env.PATH                             | 路径环境变量                                  | (空)                        |
| $env.MOZ_ENABLE_WAYLAND               | 为 Firefox 启用 Wayland                       | 1                           |
| $env.GDK_SCALE                        | Xwayland 上 HiDPI 的 GDK 缩放                 | 1                           |
| $env.ELECTRON_OZONE_PLATFORM_HINT     | Electron Ozone 平台提示                       | auto                        |
| $env.XDG_RUNTIME_DIR                  | XDG 运行时目录                                | $XDG_RUNTIME_DIR            |
| $env.XDG_CONFIG_HOME                  | XDG 配置目录                                  | $HOME/.config               |
| $env.XDG_CACHE_HOME                   | XDG 缓存目录                                  | $HOME/.cache                |
| $env.XDG_DATA_HOME                    | XDG 数据目录                                  | $HOME/.local/share          |
| $LAYOUT_PATH                          | Hyprlock 布局配置文件路径                     | /path/to/hyprlock/layout.conf |
| $BACKGROUND_PATH                      | Hyprlock 背景图片路径                         | $HYPRLOCK_BACKGROUND        |

:::danger

修改这些变量意味着您清楚自己在做什么！

:::

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
