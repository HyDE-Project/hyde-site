---
title: Wallbash 和 dcol
description: 理解 Wallbash 和 dcol
---

## 概述

本文档提供了 HyDE 主题配色的详细说明。它涵盖了主要颜色、文本颜色和强调色。每种颜色可以使用十六进制或 RGBA 格式指定。

## 颜色标识符

默认情况下，在**壁纸缓存**过程中，系统会生成 4 种主要颜色、4 种文本颜色以及每种主要颜色对应的 9 种强调色。

- **`dcol_mode`**：此标识符确定主题是处于深色模式还是浅色模式。
- **`dcol_pryX`**：这些是主要颜色，其中 `X` 的范围从 1 到 4。
- **`dcol_txtX`**：这些是用于文本的反转主要颜色，其中 `X` 的范围从 1 到 4。
- **`dcol_XaxY`**：这些是每种主要颜色的强调色，其中 `X` 的范围从 1 到 4，`Y` 的范围从 1 到 9。
- **`_rgba`**：此后缀表示颜色采用 RGBA 格式。如果没有后缀，则颜色采用十六进制格式。
- **`_rgb`**：此后缀表示颜色采用 RGB 格式。

## 使用方法

要使用缓存的颜色配置：

1. 将前缀 `dcol_` 替换为 `wallbash_`，以允许 Wallbash 脚本解析和更改值。
2. 将 `wallbash_` 前缀视为主色值的占位符。
3. 用尖括号（`<...>`）包裹颜色标识符，表示将其替换为相应的值，例如 `<wallbash_pry1>`。
4. 使用这个[示例](https://github.com/hyde-project/hyde/tree/master/Configs/.config/hyde/wallbash)作为模板。

这样，您就可以使用主色或壁纸创建配置模板，并让 Wallbash 脚本为您进行转换。

### 创建 `*.dcol` 模板

一个模板需要三个部分：

- 目标文件
- 脚本/命令（可选）
- 内容

## 基本格式：

```
目标|命令
内容
```

:::note
**目标**|**命令**应始终位于每个模板文件的第 1 行。我们称之为 “首行”。
:::

#### 目标文件

构建您的模板并确定目标配置位置。这可以是：

- `${cacheDir}/wallbash`，使用脚本进行后处理。
- 预期路径，例如，Kitty 的 `kitty.conf` 旁边，由 `include theme.conf` 进行源引用。

使用环境变量动态处理目录：

- `${confDir}` = `$XDG_CONFIG_HOME` 或 `$HOME/.config/`
- `${cacheDir}/wallbash` = `HYDE_CACHE_DIR/wallbash` = `$HOME/.cache/hyde`

#### 可选脚本/命令

在用内容填充目标文件后，您可以运行任意命令/脚本进行后处理。使用 `WALLBASH_SCRIPTS` 变量导航到 Wallbash 的脚本目录，例如 `WALLBASH_SCRIPTS/your_script.sh`。

:::caution
仅添加来自可信作者的模板，以避免执行恶意代码。
:::

#### 内容

这些是文件的内容，包含 Wallbash 占位符，例如 `<wallbash_pry1>`。

---

`~/.config/hyde/wallbash/*` 目录包含三个主要目录：

### always

`./wallbash/always/` 中的模板在以下情况下执行：

- 主题切换
- 壁纸切换
- 模式切换

更多信息[点击这里](./always/README)。

### theme

`./wallbash/theme/` 中的模板在以下情况下执行：

- 主题切换
- 模式切换

更多信息[点击这里](./theme/README)。

### scripts

对于自定义需求，将您的脚本存储在 `./wallbash/scripts` 中。使用 `$WALLBASH_SCRIPTS` 变量导航此目录。