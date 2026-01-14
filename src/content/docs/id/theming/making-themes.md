---
title: Membuat Tema
description: Cara membuat tema untuk HyDE
---

Di sini kami akan memandu Anda melalui proses pembuatan tema untuk HyDE langkah demi langkah.
Tutorial ini akan bekerja untuk hyprdots dan HyDE.

### Panduan Memulai Cepat

Clone repo hyde-theme-starter ke direktori tema Anda

:::tip
Ubah nama `MyTheme` menjadi nama tema Anda, pastikan tidak ada konflik nama di [HyDE-Gallery](https://github.com/HyDE-Project/hyde-gallery)
:::

```bash
git clone https://github.com/richen604/hyde-theme-starter ~/MyTheme
```

1. Komponen yang diperlukan - semua harus dalam format `tar.*`:

   - Tema GTK (wajib)
     - cari [Gnome-Look Themes](https://www.gnome-look.org/browse?cat=135&ord=latest) untuk tema yang sudah ada
     - atau lihat [Generate GTK4](#generate-gtk4-dari-wallbash) untuk membuat tema GTK dari wallpaper
   - Paket ikon (opsional) - default ke Tela-circle
     - cari [Gnome-Look Icons](https://www.gnome-look.org/browse?cat=132&ord=latest) untuk paket ikon yang sudah ada
   - Tema kursor (opsional) - default ke Bibata-Modern-Ice
     - cari [Gnome-Look Cursors](https://www.gnome-look.org/browse?cat=107&ord=latest) untuk tema kursor yang sudah ada
   - Font (opsional)
     - cari [fonts.google.com](https://fonts.google.com/) untuk web font
     - cari [nerdfonts.com](https://www.nerdfonts.com/) untuk font pengembang yang sudah di-patch

2. Koleksi wallpaper yang cocok dengan gaya/skema warna yang Anda inginkan

   - [Wallhaven](https://wallhaven.cc/) - Untuk wallpaper
   - [farbenfroh.io](https://farbenfroh.io/) - Untuk wallpaper yang cocok dengan warna jika Anda memiliki skema warna yang diinginkan
   - Jangan menambahkan terlalu banyak wallpaper, 8-10 adalah angka yang bagus

3. Instal `just` untuk menjalankan skrip helper `yay -S just`

Pergi ke direktori tema Anda `cd ~/MyTheme` (ganti `MyTheme` dengan nama tema Anda)

:::tip
Ubah nama `MyTheme` di `justfile` menjadi nama tema Anda
:::

```bash
theme = "MyTheme"
```

Jalankan `just init` untuk menghasilkan struktur direktori awal

Tema Anda harus memiliki struktur berikut:

```bash
~/MyTheme/
├── Config/                  # Bagian dari tema final Anda - File konfigurasi
│   └── hyde/
│       └── themes/
│           └── MyTheme/     # direktori tema utama
│               └── wallpapers/
├── refs/                    # untuk file referensi yang kita hasilkan
├── screenshots/             # untuk screenshot tema Anda
├── Source/                  # Bagian dari tema final Anda - Arcs yaitu gtk, cursor, icon, font
│   └── arcs/
├── .gitignore
├── justfile                 # untuk menjalankan skrip helper
└── README.md                # link ke halaman web ini
```

### Arcs

Arcs adalah komponen tema GTK, ikon, kursor, dan font yang membentuk bagian dari tema Anda.
Mari tambahkan ini segera ke direktori `Source/arcs` agar siap untuk pengujian.

Struktur folder Anda harus terlihat seperti ini:

```bash
~/MyTheme/
├── Source/
│   └── arcs/
│       ├── Gtk_<Tema-GTK-Anda>.tar.*
│       ├── Cursor_<Tema-Kursor-Anda>.tar.*
│       └── Icon_<Tema-Ikon-Anda>.tar.*
│       └── Font_<Nama-Font-Anda>.tar.*
```

**Pastikan untuk menggunakan prefix yang benar untuk setiap arc**. contoh: `Gtk_<Tema-GTK-Anda>.tar.*`

### Melihat tema Anda dengan Wallbash

Salin wallpaper Anda ke direktori tema Anda

```bash
cp -r ~/wallpapers ~/MyTheme/Config/.config/hyde/themes/MyTheme/wallpapers
```

cd ke direktori tema Anda

```bash
cd ~/MyTheme
```

instal tema Anda

```bash
just install
```

### Menguji tema Anda dengan wallbash

Ada dua cara untuk menginisialisasi tema Anda, dari wallbash atau dari tema yang sudah ada.

Kita akan menggunakan wallbash untuk panduan ini karena memberikan pemahaman yang baik tentang bagaimana wallbash menghasilkan warna untuk tema Anda. Anda dapat mempelajari lebih lanjut tentang wallbash [di sini](#memahami-wallbash).

Buka Wallbash, atur auto, dark, atau light (`Meta + Shift + R`). </br>
Atur wallpaper pilihan Anda sebagai wallpaper saat ini (`Meta + Shift + W`)

Amati bagaimana wallbash menyesuaikan warna dengan wallpaper Anda untuk aplikasi berikut:

- GTK (nwg-look)
  - untuk menguji tema arc gtk Anda, ubah dari mode wallbash ke mode tema (Meta + Shift + R)
  - kemudian periksa `pavucontrol` untuk melihat apakah tema gtk Anda terlihat aneh. jika ya, ikuti instruksi di [Generate GTK4](#generate-gtk4-dari-wallbash) untuk menghasilkan file tema GTK4 menggunakan wallbash
- Kitty (kitty)
- QT (qt5ct + qt6ct)
- Waybar (waybar)
- Spotify (spotify)
- VSCode (code) - memerlukan wallbash diaktifkan sebagai tema warna
- Cava (cava)

### Generate file tema

Pastikan wallpaper yang Anda pilih adalah wallpaper terbaik yang dihasilkan wallbash untuk tema Anda. </br>
Sekarang jalankan perintah berikut untuk menghasilkan file wallbash.

```bash
just gen-all
just set-wall
```

Anda akan melihat banyak file baru di direktori `refs` tema Anda.

```bash
~/MyTheme/
├── refs/                   # untuk file referensi yang kita hasilkan
│   ├── gtk-4.0/            # File tema GTK4
│   │   ├── gtk.css         # Tema terang
│   │   └── gtk-dark.css    # Tema gelap
│   ├── kvantum/            # File tema Kvantum
│   │   ├── kvantum.theme   # Konfigurasi tema Kvantum
│   │   └── kvconfig.theme  # Konfigurasi Kvantum
│   ├── hypr.theme          # Tema Hyprland
│   ├── kitty.theme         # Tema terminal Kitty
│   ├── rofi.theme          # Tema Rofi
│   ├── theme.dcol          # Override mode "theme" wallbash
│   └── waybar.theme        # Tema Waybar
│   └── wall.set            # Wallpaper pertama yang digunakan tema
```

Anda dapat menyalin semua file ke direktori `Config/.config/hyde/themes/MyTheme` Anda.

```bash
cp -r ./refs/* ./Config/.config/hyde/themes/MyTheme
```

jalankan install lagi untuk memperbarui tema Anda

```bash
just install
```

File-file ini digunakan untuk mengatur mode "theme" untuk tema Anda. (`Meta + Shift + R`)

### Mengedit file \*.theme

File-file ini penting agar tema bekerja dengan benar.

Anda harus merujuk tema seperti [Bad Blood](https://github.com/HyDE-Project/hyde-gallery/blob/Bad-Blood/Configs/.config/hyde/themes/Bad%20Blood) dalam panduan ini.

Setiap file \*.theme berisi baris konfigurasi

Baris pertama memiliki format: file_path | command_to_execute

- hypr.theme - `$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf`
- kitty.theme - `$HOME/.config/kitty/theme.conf|killall -SIGUSR1 kitty`
- rofi.theme - `$HOME/.config/rofi/theme.rasi`
- waybar.theme - `$HOME/.config/waybar/theme.css|${scrDir}/wbarconfgen.sh`

file yang paling penting adalah `hypr.theme`

```bash
$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf
# ~/.config/hypr/theme/theme.conf adalah file yang dihasilkan otomatis. Jangan edit.

$GTK_THEME=Bad-Blood # nama folder di dalam `Source/arcs/Gtk_<Tema-GTK-Anda>.tar.*`
$ICON_THEME=besgnulinux-mono-red # nama folder di dalam `Source/arcs/Icon_<Tema-Ikon-Anda>.tar.*`
$COLOR_SCHEME=prefer-dark # prefer-dark, prefer-light, atau auto
$CURSOR_THEME=Night-Diamond-Red # nama folder di dalam `Source/arcs/Cursor_<Tema-Kursor-Anda>.tar.*`
$CURSOR_SIZE=30 # ukuran kursor dalam pixel
```

- Edit variabel untuk arcs, harus cocok dengan nama folder **di dalam** setiap arc di `Source/arcs` seperti di atas
- Atur border hyprland, warna, dan pengaturan terkait tema lainnya
- Anda dapat menggunakan hypr.theme untuk mengatur program tambahan untuk tema Anda, seperti tema SDDM atau Vscode
- Menjadi `$HOME/.config/hypr/themes/theme.conf`

Setiap pembaruan tema Anda di `Config` atau `Source` harus dijalankan dengan `just install` untuk memperbarui tema Anda.

### Mengedit theme.dcol

File `theme.dcol` digunakan untuk menimpa beberapa warna wallbash yang dihasilkan untuk mode wallbash.
Lihat [memahami wallbash](#memahami-wallbash) untuk informasi lebih lanjut.

File ini sepenuhnya opsional

### Menyelesaikan tema Anda

Tema Anda sekarang harus siap untuk ditambahkan ke hyde-gallery!

Beberapa sentuhan akhir lagi:

- Tambahkan beberapa screenshot ke `~/screenshots`
- Tambahkan tema Anda ke Hyde-Gallery

### Menambahkan Tema ke Hyde-Gallery

Di direktori tema Anda, hasilkan readme menggunakan

```bash
python3 generate_readme.py
```

Inisialisasi git

```bash
git init && git branch -M main && git add . && git commit -m "Tema HyDE pertama saya"
```

[buat repo github](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

```bash
git remote add origin <url-repo-anda>
git push -u origin main
```

Fork hyde-gallery <https://github.com/HyDE-Project/hyde-gallery> </br>
Tambahkan tema Anda ke daftar dan `hyde-themes.json`

## Informasi Lebih Lanjut

### Generate GTK4 dari wallbash

Jika tema Anda tidak menyertakan dukungan GTK4, pavucontrol dan aplikasi GTK4 lainnya mungkin muncul dengan tema putih polos.

Jalankan perintah berikut untuk menghasilkan file tema GTK4

```bash
just gen-gtk4
```

Salin direktori `refs/gtk-4.0` ke direktori tema Anda

```bash
mkdir -p ./Config/.config/hyde/themes/MyTheme/gtk-4.0
cp -r ./refs/gtk-4.0/* ./Config/.config/hyde/themes/MyTheme/gtk-4.0/
```

### Memahami wallbash

Wallbash menghasilkan 4 warna utama dari wallpaper Anda, kemudian membuat kelompok warna di sekitar setiap warna utama dengan struktur berikut:

Untuk setiap warna utama (`wallbash_pry1` sampai `wallbash_pry4`):

- Warna teks (`wallbash_txt1` sampai `wallbash_txt4`)
- 9 warna aksen (`wallbash_1xa1` sampai `wallbash_1xa9` untuk grup 1, dst.)

Setiap warna memiliki varian RGBA dengan opacity yang dapat dikonfigurasi (mis. `wallbash_pry1_rgba(0.95)`)

Total: 44 warna dasar (4 grup × 11 warna) ditambah varian RGBA

Gunakan `just gen-dcol` untuk menghasilkan `theme.dcol` dengan semua warna yang dihasilkan wallbash untuk wallpaper aktif Anda sebagai referensi
