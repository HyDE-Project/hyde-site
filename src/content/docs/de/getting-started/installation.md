---
title: Installation
description: HyDE Installationsanleitung
---

Das Installationsskript ist für eine minimale [Arch Linux](https://wiki.archlinux.org/title/Arch_Linux)-Installation ausgelegt, könnte aber auch auf einigen [Arch-basierten Distributionen](https://wiki.archlinux.org/title/Arch-based_distributions) funktionieren.
Während die Installation von HyDE neben einer anderen [DE](https://wiki.archlinux.org/title/Desktop_environment)/[WM](https://wiki.archlinux.org/title/Window_manager) möglich sein sollte, wird sie aufgrund der stark angepassten Konfiguration mit Ihrem [GTK](https://wiki.archlinux.org/title/GTK)/[Qt](https://wiki.archlinux.org/title/Qt)-Theming, [Shell](https://wiki.archlinux.org/title/Command-line_shell), [SDDM](https://wiki.archlinux.org/title/SDDM), [GRUB](https://wiki.archlinux.org/title/GRUB) usw. in Konflikt geraten und erfolgt auf eigenes Risiko.

Für Nixos-Unterstützung gibt es ein separates Projekt, das unter [Hydenix](https://github.com/richen604/hydenix/tree/main) gepflegt wird.

:::note

Das Installationsskript erkennt automatisch eine NVIDIA-Karte und installiert die nvidia-dkms-Treiber für Ihren Kernel.
Bitte stellen Sie sicher, dass Ihre NVIDIA-Karte die dkms-Treiber in der [hier](https://wiki.archlinux.org/title/NVIDIA) bereitgestellten Liste unterstützt.

:::danger

Das Skript ändert Ihre `grub`- oder `systemd-boot`-Konfiguration, um NVIDIA DRM zu aktivieren.

:::

<!-- ### Option 1 -->

### Automatisches Installationsskript

```shell
pacman -S --needed git base-devel
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
./install.sh
```

:::tip
Sie können auch andere Apps, die Sie zusammen mit HyDE installieren möchten, zu `Scripts/pkg_user.lst` hinzufügen und die Datei als Parameter übergeben, um sie wie folgt zu installieren:

```shell
./install.sh pkg_user.lst
```

:::

:::note
Verweisen Sie auf Ihre Liste in `Scripts/pkg_extra.lst`
oder kopieren Sie `Scripts/pkg_extra.lst` nach `Scripts/pkg_user.lst`, wenn Sie alle zusätzlichen Pakete installieren möchten.
:::

### Granulare und manuelle Installation

#### Klonen

Klonen Sie das Repository und wechseln Sie in das Verzeichnis des Skripts. Stellen Sie dann sicher, dass der Benutzer [w]Schreib- und [x]Ausführungs-Berechtigungen für das Klonverzeichnis hat.

```sh
pacman -Sy git
git clone --depth 1 https://github.com/prasanthrangan/hyprdots ~/HyDE
cd ~/HyDE/Scripts
```

:::caution
Führen Sie das Skript **NIEMALS** mit sudo oder als Root-Benutzer aus!
:::

#### Modi

Das Installationsskript kann in verschiedenen Modi ausgeführt werden:

- Für die standardmäßige vollständige Hyprland-Installation mit allen Konfigurationen:

```shell
./install.sh
```

- Für eine vollständige oder minimale Hyprland-Installation + Ihre bevorzugten Pakete (z.B. `pkg_user.lst`):

```shell
./install.sh pkg_user.lst # vollständige Installation pkg_core.lst + pkg_user.lst mit Konfigurationen
./install.sh -i pkg_user.lst # minimale Installation pkg_core.lst + pkg_user.lst ohne Konfigurationen
```

- Jeder [Abschnitt](#process) kann auch unabhängig ausgeführt werden:

```shell
./install.sh -i # minimale Installation von Hyprland ohne Konfigurationen
./install.sh -d # minimale Installation von Hyprland ohne Konfigurationen, aber mit (--noconfirm)-Installation
./install.sh -r # stellt nur die Konfigurationsdateien wieder her
./install.sh -s # startet und aktiviert Systemdienste
./install.sh -t # Testlauf ohne Ausführung (-irst für einen Trockenlauf aller)
./install.sh -m # überspringt die Themeninstallation
./install.sh -n # überspringt die NVIDIA-Installation
./install.sh -irst # führt einen Testlauf für alle aus
```

<!-- ### Option 2

:::caution

HyDE-CLI-Autor hier.
Das CLI-Dots-Management (Hyde {restore,backup,control,override}) ist möglicherweise nicht zu 100 % kompatibel mit den aktuellen Hyprdots.
Dies liegt an der Inkompatibilität der Metadateien, und die oben genannten Befehle erfordern manuelle Eingriffe.
Seien Sie versichert, dass andere Befehle perfekt funktionieren und in die eigene `hydectl`-Befehlszeilenschnittstelle portiert werden.

:::

Als zweite Installationsoption können Sie auch `Hyde-install` verwenden, was für einige einfacher sein könnte.
Sehen Sie sich die Installationsanweisungen für HyDE in [Hyde-cli - Verwendung](https://github.com/kRHYME7/Hyde-cli?tab=readme-ov-file#usage) an.

### Option 3

...Bald
Eine deklarative Möglichkeit, Dotfiles von anderen Benutzern zu importieren und zu exportieren. Dies dient nicht zum Bootstrapping, sondern zum Teilen von Dotfiles.

---

---

---

:::note

> Bitte starten Sie Ihren Computer neu, nachdem das Installationsskript abgeschlossen ist und Sie zum SDDM-Anmeldebildschirm (oder einem schwarzen Bildschirm) weitergeleitet wurden.
> ::: -->
