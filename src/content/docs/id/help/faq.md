---
title: FAQ & Tips
description: Pertanyaan yang sering ditanyakan tentang HyDE
---

<link rel="stylesheet" href="/src/styles/tables.css">

:::tip
Pertanyaan terkait Hyprland sebaiknya merujuk ke [Hyprland Wiki](https://wiki.hyprland.org)
:::

<details>
<summary id="wallpapers">Bagaimana cara menambahkan wallpaper global atau custom?</summary>
<div>

#### Wallpaper global

Wallpaper global akan ditampilkan di selector di semua tema.

Di file `xdg_config/hyde/config.toml` Anda, tambahkan ini.

```toml
[wallpaper]
custom_paths = [
    "$XDG_PICTURES_DIR",
    "/path/to/pretty/wallpapers",
] # Daftar path untuk mencari wallpaper

```

#### Wallpaper custom per tema

##### Opsi 1: GUI

Menggunakan dolphin untuk memilih wallpaper untuk sebuah tema

![image](https://github.com/user-attachments/assets/a72458fc-da94-45e4-8dd4-dba48b910e82)

1. Pilih gambar
2. Klik kanan dan arahkan ke "Set As Wallpaper"
3. Pilih tema tujuan

##### Opsi 2: CLI

Wallpaper custom ditambahkan per tema.

1. Tambahkan wallpaper di `~/.config/hyde/themes/Theme-Name/wallpapers/*`.
2. Lalu jalankan `hyde-shell reload`

</div>
</details>

<details>
<summary id="screen-record">Bagaimana cara merekam layar?</summary>
<div>

Anda dapat merekam layar menggunakan paket perekam berbasis wayland berikut.

`wl-screenrec`

`wf-recorder`

`kooha `

`obs`

</div>
</details>

<details>
<summary id="preferences">Bagaimana cara mengatur preferensi saya sendiri?</summary>
<div>

Anda dapat mengatur preferensi Hyprland di `xdg_config/hypr/userprefs.conf`. Pengaturan ini akan tetap ada bahkan ketika memperbarui repository.

Lihat `Configuring` > `Hyprland` untuk mempelajari bagaimana kami menyusun konfigurasi Hyprland.

</div>
</details>

<details>
<summary id="update-dotfiles">Bagaimana cara memperbarui dotfiles saya ke versi terbaru?</summary>
<div>

```sh
cd ~/HyDE/Scripts
git pull
./install.sh -r
```

Lihat `Resources` > `Restore Configuration` tentang cara kerjanya

</div>
</details>

<details>
<summary id="monitor-resolution">Bagaimana cara mengatur resolusi dan refresh rate monitor?</summary>
<div>

Baca ini untuk detail: https://wiki.hyprland.org/Configuring/Monitors/

Anda dapat mengatur resolusi dan refresh rate monitor di `~/.config/hypr/monitors.conf`

Contoh: `monitor = DP-1,2560x1440@144,0x0, 1` >> Simbol @ mengatur refresh rate, namun perhatikan bahwa monitor Anda mungkin tidak mendukung semua refresh rate.

</div>
</details>

<details>
<summary id="pokemon-terminal">Bagaimana cara menghapus karakter pokemon?</summary>
<div>

Uninstall pokego-bin.

</div>
</details>

<details>
<summary id="startup intro">Bagaimana cara mengubah intro startup terminal?</summary>
<div>

Edit `~/.config/zsh/user.zsh`

</div>
</details>

<details>
<summary id="sddm-settings">Bagaimana cara mengedit wallpaper atau pengaturan sddm?</summary>
<div>

- Ubah Wallpaper
  Anda perlu menjalankan script `~/.config/hypr/sddmwall.sh` secara manual pada wallpaper yang Anda inginkan untuk layar login, Anda dapat memilih wallpaper dari tema dan pastikan itu adalah wallpaper swww yang aktif.
- Ubah pengaturan SDDM
  (warna, background, format tanggal, font) dapat dikonfigurasi di `/usr/share/sddm/themes/corners/theme.conf`

Jika Anda ingin memodifikasi struktur maka Anda harus memodifikasi file qml di /usr/share/sddm/themes/corners/components

</div>
</details>

<details>
<summary id="keyboard-layout">Bagaimana cara mengubah layout keyboard?</summary>
<div>

Baca ini untuk detail: https://wiki.hyprland.org/Configuring/Variables/#input

Di HyDE kami memiliki `~/.config/hypr/userprefs.conf` tambahkan konfigurasi di sana.

```
input {
  kb_layout = us,de
}
```

Gunakan `SUPER` + `K` untuk berpindah antar layout.

</div>
</details>

<details>
<summary id="thumbnails-selectors">Tidak ada thumbnail di selector?</summary>
<div>

Jika thumbnail Anda tidak loading, coba rebuild cache wallpaper Anda.

`swwwallcache.sh`

</div>
</details>

<details>
<summary id="edit-waybar">Bagaimana cara mengedit waybar?</summary>
<div>

Anda dapat membuat konfigurasi waybar custom dengan menambahkan file custom ke ~/.config/waybar/layouts/<filename>.jsonc. File tersebut kemudian akan dapat dipilih di menu HyDE, atau dengan menjalankan script di repo `HyDE/Scripts/waybar.py -S`

Rujuk ke dokumentasi theming di [Waybar Wiki](https://github.com/Alexays/Waybar/wiki).

</div>
</details>

<details>
<summary id="waybar-blur">Bagaimana cara menghapus blur pada waybar?</summary>
<div>

Anda dapat menghapus blur pada waybar dengan menghapus blurls = waybar di direktori themes dengan memberi komentar pada baris di akhir setiap file `theme.conf`.
Direktori Themes: `~/.config/hypr/themes/`

</div>
</details>

<details>
<summary id="gamebar">Bagaimana cara meluncurkan gamebar yang ditampilkan di preview?</summary>
<div>

Anda memerlukan game steam atau library lutris yang terinstall, lalu jalankan ini:

`~/.config/hypr/scripts/gamelauncher.sh <n>` # dimana n adalah style [1-4]

</div>
</details>

<details>
<summary id="app-launcher">Bagaimana cara meluncurkannya di app launcher?</summary>
<div>

Temukan entri .desktop menggunakan perintah praktis ini find /usr/share/applications -name '\*code.desktop' image
Anda harus menyalin lalu mengedit entri .desktop dari setiap aplikasi ke `~/.local/share/applications/`
Temukan bagian Exec = lalu tambahkan flag-nya
image

:::note
📢 Ingat, jika Anda ingin mengedit atau membuat file .desktop, praktik yang baik adalah menempatkannya di ~/.local/share/applications/ untuk menghindari memodifikasi file system-wide. Ini memastikan bahwa perubahan Anda bersifat spesifik pengguna dan tidak memerlukan hak administrator
:::

Berikut adalah [wiki](https://wiki.archlinux.org/title/Desktop_entries) tentang cara menangani entri .desktop.

</div>
</details>

<details>
<summary id="xwayland">Xwayland(👹)</summary>
<div>

Silakan rujuk ke [Hyprland Wiki](https://wiki.hyprland.org) untuk penjelasannya.

[XWayland](https://wiki.hyprland.org/Configuring/XWayland/)
Perhatikan bahwa jika aplikasi tidak mendukung Wayland, HyDE, Hyprland dan Wayland sendiri tidak memiliki kekuatan untuk memperbaiki masalah secara ajaib! Jangan laporkan ini sebagai issue, coba buka pertanyaan di [Panel Diskusi](https://github.com/HyDE-Project/Hyde-cli) untuk bantuan.

Masalah yang Diketahui

- Beberapa masalah scaling dengan konfigurasi rofi, karena dibuat berdasarkan display ultrawide (21:9) saya.
- Crash lockscreen acak, rujuk https://github.com/swaywm/sway/issues/7046
- Waybar meluncurkan rofi merusak input mouse (menambahkan sleep 0.1 sebagai solusi), rujuk https://github.com/Alexays/Waybar/issues/1850
- Aplikasi QT Flatpak tidak mengikuti tema sistem

</div>
</details>

<details>
<summary id="sddm-login-loop">Loop "Login failed!" di SDDM?</summary>
<div>

Jika user (atau nama login) Anda berisi huruf kapital atau karakter khusus, Anda perlu mengedit tema SDDM Anda untuk dapat login melalui SDDM.

Untuk melakukan ini, ikuti langkah-langkah berikut:

1. Saat di layar SDDM, buka tty dengan `Ctrl + Alt + F6` (atau tombol F lainnya)
2. Login sebagai akun yang bermasalah
3. `nano usr/share/sddm/themes/[theme name]/theme.conf`
4. Temukan parameter `AllowBadUsername` dan set ke true
5. Reboot

Jika Anda masih tidak bisa login setelah langkah-langkah ini, Anda dapat mengatur, di file yang sama, `AllowEmptyPassword` ke true, reboot, login dengan tetap menuliskan password Anda, dan setelah login Anda dapat mengembalikannya ke false dengan aman.

Berikut adalah [GitHub Issue](https://github.com/HyDE-Project/HyDE/issues/404) tentang perilaku ini. 

</div>
</details>
