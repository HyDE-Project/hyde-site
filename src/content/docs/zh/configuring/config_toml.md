---
title: 配置文件
description: HyDE 的配置指南
sidebar:
  order: 2
---

<link rel="stylesheet" href="/src/styles/tables.css">

HyDE 向用户公开了 `xdg_config/hyde/config.toml` 文件供修改。这样用户就能在无需使用命令行参数的情况下与脚本交互。

---

### 环境变量

示例：

| 键                  | 描述                    | 默认值 |
| ------------------- | ---------------------- | ------ |
| WARP_ENABLE_WAYLAND | 启用 Wayland 支持       |        |

### [battery.notify]

| 键        | 描述                     | 默认值 |
| --------- | ------------------------ | ------ |
| dock      | 是否启用电池停靠通知      | true   |
| interval  | 电池通知的时间间隔（分钟）| 5      |
| notify    | 电池通知的阈值（秒）      | 1140   |
| timer     | 电池通知的计时器（秒）    | 120    |

### [battery.notify.execute]

| 键          | 描述                       | 默认值             |
| ------------ | -------------------------- | ------------------ |
| charging     | 电池充电时执行的命令       | ""                 |
| critical     | 电池电量过低时执行的命令   | "systemctl suspend"|
| discharging  | 电池放电时执行的命令       | ""                 |
| low          | 电池电量低时执行的命令     | ""                 |
| unplug       | 电池拔出时执行的命令       | ""                 |

### [battery.notify.threshold]

| 键        | 描述                       | 默认值 |
| ----------| -------------------------- | ------ |
| critical  | 电池电量过低通知的阈值     | 10     |
| full      | 电池充满通知的阈值         | 90     |
| low       | 电池电量低通知的阈值       | 20     |
| unplug    | 电池拔出通知的阈值         | 80     |

### [brightness]

| 键        | 描述                       | 默认值 |
| ----------| -------------------------- | ------ |
| notify    | 亮度控制通知                | true   |
| steps     | 增减亮度的单位               | 5      |

### [cava.hyprlock]

| 键           | 描述                                      | 默认值    |
| ------------- | ------------------------------------------ | ---------- |
| bar           | hyprlock 中 Cava 条形图字符                       | "▁▂▃▄▅▆▇█" |
| max_instances | hyprlock 中最大 Cava 实例数                       | 1          |
| range         | hyprlock 中 Cava 条形数量                         | 7          |
| standby       | hyprlock 中 Cava 待机字符                         | "🎶"       |
| width         | hyprlock 中 Cava 条形图宽度                       | 20         |

### [cava.stdout]

| 键           | 描述                          | 默认值    |
| ------------- | -------------------------------- | ---------- |
| bar           | Cava 条形图字符                      | "▁▂▃▄▅▆▇█" |
| max_instances | 最大 Cava 实例数                     | 1          |
| range         | Cava 条形图数量                      | 7          |
| standby       | Cava 待机字符                        | "🎶"       |
| width         | Cava 条形图宽度                      | 20         |

### [cava.waybar]

| 键           | 描述                                      | 默认值    |
| ------------- | ------------------------------------------ | ---------- |
| bar           | waybar 中 Cava 条形图字符                         | "▁▂▃▄▅▆▇█" |
| max_instances | waybar 中最大 Cava 实例数                         | 1          |
| range         | waybar 中 Cava 条形图数量                         | 7          |
| standby       | waybar 中 Cava 待机字符                           | "🎶"       |
| width         | waybar 中 Cava 条形图宽度                         | 20         |

### [hypr.config]

| 键      | 描述                                                     | 默认值               |
| -------- | --------------------------------------------------------------- | --------------------- |
| sanitize | 在 THEME_NAME/hypr.theme 中需清理的正则表达式列表                | ['.*rgba\(.*,*,*,*,'] |

### [notification]

| 键       | 描述               | 默认值              |
| --------- | ------------------------- | -------------------- |
| font      | 通知显示字体              | "mononoki Nerd Font" |
| font_size | 通知字体大小              | 8                    |

### [rofi]

| 键   | 描述             | 默认值 |
| ----- | ---------------- | ------- |
| scale | Rofi 的默认缩放比例 | 10      |

### [rofi.animation]

| 键   | 描述                          | 默认值 |
| ----- | ---------------------------- | ------- |
| scale | 配置 'animation.sh select' 的缩放比例 | 8       |

### [rofi.cliphist]

| 键   | 描述                  | 默认值 |
| ----- | -------------------- | ------- |
| scale | 配置 cliphist.sh 的缩放比例 | 8       |

### [rofi.emoji]

| 键   | 描述                          | 默认值 |
| ----- | ---------------------------- | ------- |
| scale | 配置 emoji-picker.sh 的缩放比例 | 8       |
| style | 配置 emoji-picker.sh 的样式   | 2       |

### [rofi.glyph]

| 键    | 描述                  | 默认值 |
| ----- | -------------------- | ------- |
| scale | 配置 glyph-picker.sh 的缩放比例 | 8       |

### [rofi.hyprlock]

| 键   | 描述                          | 默认值 |
| ----- | ---------------------------- | ------- |
| scale | 配置 'hyprlock.sh select' 的缩放比例 | 10      |

### [rofi.keybind.hint]

| 键       | 描述                     | 默认值 |
| --------- | ------------------------------- | ------- |
| delimiter | 按键绑定提示分隔符              | "\t"    |
| height    | 按键绑定提示高度                | "40em"  |
| line      | 按键绑定提示行数                | 16      |
| width     | 按键绑定提示宽度                | "40em"  |

### [rofi.launcher]

| 键   | 描述                        | 默认值 |
| ----- | ---------------------------------- | ------- |
| scale | 配置 rofilaunch.sh 的缩放比例            | 5       |

### [rofi.theme]

| 键   | 描述                         | 默认值 |
| ----- | ----------------------------------- | ------- |
| scale | 配置 themeselect.sh 的缩放比例            | 6       |

### [rofi.wallpaper]

| 键   | 描述                             | 默认值 |
| ----- | ------------------------------------- | ------- |
| scale | 配置 swwwallselect.sh 的缩放比例              | 8       |

### [screenshot]

| 键                     | 描述                         | 默认值 |
| ----------------------- | ----------------------------------- | ------- |
| annotation_post_command | 注释工具执行后的命令               | [""]    |
| annotation_pre_command  | 注释工具执行前的命令               | []      |
| annotation_tool         | 用于注释的工具                     | "satty" |

### [sysmonitor]

| 键      | 描述                                     | 默认值 |
| -------- | ----------------------------------------------- | ------- |
| commands | 系统监控的备用命令选项                           | [""]    |
| execute  | 系统监控默认执行命令                             | ""      |

### [volume]

| 键         | 描述                                | 默认值 |
| ----------- | ------------------------------------------ | ------- |
| boost       | 启用音量提升                                 | false   |
| boost_limit | 音量阈值                                    | 120     |
| notify      | 音量控制提示                                 | true    |
| steps       | 每次调节音量的单位                            | 5       |

### [wallbash]

| 键           | 描述                          | 默认值 |
| ------------- | ------------------------------------ | ------- |
| skip_template | 使用 wallbash 时跳过模板              | [""]    |

### [wallpaper]

| 键          | 描述                                  | 默认值                       |
| ------------ | -------------------------------------------- | ----------------------------- |
| backend      | 壁纸后端进程                                     | "swww"                        |
| custom_paths | 搜索壁纸的路径列表                           | ["$HOME/Pictures/Wallpapers"] |

### [wallpaper.swww]

| 键                | 描述                                     | 默认值 |
| ------------------ | ----------------------------------------------- | ------- |
| duration           | 壁纸过渡时长                                    | 1       |
| framerate          | 壁纸过渡帧率                                    | 60      |
| transition_default | 默认壁纸过渡效果                                | "grow"  |
| transition_next    | 下一张壁纸过渡效果                              | "grow"  |
| transition_prev    | 上一张壁纸过渡效果                              | "outer" |

### [waybar]

| 键   | 描述                            | 默认值                   |
| ----- | -------------------------------------- | ------------------------- |
| font  | Waybar 字体                           | "JetBrainsMono Nerd Font" |
| scale | Waybar 整体缩放比例                     | 30                        |

### [weather]

| 键              | 描述                                       | 默认值 |
| ---------------- | ------------------------------------------------- | ------- |
| forecast_days    | 显示天气预报的天数                                 | 3       |
| location         | 天气信息显示的地点/坐标字符串                      | ''      |
| show_icon        | 在 Waybar 中显示天气图标                           | true    |
| show_location    | 在 Waybar 中显示地点                               | true    |
| show_today       | 在提示中显示今日详细天气信息                       | true    |
| temperature_unit | 温度单位                                         | 'c'     |
| time_format      | 时间格式                                         | '24h'   |
| windspeed_unit   | 风速单位                                         | 'km/h'  |

### [wlogout]

| 键   | 描述    | 默认值 |
| ----- | -------------- | ------- |
| style | Wlogout 样式    | 2       |
