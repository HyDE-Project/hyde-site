---
title: Hyprland
description: Konfigurasi Hyprland
sidebar:
  order: 3
---

<link rel="stylesheet" href="/src/styles/tables.css">

# Struktur Konfigurasi

```
. 📂 ~/.config/hypr
└── 📂 animations/
├── 📄 animations.conf
├── 📄 hyde.conf
├── 📄 hypridle.conf
├── 📄 hyprland.conf
└── 📂 hyprlock/
├── 📄 hyprlock.conf
├── 📄 keybindings.conf
├── 📄 monitors.conf
├── 📄 nvidia.conf
└── 📂 themes/
│ ├── 📄 colors.conf
│ ├── 📄 theme.conf
│ ├── 📄 wallbash.conf
├── 📄 userprefs.conf
└── 📄 windowrules.conf
├──
. 📂 ~/.local/share/hyde
│ ├── 📄 hyprland.conf
```

---

:::caution

**Silahkan baca [Hyprland Wiki](https://wiki.hyprland.org/) terlebih dahulu!**

:::

# Konfigurasi Hyperland HyDE

Karena Hyperland memuat (source) `~/.config/hypr/hyprland.conf`, HyDE membagi konfigurasinya menjadi tiga bagian:

- [Boilerplate](#1-boilerplate)
- [Overrides](#2-overrides)
- [Users](#3-users)

## 1. Boilerplate

Bagian ini berisi konfigurasi default dari HyDE, yang disarankan untuk tidak Anda ubah.

**Lokasi file:** `$XDG_DATA_HOME/hyde/hyprland.conf`

File ini dimuat di bagian paling atas dari konfigurasi lain dalam `~/.config/hypr/hyprland.conf`.

```ini
# Konfigurasi Boilerplate 
source = ~/.local/share/hyde/hyprland.conf
```

## 2. Overrides

Bagian ini digunakan untuk menimpa/mengabaikan konfigurasi default HyDE.

:::caution

File `xdg_config/hypr/hyde.conf` sudah usang (deprecated), gunakan `xdg_config/hyde/config.toml` sebagai gantinya.

:::

Untuk menimpa pengaturan default Hyperland di HyDE, konfigurasikan bagian berikut dalam `config.toml` anda:

- **[hyprland]** - Default aplikasi, tema, dan pengaturan tampilan
- **[hyprland_start]** - Perintah saat startup dan layanan (services)

**File Konfigurasi:** `$XDG_STATE_HOME/hyde/hyprland.conf`

Untuk opsi detailnya, lihat:
- [konfigurasi `hyprland`](../config_toml/#hyprland)
- [konfigurasi `hyprland_start`](../config_toml/#hyprland_start)

## 3. Users

Bagian ini dikhususkan bagi konfigurasi pengguna, yang dapat disesuaikan berdasarkan kebutuhan pengguna.

**Lokasi File:**

- `./keybindings.conf`
- `./windowrules.conf`
- `./monitors.conf`
- `./userprefs.conf`

---

:::tip

Kemungkinan besar Anda hanya perlu mengkonfigurasi file-file diatas; Anda dapat menimpa 
variabel Hyperland sesuai kebutuhan.

Selain itu, Hyperland mendukung fitur *hot reload* pada file konfigurasi, 
sehingga perubahan dapat langsung diterapkan tanpa perlu memulai ulang sesi.

:::

Sekarang Anda sudah mengetahui fungsi dari masing-masing file. Silahkan merujuk ke [Hyprland Wiki](https://wiki.hyprland.org) untuk informasi lebih lanjut guna mendapatkan pengalaman desktop yang sempurna.

Lihat juga [Tanya Jawab (FAQ) dan Tips](../help/faq#how-can-i-change-keyboard-layout).
