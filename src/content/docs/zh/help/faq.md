---
title: 常见问题解答与技巧
description: 关于 HyDE 的常见问题
---

:::tip
与 Hyprland 相关的问题请参考 [Hyprland 官方维基](https://wiki.hyprland.org)
:::

### 添加全局或自定义壁纸

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

#### 全局壁纸

全局壁纸将在所有主题的选择器中显示。

在您的 `xdg_config/hyde/config.toml` 中添加以下内容：

```toml
[wallpaper]
custom_paths = [
    "$XDG_PICTURES_DIR",
    "/path/to/pretty/wallpapers",
] # 搜索壁纸的路径列表

```

#### 每个主题的自定义壁纸

##### 方法一：图形界面

使用 Dolphin 为主题选择壁纸

![图片](https://github.com/user-attachments/assets/a72458fc-da94-45e4-8dd4-dba48b910e82)

1. 选择图片
2. 右键点击并悬停在"设为壁纸"选项上
3. 选择目标主题

##### 方法二：命令行

自定义壁纸是按主题添加的。

1. 在 `~/.config/hyde/themes/主题名称/wallpapers/*` 中添加壁纸。
2. 然后运行 `hyde-shell reload`

</details>

### 如何录制屏幕？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

您可以使用以下基于 Wayland 的录制软件包进行屏幕录制。

`wl-screenrec`

`wf-recorder`

`kooha`

`obs`

</details>

### 如何设置我自己的偏好？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

您可以在 `xdg_config/hypr/userprefs.conf` 中设置您的 Hyprland 偏好。即使在更新仓库时，这些设置也会被保留。

查看 `配置` > `Hyprland` 部分了解我们如何组织 Hyprland 配置。

</details>

### 如何将我的配置文件更新到最新版本？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

```sh
cd ~/HyDE/Scripts
git pull
./install.sh -r
```

查看 `资源` > `恢复配置` 了解其工作原理

</details>

### 如何设置我的显示器分辨率和刷新率？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

您可以在 `~/.config/hypr/monitors.conf` 中设置显示器分辨率和刷新率

例如：`monitor = DP-1,2560x1440@144,0x0, 1` >> 其中 @ 设置刷新率，但请注意，您的显示器可能不支持所有刷新率。

</details>

### 如何移除宝可梦角色或更改终端启动介绍？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

您需要编辑主目录中的 `.hyde.zshrc` 文件，位置在 `~/.hyde.zshrc`

1. 编辑 `~/.hyde.zshrc`
2. 在第 158 行的 pokego --no-title -r 1,3,6 前添加 #
3. 保存

</details>

### 如何编辑 SDDM 壁纸或设置？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

- 更改壁纸
  您需要手动在您想要用作登录屏幕的壁纸上运行脚本 `~/.config/hypr/sddmwall.sh`，您可以从主题中选择壁纸并确保它是当前的 swww 壁纸。
- 更改 SDDM 设置
  (颜色、背景、日期格式、字体)可以在 `/usr/share/sddm/themes/corners/theme.conf` 中配置

如果您想修改结构，那么您需要修改 /usr/share/sddm/themes/corners/components 中的 qml 文件

</details>

### 如何更改键盘布局？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

在这里查看更多细节：https://wiki.hyprland.org/Configuring/Variables/#input

在 HyDE 中，我们有 `~/.config/hypr/userprefs.conf`，在那里添加配置。

```
input {
  kb_layout = us,de
}
```

使用 `SUPER` + `K` 在布局之间切换。

</details>

### 选择器上没有缩略图？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

如果您的缩略图没有加载，尝试重建您的壁纸缓存。

`swwwallcache.sh`

</details>

### 如何编辑 Waybar？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

您可以在此文件中设置所需的模块 - `~/.config/waybar/config.ctl`

请参考 [Waybar Wiki](https://github.com/Alexays/Waybar/wiki) 。

</details>

### 如何移除 Waybar 上的模糊效果？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

您可以通过在主题目录中注释掉每个 `theme.conf` 文件末尾的 blurls = waybar 行来移除 Waybar 上的模糊效果。
主题目录：`~/.config/hypr/themes/`

</details>

### 如何启动预览中显示的游戏栏？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

您需要安装 Steam 游戏或 Lutris 库，然后运行：

`~/.config/hypr/scripts/gamelauncher.sh <n>` # 其中 n 是样式 [1-4]

</details>

### 如何在应用启动器上启动它？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

使用这个方便的命令查找 .desktop 条目 find /usr/share/applications -name '\*code.desktop' 图片
您应该复制然后编辑每个应用程序的 .desktop 条目到 `~/.local/share/applications/`
找到 Exec = 部分然后添加标志
图片

:::note
> 📢 请记住，如果您想编辑或创建 .desktop 文件，最好将其放在 ~/.local/share/applications/ 中，以避免修改系统范围的文件。这确保您的更改是特定于用户的，不需要管理员权限

这里是关于如何处理 .desktop 条目的 [Wiki](https://wiki.archlinux.org/title/Desktop_entries)。
:::

</details>

### Xwayland(👹)

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

请参阅[Hyprland Wiki](https://wiki.hyprland.org)获取解释。

[XWayland](https://wiki.hyprland.org/Configuring/XWayland/)
请注意，如果应用程序不支持 Wayland，HyDE、Hyprland 和 Wayland 本身没有能力神奇地解决问题！不要将此报告为问题，尝试在 [讨论面板](https://github.com/HyDE-Project/Hyde-cli) 上提问以获取帮助。

已知问题

- rofi 配置中有一些缩放问题，因为它们是基于我的超宽 (21:9) 显示器创建的。
- 随机锁屏崩溃，参考 https://github.com/swaywm/sway/issues/7046
- Waybar 启动 rofi 会中断鼠标输入（添加 sleep 0.1 作为临时解决方案），参考 https://github.com/Alexays/Waybar/issues/1850
- Flatpak QT 应用不遵循系统主题

</details>

### SDDM 上出现"登录失败！"循环？

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

如果您的用户（或登录名）包含大写字母或特殊字符，您需要编辑 SDDM 主题才能通过 SDDM 登录。

要做到这一点，请按照以下步骤操作：

1. 在 SDDM 屏幕时，使用 `Ctrl + Alt + F6`（或其他 F 键）打开一个 tty
2. 以有问题的账户登录
3. `nano usr/share/sddm/themes/[主题名称]/theme.conf`
4. 找到参数 `AllowBadUsername` 并将其设置为 true
5. 重启

如果在这些步骤后您仍然无法登录，您可以在同一文件中将 `AllowEmptyPassword` 设置为 true，重启，仍然输入您的密码登录，登录后您可以安全地将其设置回 false。

这里有一个关于此行为的 [GitHub 问题](https://github.com/HyDE-Project/HyDE/issues/404)。

</details>