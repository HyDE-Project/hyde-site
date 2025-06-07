---
title: Wallbash et dcol
description: Comprendre Wallbash et dcol
---

## Vue d'ensemble

Ce document fournit une explication de la configuration des couleurs utilisée pour le thème HyDE. Il couvre les couleurs principales, les couleurs de texte et les couleurs d'accentuation. Chaque couleur peut être spécifiée au format hexadécimal ou RGBA.

## Identifiants de couleur

Par défaut, lors de la **mise en cache du fond d'écran**, 4 couleurs principales, 4 couleurs de texte et 9 couleurs d'accentuation pour chaque couleur principale seront générées.

- **`dcol_mode`** : Cet identifiant détermine si le thème est en mode sombre ou clair.
- **`dcol_pryX`** : Ce sont les couleurs principales, avec `X` allant de 1 à 4.
- **`dcol_txtX`** : Ce sont les couleurs principales inversées utilisées pour le texte, avec `X` allant de 1 à 4.
- **`dcol_XaxY`** : Ce sont les couleurs d'accentuation pour chaque couleur principale, avec `X` allant de 1 à 4 et `Y` allant de 1 à 9.
- **`_rgba`** : Ce suffixe indique que la couleur est au format RGBA. Si le suffixe n'est pas présent, la couleur est au format hexadécimal.
- **`_rgb`** : Ce suffixe indique que la couleur est au format RGB.

## Utilisation

Pour utiliser la configuration des couleurs en cache :

1. Remplacez le préfixe `dcol_` par `wallbash_` pour permettre au script Wallbash d'analyser et de modifier les valeurs.
2. Considérez le préfixe `wallbash_` comme un espace réservé pour la valeur de couleur dominante.
3. Entourez l'identifiant de couleur avec des crochets angulaires (`<...>`) pour indiquer son remplacement par la valeur correspondante, par exemple `<wallbash_pry1>`.
4. Utilisez cet [exemple](https://github.com/hyde-project/hyde/tree/master/Configs/.config/hyde/wallbash) comme modèle.

Cela vous permet de créer un modèle pour les configurations, en utilisant la couleur dominante ou le fond d'écran, et de laisser le script Wallbash le convertir pour vous.

### Création d'un modèle `*.dcol`

Un modèle nécessite trois parties :

- Fichier cible
- Script/commande (optionnel)
- Contenu

## Le format de base :

| cible         | commande |
| ------------- | -------- |
| **contenu**   |

---

> **Remarque :** **cible**|**commande** doit toujours être sur la première ligne de chaque fichier modèle. Nous l'appellerons la `ligne d'en-tête`.

#### Fichier cible

Structurez votre modèle et déterminez l'emplacement de la configuration cible. Cela peut être :

- `${cacheDir}/wallbash` avec un post-traitement à l'aide d'un script.
- Un chemin attendu, par exemple à côté de `kitty.conf` pour Kitty, inclus via `include theme.conf`.

Utilisez des variables d'environnement pour gérer dynamiquement les répertoires :

- `${confDir}` = `$XDG_CONFIG_HOME` ou `$HOME/.config/`
- `${cacheDir}/wallbash` = `HYDE_CACHE_DIR/wallbash` = `$HOME/.cache/hyde`

#### Script/Commande optionnel

Après avoir rempli le fichier cible avec du contenu, vous pouvez exécuter des commandes/scripts arbitraires pour le post-traitement. Utilisez la variable `WALLBASH_SCRIPTS` pour naviguer vers le répertoire des scripts de Wallbash, par exemple `WALLBASH_SCRIPTS/your_script.sh`.

> **Attention :** Ajoutez uniquement des modèles provenant d'auteurs de confiance pour éviter l'exécution de code malveillant.

#### Contenu

Ce sont les contenus du fichier, contenant des espaces réservés Wallbash, par exemple `<wallbash_pry1>`.

---

Le répertoire `~/.config/hyde/wallbash/*` contient trois répertoires principaux :

### always

Les modèles dans `./wallbash/always/` sont exécutés lors de :

- Changement de thème
- Changement de fond d'écran
- Changement de mode

Plus d'informations [ici](./always/README).

### theme

Les modèles dans `./wallbash/theme/` sont exécutés lors de :

- Changement de thème
- Changement de mode

Plus d'informations [ici](./theme/README).

### scripts

Pour la personnalisation, stockez vos scripts dans `./wallbash/scripts`. Utilisez la variable `$WALLBASH_SCRIPTS` pour naviguer dans ce répertoire.