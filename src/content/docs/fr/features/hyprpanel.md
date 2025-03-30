---
title: HyprPanel
description: Template wallbash pour HyprPanel
---

![241005_14h24m09s_screenshot](https://github.com/user-attachments/assets/355aa7f0-856b-47f6-8ced-58bc0c4a3481)
![241005_14h26m11s_screenshot](https://github.com/user-attachments/assets/e7551bec-573c-4d37-91b9-de9400176cac)
![241005_14h19m51s_screenshot](https://github.com/user-attachments/assets/11f40837-08fe-4979-b16e-b1d0a6fd4fcd)


### Template Wallbash pour HyprPanel

Ce template est conçu pour être utilisé avec HyprPanel. Pour plus d'informations, visitez [HyprPanel](https://hyprpanel.com/).

> **NOTE :** Ce n'est pas un package autonome. Assurez-vous d'avoir HyDe installé et une configuration HyprPanel fonctionnelle.

## Utilisation

Ajoutez le fichier [/hyprpanel.dcol](https://github.com/HyDE-Project/HyprPanel/blob/3f20c8922d7c3547688a2b16eb74846170a9f224/hyprpanel.dcol) soit dans `~/.config/hyde/wallbash/Wall-Ways` soit dans `~/.config/hyde/wallbash/Wall-Dcol`.

### Différence entre Wall-Ways et Wall-Dcol

- **Wall-Ways** : Ce fichier est toujours utilisé, quel que soit le mode thème ou le mode wallbash.
- **Wall-Dcol** : Ce fichier tente de trouver le template de thème (si en mode thème) et utilise la couleur dominante des fonds d'écran si aucun template n'est disponible.

### Utilisation de ce Template pour les Thèmes

1. **Ligne d'en-tête** :
    ```sh
    ${cacheDir}/landing/hyprpanel_wallbash.json | ags -r "useTheme('${cacheDir}/landing/hyprpanel_wallbash.json')"
    ```
    Cette commande définit le thème en utilisant le fichier `.json` généré par wallbash mis en cache.
    `$cacheDir` est le chemin vers `~/.cache/hyde/`.

2. **Génération Wallbash** :
    ```sh
    ${cacheDir}/landing/hyprpanel_wallbash.json
    ```
    Cette commande génère le fichier `.json` wallbash.

3. **Commande optionnelle** :
    ```sh
    ags -r "useTheme('${cacheDir}/landing/hyprpanel_wallbash.json')"
    ```
    Cette commande utilise le fichier `.json` généré par wallbash mis en cache pour définir le thème. 