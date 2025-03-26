---
title: FAQs & Tips
description: Frequently asked questions about HyDE
---

:::tip
Hyprland related questions should be referenced to [Hyprland Wiki](https://wiki.hyprland.org)
:::

### Add Global or Custom Wallpapers

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

#### Global wallpapers

Global wallpapers will be shown in the selector across all themes.

In your `xdg_config/hyde/config.toml` add this.

```toml
[wallpaper]
custom_paths = [
    "$XDG_PICTURES_DIR",
    "/path/to/pretty/wallpapers",
] # List of paths to search for wallpapers

```

#### Custom wallpapers per theme

##### Option 1: GUI

Using dolphin to select a wallpaper/s for a theme

![image](https://github.com/user-attachments/assets/a72458fc-da94-45e4-8dd4-dba48b910e82)

1. Select image
2. Right Click and hover, "Set As Wallpaper"
3. Choose a destination theme

##### Option 2: CLI

Custom wallpapers are added per theme.

1. Add a wallpaper in`~/.config/hyde/themes/Theme-Name/wallpapers/*`.
2. Then run`hyde-shell reload`

---

---

</details>

### How do I screen record?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

You can screen record using the following wayland based recording packages.

`wl-screenrec`

`wf-recorder`

`kooha `

`obs`

</details>

### How do I set my own preferences?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

You can set your Hyprland preferences in `xdg_config/hypr/userprefs.conf`. These settings are retained even when updating the repository.

See `Configuring` > `Hyprland` to learn how we structure hyprlad configurations.

</details>

### How do I update my dotfiles to the latest?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

```sh
cd ~/HyDE/Scripts
git pull
./install.sh -r
```

See `Resources` > `Restore Configuration` on how it works

</details>

### How do I set my monitor resolution and refresh rate?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

You can set the monitor resolution and refresh rate in `~/.config/hypr/monitors.conf`

`monitor = DP-1,2560x1440@144,0x0, 1` >> The @ set's the refresh rate

This is a `how to hyprland` question, always seek there wiki, https://wiki.hyprland.org/Configuring/Monitors/

</details>

### How do I remove the pokemon characters or change the terminal startup intro?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

You need to edit the `.hyde.zshrc` file in your home directory at `~/.hyde.zshrc`

1. Edit`~/.hyde.zshrc`
2. add a # to line 158 where pokego --no-title -r 1,3,6
3. save

</details>

### How do I edit the sddm wallpaper or settings?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

- Change Wallpaper
  You need to manually run the script `~/.config/hypr/sddmwall.sh` on the wallpaper you want for the login screen, you can select the wallpaper from the themes and make sure it is the current swww wallpaper.
- Change SDDM settings
  (colors, background, date format, font) can be configured in `/usr/share/sddm/themes/corners/theme.conf`

if you want to modify the structure then you'll have to modify the qml files in /usr/share/sddm/themes/corners/components

</details>

### How can I change keyboard layout?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Read this first: https://wiki.hyprland.org/Configuring/Variables/#input

In HyDE we have the `~/.config/hypr/userprefs.conf ` add the configuration in there.

```
input {
  kb_layout = us,de
}
```

Use `SUPER` + `K` to switch between layouts.

</details>

### No thumbnails on selectors?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

If your thumnails are not loading, try to rebuild your wallpaper cache.

`swwwallcache.sh`

</details>

### How do I edit the waybar?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

You can set your required modules in this file - `~/.config/waybar/config.ctl`

Refer to the theming documentation here in the Wiki. [Waybar](https://github.com/Alexays/Waybar/wiki)

</details>

### How do I remove the blur on waybar?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

You can remove the blur on waybar by removing blurls = waybar in the themes directory by commenting the line at the end of each `theme.conf` file.
Themes Directory: `~/.config/hypr/themes/`

</details>

### How do I launch the gamebar shown in the preview?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

You'll need steam game or lutris library installed, and then run this:

`~/.config/hypr/scripts/gamelauncher.sh <n>` # where n is style [1-4]

</details>

### How can I launch it on app launcher?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Find the .desktop entry using this handy command find /usr/share/applications -name '\*code.desktop' image
You should copy then edit the .desktop entry of each application to `~/.local/share/applications/`
Find the Exec = part then add the flags
image

> 📢 Remember, if you're looking to edit or create a .desktop file, it's a good practice to place it in ~/.local/share/applications/ to avoid modifying >system-wide files. This ensures that your changes are user-specific and do not require administrative privileges

Here is the [wiki](https://wiki.archlinux.org/title/Desktop_entries) on how to deal with .desktop entries.

</details>

### Xwayland(👹)

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Please navigate to the Hyprland wiki for the explanation.

[XWayland](https://wiki.hyprland.org/Configuring/XWayland/)
Note that if the application does not support Wayland, HyDE, Hyprland and Wayland itself don't have powers to magically fixed the issue! Do not report this as an issue, try to open questions on the [Discussion panel](https://github.com/HyDE-Project/Hyde-cli) for help.

Known Issues

- Few scaling issues with rofi configs, as they are created based on my ultrawide (21:9) display.
- Random lockscreen crash, refer https://github.com/swaywm/sway/issues/7046
- Waybar launching rofi breaks mouse input (added sleep 0.1 as workaround), refer https://github.com/Alexays/Waybar/issues/1850
- Flatpak QT apps do not follow system theme

</details>

### "Login failed!" loop on SDDM?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

If your user (or login name) contains capitalisation or special characters, you will need to edit your SDDM theme to be able to log in through the SDDM.

To do this, follow these steps:

1. When in the SDDM screen, open a tty with `Ctrl + Alt + F6` (or other F key)
2. Log in as the account with the issue
3. `nano usr/share/sddm/themes/[theme name]/theme.conf`
4. Find parameter `AllowBadUsername` and set it to true
5. Reboot

If you still can't log in after these steps, you can set, on the same file, `AllowEmptyPassword` to true, reboot, log in still writing your password, and after logging in you can set it back to false safely.

Here is a [GitHub Issue](https://github.com/HyDE-Project/HyDE/issues/404) about this behaviour. 

</details>
