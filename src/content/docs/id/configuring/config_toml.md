---
title: Konfigurasi Utama
description: Panduan Konfigurasi HyDE
sidebar:
  order: 2
---

<link rel="stylesheet" href="/src/styles/tables.css">

<!-- TODO:

Translators:
Request a translation for config.toml schema at
https://github.com/HyDE-Project/HyDE/blob/>master/Configs/.local/share/hyde/schema/config.toml

translate the schema to your language
example:
config.en.toml

run `./gen-table.py config.en.toml` to generate the table
then paste it in here. 

 -->

---
HyDE menyediakan file `xdg_config/hyde/config.toml` yang dapat dimodifikasi oleh pengguna. 
Hal ini memungkinkan pengguna untuk berinteraksi dengan skrip tanpa harus menggunakan argumen perintah (*command arguments*).

Pengguna sangat disarankan untuk menggunakan aplikasi editor yang mendukung validasi skema 
untuk memastikan agar konfigurasi file tersebut sudah valid.
```toml
"$schema" = "https://raw.githubusercontent.com/HyDE-Project/HyDE/refs/heads/master/Configs/.local/share/hyde/schema/config.toml.json"
```
---
### [battery.notify]

Konfigurasi `batterynotify.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| dock | Status dock untuk notifikasi baterai. | true |
| interval | Interval (jarak waktu) untuk notifikasi baterai. | 5 |
| notify | Ambang batas (threshold) notifikasi. | 1140 |
| timer | Penghitung baterai (timer) untuk notifikasi baterai. | 120 |

### [battery.notify.execute]

Perintah untuk dieksekusi pada notifikasi baterai.

| Key | Description | Default |
| --- | ----------- | ------- |
| charging | Perintah untuk dieksekusi saat pengisian daya (cas). |  |
| critical | Perintah untuk dieksekusi saat baterai krisis. | systemctl suspend |
| discharging | Perintah untuk dieksekusi saat daya baterai berkurang (tidak dicas). |  |
| low | Perintah untuk dieksekusi saat baterai lemah. |  |
| unplug | Perintah untuk dieksekusi saat kabel pengisian daya dilepas. |  |

### [battery.notify.threshold]

Ambang batas untuk notifikasi baterai.

| Key | Description | Default |
| --- | ----------- | ------- |
| critical | Ambang batas baterai kritis. | 10 |
| full | Ambang batas baterai penuh. | 90 |
| low | Ambang batas baterai lemah. | 20 |
| unplug | Ambang batas saat kabel pengisian daya dilepas. | 100 |

### [brightness]

Konfigurasi `brightnesscontrol.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| notify | Aktifkan notifikasi untuk kontrol kecerahan. | true |
| steps | Jumlah langkah untuk menambah/mengurangi kecerahan. | 5 |

### [cava]

Konfigurasi visualizer Cava.

| Key | Description | Default |
| --- | ----------- | ------- |
| channels | Saluran audio: stereo atau mono. | stereo |
| range | Sensitivitas bar | 8 |
| reverse | Membalikkan gerakan spektrum (0 atau 1). | 1 |

### [cava.hyprlock]

Konfigurasi 'cava.sh hyprlock'.

| Key | Description | Default |
| --- | ----------- | ------- |
| bar | Karakter bar untuk cava. | ▁▂▃▄▅▆▇█ |
| bar_array | Array bar untuk preset hyprlock. | ["▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"] |
| range | Jumlah bar dikurangi satu. | 7 |
| standby | Karakter standby untuk cava. | 🎶 |
| width | Lebar output cava. | 20 |

### [cava.stdout]

Konfigurasi 'cava.sh stdout'.

| Key | Description | Default |
| --- | ----------- | ------- |
| bar | Karakter bar untuk cava. | ▁▂▃▄▅▆▇█ |
| bar_array | Array bar untuk preset stdout. | ["░", "▒", "▓", "█"] |
| range | Jumlah bar dikurangi satu. | 7 |
| standby | Karakter standby untuk cava. | 🎶 |
| width | Lebar output cava. | 20 |

### [cava.waybar]

Konfigurasi 'cava.sh waybar'.

| Key | Description | Default |
| --- | ----------- | ------- |
| bar | Karakter bar untuk cava. | ▁▂▃▄▅▆▇█ |
| bar_array | Array bar untuk preset waybar. | ["◜", "◝", "◞", "◟", "◠", "◡", "◢", "◣"] |
| range | Jumlah bar dikurangi satu. | 7 |
| standby | Karakter standby untuk cava. | 🎶 |
| width | Lebar output cava. | 20 |

### [hyprland]

Konfigurasi Hyprland.

| Key | Description | Default |
| --- | ----------- | ------- |
| background_path | Jalur latar belakang LockScreen. |  |
| bar | Bar. | waybar |
| browser | Peramban. | firefox |
| button_layout | Tata letak tombol. (hanya gtk) |  |
| color_scheme | Skema warna. | prefer-dark |
| cursor_size | Ukuran kursor. | 24 |
| cursor_theme | Tema kursor. | Bibata-Modern-Ice |
| document_font_size | Ukuran font dokumen. | 10 |
| editor | Editor. | code |
| explorer | Pengelola file. | dolphin |
| font | Font. | Canterell |
| font_antialiasing | Antialiasing font. | rgba |
| font_hinting | Hinting font. | full |
| font_size | Ukuran font. | 10 |
| gtk_theme | Tema GTK. | Wallbash-Gtk |
| icon_theme | Tema ikon. | Tela-circle-dracula |
| idle | Pengelola idle. | hypridle |
| lockscreen | Layar kunci. | lockscreen.sh |
| monospace_font | Font monospace. | CaskaydiaCove Nerd Font Mono |
| monospace_font_size | Ukuran font monospace. | 9 |
| quickapps | Aplikasi cepat. | kitty |
| terminal | Terminal. | kitty |

### [hyprland-start]

Konfigurasi awal Hyprland.

| Key | Description | Default |
| --- | ----------- | ------- |
| apptray_bluetooth | Applet Bluetooth. | blueman-applet |
| auth_dialogue | Dialog autentikasi. | polkitkdeauth.sh |
| bar | Bar. | hyde-shell waybar --watch |
| battery_notify | Skrip notifikasi baterai. | batterynotify.sh |
| dbus_share_picker | Pemilih berbagi DBus. | dbus-update-activation-environment --systemd --all |
| idle_daemon | Daemon idle. | hypridle |
| image_clipboard | Clipboard gambar. | wl-paste --type image --watch cliphist store |
| network_manager | Pengelola jaringan. | nm-applet --indicator |
| notifications | Notifikasi. | swaync |
| removable_media | Pengelola media yang dapat dilepas. | udiskie --no-automount --smart-tray |
| systemd_share_picker | Pemilih berbagi Systemd. | systemctl --user import-environment QT_QPA_PLATFORMTHEME WAYLAND_DISPLAY XDG_CURRENT_DESKTOP |
| text_clipboard | Clipboard teks. | wl-paste --type text --watch cliphist store |
| wallpaper | Skrip wallpaper. | $scrPath/wallpaper.sh --global |
| xdg_portal_reset | Skrip reset portal XDG. | resetxdgportal.sh |

### [mediaplayer]

Konfigurasi `mediaplayer.py`.

| Key | Description | Default |
| --- | ----------- | ------- |
| artist_track_separator | Simbol pemisah untuk ditampilkan antara artis dan lagu. |    |
| max_length | Panjang maksimum string lagu dan artis. | 70 |
| prefix_paused | Awalan untuk media yang dijeda. |    |
| prefix_playing | Awalan untuk media yang diputar. |  |
| standby_text | Teks yang ditampilkan saat standby. |   Music |

### [notification]

Konfigurasi skrip notifikasi.

| Key | Description | Default |
| --- | ----------- | ------- |
| font | Font untuk notifikasi. | mononoki Nerd Font |
| font_size | Ukuran font untuk notifikasi. | 10 |

### [rofi]

Konfigurasi rofi global.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Skala default rofi. | 10 |

### [rofi.animation]

Konfigurasi 'animation.sh select'.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Skala untuk animasi. | 10 |

### [rofi.bookmarks]

Konfigurasi hyde-shell rofi.bookmarks.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| args | Argumen tambahan untuk bookmark. | [] |
| font | Font untuk bookmark. | JetBrainsMono Nerd Font |
| scale | Skala untuk bookmark. | 10 |
| style | Gaya untuk rofi bookmark. |  |

### [rofi.cliphist]

Konfigurasi `cliphist.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Skala untuk cliphist. | 10 |

### [rofi.emoji]

Konfigurasi `emoji-picker.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| args | Argumen tambahan untuk pemilih emoji. | ["-multi-select"] |
| scale | Skala untuk pemilih emoji. | 10 |
| style | Gaya untuk pemilih emoji. | 1 |

### [rofi.glyph]

Konfigurasi `glyph-picker.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| args | Argumen tambahan untuk pemilih glyph. | ["-multi-select"] |
| scale | Skala untuk pemilih glyph. | 10 |

### [rofi.hyprlock]

Konfigurasi 'hyprlock.sh select'.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Skala untuk hyprlock. | 10 |

### [rofi.launch]

Konfigurasi `rofilaunch.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| drun_args | Argumen tambahan untuk mode drun. | [] |
| drun_style | Gaya untuk mode drun. | style_1 |
| filebrowser_args | Argumen tambahan untuk mode filebrowser. | [] |
| filebrowser_style | Gaya untuk mode filebrowser. | style_1 |
| run_args | Argumen tambahan untuk mode run. | [] |
| run_style | Gaya untuk mode run. | style_1 |
| scale | Skala untuk peluncuran. | 5 |
| window_args | Argumen tambahan untuk mode window. | [] |
| window_style | Gaya untuk mode window. | style_1 |

### [rofi.theme]

Konfigurasi `themeselect.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Skala untuk pemilih tema. | 6 |

### [rofi.wallpaper]

Konfigurasi `swwwallselect.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Skala untuk wallpaper. | 10 |

### [rofi.websearch]

Konfigurasi hyde-shell rofi.websearch.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| args | Argumen tambahan untuk pencarian web. | [] |
| font | Font untuk pencarian web. | JetBrainsMono Nerd Font |
| scale | Skala untuk pencarian web. | 10 |
| style | Gaya untuk rofi pencarian web. |  |

### [rofi.keybind.hint]

Konfigurasi `keybind_hint.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| delimiter | Pemisah untuk petunjuk keybind. | 	 |
| height | Tinggi untuk petunjuk keybind. | 40em |
| line | Jumlah baris untuk petunjuk keybind. | 16 |
| width | Lebar untuk petunjuk keybind. | 40em |

### [screenshot]

Konfigurasi `screenshot.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| annotation_post_command | Perintah pasca untuk alat anotasi. | [""] |
| annotation_pre_command | Perintah pra untuk alat anotasi. | [] |
| annotation_tool | Alat anotasi untuk screenshot. | satty |

### [screenshot.ocr]

Konfigurasi OCR.

| Key | Description | Default |
| --- | ----------- | ------- |
| tesseract_languages | Tempatkan bahasa yang diinginkan untuk digunakan dalam pengenalan teks. Untuk melihat bahasa yang terpasang, jalankan `tesseract --list-langs`. | ["eng"] |

### [sysmonitor]

Konfigurasi `sysmonlaunch.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| commands | Opsi perintah fallback. | [""] |
| execute | Perintah default yang akan dieksekusi. |  |

### [volume]

Konfigurasi `volumecontrol.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| boost | Aktifkan peningkatan volume. | false |
| boost_limit | Batas peningkatan volume. | 120 |
| notify | Aktifkan notifikasi untuk kontrol volume. | true |
| steps | Jumlah langkah untuk menambah/mengurangi volume. | 5 |

### [wallbash]

Konfigurasi wallbash.

| Key | Description | Default |
| --- | ----------- | ------- |
| skip_template | Template yang akan dilewati saat menggunakan wallbash. | [""] |

### [wallpaper]

Konfigurasi wallpaper.

| Key | Description | Default |
| --- | ----------- | ------- |
| backend | Backend wallpaper, memerlukan 'wallpaper.<backend>.sh' sebagai skrip handler di $PATH | swww |
| custom_paths | Daftar jalur untuk mencari wallpaper. | [] |

### [wallpaper.swww]

Konfigurasi `swwwallselect.sh`.

| Key | Description | Default |
| --- | ----------- | ------- |
| duration | Durasi transisi. | 1 |
| framerate | Framerate transisi. | 60 |
| transition_default | Jenis transisi untuk wallpaper default. | grow |
| transition_next | Jenis transisi untuk wallpaper berikutnya. | grow |
| transition_prev | Jenis transisi untuk wallpaper sebelumnya. | outer |

### [waybar]

Konfigurasi waybar.

| Key | Description | Default |
| --- | ----------- | ------- |
| font | Font untuk waybar. | JetBrainsMono Nerd Font |
| icon_size | Ukuran ikon untuk waybar. | 10 |
| position | Posisi fallback dari waybar.   | top |
| scale | Skala total untuk waybar. | 10 |

### [weather]

Konfigurasi cuaca.

| Key | Description | Default |
| --- | ----------- | ------- |
| forecast_days | Jumlah hari untuk menampilkan prakiraan (0-3). | 3 |
| location | String lokasi/koordinat untuk output cuaca. |  |
| show_icon | Tampilkan ikon cuaca di waybar. | true |
| show_location | Tampilkan lokasi di waybar. | true |
| show_today | Tampilkan deskripsi detail hari ini di tooltip. | true |
| temperature_unit | Satuan suhu ('c' atau 'f'). | c |
| time_format | Format waktu ('12h' atau '24h'). | 24h |
| windspeed_unit | Satuan kecepatan angin ('km/h' atau 'mph'). | km/h |

### [wlogout]

Konfigurasi wlogout.

| Key | Description | Default |
| --- | ----------- | ------- |
| style | Gaya untuk wlogout. | 2 |

