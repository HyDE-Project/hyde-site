---
title: 恢复配置
description: Restore 脚本的逻辑
---

:::note

在以下内容中，"restore"指的是将仓库中的配置文件恢复到您的 $HOME 目录，而不是相反的操作。

```sh
./restore_cfg.sh </path/to/file.psv > <可选 /path/to/hyde/clone>
```

:::

## 管道分隔值文件 (PSV)

这是一个以管道符号分隔的值文件。它包含配置文件的路径及其相应的软件包依赖关系。

#### 注意：

- 以 `#` 开头的行是注释。
- 唯一已知的变量是 `${HOME}`。
- 这是一个由 `|` 分隔的4列文件。
- 每列应使用空格来分隔数组元素。

#### 结构：

```shell
标志|路径|目标|依赖
```

#### 标志：

- **( P ) 填充/保留**

  - 此标志确保仅在目标不存在时才复制目标。它有助于保留目标的当前状态，防止对现有文件或目录进行任何覆盖或修改。

- **( S ) 同步**

  - 如果目标文件存在，则覆盖它们。
  - 如果目标是目录，则仅覆盖列出的文件。
  - 保留目标目录中未列出的其他文件。
  - 此行为类似于 `cp -r` 命令。

- **( O ) 覆盖**

  - 此标志执行激进的同步操作。它确保目标被源完全替换。
  - 如果目标是目录，其中的每个文件和子目录都将被源中的相应项目覆盖。
  - 如果目标是文件，它将被源文件完全覆盖。
  - 此操作不会保留目标位置中的任何现有文件或目录；一切都会被替换。
  - 适用于更新核心配置和脚本。

- **( B ) 备份**
  - 备份目标。
  - 所有 P、S、O 标志也将备份目标文件/目录。

<details>
<summary>PSV 文件示例</summary>

```shell
 Hyde 核心文件 
P|${HOME}/.config/hyde|config.toml|hyprland
P|${HOME}/.config/hypr|hyde.conf animations.conf windowrules.conf keybindings.conf userprefs.conf monitors.conf|hyprland
P|${HOME}/.config/hypr|nvidia.conf|hyprland nvidia-utils
P|${HOME}/.config/hypr/themes|theme.conf wallbash.conf colors.conf|hyprland
P|${HOME}/.local/state|hyde|hyprland

S|${HOME}/.config/hypr|hyprland.conf|hyprland
S|${HOME}/.local|bin|hyprland
S|${HOME}/.config|gtk-3.0|nwg-look
S|${HOME}/.config|nwg-look|nwg-look
S|${HOME}/.config|xsettingsd|nwg-look
S|${HOME}|.gtkrc-2.0|nwg-look
S|${HOME}/.config|Kvantum|kvantum
S|${HOME}/.config|qt5ct|qt5ct
S|${HOME}/.config|qt6ct|qt6ct
S|${HOME}/.config/hyde|wallbash|hyprland
S|${HOME}/.config/hypr|animations|hyprland

O|${HOME}/.local/share|hyde|hyprland
O|${HOME}/.local/lib|hyde|hyprland

 编辑器 
P|${HOME}/.config/Code - OSS/User|settings.json|code
P|${HOME}/.config/Code/User|settings.json|visual-studio-code-bin
P|${HOME}/.config/VSCodium/User|settings.json|vscodium-bin

 状态栏 
P|${HOME}/.config/waybar|config.ctl|waybar
S|${HOME}/.config/waybar|modules config.jsonc theme.css style.css|waybar

 终端 
P|${HOME}/.config|lsd|lsd
S|${HOME}/.config|fastfetch|fastfetch
S|${HOME}/.config/kitty|hyde.conf theme.conf|kitty
P|${HOME}/.config/kitty|kitty.conf|kitty

 Shell 
P|${HOME}/.config|fish|fish
P|${HOME}|.zshrc .hyde.zshrc .p10k.zsh|zsh zsh-theme-powerlevel10k pokego-bin
S|${HOME}|.zshenv|zsh zsh-theme-powerlevel10k

 文件浏览器 
P|${HOME}/.local/state|dolphinstaterc|dolphin
P|${HOME}/.config|baloofilerc|dolphin
S|${HOME}/.config/menus|applications.menu|dolphin
S|${HOME}/.config|dolphinrc|dolphin
S|${HOME}/.config|kdeglobals|dolphin
S|${HOME}/.local/share/kio/servicemenus|hydewallpaper.desktop|dolphin
S|${HOME}/.local/share/kxmlgui5|dolphin|dolphin
S|${HOME}/.local/share|dolphin|dolphin

 输入 
P|${HOME}/.config|libinput-gestures.conf|libinput-gestures

 Wayland 
P|${HOME}/.config|spotify-flags.conf|spotify
P|${HOME}/.config|code-flags.conf|code
P|${HOME}/.config|code-flags.conf|visual-studio-code-bin
P|${HOME}/.config|vscodium-flags.conf|vscodium-bin
P|${HOME}/.config|electron-flags.conf|electron

 通知 
S|${HOME}/.config|dunst|dunst

 游戏 
S|${HOME}/.config|MangoHud|mangohud

 启动器 
S|${HOME}/.config|rofi|rofi
S|${HOME}/.config|wlogout|wlogout

 锁屏 
S|${HOME}/.config|swaylock|swaylock-effects
P|${HOME}/.config/hypr|hyprlock.conf|hyprlock
S|${HOME}/.config/hypr|hyprlock|hyprlock

 空闲守护进程 
P|${HOME}/.config/hypr|hypridle.conf|hypridle
```

</details>

## TOML 配置

🚧 🚧 正在开发中 🚧🚧

PSV 配置文件便于脚本读写。不过，它的限制性很强，对用户不是很友好。要进行更高级的定制，我们可以使用 TOML 配置文件。
