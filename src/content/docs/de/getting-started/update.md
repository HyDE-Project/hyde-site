---
title: Updating
description: HyDE Dotfiles-Management-Anleitung
---

## Automatisch

Um HyDE zu aktualisieren, müssen Sie die neuesten Änderungen von GitHub abrufen und die Konfigurationen wiederherstellen, indem Sie die folgenden Befehle ausführen:

```shell
cd ~/HyDE/Scripts
git pull origin master
./install.sh -r
```

:::note

Alle von Ihnen vorgenommenen Konfigurationen werden überschrieben, wenn sie in `Scripts/restore_cfg.psv` zur Wiederherstellung aufgeführt sind.
Jedoch werden alle ersetzten Konfigurationen gesichert und können aus `~/.config/cfg_backups` wiederhergestellt werden.
Siehe [Konfiguration wiederherstellen](/hyde/installation/restore/) für weitere Informationen.

:::

## Granulare und manuelle Updates

Zusätzlich zu den obigen Befehlen können Sie die Datei [Scripts/restore_cfg.psv](https://github.com/HyDE-Project/HyDE/blob/master/Scripts/restore_cfg.psv) bearbeiten. Die Dokumentation dazu befindet sich in der Datei.

Siehe auch [dies](../resources/restore.md).

### Nur die Dotfiles aktualisieren

:::note

> "Wiederherstellen" im weiteren Kontext bedeutet, die Dotfiles aus dem Repository in Ihr $HOME zu übertragen, nicht umgekehrt.

```sh
./restore_cfg.sh </path/to/file.psv > <optional /path/to/hyde/clone>
```

:::

<details>
<summary>So könnte es aussehen</summary>

```sh
cd ~/HyDE/Scripts
./restore_cfg.sh ./restore_cfg.psv
```

</details>

---
