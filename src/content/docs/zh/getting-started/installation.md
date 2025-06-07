---
title: 安装指南
description: HyDE 安装指南
---

该安装脚本专为最小化安装的 [Arch Linux](https://wiki.archlinux.org/title/Arch_Linux) 设计，但**可能**适用于某些 [基于Arch的发行版](https://wiki.archlinux.org/title/Arch-based_distributions)。
虽然HyDE可以与其他[桌面环境](https://wiki.archlinux.org/title/Desktop_environment)/[窗口管理器](https://wiki.archlinux.org/title/Window_manager)同时安装，但由于这是一个高度定制化的设置，它**必定会**与您的[GTK](https://wiki.archlinux.org/title/GTK)/[Qt](https://wiki.archlinux.org/title/Qt)主题、[Shell](https://wiki.archlinux.org/title/Command-line_shell)、[SDDM](https://wiki.archlinux.org/title/SDDM)、[GRUB](https://wiki.archlinux.org/title/GRUB)等产生冲突，风险自负。

对于Nixos的支持，有一个单独维护的项目 @ [Hydenix](https://github.com/richen604/hydenix/tree/main)

:::note

安装脚本会自动检测NVIDIA显卡并为您的内核安装nvidia-dkms驱动。
请确保您的NVIDIA显卡支持dkms驱动，支持的显卡列表请参考[这里](https://wiki.archlinux.org/title/NVIDIA)。
:::

:::danger

该脚本会修改您的`grub`或`systemd-boot`配置以启用NVIDIA DRM。

:::

<!-- ### Option 1 -->

### 自动安装脚本

```shell
pacman -S --needed git base-devel
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
./install.sh
```

:::tip
您还可以将任何希望与 HyDE 一起安装的应用程序添加到 `Scripts/pkg_user.lst` 文件中，并将该文件作为参数传递以进行安装，如下所示：

```shell
./install.sh pkg_user.lst
```
:::

:::note
"一起安装的应用程序"可以参考 `Scripts/pkg_extra.lst` 列表，  
或者如果您希望安装所有额外的软件包，可以运行 `cp Scripts/pkg_extra.lst Scripts/pkg_user.lst`。
:::

### 分步手动安装

#### 克隆仓库

克隆仓库并将当前工作目录跳转至脚本路径。然后确保用户对克隆目录具有写[w]和执行[x]权限

```shell
pacman -Sy git
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
```

:::caution
**绝对不要** 以root用户或sudo身份执行脚本！
:::

#### 模式

安装脚本可以以不同模式执行，

- 默认情况下安装hyprland及所有配置

```shell
./install.sh
```

- 完整或最小化安装hyprland + 您喜欢的软件包（例如pkg_user.lst）

```shell
./install.sh pkg_user.lst # 完整安装 pkg_core.lst + pkg_user.lst 包含配置
./install.sh -i pkg_user.lst # 最小化安装 pkg_core.lst + pkg_user.lst 不包含配置
```

- 每个 [部分](#process)也可以独立执行，

```shell
./install.sh -i # 最小化安装hyprland，不包含任何配置
./install.sh -d # 最小化安装hyprland，不包含任何配置，但使用(--noconfirm)安装
./install.sh -r # 仅恢复配置文件
./install.sh -s # 启动并启用系统服务
./install.sh -t # 测试运行而不实际执行(-irst用于所有操作的试运行)
./install.sh -m # 跳过主题安装
./install.sh -n # 跳过nvidia安装
./install.sh -irst # 对所有操作进行试运行
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
