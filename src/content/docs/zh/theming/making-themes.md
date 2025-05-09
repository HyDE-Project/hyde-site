---
title: 制作主题
description: 如何为 HyDE 制作主题
---

在这里，我们将一步步引导您完成为 HyDE 制作主题的过程。
本教程适用于 hyprdots 和 HyDE。

### 快速入门指南

将 hyde-theme-starter 仓库克隆到您的主题目录

:::tip
将 `MyTheme` 重命名为您的主题名称，确保它不会与 [HyDE-Gallery](https://github.com/HyDE-Project/hyde-gallery) 中的名称冲突
:::

```bash
git clone https://github.com/richen604/hyde-theme-starter ~/MyTheme
```

1. 必需组件 - 所有组件必须为 `tar.*` 格式：

   - GTK 主题（必须）
     - 在 [Gnome-Look Themes](https://www.gnome-look.org/browse?cat=135&ord=latest) 搜索现有主题
     - 或参见 [生成 GTK4](#从-wallbash-生成-gtk4) 了解如何从壁纸生成 GTK 主题
   - 图标包（可选）- 默认为 Tela-circle
     - 在 [Gnome-Look Icons](https://www.gnome-look.org/browse?cat=132&ord=latest) 搜索现有图标包
   - 鼠标指针主题（可选）- 默认为 Bibata-Modern-Ice
     - 在 [Gnome-Look Cursors](https://www.gnome-look.org/browse?cat=107&ord=latest) 搜索现有鼠标指针主题
   - 字体（可选）
     - 在 [fonts.google.com](https://fonts.google.com/) 搜索网页字体
     - 在 [nerdfonts.com](https://www.nerdfonts.com/) 搜索修补过的开发者字体

2. 一系列与您期望的风格/配色方案相匹配的壁纸

   - [Wallhaven](https://wallhaven.cc/) - 用于壁纸
   - [farbenfroh.io](https://farbenfroh.io/) - 如果您心中有特定的配色方案，可用于寻找颜色匹配的壁纸
   - 不要添加太多壁纸，8-10 张是比较合适的数量

3. 安装 `just` 以运行辅助脚本 `yay -S just`

进入您的主题目录 `cd ~/MyTheme`（将 `MyTheme` 替换为您的主题名称）

:::tip
在 `justfile` 中将 `MyTheme` 重命名为您的主题名称
:::

```bash
theme = "MyTheme"
```

运行 `just init` 生成初始目录结构

您的主题应该具有以下结构：

```bash
~/MyTheme/
├── Config/                  # 您最终主题的一部分 - 配置文件
│   └── hyde/
│       └── themes/
│           └── MyTheme/     # 主题主目录
│               └── wallpapers/
├── refs/                    # 用于我们生成的参考文件
├── screenshots/             # 用于主题的截图
├── Source/                  # 您最终主题的一部分 - 归档文件，如 gtk、鼠标指针、图标、字体
│   └── arcs/
├── .gitignore
├── justfile                 # 用于运行辅助脚本
└── README.md                # 链接到此网页
```

### 归档文件

归档文件包括构成主题部分的 GTK 主题、图标、鼠标指针和字体组件。
让我们立即将这些添加到 `Source/arcs` 目录中，以便测试。

您的文件夹结构应该类似于这样：

```bash
~/MyTheme/
├── Source/
│   └── arcs/
│       ├── Gtk_<您的GTK主题>.tar.*
│       ├── Cursor_<您的鼠标指针主题>.tar.*
│       └── Icon_<您的图标主题>.tar.*
│       └── Font_<您的字体名称>.tar.*
```

**确保为每个归档文件使用正确的前缀**。例如：`Gtk_<您的GTK主题>.tar.*`

### 使用 Wallbash 查看您的主题

将您的壁纸复制到主题目录

```bash
cp -r ~/wallpapers ~/MyTheme/Config/.config/hyde/themes/MyTheme/wallpapers
```

进入您的主题目录

```bash
cd ~/MyTheme
```

安装您的主题

```bash
just install
```

### 使用 wallbash 测试您的主题

初始化主题有两种方式：通过 wallbash 或从现有主题。

本指南我们将使用 wallbash，因为它能让您很好地了解 wallbash 如何为您的主题生成颜色。您可以在[这里](#理解-wallbash)了解更多关于 wallbash 的信息。

打开 Wallbash，设置自动、深色或浅色模式（`Meta + Shift + R`）。</br>
将您选择的壁纸设置为当前壁纸（`Meta + Shift + W`）

观察 wallbash 如何为以下应用程序适配壁纸颜色：

- GTK (nwg-look)
  - 要测试您的 GTK 归档主题，从 wallbash 模式切换到主题模式（Meta + Shift + R）
  - 然后检查 `pavucontrol` 看您的 GTK 主题是否看起来奇怪。如果是，请按照[生成 GTK4](#从-wallbash-生成-gtk4)中的说明使用 wallbash 生成 GTK4 主题文件
- Kitty (kitty)
- QT (qt5ct + qt6ct)
- Waybar (waybar)
- Spotify (spotify)
- VSCode (code) - 需要启用 wallbash 作为颜色主题
- Cava (cava)

### 生成主题文件

确保您选择的壁纸是 wallbash 为您的主题生成的最佳壁纸。</br>
现在运行以下命令生成 wallbash 文件。

```bash
just gen-all
just set-wall
```

您将在主题的 `refs` 目录中看到一系列新文件。

```bash
~/MyTheme/
├── refs/                   # 用于我们生成的参考文件
│   ├── gtk-4.0/            # GTK4 主题文件
│   │   ├── gtk.css         # 浅色主题
│   │   └── gtk-dark.css    # 深色主题
│   ├── kvantum/            # Kvantum 主题文件
│   │   ├── kvantum.theme   # Kvantum 主题配置
│   │   └── kvconfig.theme  # Kvantum 配置
│   ├── hypr.theme          # Hyprland 主题
│   ├── kitty.theme         # Kitty 终端主题
│   ├── rofi.theme          # Rofi 主题
│   ├── theme.dcol          # wallbash "主题"模式覆盖
│   └── waybar.theme        # Waybar 主题
│   └── wall.set            # 主题使用的第一张壁纸
```

您可以将所有文件复制到 `Config/.config/hyde/themes/MyTheme` 目录。

```bash
cp -r ./refs/* ./Config/.config/hyde/themes/MyTheme
```

再次运行 install 更新您的主题

```bash
just install
```

这些文件用于为您的主题设置"主题"模式。（`Meta + Shift + R`）

### 编辑 *.theme 文件

这些文件对于主题正常工作非常重要。

您应该在本指南中参考如 [Bad Blood](https://github.com/HyDE-Project/hyde-gallery/blob/Bad-Blood/Configs/.config/hyde/themes/Bad%20Blood) 的主题。

每个 *.theme 文件包含配置行

第一行格式为：file_path | command_to_execute

- hypr.theme - `$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf`
- kitty.theme - `$HOME/.config/kitty/theme.conf|killall -SIGUSR1 kitty`
- rofi.theme - `$HOME/.config/rofi/theme.rasi`
- waybar.theme - `$HOME/.config/waybar/theme.css|${scrDir}/wbarconfgen.sh`

最重要的文件是 `hypr.theme`

```bash
$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf
# ~/.config/hypr/theme/theme.conf 是自动生成的文件。请勿编辑。

$GTK_THEME=Bad-Blood # `Source/arcs/Gtk_<您的GTK主题>.tar.*` 内的文件夹名称
$ICON_THEME=besgnulinux-mono-red # `Source/arcs/Icon_<您的图标主题>.tar.*` 内的文件夹名称
$COLOR_SCHEME=prefer-dark # prefer-dark, prefer-light, 或 auto
$CURSOR_THEME=Night-Diamond-Red # `Source/arcs/Cursor_<您的鼠标指针主题>.tar.*` 内的文件夹名称
$CURSOR_SIZE=30 # 鼠标指针大小（像素）
```

- 编辑归档文件的变量，必须与 `Source/arcs` 中每个归档文件**内部**的文件夹名称匹配，如上所示
- 设置 hyprland 边框、颜色和其他主题相关设置
- 您可以使用 hypr.theme 为主题设置额外的程序，比如 SDDM 或 Vscode 主题
- 生成 `$HOME/.config/hypr/themes/theme.conf`

如果您在 `Config` 或 `Source` 中更新了主题，应运行 `just install` 更新您的主题。

### 编辑 theme.dcol

`theme.dcol` 文件用于覆盖 wallbash 模式下生成的某些 wallbash 颜色。
查看[理解 wallbash](#理解-wallbash)了解更多信息。

此文件完全是可选的

### 完成您的主题

您的主题现在应该可以添加到 hyde-gallery 了！

还有一些收尾工作：

- 在 `~/screenshots` 中添加一些截图
- 将您的主题添加到 Hyde-Gallery

### 将主题添加到 Hyde-Gallery

在您的主题目录中，使用以下命令生成自述文件

```bash
python3 generate_readme.py
```

初始化 git

```bash
git init && git branch -M main && git add . && git commit -m "My first HyDE theme"
```

[创建 github 仓库](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

```bash
git remote add origin <您的仓库URL>
git push -u origin main
```

Fork hyde-gallery <https://github.com/HyDE-Project/hyde-gallery> </br>
将您的主题添加到列表和 `hyde-themes.json` 中

## 更多信息

### 从 wallbash 生成 GTK4

如果您的主题不包含 GTK4 支持，pavucontrol 和其他 GTK4 应用程序可能会显示为纯白色主题。

运行以下命令生成 GTK4 主题文件

```bash
just gen-gtk4
```

将 `refs/gtk-4.0` 目录复制到您的主题目录

```bash
mkdir -p ./Config/.config/hyde/themes/MyTheme/gtk-4.0
cp -r ./refs/gtk-4.0/* ./Config/.config/hyde/themes/MyTheme/gtk-4.0/
```

### 理解 wallbash

Wallbash 从您的壁纸中生成 4 种主要颜色，然后围绕每个主要颜色创建颜色组，结构如下：

对于每种主要颜色（`wallbash_pry1` 到 `wallbash_pry4`）：

- 文本颜色（`wallbash_txt1` 到 `wallbash_txt4`）
- 9 种强调色（第 1 组的 `wallbash_1xa1` 到 `wallbash_1xa9`，以此类推）

每种颜色都有一个带可配置透明度的 RGBA 变体（例如 `wallbash_pry1_rgba(0.95)`）

总计：44 种基本颜色（4 组 × 11 种颜色）加上 RGBA 变体

使用 `just gen-dcol` 生成包含当前壁纸所有 wallbash 生成颜色的 `theme.dcol` 作为参考
