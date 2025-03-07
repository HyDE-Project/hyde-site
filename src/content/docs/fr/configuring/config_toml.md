---
title: Config Toml
description: Guide de configuration de HyDE
sidebar:
  order: 2
---

<style>
  table {
    width: 100%;
    margin: 0em 1em;
  }
  th, td {
    border: 0.1em solid var(--sl-color-gray-5);
    padding: 1em 2em;
    text-align: left;
  }
  th {
    background-color: var(--sl-color-accent);
    color: var(--sl-color-accent-high-contrast);
    text-align: center;
    margin: 10em;
    padding: 10em;
  }
  :root[data-theme="light"] th {
    color: var(--sl-color-white);
  }
</style>

HyDE expose le fichier `xdg_config/hyde/config.toml` pour que les utilisateurs puissent le modifier. Cela permet aux utilisateurs d'interagir avec les scripts sans utiliser d'arguments de commande.

---

### Variable d'environnement

Exemple :

| Clé                  | Description            | Par défaut |
| ------------------- | ---------------------- | ---------- |
| WARP_ENABLE_WAYLAND | Active le support Wayland |           |

### [battery.notify]

| Clé      | Description             | Par défaut |
| -------- | ----------------------- | ---------- |
| dock     | Notification de batterie en dock | true    |
| interval | Intervalle de notification de batterie | 5       |
| notify   | Notification de batterie | 1140    |
| timer    | Timer de notification de batterie | 120     |

### [battery.notify.execute]

| Clé         | Description                        | Par défaut             |
| ----------- | ---------------------------------- | --------------------- |
| charging    | Exécution lors de la charge       | ""                    |
| critical    | Exécution en état critique        | "systemctl suspend"   |
| discharging | Exécution lors de la décharge     | ""                    |
| low         | Exécution en état faible          | ""                    |
| unplug      | Exécution lors du débranchement   | ""                    |

### [battery.notify.threshold]

| Clé      | Description                       | Par défaut |
| -------- | --------------------------------- | ---------- |
| critical | Seuil critique de la batterie    | 10         |
| full     | Seuil de batterie pleine         | 90         |
| low      | Seuil de batterie faible         | 20         |
| unplug   | Seuil de débranchement           | 80         |

### [brightness]

| Clé    | Description                                     | Par défaut |
| ------ | ----------------------------------------------- | ---------- |
| notify | Notification de contrôle de la luminosité      | true       |
| steps  | Nombre d'étapes d'augmentation/diminution de la luminosité | 5    |

### [cava.hyprlock]

| Clé           | Description                                   | Par défaut    |
| ------------- | --------------------------------------------- | ------------- |
| bar           | Caractères de barre `cava` pour hyprlock        | "▁▂▃▄▅▆▇█"    |
| max_instances | Nombre maximum d'instances `cava` pour hyprlock | 1             |
| range         | Nombre de barres `cava` pour hyprlock           | 7             |
| standby       | Caractère de veille `cava` pour hyprlock        | "🎶"          |
| width         | Largeur de la barre `cava` pour hyprlock           | 20            |

### [cava.stdout]

| Clé           | Description                      | Par défaut    |
| ------------- | -------------------------------- | ------------- |
| bar           | Caractères de barre `cava`         | "▁▂▃▄▅▆▇█"    |
| max_instances | Nombre maximum d'instances `cava`  | 1             |
| range         | Nombre de barres `cava`            | 7             |
| standby       | Caractère de veille `cava`         | "🎶"          |
| width         | Largeur de la barre `cava`            | 20            |

### [cava.waybar]

| Clé           | Description                                 | Par défaut    |
| ------------- | ------------------------------------------- | ------------- |
| bar           | Caractères de barre `cava` pour waybar        | "▁▂▃▄▅▆▇█"    |
| max_instances | Nombre maximum d'instances `cava` pour waybar | 1             |
| range         | Nombre de barres `cava`                       | 7             |
| standby       | Caractère de veille `cava`                    | "🎶"          |
| width         | Largeur de la barre `cava`                       | 20            |

### [hypr.config]

| Clé      | Description                                            | Par défaut               |
| -------- | ------------------------------------------------------ | ----------------------- |
| sanitize | Liste des regex à nettoyer dans THEME_NAME/hypr.theme  | ['.*rgba\(.*,*,*,*,']  |

### [notification]

| Clé       | Description                 | Par défaut              |
| --------- | --------------------------- | ---------------------- |
| font      | Police pour les notifications | "mononoki Nerd Font"   |
| font_size | Taille de police pour les notifications | 8         |

### [rofi]

| Clé   | Description          | Par défaut |
| ----- | -------------------- | ---------- |
| scale | Mise à l'échelle par défaut de Rofi | 10      |

### [rofi.animation]

| Clé   | Description                         | Par défaut |
| ----- | ----------------------------------- | ---------- |
| scale | Configuration de 'animation.sh select' | 8       |

### [rofi.cliphist]

| Clé   | Description               | Par défaut |
| ----- | ------------------------- | ---------- |
| scale | Configuration de cliphist.sh | 8       |

### [rofi.emoji]

| Clé   | Description                         | Par défaut |
| ----- | ----------------------------------- | ---------- |
| scale | Échelle de configuration de emoji-picker.sh | 8    |
| style | Style de configuration de emoji-picker.sh | 2    |

### [rofi.glyph]

| Clé   | Description                   | Par défaut |
| ----- | ----------------------------- | ---------- |
| scale | Configuration de glyph-picker.sh | 8       |

### [rofi.hyprlock]

| Clé   | Description                        | Par défaut |
| ----- | ---------------------------------- | ---------- |
| scale | Configuration de 'hyprlock.sh select' | 10    |

### [rofi.keybind.hint]

| Clé       | Description            | Par défaut |
| --------- | ---------------------- | ---------- |
| delimiter | Délimiteur de raccourcis clavier | "\t"    |
| height    | Hauteur des raccourcis clavier | "40em"  |
| line      | Ligne des raccourcis clavier | 16      |
| width     | Largeur des raccourcis clavier | "40em"  |

### [rofi.launcher]

| Clé   | Description                 | Par défaut |
| ----- | --------------------------- | ---------- |
| scale | Configuration de rofilaunch.sh | 5       |

### [rofi.theme]

| Clé   | Description                  | Par défaut |
| ----- | ---------------------------- | ---------- |
| scale | Configuration de themeselect.sh | 6       |

### [rofi.wallpaper]

| Clé   | Description                    | Par défaut |
| ----- | ------------------------------ | ---------- |
| scale | Configuration de swwwallselect.sh | 8       |

### [screenshot]

| Clé                     | Description                      | Par défaut |
| ----------------------- | -------------------------------- | ---------- |
| annotation_post_command | Commande post-outil d'édition | [""]       |
| annotation_pre_command  | Commande pré-outil d'édition'  | []         |
| annotation_tool         | Outil d'édition de screenshot               | "satty"    |

### [sysmonitor]

| Clé      | Description                                   | Par défaut |
| -------- | --------------------------------------------- | ---------- |
| commands | Options de commande de secours pour le moniteur système | [""]    |
| execute  | Commande par défaut à exécuter pour le moniteur système | ""    |

### [volume]

| Clé         | Description                                 | Par défaut |
| ----------- | ------------------------------------------- | ---------- |
| boost       | Activer l'amplification du volume           | false      |
| boost_limit | Limite d'amplification du volume            | 120        |
| notify      | Notification de contrôle du volume          | true       |
| steps       | Nombre d'étapes pour augmenter/diminuer le volume | 5    |

### [wallbash]

| Clé           | Description                            | Par défaut |
| ------------- | -------------------------------------- | ---------- |
| skip_template | Ignore le template lors de l'utilisation de wallbash | [""]    |

### [wallpaper]

| Clé          | Description                            | Par défaut                       |
| ------------ | -------------------------------------- | ------------------------------- |
| backend      | Backend de fond d'écran                | "swww"                          |
| custom_paths | Liste des chemins pour chercher les fonds d'écran | ["$HOME/Pictures/Wallpapers"] |

### [wallpaper.swww]

| Clé                | Description                            | Par défaut |
| ------------------ | -------------------------------------- | ---------- |
| duration           | Durée de la transition                 | 1          |
| framerate          | Taux d'images de la transition (images par seconde)         | 60         |
| transition_default | Type de transition pour le fond par défaut | "grow"   |
| transition_next    | Type de transition pour le fond suivant | "grow"    |
| transition_prev    | Type de transition pour le fond précédent | "outer"  |

### [waybar]

| Clé   | Description          | Par défaut                   |
| ----- | -------------------- | --------------------------- |
| font  | Police Waybar        | "JetBrainsMono Nerd Font"   |
| scale | Mise à l'échelle totale de Waybar | 30                    |

### [weather]

| Clé              | Description                                    | Par défaut |
| ---------------- | ---------------------------------------------- | ---------- |
| forecast_days    | Nombre de jours pour les prévisions            | 3          |
| location         | Chaîne GPS de localisation/coordonnées pour la météo | ''        |
| show_icon        | Afficher l'icône météo dans waybar             | true       |
| show_location    | Afficher la localisation dans waybar           | true       |
| show_today       | Description détaillée d'aujourd'hui dans l'infobulle | true  |
| temperature_unit | Unité de température                          | 'c'        |
| time_format      | Format de l'heure                             | '24h'      |
| windspeed_unit   | Unité de vitesse du vent                      | 'km/h'     |
