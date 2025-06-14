---
title: waybar.py
description: 管理waybar配置的脚本（waybar.py）的手册
---

## 名称

`waybar.py` - HyDE Waybar 配置管理脚本

```
waybar.py [-h] [--set SET] [-n] [-p] [-u] [-g] [-i] [-b] [-G] 
          [-c CONFIG] [-s STYLE] [-w] [--json] [--select] [--kill] 
          [--hide [{0,1,toggle}]]
```

## 描述

`waybar.py` 是一个全面的 Waybar 配置管理脚本，作为 HyDE（您的开发环境）的一部分。

该脚本管理存储在 `~/.config/waybar/layouts/` 中的 Waybar 配置及其在 `~/.config/waybar/styles/` 中的相应样式。它自动处理包含文件的生成、图标大小、边框半径更新，并提供在不同 Waybar 配置之间无缝切换的功能。

## 选项

### 布局管理

**`--set SET`**
: 通过名称设置特定布局。布局文件应存在于 `~/.config/waybar/layouts/` 中，并具有 `.jsonc` 扩展名。

**`-n, --next`**
: 切换到按字母顺序排列的下一个可用布局。循环遍历布局目录中的所有布局。

**`-p, --prev`**
: 切换到按字母顺序排列的上一个可用布局。循环遍历布局目录中的所有布局。

### 更新操作

**`-u, --update`**
: 对所有 Waybar 组件执行完整更新，包括：
  - JSON 文件中的图标大小配置
  - CSS 文件中的边框半径
  - 包含文件的生成
  - 配置和样式同步

**`-g, --update-global-css`**
: 仅更新 global.css 文件。该文件包含动态字体大小和字体系列配置，可以通过 `hypr.theme` >> `$BAR_FONT` 被主题覆盖。

**`-i, --update-icon-size`**
: 更新 JSON 文件中的图标大小配置。这解决了 Waybar 的 CSS 无法直接处理的图标大小问题。

**`-b, --update-border-radius`**
: 更新 CSS 文件中的边框半径配置。这为适应 Hyprland 的圆角设置创建动态边框半径。

**`-G, --generate-includes`**
: 生成 `includes.json` 文件。该文件包含：
  - `~/.config/waybar/modules/` 中的所有模块
  - Waybar 本身未提供的动态配置
  - 适当样式所需的图标大小分辨率

### 配置路径

**`-c CONFIG, --config CONFIG`**
: 指定源 `config.jsonc` 文件的路径。这允许使用标准布局目录之外的配置。

**`-s STYLE, --style STYLE`**
: 指定源 `style.css` 文件的路径。这允许使用标准样式目录之外的样式。

### 进程管理

**`-w, --watch`**
: 启用监视模式。持续监控 Waybar，并在进程终止时自动重启。这对于维护持久的 Waybar 实例非常有用。

**`--kill, -k`**
: 杀死所有正在运行的 Waybar 实例及其相关的监视脚本。这提供了一种干净的方式来终止所有 Waybar 进程。

**`--hide [{0,1,toggle}]`**
: Control Waybar visibility:
  - `--hide 0` or `--hide show`: Show Waybar
  - `--hide 1` or `--hide hide`: Hide Waybar  
  - `--hide` or `--hide toggle`: Toggle current visibility state

### 信息和列表

**`--json, -j`**
: 以 JSON 格式列出所有可用布局。对于脚本和与其他工具的集成非常有用。

**`--select, -S`**
: 打开一个交互式 rofi 菜单，以选择和切换可用布局。这为浏览和选择 `~/.config/waybar/layouts/` 中的所有布局配置提供了一个可视化界面。

**`-h, --help`**
: 显示帮助信息，列出所有可用选项并退出。

## 文件

**`~/.config/waybar/`**
: 主要的 Waybar 配置目录，用于用户自定义

**`~/.config/waybar/layouts/`**
: 包含 Waybar 布局配置文件的目录（`.jsonc` 格式）

**`~/.config/waybar/styles/`**
: 包含与布局对应的 CSS 样式文件的目录

**`~/.config/waybar/modules/`**
: 包含单个模块配置的目录

**`~/.config/waybar/includes/`**
: 包含生成的包含文件和动态配置的目录

**`~/.config/waybar/includes/includes.json`**
: 自动生成的文件，包含所有模块定义和动态配置

**`~/.config/waybar/config.jsonc`**
: 当前活动的 Waybar 配置（临时文件，选定布局的副本）

**`~/.config/waybar/style.css`**
: 当前活动的 Waybar 样式（自动生成，导入多个 CSS 文件）

**`~/.local/share/waybar/`**
: HyDE 提供的 Waybar 配置（只读，不要编辑）

## 示例

### 基本布局管理

交互式选择布局：
```bash
waybar.py --select       # 打开 rofi 布局选择器
```

切换到特定布局：
```bash
waybar.py --set khing
```bash
waybar.py --set khing
```

以循环的方式设置布局：
```bash
waybar.py --next     # 下一个布局
waybar.py --prev     # 上一个布局
```

### 配制更新

更新所有配置：
```bash
waybar.py --update
```

更新特定组件：
```bash
waybar.py --update-icon-size        # 只更新图标大小
waybar.py --update-border-radius    # 只更新边框半径
waybar.py --generate-includes       # 重新生成 includes.json
```

### 进程管理

以监视模式启动 Waybar：
```bash
waybar.py --watch
```

控制 Waybar 的可见性：
```bash
waybar.py --hide 1       # 隐藏 Waybar
waybar.py --hide 0       # 显示 Waybar
waybar.py --hide toggle  # 切换可见性
```

杀死所有 `waybar.py` 进程，这将有效地终止 `--watch` 模式：

```bash
waybar.py --kill
```

### 信息收集

```bash
waybar.py --json         # 以 JSON 格式列出所有可用布局
waybar.py --select       # 打开 rofi 布局选择器
```

列出可用的布局：
```bash
waybar.py --json         # JSON 格式，便于脚本使用
```

### 自定义配置路径

使用自定义配置文件：
```bash
waybar.py --config /path/to/custom-config.jsonc --style /path/to/custom-style.css
```

## 配置工作流

1. **浏览和选择布局**: 使用 `waybar.py --select` 打开一个交互式 rofi 菜单，预览可用布局

2. **创建或复制布局**: 从 `~/.local/share/waybar/layouts/` 开始，使用现有布局或在 `~/.config/waybar/layouts/` 中创建新布局

3. **生成包含文件**: 运行 `waybar.py --generate-includes` 确保所有模块可用

4. **设置布局**: 使用 `waybar.py --set <layout-name>` 激活配置，或使用 `waybar.py --select` 的交互式选择器

5. **更新配置**: 在进行更改后运行 `waybar.py --update` 确保所有组件同步

## 与 HyDE 的集成

`waybar.py` 与 HyDE 生态系统紧密集成：

- **主题集成**: 自动适应当前的 HyDE 主题设置
- **动态样式**: 根据 Hyprland 窗口圆角更新边框半径
- **字体管理**: 与 HyDE 主题配置同步字体
- **模块系统**: 管理特定于 HyDE 的 Waybar 模块和配置

## 注意事项

- 始终使用 `~/.config/waybar/` 进行自定义配置，切勿编辑 `~/.local/share/waybar/` 中的文件
- `includes.json` 文件是自动生成的，不应手动编辑
- 布局名称对应于没有 `.jsonc` 扩展名的文件名
- 样式文件应与布局名称匹配，以便自动配对（例如，`khing.jsonc` 使用 `khing.css`）
