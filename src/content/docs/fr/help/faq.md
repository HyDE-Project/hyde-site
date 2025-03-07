---
title: FAQ & Conseils
description: Questions fréquemment posées sur HyDE
---

:::tip
Les questions liées à Hyprland doivent être consultées dans le [Wiki Hyprland](https://wiki.hyprland.org)
:::

### Ajouter des fonds d'écran globaux ou personnalisés

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

#### Fonds d'écran globaux

Les fonds d'écran globaux seront affichés dans le sélecteur pour tous les thèmes.

Dans votre `xdg_config/hyde/config.toml`, ajoutez ceci.

```toml
[wallpaper]
custom_paths = [
    "$XDG_PICTURES_DIR",
    "/chemin/vers/beaux/fonds/écran",
] # Liste des chemins pour chercher les fonds d'écran

```

#### Fonds d'écran personnalisés par thème

##### Option 1 : Interface graphique

Utilisation de `dolphin` pour sélectionner un ou plusieurs fonds d'écran pour un thème

![image](https://github.com/user-attachments/assets/a72458fc-da94-45e4-8dd4-dba48b910e82)

1. Sélectionnez l'image
2. Clic droit et survolez, "Définir comme fond d'écran"
3. Choisissez un thème de destination

##### Option 2 : Ligne de commande

Les fonds d'écran personnalisés sont ajoutés par thème.

1. Ajoutez un fond d'écran dans `~/.config/hyde/themes/Theme-Name/wallpapers/*`.
2. Puis exécutez `hyde-shell reload`

---

---

</details>

### Comment enregistrer mon écran ?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Vous pouvez enregistrer votre écran en utilisant les packages d'enregistrement basés sur wayland suivants.

`wl-screenrec`

`wf-recorder`

`kooha`

`obs`

</details>

### Comment définir mes propres préférences ?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Vous pouvez définir vos préférences Hyprland dans `xdg_config/hypr/userprefs.conf`. Ces paramètres sont conservés même lors de la mise à jour du dépôt.

Voir `Configuration` > `Hyprland` pour apprendre comment nous structurons les configurations Hyprland.

</details>

### Comment mettre à jour mes dotfiles à la dernière version ?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

```sh
cd ~/HyDE/Scripts
git pull
./install.sh -r
```

Voir `Ressources` > `Restaurer la Configuration` pour comprendre comment cela fonctionne

</details>

### Comment définir la résolution et le taux de rafraîchissement de mon moniteur ?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Vous pouvez définir la résolution et le taux de rafraîchissement du moniteur dans `~/.config/hypr/monitors.conf`

`monitor = DP-1,2560x1440@144,0x0, 1` >> Le @ définit le taux de rafraîchissement

C'est une question "comment faire avec hyprland", consultez toujours leur wiki, https://wiki.hyprland.org/Configuring/Monitors/

</details>

### Comment supprimer les personnages Pokémon ou changer l'intro du terminal au démarrage ?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Vous devez modifier le fichier `.hyde.zshrc` dans votre répertoire personnel à `~/.hyde.zshrc`

1. Modifiez `~/.hyde.zshrc`
2. Ajoutez un # à la ligne 158 où se trouve pokego --no-title -r 1,3,6
3. Sauvegardez

</details>

### Comment modifier le fond d'écran ou les paramètres de SDDM ?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

- Changer le fond d'écran
  Vous devez exécuter manuellement le script `~/.config/hypr/sddmwall.sh` sur le fond d'écran que vous souhaitez pour l'écran de connexion, vous pouvez sélectionner le fond d'écran depuis les thèmes et vous assurer qu'il s'agit du fond d'écran swww actuel.
- Changer les paramètres SDDM
  (couleurs, arrière-plan, format de date, police) peuvent être configurés dans `/usr/share/sddm/themes/corners/theme.conf`

Si vous souhaitez modifier la structure, vous devrez modifier les fichiers qml dans /usr/share/sddm/themes/corners/components

</details>

### Comment changer la disposition du clavier ?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Lisez d'abord ceci : https://wiki.hyprland.org/Configuring/Variables/#input

Dans HyDE, nous avons le fichier `~/.config/hypr/userprefs.conf`, ajoutez la configuration là-bas.

```
input {
  kb_layout = us,de
}
```

Utilisez `SUPER` + `K` pour basculer entre les dispositions.

</details>

### Pas de vignettes dans les sélecteurs ?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Si vos vignettes ne se chargent pas, essayez de reconstruire votre cache de fonds d'écran.

`swwwallcache.sh`

</details>

### Comment modifier Waybar ?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Vous pouvez définir vos modules requis dans ce fichier - `~/.config/waybar/config.ctl`

Consultez la documentation de personnalisation ici dans le Wiki. [Waybar](https://github.com/Alexays/Waybar/wiki)

</details>

### Comment supprimer le flou sur Waybar ?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Vous pouvez supprimer le flou sur Waybar en supprimant blurls = waybar dans le répertoire des thèmes en commentant la ligne à la fin de chaque fichier `theme.conf`.
Répertoire des thèmes : `~/.config/hypr/themes/`

</details>

### Comment lancer la barre de jeux montrée dans l'aperçu ?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Vous aurez besoin d'un jeu Steam ou d'une bibliothèque Lutris installée, puis exécutez :

`~/.config/hypr/scripts/gamelauncher.sh <n>` # où n est le style [1-4]

</details>

### Comment le lancer depuis le lanceur d'applications ?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Trouvez l'entrée .desktop en utilisant cette commande utile find /usr/share/applications -name '\*code.desktop' image
Vous devez copier puis modifier l'entrée .desktop de chaque application dans `~/.local/share/applications/`
Trouvez la partie Exec = puis ajoutez les flags
image

> 📢 N'oubliez pas, si vous souhaitez modifier ou créer un fichier .desktop, c'est une bonne pratique de le placer dans ~/.local/share/applications/ pour éviter de modifier les fichiers système. Cela garantit que vos modifications sont spécifiques à l'utilisateur et ne nécessitent pas de privilèges administratifs

Voici le [wiki](https://wiki.archlinux.org/title/Desktop_entries) sur la façon de gérer les entrées .desktop.

</details>

### Xwayland(👹)

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Veuillez consulter le wiki Hyprland pour l'explication.

[XWayland](https://wiki.hyprland.org/Configuring/XWayland/)
Notez que si l'application ne prend pas en charge Wayland, HyDE, Hyprland et Wayland lui-même n'ont pas le pouvoir de résoudre magiquement le problème ! Ne signalez pas cela comme un problème, essayez plutôt d'ouvrir des questions sur le [panneau de discussion](https://github.com/HyDE-Project/Hyde-cli) pour obtenir de l'aide.

Problèmes connus

- Quelques problèmes de mise à l'échelle avec les configurations rofi, car elles sont créées en fonction de mon affichage ultralarge (21:9).
- Verrouillage d'écran aléatoire, voir https://github.com/swaywm/sway/issues/7046
- Le lancement de rofi depuis Waybar interrompt l'entrée de la souris (ajout d'un sleep 0.1 comme solution), voir https://github.com/Alexays/Waybar/issues/1850
- Les applications Flatpak QT ne suivent pas le thème système

</details> 