---
title: HyprPanel
description: HyprPanel wallbash Vorlage
---

![241005_14h24m09s_screenshot](https://github.com/user-attachments/assets/355aa7f0-856b-47f6-8ced-58bc0c4a3481)
![241005_14h26m11s_screenshot](https://github.com/user-attachments/assets/e7551bec-573c-4d37-91b9-de9400176cac)
![241005_14h19m51s_screenshot](https://github.com/user-attachments/assets/11f40837-08fe-4979-b16e-b1d0a6fd4fcd)


### Wallbash-Vorlage für HyprPanel

Diese Vorlage ist für die Verwendung mit HyprPanel konzipiert. Weitere Informationen finden Sie auf [HyprPanel](https://hyprpanel.com/).

> **Hinweis:** Dies ist kein eigenständiges Paket. Stellen Sie sicher, dass Sie HyDE installiert und eine funktionsfähige HyprPanel-Installation vorliegen haben.

## Verwendung

Fügen Sie die Datei [/hyprpanel.dcol](https://github.com/HyDE-Project/HyprPanel/blob/3f20c8922d7c3547688a2b16eb74846170a9f224/hyprpanel.dcol) entweder `~/.config/hyde/wallbash/Wall-Ways` oder `~/.config/hyde/wallbash/Wall-Dcol` hinzu.

### Unterschied zwischen Wall-Ways und Wall-Dcol

- **Wall-Ways**: Diese Datei wird unabhängig vom Themenmodus oder Wallbash-Modus immer verwendet.
- **Wall-Dcol**: Diese Datei versucht, das Themenvorlagen-Template (wenn im Themenmodus) zu finden und fällt auf die Verwendung der dominanten Farbe der Hintergründe zurück, wenn kein Template verfügbar ist.

### Verwendung dieser Vorlage für Themen

1. **Kopfzeile**:
    ```sh
    ${cacheDir}/landing/hyprpanel_wallbash.json | ags -r "useTheme('${cacheDir}/landing/hyprpanel_wallbash.json')"
    ```
    Dieser Befehl setzt das Theme mit der zwischengespeicherten Wallbash-generierten `.json`-Datei.
    `$cacheDir` ist der Pfad zu `~/.cache/hyde/`.

2. **Wallbash-Generierung**:
    ```sh
    ${cacheDir}/landing/hyprpanel_wallbash.json
    ```
    Dieser Befehl generiert die Wallbash-`.json`-Datei.

3. **Optionaler Befehl**:
    ```sh
    ags -r "useTheme('${cacheDir}/landing/hyprpanel_wallbash.json')"
    ```
    Dieser Befehl verwendet die zwischengespeicherte Wallbash-generierte `.json`-Datei, um das Theme zu setzen.
