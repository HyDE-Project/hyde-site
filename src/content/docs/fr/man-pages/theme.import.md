---
title: theme.import.py
description: Page de manuel pour l'importation de thèmes
---

### Aperçu

![preview theme import](../../../../assets/man-pages/theme.import/image.png)

### NOM

theme.import.py - Importe des thèmes depuis le dépôt de galerie HyDE

### SYNOPSIS

`theme.import.py` [OPTIONS]

### DESCRIPTION

`theme.import.py` est un script pour importer et gérer des thèmes depuis le dépôt de galerie HyDE. Il permet aux utilisateurs de cloner le dépôt, récupérer les données des thèmes, prévisualiser les thèmes et appliquer les thèmes sélectionnés.

### OPTIONS

- `-j`, `--json`
  Récupère les données JSON après le clonage du dépôt.

- `-S`, `--select`
  Sélectionne des thèmes en utilisant `fzf`.

- `-p`, `--preview` URL_IMAGE
  Obtient un aperçu du thème spécifié.

- `-t`, `--preview-text` TEXTE
  Texte d'aperçu à afficher lors de l'utilisation de l'option `--preview`.

- `--skip-clone`
  Ignore le clonage du dépôt.

- `-f`, `--fetch` THÈME
  Récupère et met à jour un thème spécifique par son nom. Utilisez `all` pour récupérer tous les thèmes situés dans `xdg_config/hyde/themes`.

### VARIABLES D'ENVIRONNEMENT

- `LOG_LEVEL`
  Définit le niveau de journalisation (par défaut : `INFO`).

- `XDG_CACHE_HOME`
  Répertoire pour les fichiers de cache (par défaut : `~/.cache`).

- `XDG_CONFIG_HOME`
  Répertoire pour les fichiers de configuration (par défaut : `~/.config`).

- `FULL_THEME_UPDATE`
  Écrase les fichiers archivés (utile pour les mises à jour et les changements dans les archives).

### EXEMPLES

Ouvre le menu fzf et sélectionne des thèmes.

```shell
theme.import.py --select
```
