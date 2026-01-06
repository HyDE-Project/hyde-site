---
title: waybar.py
description: Halaman manual waybar.py
---

## Name

`waybar.py` - Skrip manajemen konfigurasi Waybar untuk HyDE

## Sinopsis

```
waybar.py [-h] [--set SET] [-n] [-p] [-u] [-g] [-i] [-b] [-G] 
          [-c CONFIG] [-s STYLE] [-w] [--json] [--select] [--kill] 
          [--hide [{0,1,toggle}]]
```

## Deskripsi

`waybar.py` adalah skrip manajemen konfigurasi Waybar yang komprehensif dan merupakan bagian dari HyDE (lingkungan pengembangan Anda).

Skrip ini mengelola konfigurasi Waybar tersimpan di `~/.config/waybar/layouts` beserta style yang terkait di `~/.config/waybar/styles`.
Ia secara otomatis menangani pembuatan file includes, pengaturan ukuran ikon, pembaruan border radius, serta perpindahan (switching) antar konfigurasi Waybar dengan mulus.

## Opsi

### Manajemen Layout

**`--set SET`**
: Mengatur layout tertentu berdasarkan nama. File layout harus ada di `~/.config/waybar/layouts/` dengan ekstensi `.jsonc`.

**`-n, --next`**
: Berpindah ke layout berikutnya berdasarkan urutan alfabet. Akan berputar (cycle) di semua layout yang tersedia.

**`-p, --prev`**
: Berpindah ke layout sebelumnya berdasarkan urutan alfabet. Akan berputar (cycle) di semua layout yang tersedia.

### Operasi Pembaruan

**`-u, --update`**
: Melakukan pembaruan penuh terhadap semua komponen Waybar, termasuk:
  - Konfigurasi ukuran ikon di file JSON
  - Border radius di file CSS
  - Pembuatan file includes.json
  - Singkronisasi konfigurasi dan style

**`-g, --update-global-css`**
: Memperbarui hanya file `global.css`. File ini berisi konfigurasi dinamis seperti font-size dan font-family yang dapat dioverride oleh theme melalui `hypr.theme` >> `$BAR_FONT`.

**`-i, --update-icon-size`**
: Memperbarui konfigurasi ukuran ikon di file JSON. Digunakan untuk mengatasi ukuran ikon yang tidak bisa ditangani langsung oleh CSS Waybar.

**`-b, --update-border-radius`**
: Memperbarui konfigurasi border radius di file CSS. 
Ini membuat border radius dinamis untuk grup yang menyesuaikan dengan pengaturan *corner rounding* Hyperland.

**`-G, --generate-includes`**
: Menghasilkan file `includes.json` yang berisi:
  - Semua modul dari `~/.config/waybar/modules/`
  - Konfigurasi dinamis yang tidak disediakan secara native oleh Waybar
  - Resolusi ukuran ikon untuk styling yang tepat

### Path Konfigurasi

**`-c CONFIG, --config CONFIG`**
: Menentukan path ke file `config.jsonc`. Memungkinkan penggunaan konfigurasi di luar direktori layout standar.

**`-s STYLE, --style STYLE`**
: Menentukan path ke file `style.css`. Memungkinkan penggunaan style di luar direktori style standar.

## Manajemen Proses

**`-w, --watch`**
: Mengaktifkan mode watch. Akan memonitor Waybar secara terus-menerus dan otomatis me-restrat jika proses mati. Berguna untuk menjaga Waybar tetap berjalan.

**`--kill, -k`**
: Mematikan semua instance Waybar yang sedang berjalan dan skrip watcher terkait. Memberikan cara bersih untuk menghentikan semua proses Waybar.

**`--hide [{0,1,toggle}]`**
: :
  - `--hide 0` or `--hide show`: Tampilkan Waybar
  - `--hide 1` or `--hide hide`: Sembunyikan Waybar  
  - `--hide` or `--hide toggle`: Toggle (bolak-balik) status visibilitas

### Informasi dan Listing

**`--json, -j`**
: Menampilkan daftar semua layout yang tersedia dalam format JSON. 
Berguna untuk scripting dan integrasi tools lain.

**`--select, -S`**
: Membuka menu interaktif rofi untuk memilih dan berpindah antar layout. 
Menyediakan antar muka visual untuk browsing dan memilih layout dari `~/.config/waybar/layouts/`.

**`-h, --help`**
: Menampilkan pesan bantuan berisi semua opsi yang tersedia.

## Files

**`~/.config/waybar/`**
: Direktori konfigurasi utama Waybar untuk kustomisasi pengguna

**`~/.config/waybar/layouts/`**
: Direktori berisi file konfigurasi layout Waybar (format `.jsonc`)

**`~/.config/waybar/styles/`**
: Direktori berisi file CSS style yang sesuai dengan layout

**`~/.config/waybar/modules/`**
: Direktori berisi konfigurasi modul individual

**`~/.config/waybar/includes/`**
: Direktori berisi file include yang dihasilkan dan konfigurasi dinamis

**`~/.config/waybar/includes/includes.json`**
: File yang dihasilkan otomatis berisi semua definisi modul dan konfigurasi dinamis

**`~/.config/waybar/config.jsonc`**
: Konfigurasi Waybar yang sedang aktif (file transien, salinan dari layout yang dipilih)

**`~/.config/waybar/style.css`**
: Style Waybar yang sedang aktif (dihasilkan otomatis, mengimpor beberapa file CSS)

**`~/.local/share/waybar/`**
: Konfigurasi Waybar yang disediakan HyDE (read-only, jangan diedit)

## Contoh Penggunaan

### Manajemen Layout Dasar

Memilih layout secara interaktif:
```bash
waybar.py --select       # Membuka pemilih layout rofi
```

Berpindah ke layout tertentu:
```bash
waybar.py --set khing
```

Berputar melalui layout:
```bash
waybar.py --next     # Layout berikutnya
waybar.py --prev     # Layout sebelumnya
```

### Pembaruan Konfigurasi

Memperbarui semua konfigurasi:
```bash
waybar.py --update
```

Memperbarui komponen tertentu:
```bash
waybar.py --update-icon-size        # Perbarui ukuran ikon saja
waybar.py --update-border-radius    # Perbarui border radius saja
waybar.py --generate-includes       # Hasilkan ulang includes.json
```

### Manajemen Proses

Memulai Waybar dengan mode watch:
```bash
waybar.py --watch
```

Mengontrol visibilitas Waybar:
```bash
waybar.py --hide 1       # Sembunyikan Waybar
waybar.py --hide 0       # Tampilkan Waybar  
waybar.py --hide toggle  # Toggle visibilitas
```

Mematikan semua proses `waybar.py` yang secara efektif mematikan mode `--watch`:

```bash
waybar.py --kill
```

### Pengumpulan Informasi

Pemilihan layout interaktif:
```bash
waybar.py --select       # Membuka menu rofi untuk pemilihan layout
```

Daftar layout yang tersedia:
```bash
waybar.py --json         # Format JSON untuk scripting
```

### Path Konfigurasi Kustom

Menggunakan file konfigurasi kustom:
```bash
waybar.py --config /path/to/custom-config.jsonc --style /path/to/custom-style.css
```

## Alur Kerja Konfigurasi

1. **Telusuri dan pilih layout**: Gunakan `waybar.py --select` untuk membuka menu rofi interaktif dan melihat pratinjau layout yang tersedia

2. **Buat atau salin layout**: Mulai dengan layout yang ada dari `~/.local/share/waybar/layouts/` atau buat yang baru di `~/.config/waybar/layouts/`

3. **Hasilkan includes**: Jalankan `waybar.py --generate-includes` untuk memastikan semua modul tersedia

4. **Atur layout**: Gunakan `waybar.py --set <nama-layout>` untuk mengaktifkan konfigurasi Anda, atau gunakan pemilih interaktif dengan `waybar.py --select`

5. **Perbarui konfigurasi**: Jalankan `waybar.py --update` setelah membuat perubahan untuk memastikan semua komponen tersinkronisasi

## Integrasi dengan HyDE

`waybar.py` terintegrasi erat dengan ekosistem HyDE:

- **Integrasi Tema**: Secara otomatis menyesuaikan dengan pengaturan tema HyDE saat ini
- **Styling Dinamis**: Memperbarui border radius berdasarkan pengaturan rounding window Hyprland
- **Manajemen Font**: Menyinkronkan font dengan konfigurasi tema HyDE
- **Sistem Modul**: Mengelola modul dan konfigurasi Waybar khusus HyDE


## Catatan

- Selalu gunakan `~/.config/waybar/` untuk konfigurasi kustom, jangan pernah mengedit file di `~/.local/share/waybar/`
- File `includes.json` dihasilkan secara otomatis dan tidak boleh diedit secara manual
- Nama layout sesuai dengan nama file tanpa ekstensi `.jsonc`
- File style harus sesuai dengan nama layout untuk pasangan otomatis (contoh: `khing.jsonc` menggunakan `khing.css`)



