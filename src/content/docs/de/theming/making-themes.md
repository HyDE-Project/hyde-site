---
title: Making Themes
description: Wie man Themes für HyDE erstellt
---

Hier führen wir Sie Schritt für Schritt durch den Prozess der Erstellung von Themes für HyDE. Dieses Tutorial funktioniert sowohl für hyprdots als auch für HyDE.

### Schnellstart-Anleitung

Klonen Sie das Repository `hyde-theme-starter` in Ihr Themes-Verzeichnis.

:::tip
Benennen Sie `MyTheme` in Ihren Theme-Namen um und stellen Sie sicher, dass es keine Konflikte mit Namen in der [HyDE-Gallery](https://github.com/HyDE-Project/hyde-gallery) gibt.
:::

```bash
git clone https://github.com/richen604/hyde-theme-starter ~/MyTheme
```

1. Erforderliche Komponenten - alle müssen im `tar.*`-Format vorliegen:

   - Ein GTK-Theme (obligatorisch)
     - Suchen Sie nach bestehenden Themes auf [Gnome-Look Themes](https://www.gnome-look.org/browse?cat=135&ord=latest)
     - Oder sehen Sie sich [GTK4 generieren](#gtk4-aus-wallbash-generieren) an, um ein GTK-Theme aus einem Wallpaper zu erstellen.
   - Icon-Pack (optional) - Standard ist Tela-circle
     - Suchen Sie nach bestehenden Icon-Packs auf [Gnome-Look Icons](https://www.gnome-look.org/browse?cat=132&ord=latest)
   - Cursor-Theme (optional) - Standard ist Bibata-Modern-Ice
     - Suchen Sie nach bestehenden Cursor-Themes auf [Gnome-Look Cursors](https://www.gnome-look.org/browse?cat=107&ord=latest)
   - Schriftart (optional)
     - Suchen Sie nach Web-Schriftarten auf [fonts.google.com](https://fonts.google.com/)
     - Suchen Sie nach gepatchten Entwickler-Schriftarten auf [nerdfonts.com](https://www.nerdfonts.com/)

2. Eine Sammlung von Wallpapers, die zu Ihrem gewünschten Stil/Farbschema passen.

   - [Wallhaven](https://wallhaven.cc/) - Für Wallpapers
   - [farbenfroh.io](https://farbenfroh.io/) - Für farblich passende Wallpapers, wenn Sie ein gewünschtes Farbschema im Kopf haben.
   - Fügen Sie nicht zu viele Wallpapers hinzu, 8-10 sind eine gute Anzahl.

3. Installieren Sie `just`, um Hilfsskripte auszuführen: `yay -S just`

Wechseln Sie in Ihr Themes-Verzeichnis: `cd ~/MyTheme` (ersetzen Sie `MyTheme` durch Ihren Theme-Namen).

:::tip
Benennen Sie `MyTheme` in der `justfile` in Ihren Theme-Namen um.
:::

```bash
theme = "MyTheme"
```

Führen Sie `just init` aus, um die anfängliche Verzeichnisstruktur zu erstellen.

Ihre Theme-Struktur sollte wie folgt aussehen:

```bash
~/MyTheme/
├── Config/                  # Teil Ihres finalen Themes - Konfigurationsdateien
│   └── hyde/
│       └── themes/
│           └── MyTheme/     # Hauptverzeichnis des Themes
│               └── wallpapers/
├── refs/                    # Für generierte Referenzdateien
├── screenshots/             # Für Screenshots Ihres Themes
├── Source/                  # Teil Ihres finalen Themes - Arcs, z. B. gtk, cursor, icon, font
│   └── arcs/
├── .gitignore
├── justfile                 # Zum Ausführen von Hilfsskripten
└── README.md                # Links zu dieser Webseite
```

### Arcs

Arcs sind die GTK-Themen-, Icon-, Cursor- und Schriftartkomponenten, die Teile Ihres Themes ausmachen.
Lassen Sie uns diese sofort in das Verzeichnis `Source/arcs` hinzufügen, damit sie für Tests bereit sind.

Ihre Ordnerstruktur sollte ungefähr so aussehen:

```bash
~/MyTheme/
├── Source/
│   └── arcs/
│       ├── Gtk_<Your-GTK-Theme>.tar.*
│       ├── Cursor_<Your-Cursor-Theme>.tar.*
│       └── Icon_<Your-Icon-Theme>.tar.*
│       └── Font_<Your-Font-Name>.tar.*
```

**Stellen Sie sicher, dass Sie das richtige Präfix für jeden Arc verwenden**. z. B. `Gtk_<Your-GTK-Theme>.tar.*`

### Anzeige Ihres Themes mit Wallbash

Kopieren Sie Ihre Wallpapers in Ihr Themes-Verzeichnis.

```bash
cp -r ~/wallpapers ~/MyTheme/Config/.config/hyde/themes/MyTheme/wallpapers
```

Wechseln Sie in Ihr Themes-Verzeichnis

```bash
cd ~/MyTheme
```

Installieren Sie Ihr Theme

```bash
just install
```

### Testen Ihres Themes mit Wallbash

Es gibt zwei Möglichkeiten, Ihr Theme zu initialisieren: über Wallbash oder über ein bestehendes Theme.

Wir werden in diesem Leitfaden Wallbash verwenden, da es Ihnen ein gutes Verständnis dafür vermittelt, wie Wallbash die Farben für Ihr Theme generiert. Sie können mehr über Wallbash [hier](#understanding-wallbash) erfahren.

Öffnen Sie Wallbash, stellen Sie auto, dark oder light ein (`Meta + Shift + R`). </br>
Setzen Sie Ihr ausgewähltes Wallpaper als aktuelles Wallpaper (`Meta + Shift + W`)

Beobachten Sie, wie Wallbash die Farben für Ihr Wallpaper für die folgenden Anwendungen anpasst:

- GTK (nwg-look)
  - Um Ihr Arc-GTK-Theme zu testen, wechseln Sie vom Wallbash-Modus in den Themenmodus (Meta + Shift + R)
  - Überprüfen Sie dann `pavucontrol`, um zu sehen, ob Ihr GTK-Theme seltsam aussieht. Wenn ja, folgen Sie den Anweisungen in [Generate GTK4](#generate-gtk4-from-wallbash), um GTK4-Theme-Dateien mit Wallbash zu generieren.
- Kitty (kitty)
- QT (qt5ct + qt6ct)
- Waybar (waybar)
- Spotify (spotify)
- VSCode (code) - benötigt Wallbash, das als Farbthema aktiviert ist
- Cava (cava)

### Generieren von Theme-Dateien

Stellen Sie sicher, dass das Wallpaper, das Sie ausgewählt haben, das beste Wallpaper ist, das Wallbash für Ihr Theme generiert. </br>
Führen Sie nun die folgenden Befehle aus, um die Wallbash-Dateien zu generieren.

```bash
just gen-all
just set-wall
```

Sie sehen eine Menge neuer Dateien in Ihrem Theme-`refs`-Verzeichnis.

```bash
~/MyTheme/
├── refs/                   # für Referenzdateien, die wir generieren
│   ├── gtk-4.0/            # GTK4-Theme-Dateien
│   │   ├── gtk.css         # Helles Theme
│   │   └── gtk-dark.css    # Dunkles Theme
│   ├── kvantum/            # Kvantum-Theme-Dateien
│   │   ├── kvantum.theme   # Kvantum-Theme-Konfiguration
│   │   └── kvconfig.theme  # Kvantum-Konfiguration
│   ├── hypr.theme          # Hyprland-Theme
│   ├── kitty.theme         # Kitty-Terminal-Theme
│   ├── rofi.theme          # Rofi-Theme
│   ├── theme.dcol          # Wallbash "Theme"-Modus-Überschreibungen
│   └── waybar.theme        # Waybar-Theme
│   └── wall.set            # Erstes Wallpaper, das das Theme verwendet
```

Sie können alle Dateien in Ihr Verzeichnis `Config/.config/hyde/themes/MyTheme` kopieren.

```bash
cp -r ./refs/* ./Config/.config/hyde/themes/MyTheme
```

Führen Sie erneut die Installation aus, um Ihr Theme zu aktualisieren.

```bash
just install
```

Diese Dateien werden verwendet, um den "Theme"-Modus für Ihr Theme festzulegen. (`Meta + Shift + R`)

### Bearbeiten von \*.theme-Dateien

Diese Dateien sind wichtig, damit die Themes korrekt funktionieren.

Sie sollten ein Theme wie [Bad Blood](https://github.com/HyDE-Project/hyde-gallery/blob/Bad-Blood/Configs/.config/hyde/themes/Bad%20Blood) als Referenz für diese Anleitung verwenden.

Jede \*.theme-Datei enthält Konfigurationszeilen.

Die erste Zeile hat das Format: file_path | command_to_execute

- hypr.theme - `$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf`
- kitty.theme - `$HOME/.config/kitty/theme.conf|killall -SIGUSR1 kitty`
- rofi.theme - `$HOME/.config/rofi/theme.rasi`
- waybar.theme - `$HOME/.config/waybar/theme.css|${scrDir}/wbarconfgen.sh`

Die wichtigste Datei ist `hypr.theme`

```bash
$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf
# ~/.config/hypr/theme/theme.conf ist eine automatisch generierte Datei. Nicht bearbeiten.

$GTK_THEME=Bad-Blood # Ordnername innerhalb von `Source/arcs/Gtk_<Your-GTK-Theme>.tar.*`
$ICON_THEME=besgnulinux-mono-red # Ordnername innerhalb von `Source/arcs/Icon_<Your-Icon-Theme>.tar.*`
$COLOR_SCHEME=prefer-dark # prefer-dark, prefer-light oder auto
$CURSOR_THEME=Night-Diamond-Red # Ordnername innerhalb von `Source/arcs/Cursor_<Your-Cursor-Theme>.tar.*`
$CURSOR_SIZE=30 # Cursorgröße in Pixel
```

- Bearbeiten Sie die Variablen für Arcs, sie müssen mit dem Namen des Ordners **innerhalb** jedes Arcs in `Source/arcs` übereinstimmen, wie oben gezeigt.
- Legen Sie die Ränder, Farben und anderen themenbezogenen Einstellungen von Hyprland fest.
- Sie können die Datei hypr.theme verwenden, um zusätzliche Programme für Ihr Theme festzulegen, z. B. SDDM oder Vscode-Theme.
- Wird zu `$HOME/.config/hypr/themes/theme.conf`

Alle Aktualisierungen Ihres Themes in `Config` oder `Source` sollten mit `just install` ausgeführt werden, um Ihr Theme zu aktualisieren.

### Bearbeiten der Datei theme.dcol

Die Datei `theme.dcol` wird verwendet, um einige generierte Wallbash-Farben für die Wallbash-Modi zu überschreiben.
Weitere Informationen finden Sie unter [understanding wallbash](#understanding-wallbash).

Diese Datei ist völlig optional.

### Abschluss Ihres Themes

Ihr Theme sollte jetzt bereit sein, zur hyde-gallery hinzugefügt zu werden!

Einige letzte Anpassungen:

- Fügen Sie einige Screenshots zu `~/screenshots` hinzu.
- Fügen Sie Ihr Theme der Hyde-Gallery hinzu.

### Hinzufügen von Themes zur Hyde-Gallery

Erstellen Sie in Ihrem Theme-Verzeichnis die README-Datei mit

```bash
python3 generate_readme.py
```

Initialisieren Sie git

```bash
git init && git branch -M main && git add . && git commit -m "Mein erstes HyDE-Theme"
```

[Erstellen Sie ein GitHub-Repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

Forken Sie die hyde-gallery <https://github.com/HyDE-Project/hyde-gallery> </br>
Fügen Sie Ihr Theme zur Liste und zu `hyde-themes.json` hinzu.

## Weitere Informationen

### GTK4 aus Wallbash generieren

Wenn Ihr Theme keine GTK4-Unterstützung enthält, erscheinen pavucontrol und andere GTK4-Anwendungen möglicherweise mit einem einfachen weißen Theme.

Führen Sie den folgenden Befehl aus, um die GTK4-Theme-Dateien zu generieren

```bash
just gen-gtk4
```

Kopieren Sie das Verzeichnis `refs/gtk-4.0` in Ihr Theme-Verzeichnis

```bash
mkdir -p ./Config/.config/hyde/themes/MyTheme/gtk-4.0
cp -r ./refs/gtk-4.0/* ./Config/.config/hyde/themes/MyTheme/gtk-4.0/
```

### Verständnis von Wallbash

Wallbash generiert 4 Primärfarben aus Ihrem Wallpaper und erstellt dann Farbgruppen um jede Primärfarbe mit der folgenden Struktur:

Für jede Primärfarbe (`wallbash_pry1` bis `wallbash_pry4`):

- Textfarbe (`wallbash_txt1` bis `wallbash_txt4`)
- 9 Akzentfarben (`wallbash_1xa1` bis `wallbash_1xa9` für Gruppe 1 usw.)

Jede Farbe hat eine RGBA-Variante mit konfigurierbarer Opazität (z. B. `wallbash_pry1_rgba(0.95)`)

Insgesamt: 44 Basisfarben (4 Gruppen × 11 Farben) plus RGBA-Varianten

Verwenden Sie `just gen-dcol`, um eine `theme.dcol` mit allen von Wallbash generierten Farben für Ihr aktives Wallpaper zur Referenz zu erstellen.
