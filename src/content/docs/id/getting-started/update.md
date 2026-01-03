---
title: Pembaruan
description: Panduan Manajemen Dotfiles HyDE
---

## Pembaruan Otomatis

Untuk memperbarui HyDE, Anda perlu mengambil perubahan terbaru dari repositori GitHub dan mengembalikan konfigurasi dengan menjalankan perintah berikut:
```shell
cd ~/HyDE/Scripts
git pull origin master
./install.sh -r
```

:::note

Setiap konfigurasi yang Anda buat akan ditimpa jika tercantum untuk ditimpa, 
sebagaimana yang didefinisikan dalam `Scripts/restore_cfg.psv`.
Namun, semua konfigurasi yang diganti akan dicadangkan dan dapat dipulihkan dari `~/.config/cfg_backups`.
Lihat pada bagian [Pemulihan Konfigurasi](/hyde/installation/restore/) untuk mempelajari lebih lanjut.

:::

## Pembaruan Manual dan Per Komponen

Setelah menjalankan perintah di atas, Anda dapat memodifikasi berkas [Scripts/restore_cfg.psv](https://github.com/HyDE-Project/HyDE/blob/master/Scripts/restore_cfg.psv). Dokumentasinya tersedia di dalam berkas tersebut.

[Lihat selengkapnya](../../resources/restore/).

### Pembaruan HANYA DotFiles

:::note

>Dalam konteks berikutnya, "restore" merujuk pada proses pemulihan dotfiles dari repositori ke direktori $HOME, bukan pemulihan dari $HOME ke repositori.
```sh
./restore_cfg.sh </path/to/file.psv > <optional /path/to/hyde/clone>
```

:::

<details>
<summary>Kira-kira seperti ini</summary>

```sh
cd ~/HyDE/Scripts
./restore_cfg.sh ./restore_cfg.psv
```

</details>

---
