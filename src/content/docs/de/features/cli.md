---
title: HyDE CLI
description: Installation guide for HyDE-cli
---

<div align="center">
  <br>

![hyde_cli_banner](../../../../assets/hyde-cli.png)

<style type="text/css">
    img {
        width: 200px;
    }
</style>

<br/>

HyDE-cli ist ein CLI-Tool für [HyDE](https://github.com/prasanthrangan/hyprdots).
Dieses Repository enthält Skripte, die, obwohl sie nicht perfekt sind, eine bessere Verwaltung Ihrer HyDE-Installation ermöglichen.
Beispielsweise haben wir ein funktionsfähiges TUI-Wiederherstellungstool, das der Datei `restore_cfg.lst` folgt, Stromsparoptionen, die für Laptops nützlich sein können, und vieles mehr!

</div>

> 🚨 Obwohl HyDE-cli stabil ist, ist es wichtig zu beachten, dass diese Skripte Änderungen vornehmen und _möglicherweise_ Ihre Systemkonfiguration durcheinanderbringen könnten.
> Wir bitten Sie, dieses Tool vorsichtig zu verwenden und gefundene Fehler zu melden.

## Installation

Zum installieren, führen Sie den folgenden Befehl aus:

```sh
curl -sL https://raw.githubusercontent.com/HyDE-Project/Hyde-cli/master/install.sh | bash
```

> 📢 Für Benutzer ohne Root-Zugriff:
> `export HYDE_LOCAL=1` um dieses Paket lokal zu installieren

Für andere funktionierende Installationslösungen sehen Sie bitte die folgenden unten an.

### Arch Linux

Verwenden Sie Ihren bevorzugten AUR-Helfer `paru` oder `yay`:

```sh
paru -Sy hyde-cli-git
```

```sh
yay -Sy hyde-cli-git
```

Verwenden Sie makepkg:

```sh
git clone https://aur.archlinux.org/hyde-cli-git.git
cd ./hyde-cli
makepkg -si
```

### Make

Installiere erforderliche Abhängigkeiten: `git make fzf tree ttf-jetbrains-mono-nerd`.

Klonen:

```sh
git clone https://github.com/HyDE-Project/Hyde-cli
cd ./Hyde-cli
```

Zum installieren:

```sh
make
```

Zum deinstallieren:

```sh
make uninstall
```

Zum Aktualisieren:

```sh
make update clean install
```

> 📢 Benutzer ohne Root-Zugriff sollten dieses Flag für `make` bereitstellen; `make LOCAL=1`

> ⚠️ Wenn Sie HyDE bereits ohne den CLI installiert haben, können Sie den CLI immer noch verwenden, um Ihre Installation zu verwalten.
> Um dies zu tun, kombinieren Sie die Flags `--dir` und `--link`, wo sich das lokale geklonte Repository befindet.
>
> Zum Beispiel:
>
> ```sh
> Hyde-install --dir /path/to/cloned/hyde --link
> ```

#### Installationsanweisungen für HyDE mit Hyde-install

> 📢 Um die beste Erfahrung zu erzielen, wird empfohlen, eine frische Installation von HyDE durchzuführen.

1. **Grundlegende Installation**

- Um HyDE mit den Standardwerten zu installieren, führen Sie einfach den folgenden Befehl aus:

  ```sh
  Hyde-install
  ```

> ⚠️ _Haben Sie HyDE bereits, bevor Sie diese CLI entdeckten?_
> Führen Sie einfach diesen Befehl aus
> `Hyde-install --link --dir ~/HyDE`
> Beachten Sie, dass `~/HyDE` der Pfad zum geklonten Verzeichnis ist.
> Weitere Informationen finden Sie unten unter **Erweiterte Installation**.

1. **Erweiterte Installation**

- Für mehr Kontrolle über den Installationsprozess können Sie die folgenden Optionen verwenden:

  - **Lokales Verzeichnis angeben**: Um HyDE in ein bestimmtes lokales Verzeichnis zu klonen und die Installation auszuführen, verwenden Sie die Flag `-d` oder `--dir` gefolgt vom Pfad des Verzeichnisses.

    ```sh
    Hyde-install --dir /path/to/directory
    ```

  - **Remote Git-Repository angeben**: Um HyDE von einem bestimmten Fern-Git-Repository zu klonen, verwenden Sie die Flag `-g` oder `--git` gefolgt von der URL des Repositorys.

    ```sh
    Hyde-install --git https://host/owner/repository
    ```

  - **Lokales Git-Repository verknüpfen**: Um ein lokales Git-Repository zu verknüpfen, verwenden Sie die Flag `-l` oder `--link`.

    ```sh
    Hyde-install --link
    ```

3. **Änderungen synchronisieren**

- Wenn Sie die neuesten Änderungen vom `hyprdots/HyDE`-Repository abrufen und auf Ihre lokale Installation anwenden möchten

  ```sh
  Hyde update
  Hyde restore Config
  ```

> ⚠️ Wenn Sie HyDE bereits ohne den CLI installiert haben, können Sie den CLI immer noch verwenden, um Ihre Installation zu verwalten.
> Um dies zu tun, kombinieren Sie die Flags --dir und --link, wo sich das lokale geklonte Repository befindet.
>
> Zum Beispiel:
>
> ```sh
> Hyde-install --dir /path/to/cloned/hyde --link
> ```
