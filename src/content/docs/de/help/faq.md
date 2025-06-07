---
title: FAQs & Tips
description: Häufig gestellte Fragen zu HyDE
---

:::tip
Hyprland-bezogene Fragen sollten im [Hyprland Wiki](https://wiki.hyprland.org/de) nachgeschlagen werden
:::

### Globale oder benutzerdefinierte Hintergründe hinzufügen

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

#### Globale Hintergründe

Globale Hintergründe werden in allen Themes im Selektor angezeigt.

Fügen Sie in Ihre `xdg_config/hyde/config.toml` hinzu.

```toml
[wallpaper]
custom_paths = [
    "$XDG_PICTURES_DIR",
    "/path/to/pretty/wallpapers",
] # Liste der Pfade, die nach Hintergründen durchsucht werden sollen

```

#### Benutzerdefinierte Hintergründe pro Theme

##### Option 1: GUI

Mit Dolphin einen Hintergrund für ein Theme auswählen

![image](https://github.com/user-attachments/assets/a72458fc-da94-45e4-8dd4-dba48b910e82)

1. Bild auswählen
2. Rechtsklick und "Als Hintergrund festlegen" auswählen
3. Wählen Sie ein Ziel-Theme

##### Option 2: CLI

Benutzerdefinierte Hintergründe werden pro Theme hinzugefügt.

1. Fügen Sie ein Hintergrundbild in `~/.config/hyde/themes/Theme-Name/wallpapers/*` hinzu.
2. Führen Sie dann `hyde-shell reload` aus.

---

---

</details>

### Wie kann ich einen Bildschirm aufzeichnen?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Sie können Ihren Bildschirm mit den folgenden Wayland-basierten Aufnahmeprogrammen aufnehmen.

`wl-screenrec`

`wf-recorder`

`kooha`

`obs`

</details>

### Wie kann ich meine eigenen Einstellungen vornehmen?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Sie können Ihre Hyprland-Einstellungen in `xdg_config/hypr/userprefs.conf` festlegen. Diese Einstellungen bleiben auch beim Aktualisieren des Repos erhalten.

Siehe `Konfiguration` > `Hyprland`, um zu erfahren, wie wir die Hyprland-Konfigurationen strukturieren.

</details>

### Wie aktualisiere ich meine Dotfiles auf den neuesten Stand?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

```sh
cd ~/HyDE/Scripts
git pull
./install.sh -r
```

Siehe `Ressourcen` > `Konfiguration wiederherstellen`, um zu erfahren, wie es funktioniert

</details>

### Wie stelle ich meine Bildschirmauflösung und Bildwiederholfrequenz ein?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Sie können die Bildschirmauflösung und Bildwiederholfrequenz in `~/.config/hypr/monitors.conf` festlegen.

`monitor = DP-1,2560x1440@144,0x0, 1` >> Das @ setzt die Bildwiederholfrequenz

Das ist eine `Wie mache ich das mit hyprland`- Frage, suchen Sie immer nach der Wiki, <https://wiki.hyprland.org/de/Configuring/Monitors/>

</details>

### Wie entferne ich die Pokémon-Zeichen oder ändere ich die Einstiegssequenz des Terminals?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Sie müssen die Datei `.hyde.zshrc` in Ihrem Home-Verzeichnis bearbeiten `~/.hyde.zshrc`

1. Bearbeiten Sie `~/.hyde.zshrc`
2. Kommentieren Sie die Zeile 158 aus, wo `pokego --no-title -r 1,3,6` steht
3. Speichern Sie die Datei

</details>

### Wie bearbeite ich das SDDM-Hintergrundbild oder die Einstellungen?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

- Hintergrundbild ändern
  Sie müssen das Skript `~/.config/hypr/sddmwall.sh` manuell auf dem Hintergrundbild ausführen, das Sie für den Anmeldebildschirm verwenden möchten. Sie können das Hintergrundbild aus den Themen auswählen und sicherstellen, dass es das aktuelle swww-Hintergrundbild ist.
- SDDM-Einstellungen ändern
  (Farben, Hintergrund, Datum-Format, Schriftart) können in `/usr/share/sddm/themes/corners/theme.conf` konfiguriert werden

Wenn Sie die Struktur ändern möchten, müssen Sie die qml-Dateien in `/usr/share/sddm/themes/corners/components` bearbeiten

</details>

### Wie kann ich das Tastaturlayout ändern?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Lies dies zuerst: <https://wiki.hyprland.org/Configuring/Variables/#input>

In HyDE fügen wir die Konfiguration in `~/.config/hypr/userprefs.conf` hinzu.

```
input {
  kb_layout = us,de
}
```

Verwenden Sie `SUPER` + `K`, um zwischen den Layouts zu wechseln.

</details>

### Keine Vorschaubilder auf Selectoren?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Wenn Ihre Vorschaubilder nicht geladen werden, versuchen Sie, den Cache Ihrer Hintergrundbilder neu zu erstellen.

`swwwallcache.sh`

</details>

### How do I edit the waybar?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Sie können Ihre benötigten Module in dieser Datei festlegen - `~/.config/waybar/config.ctl`

Verweisen Sie auf die Themendokumentation hier im Wiki. [Waybar](https://github.com/Alexays/Waybar/wiki)

</details>

### Wie entferne ich den Blur auf der Waybar?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Sie können den Blur auf der Waybar entfernen, indem Sie `blurls = waybar` im Themes-Verzeichnis entfernen, indem Sie die Zeile am Ende jeder `theme.conf` Datei auskommentieren.
Themes-Verzeichnis: `~/.config/hypr/themes/`

</details>

### Wie starte ich die Spielbar in der Vorschau?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Sie benötigen ein Steam-Spiel oder eine Lutris-Bibliothek und führen dann aus:

`~/.config/hypr/scripts/gamelauncher.sh <n>` # wobei n der Stil [1-4] ist

</details>

### Wie kann ich es in einem Anwendungsauswahl starten?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Finden Sie die .desktop-Datei mithilfe des nützlichen Befehls find /usr/share/applications -name '\*code.desktop' image
Sie sollten die .desktop-Datei jeder Anwendung in `~/.local/share/applications/` kopieren und bearbeiten
Finden Sie den Teil Exec = und fügen Sie die Flags hinzu
image

> 📢 Erinnern Sie sich daran, wenn Sie eine .desktop-Datei bearbeiten oder erstellen möchten, ist es eine gute Praxis, sie in ~/.local/share/applications/ zu platzieren, um systemweite Dateien nicht zu ändern. Dies gewährleistet, dass Ihre Änderungen benutzerspezifisch sind und keine administrativen Rechte erfordern

Hier ist das [Wiki](https://wiki.archlinux.de/title/Desktop_entries) zum Bearbeiten von .desktop-Dateien.

</details>

### Xwayland(👹)

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Bitte navigieren Sie zum Hyprland-Wiki für die Erklärung.

[XWayland](https://wiki.hyprland.org/Configuring/XWayland/)
Beachten Sie, dass die Anwendung nicht unterstützt wird, wenn HyDE, Hyprland und Wayland selbst nicht über die Macht verfügen, das Problem magisch zu beheben! Melden Sie dies nicht als Problem, versuchen Sie stattdessen, Fragen auf dem [Diskussionspanel](https://github.com/HyDE-Project/Hyde-cli) zu stellen.

Bekannte Probleme

- Einige Skalierungsprobleme mit rofi-Konfigurationen, da sie auf meinem ultrabreiten (21:9) Bildschirm erstellt wurden.
- Zufälliger Bildschirmsperren-Crash, siehe <https://github.com/swaywm/sway/issues/7046>
- Waybar startet rofi und bricht die Maus-Eingabe ab (als Workaround wurde sleep 0.1 hinzugefügt), siehe <https://github.com/Alexays/Waybar/issues/1850>
- Flatpak-QT-Apps folgen nicht dem System-Design

</details>

### "Login failed!"-Schleife auf SDDM?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Wenn Ihr Benutzername (oder Anmeldename) Großbuchstaben oder Sonderzeichen enthält, müssen Sie das SDDM-Theme bearbeiten, um sich über das SDDM anmelden zu können.

Folgen Sie diesen Schritten, um dies zu tun:

1. Wenn Sie sich im SDDM-Bildschirm befinden, öffnen Sie ein tty mit `Strg + Alt + F6` (oder einem anderen F-Tasten)
2. Melden Sie sich als Konto mit dem Problem an
3. `nano usr/share/sddm/themes/[Themenname]/theme.conf`
4. Suchen Sie den Parameter `AllowBadUsername` und setzen Sie ihn auf `true`
5. Starten Sie den Computer neu

Wenn Sie nach diesen Schritten immer noch nicht anmelden können, können Sie den Parameter `AllowEmptyPassword` in der gleichen Datei auf `true` setzen, neu starten, sich immer noch mit Ihrem Passwort anmelden und nach dem Anmelden wieder auf `false` setzen.

Hier ist ein [GitHub-Issue](https://github.com/HyDE-Project/HyDE/issues/404) zu diesem Verhalten.

</details>
