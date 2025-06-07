---
title: Wallbash and dcol
description: Verständnis von Wallbash und dcol
---

## Übersicht

Dieses Dokument bietet eine Erklärung zur Farbkonfiguration, die für das Themendesign von HyDE verwendet wird. Es behandelt Primärfarben, Textfarben und Akzentfarben. Jede Farbe kann entweder im Hexadezimal- oder RGBA-Format angegeben werden.

## Farbkennungen

Standardmäßig werden beim **Wallpaper-Caching** 4 Primärfarben, 4 Textfarben und 9 Akzentfarben für jede Primärfarbe erzeugt.

- **`dcol_mode`**: Diese Kennung bestimmt, ob das Thema im Dunkel- oder Hellmodus ist.
- **`dcol_pryX`**: Dies sind die Primärfarben, wobei `X` von 1 bis 4 reicht.
- **`dcol_txtX`**: Dies sind die invertierten Primärfarben, die für Text verwendet werden, wobei `X` von 1 bis 4 reicht.
- **`dcol_XaxY`**: Dies sind die Akzentfarben für jede Primärfarbe, wobei `X` von 1 bis 4 und `Y` von 1 bis 9 reicht.
- **`_rgba`**: Dieses Suffix zeigt an, dass die Farbe im RGBA-Format vorliegt. Wenn das Suffix nicht vorhanden ist, liegt die Farbe im Hexadezimalformat vor.
- **`_rgb`**: Dieses Suffix zeigt an, dass die Farbe im RGB-Format vorliegt.

## Verwendung

Um die Cache-Farbkonfiguration zu verwenden:

1. Ersetzen Sie das Präfix `dcol_` durch `wallbash_`, damit das Wallbash-Skript die Werte analysieren und ändern kann.
2. Betrachten Sie das Präfix `wallbash_` als Platzhalter für den dominanten Farbwert.
3. Umschließen Sie die Farbkennung mit spitzen Klammern (`<...>`), um den Ersatz durch den entsprechenden Wert anzuzeigen, z. B. `<wallbash_pry1>`.
4. Verwenden Sie dieses [Beispiel](https://github.com/hyde-project/hyde/tree/master/Configs/.config/hyde/wallbash) als Vorlage.

Dies ermöglicht es Ihnen, eine Vorlage für Konfigurationen zu erstellen, die die dominante Farbe oder das Wallpaper verwendet, und das Wallbash-Skript konvertiert es für Sie.

### Erstellen einer `*.dcol`-Vorlage

Eine Vorlage erfordert drei Teile:

- Zieldatei
- Skript/Befehl (optional)
- Inhalte

## Das grundlegende Format

| Ziel          | Befehl  |
| ------------- | ------- |
| **Inhalte**   |

---

> **Hinweis:** **Ziel**|**Befehl** sollte immer in Zeile 1 jeder Vorlagendatei stehen. Wir nennen sie die `Header-Zeile`.

#### Zieldatei

Strukturieren Sie Ihre Vorlage und bestimmen Sie den Zielkonfigurationsort. Dies kann sein:

- `${cacheDir}/wallbash` mit Nachbearbeitung durch ein Skript.
- Ein erwarteter Pfad, z. B. neben `kitty.conf` für Kitty, eingebunden durch `include theme.conf`.

Verwenden Sie Umgebungsvariablen, um Verzeichnisse dynamisch zu handhaben:

- `${confDir}` = `$XDG_CONFIG_HOME` oder `$HOME/.config/`
- `${cacheDir}/wallbash` = `HYDE_CACHE_DIR/wallbash` = `$HOME/.cache/hyde`

#### Optionales Skript/Befehl

Nachdem Sie die Zieldatei mit Inhalten gefüllt haben, können Sie beliebige Befehle/Skripte zur Nachbearbeitung ausführen. Verwenden Sie die Variable `WALLBASH_SCRIPTS`, um zum Skriptverzeichnis von Wallbash zu navigieren, z. B. `WALLBASH_SCRIPTS/your_script.sh`.

> **Vorsicht:** Fügen Sie nur Vorlagen von vertrauenswürdigen Autoren hinzu, um die Ausführung von schädlichem Code zu vermeiden.

#### Inhalte

Dies sind die Inhalte der Datei, die Wallbash-Platzhalter enthalten, z. B. `<wallbash_pry1>`.

---

Das Verzeichnis `~/.config/hyde/wallbash/*` enthält drei Hauptverzeichnisse:

### always

Vorlagen in `./wallbash/always/` werden ausgeführt während:

- Themenwechsel
- Wallpaperwechsel
- Moduswechsel

Weitere Informationen [hier](./always/README).

### theme

Vorlagen in `./wallbash/theme/` werden ausgeführt während:

- Themenwechsel
- Moduswechsel

Weitere Informationen [hier](./theme/README).

### scripts

Für Anpassungen speichern Sie Ihre Skripte in `./wallbash/scripts`. Verwenden Sie die Variable `$WALLBASH_SCRIPTS`, um dieses Verzeichnis zu navigieren.
