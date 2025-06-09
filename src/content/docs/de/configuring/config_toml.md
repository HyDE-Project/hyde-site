---
title: Config Toml
description: HyDE's Konfigurations-Anleitung
sidebar:
  order: 2
---

<link rel="stylesheet" href="/src/styles/configuring/config_toml.css">

HyDE stellt die Datei `xdg_config/hyde/config.toml` Benutzern zur Verfügung, um sie zu modifizieren. So können Benutzer mit den Skripten interagieren, ohne Befehlsargumente verwenden zu müssen.

---

### Umgebungsvariablen

Beispielsweise:

| Schlüssel           | Beschreibung                     | Standard |
| ------------------- | -------------------------------- | -------- |
| WARP_ENABLE_WAYLAND | Wayland-Unterstützung aktivieren |          |

### [battery.notify]

| Schlüssel | Beschreibung                         | Standard |
| --------- | ------------------------------------ | -------- |
| dock      | Batterie Benachrichtigung Dock       | true     |
| interval  | Batterie-Benachrichtigungs-Intervall | 5        |
| notify    | Batterie Benachrichtigung            | 1140     |
| timer     | Batterie-Benachrichtigungs-Timer     | 120      |

### [battery.notify.execute]

| Schlüssel   | Beschreibung                                                     | Standard            |
| ----------- | ---------------------------------------------------------------- | ------------------- |
| charging    | Batteriebenachrichtigung ausführen beim laden                    | ""                  |
| critical    | Batteriebenachrichtigung ausführen beim kritischen Batteriestand | "systemctl suspend" |
| discharging | Batteriebenachrichtigung ausführen beim entladen                 | ""                  |
| low         | Batteriebenachrichtigung ausführen beim niedrigem Batteriestand  | ""                  |
| unplug      | Batteriebenachrichtigung ausführen beim Abstecken der Batterie   | ""                  |

### [battery.notify.threshold]

| Schlüssel | Beschreibung                                                           | Standard |
| --------- | ---------------------------------------------------------------------- | -------- |
| critical  | Schwellenwert für die Benachrichtigung bei kritischen Batteriestand    | 10       |
| full      | Schwellenwert für die Benachrichtigung bei vollem Batteriestand        | 90       |
| low       | Schwellenwert für die Benachrichtigung bei niedrigem Batteriestand     | 20       |
| unplug    | Schwellenwert für die Benachrichtigung über das Abstecken der Batterie | 80       |

### [brightness]

| Schlüssel | Beschreibung                                                 | Standard |
| --------- | ------------------------------------------------------------ | -------- |
| notify    | Helligkeitskontrolle Benachrichtigung aktivieren             | true     |
| steps     | Anzahl der Schritte zur Erhöhung/Verringerung der Helligkeit | 5        |

### [cava.hyprlock]

| Schlüssel     | Beschreibung                                  | Standard   |
| ------------- | --------------------------------------------- | ---------- |
| bar           | Zeichen der cava Bar für hyprlock              | "▁▂▃▄▅▆▇█" |
| max_instances | Maximale Anzahl von Cava-Instanzen für hyprlock | 1          |
| range         | Anzahl der Cava Bars für hyprlock              | 7          |
| standby       | Cava-Standby-Zeichen für hyprlock           | "🎶"       |
| width         | Breite der Cava Bar für hyprlock                  | 20         |

### [cava.stdout]

| Schlüssel     | Beschreibung                       | Standard   |
| ------------- | ---------------------------------- | ---------- |
| bar           | Zeichen der cava Bar               | "▁▂▃▄▅▆▇█" |
| max_instances | Maximale Anzahl von Cava-Instanzen | 1          |
| range         | Anzahl der Cava Bars               | 7          |
| standby       | Cava-Standby-Zeichen               | "🎶"       |
| width         | Breite der cava Bar                | 20         |

### [cava.waybar]

| Schlüssel     | Beschreibung                                  | Standard   |
| ------------- | --------------------------------------------- | ---------- |
| bar           | Zeichen der cava Bar für waybar               | "▁▂▃▄▅▆▇█" |
| max_instances | Maximale Anzahl von Cava-Instanzen für waybar | 1          |
| range         | Anzahl der Cava Bars                          | 7          |
| standby       | Cava-Standby-Zeichen                          | "🎶"       |
| width         | Breite der Cava Bar                           | 20         |

### [hypr.config]

| Schlüssel | Beschreibung                                           | Standard              |
| --------- | ------------------------------------------------------ | --------------------- |
| sanitize  | Liste der zu säubernden Regex in THEME_NAME/hypr.theme | ['.*rgba\(.*,*,*,*,'] |

### [notification]

| Schlüssel | Beschreibung                        | Standard             |
| --------- | ----------------------------------- | -------------------- |
| font      | Schriftart für Benachrichtigungen   | "mononoki Nerd Font" |
| font_size | Schriftgröße für Benachrichtigungen | 8                    |

### [rofi]

| Schlüssel | Beschreibung            | Standard |
| --------- | ----------------------- | -------- |
| scale     | Rofi Standardskalierung | 10       |

### [rofi.animation]

| Schlüssel | Beschreibung                        | Standard |
| --------- | ----------------------------------- | -------- |
| scale     | 'animation.sh select' Konfiguration | 8        |

### [rofi.cliphist]

| Schlüssel | Beschreibung              | Standard |
| --------- | ------------------------- | -------- |
| scale     | cliphist.sh Konfiguration | 8        |

### [rofi.emoji]

| Schlüssel | Beschreibung                             | Standard |
| --------- | ---------------------------------------- | -------- |
| scale     | emoji-picker.sh Konfigurationsskalierung | 8        |
| style     | emoji-picker.sh Konfigurationsstil       | 2        |

### [rofi.glyph]

| Schlüssel | Beschreibung                  | Standard |
| --------- | ----------------------------- | -------- |
| scale     | glyph-picker.sh Konfiguration | 8        |

### [rofi.hyprlock]

| Schlüssel | Beschreibung                       | Standard |
| --------- | ---------------------------------- | -------- |
| scale     | 'hyprlock.sh select' Konfiguration | 10       |

### [rofi.keybind.hint]

| Schlüssel | Beschreibung                            | Standard |
| --------- | --------------------------------------- | -------- |
| delimiter | Hinweis zur Tastenbelegung - Begrenzung | "\t"     |
| height    | Hinweis zur Tastenbelegung - Höhe       | "40em"   |
| line      | Hinweis zur Tastenbelegung - Zeile      | 16       |
| width     | Hinweis zur Tastenbelegung - Breite     | "40em"   |

### [rofi.launcher]

| Schlüssel | Beschreibung                | Standard |
| --------- | --------------------------- | -------- |
| scale     | rofilaunch.sh Konfiguration | 5        |

### [rofi.theme]

| Schlüssel | Beschreibung                 | Standard |
| --------- | ---------------------------- | -------- |
| scale     | themeselect.sh Konfiguration | 6        |

### [rofi.wallpaper]

| Schlüssel | Beschreibung                   | Standard |
| --------- | ------------------------------ | -------- |
| scale     | swwwallselect.sh Konfiguration | 8        |

### [screenshot]

| Schlüssel               | Beschreibung                           | Standard |
| ----------------------- | -------------------------------------- | -------- |
| annotation_post_command | Post-Befehl für das Anmerkungswerkzeug | [""]     |
| annotation_pre_command  | Vorbefehl für das Anmerkungswerkzeug   | []       |
| annotation_tool         | Anmerkungswerkzeug                     | "satty"  |

### [sysmonitor]

| Schlüssel | Beschreibung                                        | Standard |
| --------- | --------------------------------------------------- | -------- |
| commands  | Fallback-Befehlsoptionen für den Systemmonitor      | [""]     |
| execute   | Auszuführender Standardbefehl für den Systemmonitor | ""       |

### [volume]

| Schlüssel   | Beschreibung                                                 | Standard |
| ----------- | ------------------------------------------------------------ | -------- |
| boost       | Lautstärkeanhebung aktivieren                                | false    |
| boost_limit | Grenze der Lautstärkeanhebung                                | 120      |
| notify      | Lautstärkeregler Benachrichtigung                            | true     |
| steps       | Anzahl der Schritte zur Erhöhung/Verringerung der Lautstärke | 5        |

### [wallbash]

| Schlüssel     | Beschreibung                                        | Standard |
| ------------- | --------------------------------------------------- | -------- |
| skip_template | Überspringt die Vorlage bei Verwendung von Wallbash | [""]     |

### [wallpaper]

| Schlüssel    | Beschreibung                                          | Standard                      |
| ------------ | ----------------------------------------------------- | ----------------------------- |
| backend      | Hintergrundbild Backend                               | "swww"                        |
| custom_paths | Liste der Pfade für die Suche nach Hintergrundbildern | ["$HOME/Pictures/Wallpapers"] |

### [wallpaper.swww]

| Schlüssel          | Beschreibung                                   | Standard |
| ------------------ | ---------------------------------------------- | -------- |
| duration           | Übergangsdauer                                 | 1        |
| framerate          | Übergangsgeschwindigkeit                       | 60       |
| transition_default | Übergangstyp für Standard-Hintergrundbild      | "grow"   |
| transition_next    | Übergangsart für das nächste Hintergrundbild   | "grow"   |
| transition_prev    | Übergangsart für das vorherige Hintergrundbild | "outer"  |

### [waybar]

| Schlüssel | Beschreibung             | Standard                  |
| --------- | ------------------------ | ------------------------- |
| font      | Waybar Schriftart        | "JetBrainsMono Nerd Font" |
| scale     | Waybar Totale Skalierung | 30                        |

### [weather]

| Schlüssel        | Beschreibung                                            | Standard |
| ---------------- | ------------------------------------------------------- | -------- |
| forecast_days    | Anzahl der Tage für die Anzeige der Prognose            | 3        |
| location         | Standort/Koordinatenstring für Wetterausgabe            | ''       |
| show_icon        | Wettersymbol in der waybar anzeigen                     | true     |
| show_location    | Standort in der waybar anzeigen                         | true     |
| show_today       | Detaillierte Beschreibung des heutigen Tages im Tooltip | true     |
| temperature_unit | Einheit für die Temperatur                              | 'c'      |
| time_format      | Zeit-Format                                             | '24h'    |
| windspeed_unit   | Windgeschwindigkeitseinheit                             | 'km/h'   |

### [wlogout]

| Schlüssel | Beschreibung | Standard |
| --------- | ------------ | -------- |
| style     | Wlogout Stil | 2        |
