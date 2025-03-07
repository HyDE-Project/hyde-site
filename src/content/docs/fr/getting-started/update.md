---
title: Mise à jour
description: Guide de gestion des dotfiles HyDE
---

## Automatisée

Pour mettre à jour HyDE, vous devrez récupérer les derniers changements depuis GitHub et restaurer les configurations en exécutant les commandes suivantes :

```shell
cd ~/HyDE/Scripts
git pull origin master
./install.sh -r
```

:::note

Toutes les configurations que vous avez effectuées seront écrasées si elles sont listées comme telles dans `Scripts/restore_cfg.psv`.
Cependant, toutes les configurations remplacées sont sauvegardées et peuvent être récupérées depuis `~/.config/cfg_backups`.
Consultez [Restauration de la Configuration](/hyde/installation/restore/) pour plus d'informations.

:::

## Mises à jour granulaire et manuelle

En plus de la commande ci-dessus, vous pouvez modifier le fichier [Scripts/restore_cfg.psv](https://github.com/HyDE-Project/HyDE/blob/master/Scripts/restore_cfg.psv). La documentation se trouve dans le fichier.

Consultez également [ceci](../resources/restore.md).

### Mise à jour des dotfiles UNIQUEMENT

:::note

> "restore" dans ce contexte signifie restaurer les dotfiles depuis le dépôt vers votre $HOME, et non l'inverse.

```sh
./restore_cfg.sh </chemin/vers/fichier.psv> <optionnel /chemin/vers/clone/hyde>
```

:::

<details>
<summary>Exemple d'utilisation</summary>

```sh
cd ~/HyDE/Scripts
./restore_cfg.sh ./restore_cfg.psv
```

</details>
