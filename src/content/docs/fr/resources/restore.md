---
title: Restauration de la Configuration
description: Logique du script de restauration
---

:::note

> "restore" dans ce contexte signifie restaurer les dotfiles depuis le dépôt vers votre $HOME, et non l'inverse.

```sh
./restore_cfg.sh </chemin/vers/fichier.psv> <optionnel /chemin/vers/clone/hyde>
```

:::

## Valeurs Séparées par des Pipes (PSV)

C'est un fichier de valeurs séparées par des pipes. Il contient les chemins des dotfiles et leurs dépendances de packages respectives.

#### Note

- Les lignes commençant par `#` sont des commentaires.
- La seule variable connue est `${HOME}`.
- C'est un fichier à 4 colonnes séparées par `|`.
- Chaque colonne doit utiliser des espaces pour séparer les éléments du tableau.

#### Structure

```shell
flag|chemin|cible|dépendance
```

#### Flags

- **( P ) Populate/Preserved**

  - Ce flag garantit que la cible n'est copiée que si elle n'existe pas déjà. Il est utile pour préserver l'état actuel de la cible, empêchant toute écrasement ou modification des fichiers ou répertoires existants.

- **( S ) Sync**

  - Si le(s) fichier(s) cible existent, les écraser.
  - Si la cible est un répertoire, n'écraser que les fichiers listés.
  - Préserver les autres fichiers dans le répertoire cible qui ne sont pas listés.
  - Ce comportement est similaire à la commande `cp -r`.

- **( O ) Overwrite**

  - Ce flag effectue une opération de synchronisation agressive. Il garantit que la cible est complètement remplacée par la source.
  - Si la cible est un répertoire, chaque fichier et sous-répertoire en son sein sera écrasé par les éléments correspondants de la source.
  - Si la cible est un fichier, il sera entièrement écrasé par le fichier source.
  - Cette opération ne préserve aucun fichier ou répertoire existant dans l'emplacement cible ; tout est remplacé.
  - Utile pour mettre à jour les configurations et scripts principaux.

- **( B ) Backup**
  - Sauvegarder la cible.
  - Tous les flags P, S, O sauvegarderont également le fichier/répertoire cible.

<details>
<summary>Exemple de fichier PSV</summary>

```shell
 Fichiers principaux de HyDE 
P|${HOME}/.config/hyde|config.toml|hyprland
P|${HOME}/.config/hypr|hyde.conf animations.conf windowrules.conf keybindings.conf userprefs.conf monitors.conf|hyprland
P|${HOME}/.config/hypr|nvidia.conf|hyprland nvidia-utils
P|${HOME}/.config/hypr/themes|theme.conf wallbash.conf colors.conf|hyprland
P|${HOME}/.local/state|hyde|hyprland

S|${HOME}/.config/hypr|hyprland.conf|hyprland
S|${HOME}/.local|bin|hyprland
S|${HOME}/.config|gtk-3.0|nwg-look
S|${HOME}/.config|nwg-look|nwg-look
S|${HOME}/.config|xsettingsd|nwg-look
S|${HOME}|.gtkrc-2.0|nwg-look
S|${HOME}/.config|Kvantum|kvantum
S|${HOME}/.config|qt5ct|qt5ct
S|${HOME}/.config|qt6ct|qt6ct
S|${HOME}/.config/hyde|wallbash|hyprland
S|${HOME}/.config/hypr|animations|hyprland

O|${HOME}/.local/share|hyde|hyprland
O|${HOME}/.local/lib|hyde|hyprland

 Éditeur 
P|${HOME}/.config/Code - OSS/User|settings.json|code
P|${HOME}/.config/Code/User|settings.json|visual-studio-code-bin
P|${HOME}/.config/VSCodium/User|settings.json|vscodium-bin

 Barre 
P|${HOME}/.config/waybar|config.ctl|waybar
S|${HOME}/.config/waybar|modules config.jsonc theme.css style.css|waybar

 Terminal 
P|${HOME}/.config|lsd|lsd
S|${HOME}/.config|fastfetch|fastfetch
S|${HOME}/.config/kitty|hyde.conf theme.conf|kitty
P|${HOME}/.config/kitty|kitty.conf|kitty

 Shell 
P|${HOME}/.config|fish|fish
P|${HOME}|.zshrc .hyde.zshrc .p10k.zsh|zsh zsh-theme-powerlevel10k pokego-bin
S|${HOME}|.zshenv|zsh zsh-theme-powerlevel10k

 Explorateur de fichiers 
P|${HOME}/.local/state|dolphinstaterc|dolphin
P|${HOME}/.config|baloofilerc|dolphin
S|${HOME}/.config/menus|applications.menu|dolphin
S|${HOME}/.config|dolphinrc|dolphin
S|${HOME}/.config|kdeglobals|dolphin
S|${HOME}/.local/share/kio/servicemenus|hydewallpaper.desktop|dolphin
S|${HOME}/.local/share/kxmlgui5|dolphin|dolphin
S|${HOME}/.local/share|dolphin|dolphin

 Entrée 
P|${HOME}/.config|libinput-gestures.conf|libinput-gestures

 Wayland 
P|${HOME}/.config|spotify-flags.conf|spotify
P|${HOME}/.config|code-flags.conf|code
P|${HOME}/.config|code-flags.conf|visual-studio-code-bin
P|${HOME}/.config|vscodium-flags.conf|vscodium-bin
P|${HOME}/.config|electron-flags.conf|electron

 Notifications 
S|${HOME}/.config|dunst|dunst

 Jeux 
S|${HOME}/.config|MangoHud|mangohud

 Lanceur 
S|${HOME}/.config|rofi|rofi
S|${HOME}/.config|wlogout|wlogout

 Écran de verrouillage 
S|${HOME}/.config|swaylock|swaylock-effects
P|${HOME}/.config/hypr|hyprlock.conf|hyprlock
S|${HOME}/.config/hypr|hyprlock|hyprlock

 Démon d'inactivité 
P|${HOME}/.config/hypr|hypridle.conf|hypridle
```

</details>

## Configuration TOML

🚧 🚧 En cours de développement 🚧🚧

Le fichier de configuration PSV est pratique pour le script à lire et écrire. Cependant, il est très restrictif et peu convivial.
Pour une personnalisation plus poussée, nous pouvons utiliser des fichiers de configuration TOML.

...
