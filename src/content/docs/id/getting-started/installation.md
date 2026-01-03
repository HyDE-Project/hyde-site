---
title: Instalasi
description: Panduan Instalasi HyDE
---

Skrip instalasi dirancang untuk instalasi minimal [Arch Linux](https://wiki.archlinux.org/title/Arch_Linux), tetapi **mungkin** juga bekerja pada beberapa [distro berbasis Arch](https://wiki.archlinux.org/title/Arch-based_distributions).
Meskipun menginstal HyDE bersama [DE](https://wiki.archlinux.org/title/Desktop_environment)/[WM](https://wiki.archlinux.org/title/Window_manager) lain seharusnya bisa, karena ini adalah setup yang sangat dikustomisasi, ini **akan** berkonflik dengan tema [GTK](https://wiki.archlinux.org/title/GTK)/[Qt](https://wiki.archlinux.org/title/Qt), [Shell](https://wiki.archlinux.org/title/Command-line_shell), [SDDM](https://wiki.archlinux.org/title/SDDM), [GRUB](https://wiki.archlinux.org/title/GRUB), dll. dan itu risiko Anda sendiri.

Untuk dukungan NixOS, ada proyek terpisah yang dikelola di [Hydenix](https://github.com/richen604/hydenix/tree/main)

:::note

Skrip instalasi akan otomatis mendeteksi kartu NVIDIA dan menginstal driver nvidia-dkms untuk kernel Anda.
Pastikan kartu NVIDIA Anda mendukung driver dkms dalam daftar yang disediakan [di sini](https://wiki.archlinux.org/title/NVIDIA).
:::

:::danger

Skrip ini memodifikasi konfigurasi `grub` atau `systemd-boot` Anda untuk mengaktifkan NVIDIA DRM.

:::

<!-- ### Opsi 1 -->

### Skrip instalasi otomatis

```shell
pacman -S --needed git base-devel
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
./install.sh
```

:::tip
Anda juga dapat menambahkan aplikasi lain yang ingin Anda instal bersama HyDE ke `Scripts/pkg_user.lst` dan meneruskan file tersebut sebagai parameter untuk menginstalnya seperti ini:

```shell
./install.sh pkg_user.lst
```

:::

:::note
Rujuk daftar Anda dari `Scripts/pkg_extra.lst`
atau Anda dapat `cp  Scripts/pkg_extra.lst Scripts/pkg_user.lst` jika Anda ingin menginstal semua paket tambahan.
:::

### Instalasi Granular dan Manual

#### Clone

Clone repositori dan ubah direktori ke path skrip. Kemudian pastikan pengguna memiliki izin [w]rite dan e[x]ecute untuk direktori clone

```shell
pacman -Sy git
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
```

:::caution
**JANGAN PERNAH** menjalankan skrip dengan sudo atau sebagai pengguna root!
:::

#### Mode

Skrip instalasi dapat dijalankan dalam mode berbeda,

- untuk instalasi hyprland lengkap default dengan semua konfigurasi

```shell
./install.sh
```

- untuk instalasi hyprland lengkap atau minimal + paket favorit Anda (contoh: `pkg_user.lst`)

```shell
./install.sh pkg_user.lst # instalasi lengkap pkg_core.lst + pkg_user.lst dengan konfigurasi
./install.sh -i pkg_user.lst # instalasi minimal pkg_core.lst + pkg_user.lst tanpa konfigurasi
```

- setiap [bagian](#process) juga dapat dijalankan secara independen sebagai,

```shell
./install.sh -i # instalasi minimal hyprland tanpa konfigurasi
./install.sh -d # instalasi minimal hyprland tanpa konfigurasi, tetapi dengan instalasi (--noconfirm)
./install.sh -r # hanya memulihkan file konfigurasi
./install.sh -s # memulai dan mengaktifkan layanan sistem
./install.sh -t # uji coba tanpa mengeksekusi (-irst untuk dry run semua)
./install.sh -m # melewati instalasi tema
./install.sh -n # melewati instalasi nvidia
./install.sh -irst # untuk melakukan uji coba untuk semua
```

<!-- ### Opsi 2

:::caution

Pembuat HyDE-CLI di sini.
Manajemen dots CLI (Hyde {restore,backup,control,override}) belum dan mungkin tidak 100% kompatibel dengan hyprdots saat ini.
Ini karena ketidakcocokan file meta
dan perintah di atas memerlukan intervensi manual
Yakinlah bahwa perintah lainnya bekerja dengan sempurna
dan akan diporting ke antarmuka baris perintah `hydectl`-nya sendiri

:::

Sebagai opsi instalasi kedua, Anda juga dapat menggunakan `Hyde-install`, yang mungkin lebih mudah bagi sebagian orang.
Lihat instruksi instalasi untuk HyDE di [Hyde-cli - Usage](https://github.com/kRHYME7/Hyde-cli?tab=readme-ov-file#usage).

### Opsi 3

...Segera
Cara deklaratif untuk mengelola impor dan ekspor dotfiles dari pengguna lain. Ini bukan untuk bootstrapping tetapi untuk berbagi dotfiles.

---

---

---

:::note

> Harap reboot setelah skrip instalasi selesai dan membawa Anda ke layar login SDDM (atau layar hitam) untuk pertama kalinya.
> ::: -->
