---
title: Restore Configuration
description: Restore script's logic
---

:::note

Istilah "restore" dalam konteks ini berarti mengembalikan dotfiles dari repository ke `$HOME`, bukan sebaliknya.

```sh
./restore_cfg.sh </path/to/file.psv > <optional /path/to/hyde/clone>
```

:::

## Pipe Separated Values (PSV)

Ini adalah berkas pipe-separated value. Berkas ini berisi path dotfiles beserta dependensi paketnya masing-masing.

#### Catatan:

- Baris yang diawali dengan `#` adalah komentar.
- Satu-satunya variabel yang dikenali adalah `${HOME}`.
- Ini adalah berkas dengan 4 kolom yang dipisahkan oleh karakter `|`.
- Setiap kolom harus menggunakan spasi untuk memisahkan elemen array.

#### Struktur:

```shell
flag|path|target|dependency
```

#### Flag:

- **( P ) Populate/Preserved**

  - Flag ini memastikan target hanya akan disalin jika belum ada. Berguna untuk mempertahankan kondisi target saat ini, sehingga mencegah penimpaan atau modifikasi pada berkas atau direktori yang sudah ada.

- **( S ) Sync**

  - Jika berkas target ada, maka akan ditimpa.
  - Jika target adalah sebuah direktori, hanya berkas yang tercantum saja yang akan ditimpa.
  - Berkas lain di dalam direktori target yang tidak tercantum akan tetap dipertahankan.
  - Perilaku ini mirip dengan perintah `cp -r`.

- **( O ) Overwrite**

  - Flag ini melakukan sinkronisasi secara agresif. Memastikan target sepenuhnya digantikan oleh sumber.
  - Jika target adalah direktori, semua berkas dan subdirektori di dalamnya akan ditimpa oleh item yang sesuai dari sumber.
  - Jika target adalah berkas, maka akan sepenuhnya ditimpa oleh berkas sumber.
  - Operasi ini tidak mempertahankan berkas atau direktori yang sudah ada di lokasi target; semuanya ditimpa.
  - Berguna untuk memperbarui konfigurasi inti dan skrip.

- **( B ) Backup**
  - Melakukan backtup terhadap target.
  - Semua flag P, S, O  juga akan melakukan backup terhadap berkas atau direktori target.

<details>
<summary>Contoh berkas PSV</summary>

```shell
 Hyde core files 
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

 Editor 
P|${HOME}/.config/Code - OSS/User|settings.json|code
P|${HOME}/.config/Code/User|settings.json|visual-studio-code-bin
P|${HOME}/.config/VSCodium/User|settings.json|vscodium-bin

 Bar 
P|${HOME}/.config/waybar|config.ctl|waybar
S|${HOME}/.config/waybar|modules config.jsonc theme.css style.css|waybar

 Terminal 
P|${HOME}/.config|lsd|lsd
S|${HOME}/.config|fastfetch|fastfetch
S|${HOME}/.config/kitty|hyde.conf theme.conf|kitty
P|${HOME}/.config/kitty|kitty.conf|kitty

 Shell 
P|${HOME}/.config|fish|fish
P|${HOME}|.zshrc .hyde.zshrc .p10k.zsh|zsh zsh-theme-powerlevel10k pokego-bin
S|${HOME}|.zshenv|zsh zsh-theme-powerlevel10k

 File Explorer 
P|${HOME}/.local/state|dolphinstaterc|dolphin
P|${HOME}/.config|baloofilerc|dolphin
S|${HOME}/.config/menus|applications.menu|dolphin
S|${HOME}/.config|dolphinrc|dolphin
S|${HOME}/.config|kdeglobals|dolphin
S|${HOME}/.local/share/kio/servicemenus|hydewallpaper.desktop|dolphin
S|${HOME}/.local/share/kxmlgui5|dolphin|dolphin
S|${HOME}/.local/share|dolphin|dolphin

 Input 
P|${HOME}/.config|libinput-gestures.conf|libinput-gestures

 Wayland 
P|${HOME}/.config|spotify-flags.conf|spotify
P|${HOME}/.config|code-flags.conf|code
P|${HOME}/.config|code-flags.conf|visual-studio-code-bin
P|${HOME}/.config|vscodium-flags.conf|vscodium-bin
P|${HOME}/.config|electron-flags.conf|electron

 Notifications 
S|${HOME}/.config|dunst|dunst

 Gaming 
S|${HOME}/.config|MangoHud|mangohud

 Launcher 
S|${HOME}/.config|rofi|rofi
S|${HOME}/.config|wlogout|wlogout

 Lock Screen 
S|${HOME}/.config|swaylock|swaylock-effects
P|${HOME}/.config/hypr|hyprlock.conf|hyprlock
S|${HOME}/.config/hypr|hyprlock|hyprlock

 Idle daemon 
P|${HOME}/.config/hypr|hypridle.conf|hypridle
```

</details>

## Konfigurasi TOML

🚧 🚧 Masih dalam tahap pengerjaan 🚧🚧

Berkas konfigurasi PSV memudahkan skrip untuk membaca dan menulis data. Namun, format ini sangat terbatas dan kurang ramah bagi pengguna.
Untuk kustomisasi lebih lanjut, kita dapat menggunakan berkas konfigurasi TOML.

...
