---
title: Wallbash dan dcol
description: Memahami Wallbash dan dcol
---

## Ikhtisar

Dokumen ini memberikan penjelasan tentang konfigurasi warna yang digunakan untuk tema HyDE. Ini mencakup warna utama, warna teks, dan warna aksen. Setiap warna dapat ditentukan dalam format heksadesimal atau RGBA.

## Identifier Warna

Secara default, saat **caching wallpaper**, ini akan menghasilkan 4 warna utama, 4 warna teks, dan 9 warna aksen untuk setiap warna utama.

- **`dcol_mode`**: Identifier ini menentukan apakah tema dalam mode gelap atau terang.
- **`dcol_pryX`**: Ini adalah warna utama, dengan `X` berkisar dari 1 hingga 4.
- **`dcol_txtX`**: Ini adalah warna utama yang dibalik digunakan untuk teks, dengan `X` berkisar dari 1 hingga 4.
- **`dcol_XaxY`**: Ini adalah warna aksen untuk setiap warna utama, dengan `X` berkisar dari 1 hingga 4 dan `Y` berkisar dari 1 hingga 9.
- **`_rgba`**: Suffix ini menunjukkan bahwa warna dalam format RGBA. Jika suffix tidak ada, warna dalam format heksadesimal.
- **`_rgb`**: Suffix ini menunjukkan bahwa warna dalam format RGB.

## Penggunaan

Untuk menggunakan konfigurasi warna cache:

1. Ganti prefix `dcol_` dengan `wallbash_` agar skrip Wallbash dapat mem-parse dan mengubah nilai.
2. Anggap prefix `wallbash_` sebagai placeholder untuk nilai warna dominan.
3. Bungkus identifier warna dengan kurung sudut (`<...>`) untuk menunjukkan penggantian dengan nilai yang sesuai, misalnya `<wallbash_pry1>`.
4. Gunakan [contoh ini](https://github.com/hyde-project/hyde/tree/master/Configs/.config/hyde/wallbash) sebagai template.

Ini memungkinkan Anda untuk membuat template untuk konfigurasi, menggunakan warna dominan atau wallpaper, dan biarkan skrip Wallbash mengkonversinya untuk Anda.

### Membuat Template `*.dcol`

Sebuah template memerlukan tiga bagian:

- File target
- Script/command (opsional)
- Konten

## Format dasar:

```
target|command 
contents
```


:::note
**target**|**command** harus selalu ada pada baris 1 dari setiap file template. Kita akan menyebutnya `header line`.
:::

#### File Target

Strukturkan template Anda dan tentukan lokasi konfigurasi target. Ini bisa berupa:

- `${cacheDir}/wallbash` dengan post-processing menggunakan script.
- Path yang diharapkan, misalnya di samping `kitty.conf` untuk Kitty, di-source oleh `include theme.conf`.

Gunakan variabel environment untuk menangani direktori secara dinamis:

- `${confDir}` = `$XDG_CONFIG_HOME` atau `$HOME/.config/`
- `${cacheDir}/wallbash` = `HYDE_CACHE_DIR/wallbash` = `$HOME/.cache/hyde`

#### Script/Command Opsional

Setelah mengisi file target dengan konten, Anda dapat menjalankan perintah/script arbitrary untuk post-processing. Gunakan variabel `WALLBASH_SCRIPTS` untuk navigasi ke direktori script Wallbash, misalnya `WALLBASH_SCRIPTS/your_script.sh`.

:::caution 
Hanya tambahkan template dari pembuat terpercaya untuk menghindari menjalankan kode yang buruk (malicious).
:::

#### Konten

Ini adalah konten dari file, berisi placeholder Wallbash, misalnya `<wallbash_pry1>`.

---

Direktori `~/.config/hyde/wallbash/*` berisi tiga direktori utama:

### always

Template di `./wallbash/always/` dijalankan saat:

- Pergantian tema
- Pergantian wallpaper
- Pergantian mode

Informasi lebih lanjut [di sini](./always/README).

### theme

Template di `./wallbash/theme/` dijalankan saat:

- Pergantian tema
- Pergantian mode

Informasi lebih lanjut [di sini](./theme/README).

### scripts

Untuk kustomisasi, simpan script Anda di `./wallbash/scripts`. Gunakan variabel `$WALLBASH_SCRIPTS` untuk navigasi ke direktori ini.
