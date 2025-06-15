---
title: theme.import.py
description: 管理主题导入脚本（theme.import.py）的手册
---

### 预览

![theme import 预览](../../../../assets/man-pages/theme.import/image.png)

### 名称

theme.import.py - 从 HyDE 主题库导入主题

### 说明

`theme.import.py` [选项]

### 描述

`theme.import.py` 是一个用于从 HyDE 主题库导入和管理主题的脚本。它允许用户克隆主题库、获取主题数据、预览主题并应用所选主题。

### 选项

- `-j`, `--json`
  克隆仓库后获取 JSON 数据。

- `-S`, `--select`
  使用 `fzf` 选择主题。

- `-p`, `--preview` IMAGE_URL
  获取指定主题的预览。

- `-t`, `--preview-text` TEXT
  使用 `--preview` 选项时显示的预览文本。

- `--skip-clone`
  跳过克隆仓库步骤。

- `-f`, `--fetch` THEME
  获取并更新指定名称的主题。使用 `all` 获取位于 `xdg_config/hyde/themes` 中的所有主题。

### 环境变量

- `LOG_LEVEL`
  设置日志级别（默认：`INFO`）。

- `XDG_CACHE_HOME`
  缓存文件目录（默认：`~/.cache`）。

- `XDG_CONFIG_HOME`
  配置文件目录（默认：`~/.config`）。

- `FULL_THEME_UPDATE`
  覆盖已存档的文件（对于更新和更改归档文件很有用）。

### 示例

打开 fzf 菜单并选择主题。

```shell
theme.import.py --select
```
