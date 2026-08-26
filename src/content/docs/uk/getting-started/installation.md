---
title: Встановлення
description: Посібник зі встановлення HyDE
---

**Скрипт встановлення розроблений для мінімального встановлення [Arch Linux](https://wiki.archlinux.org/title/Installation_guide)**, але **може** працювати на деяких [дистрибутивах на основі Arch](https://wiki.archlinux.org/title/Arch-based_distributions).
Хоча встановлення HyDE поряд з іншим [DE](https://wiki.archlinux.org/title/Desktop_environment)/[WM](https://wiki.archlinux.org/title/Window_manager) може працювати, оскільки це значно кастомізоване середовище, воно **напевно** конфліктуватиме з вашими темами [GTK](https://wiki.archlinux.org/title/GTK)/[Qt](https://wiki.archlinux.org/title/Qt), [оболонкою](https://wiki.archlinux.org/title/Command-line_shell), [SDDM](https://wiki.archlinux.org/title/SDDM), [GRUB](https://wiki.archlinux.org/title/GRUB) тощо, і робиться на ваш власний ризик.

Для підтримки NixOS існує окремий проєкт, який супроводжується за адресою [Hydenix](https://github.com/richen604/hydenix/tree/main)

:::note

Скрипт встановлення автоматично визначить наявність відеокарти NVIDIA та встановить драйвери nvidia-dkms для вашого ядра.
Будь ласка, переконайтеся, що ваша відеокарта NVIDIA підтримує dkms-драйвери зі списку [тут](https://wiki.archlinux.org/title/NVIDIA).
:::

:::danger

Скрипт змінює конфігурацію `grub` або `systemd-boot`, щоб увімкнути NVIDIA DRM.

:::

<!-- ### Option 1 -->

### Автоматизований скрипт встановлення

```shell
pacman -S --needed git base-devel
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
./install.sh
```

:::tip
Ви також можете додати будь-які інші застосунки, які хочете встановити разом із HyDE, до файлу `Scripts/pkg_user.lst` і передати цей файл як параметр для встановлення таким чином:

```shell
./install.sh pkg_user.lst
```

:::

:::note
Скористайтеся своїм списком із `Scripts/pkg_extra.lst`,
або виконайте `cp  Scripts/pkg_extra.lst Scripts/pkg_user.lst`, якщо бажаєте встановити всі додаткові пакунки.
:::

### Детальне та ручне встановлення

#### Клонування

Клонуйте репозиторій і перейдіть у каталог зі скриптами. Потім переконайтеся, що користувач має права на [з]апис і в[и]конання для клонованого каталогу

```shell
pacman -Sy git
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
```

:::caution
**НІКОЛИ** не виконуйте скрипт із sudo або від імені root!
:::

#### Режими

Скрипт встановлення можна виконати в різних режимах:

- для повного стандартного встановлення hyprland з усіма налаштуваннями

```shell
./install.sh
```

- для повного або мінімального встановлення hyprland + ваших улюблених пакунків (напр. `pkg_user.lst`)

```shell
./install.sh pkg_user.lst # повне встановлення pkg_core.lst + pkg_user.lst з налаштуваннями
./install.sh -i pkg_user.lst # мінімальне встановлення pkg_core.lst + pkg_user.lst без налаштувань
```

- кожен [розділ](#process) також можна виконати окремо:

```shell
./install.sh -i # мінімальне встановлення hyprland без будь-яких налаштувань
./install.sh -d # мінімальне встановлення hyprland без налаштувань, але з (--noconfirm) встановленням
./install.sh -r # лише відновлює конфігураційні файли
./install.sh -s # запускає та вмикає системні служби
./install.sh -t # тестовий запуск без виконання (-irst для пробного запуску всього)
./install.sh -m # пропускає встановлення теми оформлення
./install.sh -n # пропускає встановлення nvidia
./install.sh -irst # для тестового запуску всього
```

<!-- ### Option 2

:::caution

HyDE-CLI author here.
The CLI's dots management (Hyde {restore,backup,control,override}) is not yet and might not be 100% compatible of the current hyprdots.
This is due to incompatibility of the meta files
and the above commands need manual intervention
Rest assured that other commands are working perfectly
and will be ported to its own `hydectl` command line interface

:::

As a second install option, you can also use `Hyde-install`, which might be easier for some.
View installation instructions for HyDE in [Hyde-cli - Usage](https://github.com/kRHYME7/Hyde-cli?tab=readme-ov-file#usage).

### Option 3

...Soon
A declarative way to manage importing and exporting dotfiles from other users. This is not for boot strapping but for sharing dotfiles.

---

---

---

:::note

> Please reboot after the install script completes and takes you to the SDDM login screen (or black screen) for the first time.
> ::: -->
