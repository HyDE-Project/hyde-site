---
title: Установка
description: Руководство по установке HyDE
---

Скрипт установки предназначен для минимальной установки [Arch Linux](https://wiki.archlinux.org/title/Arch_Linux) но **может** работать на некоторых [Arch-based distros](https://wiki.archlinux.org/title/Arch-based_distributions).
Хотя установка HyDE вместе с другим [DE](https://wiki.archlinux.org/title/Desktop_environment)/[WM](https://wiki.archlinux.org/title/Window_manager) должна работать, из-за того, что это сильно кастомизированная сборка, она **будет** конфликтовать с вашими [GTK](https://wiki.archlinux.org/title/GTK)/[Qt](https://wiki.archlinux.org/title/Qt) темами, [Shell](https://wiki.archlinux.org/title/Command-line_shell), [SDDM](https://wiki.archlinux.org/title/SDDM), [GRUB](https://wiki.archlinux.org/title/GRUB), и т.д., и вы делаете это на свой страх и риск.

Для поддержки Nixos существует отдельный проект, поддерживаемый @[Hydenix](https://github.com/richen604/hydenix/tree/main)

:::note

Скрипт установки автоматически определит видеокарту NVIDIA и установит драйверы nvidia-dkms для вашего ядра.
Пожалуйста, убедитесь, что ваша видеокарта NVIDIA поддерживает драйверы dkms из списка, представленного [here](https://wiki.archlinux.org/title/NVIDIA).
:::

:::danger

Скрипт изменяет вашу конфигурацию `grub` или `systemd-boot` для включения NVIDIA DRM.

:::

<!-- ### Option 1 -->

### Автоматизированный скрипт установки

```shell
pacman -S --needed git base-devel
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
./install.sh
```

:::tip
Вы также можете добавить любые другие приложения, которые хотите установить вместе с HyDE, в файл `Scripts/pkg_user.lst` и передать этот файл в качестве параметра для их установки следующим образом:

```shell
./install.sh pkg_user.lst
```

:::

:::note
Используйте список из `Scripts/pkg_extra.lst`

или вы можете выполнить `cp  Scripts/pkg_extra.lst Scripts/pkg_user.lst`, если хотите установить все дополнительные пакеты.
:::

### Детальная и ручная установка

#### Клонирование

Клонируйте репозиторий и перейдите в каталог со скриптами. Затем убедитесь, что у пользователя есть права на [w]rite (запись) и e[x]ecute (выполнение) для клонированного каталога.

```shell
pacman -Sy git
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
```

:::caution
**НИКОГДА** не запускайте скрипт с помощью sudo или от имени пользователя root!
:::

#### Режимы

Скрипт установки можно запускать в разных режимах,

- для полной установки hyprland со всеми конфигурациями по умолчанию

```shell
./install.sh
```

- для полной или минимальной установки hyprland + ваши любимые пакеты  (например`pkg_user.lst`)

```shell
./install.sh pkg_user.lst # полная установка pkg_core.lst + pkg_user.lst с конфигурациями
./install.sh -i pkg_user.lst # минимальная установка pkg_core.lst + pkg_user.lst без конфигураций
```

- каждый [раздел](#process) также можно запустить независимо,

```shell
./install.sh -i # минимальная установка hyprland без каких-либо конфигураций
./install.sh -d # минимальная установка hyprland без каких-либо конфигураций, но с установкой (--noconfirm)
./install.sh -r # только восстанавливает файлы конфигурации
./install.sh -s # запуск и включение системных служб
./install.sh -t # тестовый запуск без выполнения (-irst для тестового запуска всего)
./install.sh -m # пропустить установку темы
./install.sh -n # пропустить установку nvidia
./install.sh -irst # для тестового запуска всего
```

<!-- ### Вариант 2

:::caution

Говорит автор HyDE-CLI.
Управление дотфайлами в CLI (Hyde {restore,backup,control,override}) еще не готово и может быть не на 100% совместимо с текущими hyprdots.
Это связано с несовместимостью мета-файлов, и вышеуказанные команды требуют ручного вмешательства.
Будьте уверены, что остальные команды работают отлично
и будут перенесены в собственный интерфейс командной строки `hydectl`.

:::

В качестве второго варианта установки вы также можете использовать `Hyde-install`, что для некоторых может быть проще.
Инструкции по установке HyDE смотрите в [Hyde-cli - Использование](https://github.com/kRHYME7/Hyde-cli?tab=readme-ov-file#usage).

### Вариант 3

...Скоро
Декларативный способ управления импортом и экспортом дотфайлов от других пользователей. Это не для начальной загрузки, а для обмена дотфайлами.

---

---

---

:::note

> Пожалуйста, перезагрузитесь после того, как скрипт установки завершится и вы впервые попадете на экран входа в SDDM (или на черный экран).
> ::: -->
