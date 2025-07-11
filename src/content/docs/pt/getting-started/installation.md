---
title: Instalação
description: Guia de Instalação do HyDE
---

// TODO: Por artigos

Este script de instalação foi projetado para um sistema mínimo [Arch Linux](https://wiki.archlinux.org/title/Arch_Linux_(Portugu%C3%AAs)) , mas **pode** funcionar em alguns [distros derivados do Arch](https://wiki.archlinux.org/title/Arch-based_distributions_(Portugu%C3%AAs)).
Embora instalar HyDE com outro [DE](https://wiki.archlinux.org/title/Desktop_environment_(Portugu%C3%AAs)/[WM](https://wiki.archlinux.org/title/Window_manager_(Portugu%C3%AAs) funcione, como ele é uma configuração fortemente customizada, ele **irá** conflitar com a personalização visual do [GTK](https://wiki.archlinux.org/title/GTK_(Portugu%C3%AAs)/[Qt](https://wiki.archlinux.org/title/Qt_(Portugu%C3%AAs), [Shell](https://wiki.archlinux.org/title/Command-line_shell_(Portugu%C3%AAs), [SDDM](https://wiki.archlinux.org/title/SDDM_(Portugu%C3%AAs), [GRUB](https://wiki.archlinux.org/title/GRUB_(Portugu%C3%AAs), etc., e é por sua própria conta e risco.

Para suporte a NixOS, há um projeto separado mantido: @ [Hydenix](https://github.com/richen604/hydenix/tree/main).

:::note

O script de instalação irá automaticamente detectar uma placa NVIDIA, e instalará drivers nvidia-dkms para o seu kernel
Por favor, verifique se sua placa NVIDIA tem suporte aos drivers dkms na lista indicada [aqui](https://wiki.archlinux.org/title/NVIDIA_(Portugu%C3%AAs).
:::

:::danger

O script modifica sua configuração `grub` ou `systemd-boot` para habilitar DRM NVIDIA.

:::

<!-- ### Option 1 -->

### Script automático de instalação.

```shell
pacman -S --needed git base-devel
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
./install.sh
```

:::tip
Você pode adicionar quaisquer outros apps que você deseja instalar com o HyDE no arquivo `Scripts/pkg_user.lst` e passar como parâmetro para instalá-los dessa maneira:

```shell
./install.sh pkg_user.lst
```

:::

:::note
Use o `Scripts/pkg_extra.lst` como referência para sua lista,
ou `cp  Scripts/pkg_extra.lst Scripts/pkg_user.lst` se deseja instalar todos os pacotes extras.
:::

### Instalação manual e granular

#### Clone

Clone o repositório e mude o diretório para o caminho do script. Também garante que o usuário tem permissão de escrever[w] e de e[x]ecutar no diretório clonado.
```shell
pacman -Sy git
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
```

:::caution
**JAMAIS** execute o script com sudo ou como usuario root!
:::

#### Modos

O script de instalação pode ser executado em diferentes modos

- Para instalação completa padrão hyprland com todas as configurações

```shell
./install.sh
```

- Para instalação completa ou minima + seus pacotes favoritos (ex.`pkg_user.lst`)

```shell
./install.sh pkg_user.lst # instalação completa pkg_core.lst + pkg_user.lst com configurações
./install.sh -i pkg_user.lst # instalação minima pkg_core.lst + pkg_user.lst sem configurações.
```

- Cada [seção](#process) pode ser executada de forma independente como,

```shell
./install.sh -i # instalação hyprland minima sem quaisquer configurações
./install.sh -d # instalação minima hyprland sem quaisquer configurações, mas com instalação (--noconfirm).
./install.sh -r # apenas restaura os arquivos de configuração
./install.sh -s # inicia e habilita serviços do sistema
./install.sh -t # Teste sem executar (-irst para simular tudo)
./install.sh -m # pula a instalação de temas
./install.sh -n # pula a instalação nvidia
./install.sh -irst # para testar tudo sem aplicar nada
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
