---
title: Config Toml
description: HyDE's Configuration Guide
sidebar:
  order: 2
---

<style>
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

HyDE exposes `xdg_config/hyde/config.toml` file for users to modify. This lets users have the ability to interact the scripts without using command arguments.

---

### Environment variable

example:

| Key                 | Description            | Default |
| ------------------- | ---------------------- | ------- |
| WARP_ENABLE_WAYLAND | Enable Wayland support |         |

### [battery.notify]

| Key      | Description             | Default |
| -------- | ----------------------- | ------- |
| dock     | Battery notify dock     | true    |
| interval | Battery notify interval | 5       |
| notify   | Battery notify          | 1140    |
| timer    | Battery notify timer    | 120     |

### [battery.notify.execute]

| Key         | Description                        | Default             |
| ----------- | ---------------------------------- | ------------------- |
| charging    | Battery notify execute charging    | ""                  |
| critical    | Battery notify execute critical    | "systemctl suspend" |
| discharging | Battery notify execute discharging | ""                  |
| low         | Battery notify execute low         | ""                  |
| unplug      | Battery notify execute unplug      | ""                  |

### [battery.notify.threshold]

| Key      | Description                       | Default |
| -------- | --------------------------------- | ------- |
| critical | Battery notify critical threshold | 10      |
| full     | Battery notify full threshold     | 90      |
| low      | Battery notify low threshold      | 20      |
| unplug   | Battery notify unplug threshold   | 80      |

### [brightness]

| Key    | Description                                     | Default |
| ------ | ----------------------------------------------- | ------- |
| notify | Brightness control notify                       | true    |
| steps  | Number of steps to increase/decrease brightness | 5       |

### [cava.hyprlock]

| Key           | Description                                   | Default    |
| ------------- | --------------------------------------------- | ---------- |
| bar           | Cava bar characters for hyprlock              | "▁▂▃▄▅▆▇█" |
| max_instances | Maximum number of cava instances for hyprlock | 1          |
| range         | Number of cava bars for hyprlock              | 7          |
| standby       | Cava standby character for hyprlock           | "🎶"       |
| width         | Cava bar width for hyprlock                   | 20         |

### [cava.stdout]

| Key           | Description                      | Default    |
| ------------- | -------------------------------- | ---------- |
| bar           | Cava bar characters              | "▁▂▃▄▅▆▇█" |
| max_instances | Maximum number of cava instances | 1          |
| range         | Number of cava bars              | 7          |
| standby       | Cava standby character           | "🎶"       |
| width         | Cava bar width                   | 20         |

### [cava.waybar]

| Key           | Description                                 | Default    |
| ------------- | ------------------------------------------- | ---------- |
| bar           | Cava bar characters for waybar              | "▁▂▃▄▅▆▇█" |
| max_instances | Maximum number of cava instances for waybar | 1          |
| range         | Number of cava bars                         | 7          |
| standby       | Cava standby character                      | "🎶"       |
| width         | Cava bar width                              | 20         |

### [hypr.config]

| Key      | Description                                            | Default               |
| -------- | ------------------------------------------------------ | --------------------- |
| sanitize | List of regex to sanitize in the THEME_NAME/hypr.theme | ['.*rgba\(.*,*,*,*,'] |

### [notification]

| Key       | Description                 | Default              |
| --------- | --------------------------- | -------------------- |
| font      | Font for notifications      | "mononoki Nerd Font" |
| font_size | Font size for notifications | 8                    |

### [rofi]

| Key   | Description          | Default |
| ----- | -------------------- | ------- |
| scale | Rofi default scaling | 10      |

### [rofi.animation]

| Key   | Description                         | Default |
| ----- | ----------------------------------- | ------- |
| scale | 'animation.sh select' configuration | 8       |

### [rofi.cliphist]

| Key   | Description               | Default |
| ----- | ------------------------- | ------- |
| scale | cliphist.sh configuration | 8       |

### [rofi.emoji]

| Key   | Description                         | Default |
| ----- | ----------------------------------- | ------- |
| scale | emoji-picker.sh configuration scale | 8       |
| style | emoji-picker.sh configuration style | 2       |

### [rofi.glyph]

| Key   | Description                   | Default |
| ----- | ----------------------------- | ------- |
| scale | glyph-picker.sh configuration | 8       |

### [rofi.hyprlock]

| Key   | Description                        | Default |
| ----- | ---------------------------------- | ------- |
| scale | 'hyprlock.sh select' configuration | 10      |

### [rofi.keybind.hint]

| Key       | Description            | Default |
| --------- | ---------------------- | ------- |
| delimiter | Keybind hint delimiter | "\t"    |
| height    | Keybind hint height    | "40em"  |
| line      | Keybind hint line      | 16      |
| width     | Keybind hint width     | "40em"  |

### [rofi.launcher]

| Key   | Description                 | Default |
| ----- | --------------------------- | ------- |
| scale | rofilaunch.sh configuration | 5       |

### [rofi.theme]

| Key   | Description                  | Default |
| ----- | ---------------------------- | ------- |
| scale | themeselect.sh configuration | 6       |

### [rofi.wallpaper]

| Key   | Description                    | Default |
| ----- | ------------------------------ | ------- |
| scale | swwwallselect.sh configuration | 8       |

### [screenshot]

| Key                     | Description                      | Default |
| ----------------------- | -------------------------------- | ------- |
| annotation_post_command | Post command for annotation tool | [""]    |
| annotation_pre_command  | Pre command for annotation tool  | []      |
| annotation_tool         | Annotation tool                  | "satty" |

### [sysmonitor]

| Key      | Description                                   | Default |
| -------- | --------------------------------------------- | ------- |
| commands | Fallback command options for system monitor   | [""]    |
| execute  | Default command to execute for system monitor | ""      |

### [volume]

| Key         | Description                                 | Default |
| ----------- | ------------------------------------------- | ------- |
| boost       | Enable volume boost                         | false   |
| boost_limit | Volume boost limit                          | 120     |
| notify      | Volume control notify                       | true    |
| steps       | Number of steps to increase/decrease volume | 5       |

### [wallbash]

| Key           | Description                            | Default |
| ------------- | -------------------------------------- | ------- |
| skip_template | Skips the template when using wallbash | [""]    |

### [wallpaper]

| Key          | Description                            | Default                       |
| ------------ | -------------------------------------- | ----------------------------- |
| backend      | Wallpaper backend                      | "swww"                        |
| custom_paths | List of paths to search for wallpapers | ["$HOME/Pictures/Wallpapers"] |

### [wallpaper.swww]

| Key                | Description                            | Default |
| ------------------ | -------------------------------------- | ------- |
| duration           | Transition duration                    | 1       |
| framerate          | Transition framerate                   | 60      |
| transition_default | Transition type for default wallpaper  | "grow"  |
| transition_next    | Transition type for next wallpaper     | "grow"  |
| transition_prev    | Transition type for previous wallpaper | "outer" |

### [waybar]

| Key   | Description          | Default                   |
| ----- | -------------------- | ------------------------- |
| font  | Waybar font          | "JetBrainsMono Nerd Font" |
| scale | Waybar total scaling | 30                        |

### [weather]

| Key              | Description                                    | Default |
| ---------------- | ---------------------------------------------- | ------- |
| forecast_days    | Number of days to show forecast                | 3       |
| location         | Location/coordinates string for weather output | ''      |
| show_icon        | Show weather icon in waybar                    | true    |
| show_location    | Show location in waybar                        | true    |
| show_today       | Detailed description of today in tooltip       | true    |
| temperature_unit | Temperature unit                               | 'c'     |
| time_format      | Time format                                    | '24h'   |
| windspeed_unit   | Windspeed unit                                 | 'km/h'  |

### [wlogout]

| Key   | Description   | Default |
| ----- | ------------- | ------- |
| style | Wlogout style | 2       |
