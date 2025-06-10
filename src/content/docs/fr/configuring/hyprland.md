---
title: Hyprland
description: Configuration liée à Hyprland
---

<link rel="stylesheet" href="/src/styles/tables.css">

# Arborescence des fichiers de configuration

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

**Lisez d'abord le [Wiki Hyprland](https://wiki.hyprland.org/) !**

:::

# Configuration Hyprland de HyDE

Puisque Hyprland charge `~/.config/hypr/hyprland.conf`, la configuration Hyprland de HyDE est divisée en trois sections :

- [Configuration de base](#1-configuration-de-base)
- [Surcharges](#2-surcharges)
- [Utilisateurs](#3-utilisateurs)

## 1. Configuration de base

Cette section contient la configuration par défaut de HyDE. Il est recommandé de ne pas modifier cette section.

**Chemin du fichier :** `$XDG_DATA_HOME/hyde/hyprland.conf`

Ce fichier est chargé au-dessus des autres configurations dans ~/.config/hypr/hyprland.conf`.

```ini
# Configuration de base
source = ~/.local/share/hyde/hyprland.conf
```

## 2. Surcharges

Cette section est destinée à surcharger la configuration par défaut de HyDE.

Conformément à la documentation [Définition des Variables](https://wiki.hyprland.org/Hypr-Ecosystem/hyprlang/#defining-variables) de Hyprland, HyDE utilise $VARIABLES pour exposer les configurations par défaut à surcharger.

Modifiez cette section si vous souhaitez :

- Changer les variables d'environnement et de démarrage
- Empêcher une application/service de démarrer
- Surcharger les variables par défaut de HyDE

:::note

Pour désactiver une variable, laissez-la vide

:::

**Chemin du fichier :** `$XDG_CONFIG_HOME/hypr/hyde.conf`

### Variables de configuration HyDE

| Variable             | Description                 | Valeur par défaut            |
| -------------------- | --------------------------- | ---------------------------- |
| $mainMod             | Modificateur clavier principal        | SUPER (touche Windows)       |
| $QUICKAPPS           | Utilisé pour le lanceur rapide | (Vide)                    |
| $BROWSER             | Navigateur par défaut       | firefox                      |
| $EDITOR              | Éditeur par défaut          | code                         |
| $EXPLORER            | Gestionnaire de fichiers par défaut | dolphin              |
| $TERMINAL            | Terminal par défaut         | kitty                        |
| $LOCKSCREEN          | Écran de verrouillage par défaut | hyprlock               |
| $IDLE                | Gestionnaire d'inactivité par défaut | hypridle          |
| $GTK_THEME           | Thème GTK                   | Wallbash-Gtk                 |
| $ICON_THEME          | Thème d'icônes              | Tela-circle-dracula          |
| $COLOR_SCHEME        | Schéma de couleurs          | prefer-dark                  |
| $CURSOR_THEME        | Thème du curseur            | Bibata-Modern-Ice            |
| $CURSOR_SIZE         | Taille du curseur           | 30                           |
| $FONT                | Police                      | Canterell                    |
| $FONT_SIZE           | Taille de la police         | 10                           |
| $DOCUMENT_FONT       | Police des documents        | Cantarell                    |
| $DOCUMENT_FONT_SIZE  | Taille de police des documents | 10                       |
| $MONOSPACE_FONT      | Police à chasse fixe        | CaskaydiaCove Nerd Font Mono |
| $MONOSPACE_FONT_SIZE | Taille de police à chasse fixe | 9                        |
| $FONT_ANTIALIASING   | Lissage des polices          | rgba                         |
| $FONT_HINTING        | Ajustement des polices       | full                         |

### Commandes de démarrage ($start.*)

Les commandes par défaut au démarrage.

| Variable                    | Description                                                  | Valeur par défaut                                                                           |
| --------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| $start.XDG_PORTAL_RESET     | Réinitialise XDG Portal                                      | $scrPath/resetxdgportal.sh                                                                   |
| $start.DBUS_SHARE_PICKER    | Met à jour l'environnement DBus pour le sélecteur de partage | dbus-update-activation-environment --systemd --all                                           |
| $start.SYSTEMD_SHARE_PICKER | Importe les variables d'environnement pour le sélecteur de partage via systemd | systemctl --user import-environment QT_QPA_PLATFORMTHEME WAYLAND_DISPLAY XDG_CURRENT_DESKTOP |
| $start.BAR                  | Démarre Waybar                                               | waybar                                                                                       |
| $start.NOTIFICATIONS        | Démarre le démon de notifications                            | swaync                                                                                       |
| $start.APPTRAY_BLUETOOTH    | Démarre l'applet Bluetooth                                   | blueman-applet                                                                               |
| $start.WALLPAPER            | Définit le fond d'écran                                      | $scrPath/swwwallpaper.sh                                                                     |
| $start.TEXT_CLIPBOARD       | Démarre le gestionnaire de presse-papiers texte              | wl-paste --type text --watch cliphist store                                                  |
| $start.IMAGE_CLIPBOARD      | Démarre le gestionnaire de presse-papiers image              | wl-paste --type image --watch cliphist store                                                 |
| $start.BATTERY_NOTIFY       | Démarre le script de notification de batterie               | $scrPath/batterynotify.sh                                                                    |
| $start.NETWORK_MANAGER      | Démarre l'applet du gestionnaire réseau                      | nm-applet --indicator                                                                        |
| $start.REMOVABLE_MEDIA      | Démarre le gestionnaire de médias amovibles                  | udiskie --no-automount --smart-tray                                                          |
| $start.AUTH_DIALOGUE        | Démarre le script de dialogue d'authentification             | $scrPath/polkitkdeauth.sh                                                                    |
| $start.IDLE_DAEMON          | Démarre le démon d'inactivité                               | $IDLE                                                                                        |

### Variables d'environnement ($env.*)

| Variable                                 | Description                                    | Valeur par défaut             |
| ---------------------------------------- | ---------------------------------------------- | ----------------------------- |
| $env.GDK_BACKEND                         | Backend GTK à utiliser (Wayland préféré)       | wayland,x11,*                 |
| $env.QT_QPA_PLATFORM                     | Plateforme Qt à utiliser (Wayland)            | wayland                       |
| $env.SDL_VIDEODRIVER                     | Pilote vidéo SDL2 (Wayland)                   | wayland                       |
| $env.CLUTTER_BACKEND                     | Backend Clutter (Wayland)                     | wayland                       |
| $env.XDG_CURRENT_DESKTOP                 | Environnement de bureau XDG actuel           | Hyprland                      |
| $env.XDG_SESSION_TYPE                    | Type de session XDG                          | wayland                       |
| $env.XDG_SESSION_DESKTOP                 | Bureau de session XDG                        | Hyprland                      |
| $env.QT_AUTO_SCREEN_SCALE_FACTOR         | Mise à l'échelle automatique de l'écran Qt    | 1                             |
| $env.QT_QPA_PLATFORM                     | Plateforme Qt                                | wayland                       |
| $env.QT_WAYLAND_DISABLE_WINDOWDECORATION | Désactive les décorations de fenêtre sur les applications Qt | 1                     |
| $env.QT_QPA_PLATFORMTHEME                | Thème de plateforme Qt                       | qt6ct                         |
| $env.PATH                                | Variable d'environnement PATH                | (Vide)                        |
| $env.MOZ_ENABLE_WAYLAND                  | Active Wayland pour Firefox                  | 1                             |
| $env.GDK_SCALE                           | Échelle GDK pour Xwayland sur HiDPI          | 1                             |
| $env.ELECTRON_OZONE_PLATFORM_HINT        | Indice de plateforme Electron Ozone          | auto                          |
| $env.XDG_RUNTIME_DIR                     | Répertoire d'exécution XDG                   | $XDG_RUNTIME_DIR              |
| $env.XDG_CONFIG_HOME                     | Répertoire de configuration XDG              | $HOME/.config                 |
| $env.XDG_CACHE_HOME                      | Répertoire de cache XDG                     | $HOME/.cache                  |
| $env.XDG_DATA_HOME                       | Répertoire de données XDG                   | $HOME/.local/share            |
| $LAYOUT_PATH                             | Chemin vers la configuration de mise en page Hyprlock | /path/to/hyprlock/layout.conf |
| $BACKGROUND_PATH                         | Chemin vers l'image de fond Hyprlock         | $HYPRLOCK_BACKGROUND          |

:::danger

Si vous modifiez ceci, c'est que vous savez ce que vous faites. 

:::

## 3. Utilisateurs

Cette section est destinée à la configuration utilisateur. Il est recommandé de modifier cette section selon vos préférences.

**Chemins des fichiers :**

- `./keybindings.conf`
- `./windowrules.conf`
- `./monitors.conf`
- `./userprefs.conf`

---

:::tip

Vous n'aurez probablement besoin que de ces fichiers pour configurer vos préférences.
Les variables Hyprland peuvent être surchargées, vous pouvez donc modifier les valeurs par défaut selon vos goûts.

De plus, Hyprland peut recharger à chaud les fichiers de configuration, vous pouvez donc les modifier et voir les changements immédiatement.

:::

Maintenant, vous devriez savoir à quoi sert chaque fichier. Consultez le [Wiki Hyprland](https://wiki.hyprland.org) pour plus d'informations et pour obtenir votre expérience de bureau parfaite.

Voir aussi [FAQ et Conseils](../help/faq.md)
