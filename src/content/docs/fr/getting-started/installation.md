---
title: Installation
description: Guide d'installation de HyDE
---

Le script d'installation est conçu pour une installation minimale d'[Arch Linux](https://wiki.archlinux.org/title/Arch_Linux), mais **peut** fonctionner sur certaines [distributions basées sur Arch](https://wiki.archlinux.org/title/Arch-based_distributions).
Bien que l'installation de HyDE à côté d'un autre [DE](https://wiki.archlinux.org/title/Desktop_environment)/[WM](https://wiki.archlinux.org/title/Window_manager) devrait fonctionner, en raison de sa configuration fortement personnalisée, il **entrera en conflit** avec votre thème [GTK](https://wiki.archlinux.org/title/GTK)/[Qt](https://wiki.archlinux.org/title/Qt), votre [Shell](https://wiki.archlinux.org/title/Command-line_shell), [SDDM](https://wiki.archlinux.org/title/SDDM), [GRUB](https://wiki.archlinux.org/title/GRUB), etc. et est à vos propres risques.

Pour le support Nixos, il y a un projet séparé maintenu @ [Hydenix](https://github.com/richen604/hydenix/tree/main)

:::note

Le script d'installation détectera automatiquement une carte NVIDIA et installera les pilotes nvidia-dkms pour votre noyau.
Veuillez vous assurer que votre carte NVIDIA prend en charge les pilotes dkms dans la liste fournie [ici](https://wiki.archlinux.org/title/NVIDIA).

:::danger

Le script modifie votre configuration `grub` ou `systemd-boot` pour activer NVIDIA DRM.

:::

### Installation automatisée

```shell
pacman -S --needed git base-devel
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
./install.sh
```

:::tip
Vous pouvez également ajouter d'autres applications que vous souhaitez installer avec HyDE dans `Scripts/pkg_user.lst` et passer le fichier comme paramètre pour l'installer comme ceci :

```shell
./install.sh pkg_user.lst
```

:::

:::note
Consultez votre liste depuis `Scripts/pkg_extra.lst`
ou vous pouvez `cp Scripts/pkg_extra.lst Scripts/pkg_user.lst` si vous souhaitez installer tous les packages supplémentaires.
:::

### Installation granulaire et manuelle

#### Cloner

Clonez le dépôt et changez le répertoire vers le chemin du script. Assurez-vous ensuite que l'utilisateur a les permissions d'écriture [w] et d'exécution [x] sur le répertoire cloné

```sh
pacman -Sy git
git clone --depth 1 https://github.com/prasanthrangan/hyprdots ~/HyDE
cd ~/HyDE/Scripts
```

:::caution
**NE JAMAIS** exécuter le script avec sudo ou en tant qu'utilisateur root !
:::

#### Modes

Le script d'installation peut être exécuté dans différents modes,

- pour l'installation complète par défaut de hyprland avec toutes les configurations

```shell
./install.sh
```

- pour l'installation complète ou minimale de hyprland + vos packages préférés (ex.`pkg_user.lst`)

```shell
./install.sh pkg_user.lst # installation complète pkg_core.lst + pkg_user.lst avec configurations
./install.sh -i pkg_user.lst # installation minimale pkg_core.lst + pkg_user.lst sans configurations
```

- chaque [section](#processus) peut également être exécutée indépendamment comme,

```shell
./install.sh -i # installation minimale de hyprland sans configurations
./install.sh -d # installation minimale de hyprland sans configurations, mais avec installation (--noconfirm)
./install.sh -r # restaure uniquement les fichiers de configuration
./install.sh -s # démarre et active les services système
./install.sh -t # test sans exécution (-irst pour tester tout)
./install.sh -m # ignore l'installation du thème
./install.sh -n # ignore l'installation de nvidia
./install.sh -irst # pour faire un test complet
```