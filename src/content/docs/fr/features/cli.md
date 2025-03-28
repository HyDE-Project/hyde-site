---
title: HyDE CLI
description: Guide d'installation pour HyDE-cli
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

HyDE-cli est un outil en ligne de commande pour [HyDE](https://github.com/prasanthrangan/hyprdots).
Ce dépôt contient des scripts qui, bien que peut-être pas parfaits, pourraient fournir une meilleure façon de gérer votre installation HyDE.
Par exemple, nous avons un outil TUI de restauration fonctionnel qui suit `restore_cfg.lst`, des options d'économie d'énergie qui pourraient être utiles pour les ordinateurs portables, et bien plus encore !

</div>

> 🚨 Bien que HyDE-cli soit stable, il est important de noter que ces scripts modifient et _pourraient_ potentiellement perturber votre configuration système.
> Nous vous demandons d'utiliser cet outil avec précaution et de signaler tout bug que vous trouverez.

## Installation

Pour installer, exécutez la commande suivante :

```sh
curl -sL https://raw.githubusercontent.com/HyDE-Project/Hyde-cli/master/install.sh | bash
```

> 📢 Pour les utilisateurs n'ayant pas d'accès root :
> `export HYDE_LOCAL=1` pour installer ce package localement

Pour d'autres solutions d'installation fonctionnelles, voir ci-dessous.

### Arch Linux

Utilisez votre assistant AUR préféré `paru` ou `yay` :

```sh
paru -Sy hyde-cli-git
```

```sh
yay -Sy hyde-cli-git
```

Utilisez makepkg :

```sh
git clone https://aur.archlinux.org/hyde-cli-git.git
cd ./hyde-cli
makepkg -si
```

### Make

Installez les dépendances requises : `git make fzf tree ttf-jetbrains-mono-nerd`.

Clonez :

```sh
git clone https://github.com/HyDE-Project/Hyde-cli
cd ./Hyde-cli
```

Pour installer :

```sh
make
```

Pour désinstaller :

```sh
make uninstall
```

Pour mettre à jour :

```sh
make update clean install
```

> 📢 Les utilisateurs n'ayant pas d'accès root doivent fournir ce flag pour `make` : `make LOCAL=1`

> ⚠️ Si vous avez précédemment installé HyDE sans utiliser le CLI, vous pouvez toujours utiliser le CLI pour gérer votre installation.
> Pour ce faire, combinez les flags --dir et --link où se trouve le dépôt cloné localement.
>
> Par exemple :
>
> ```sh
> Hyde-install --dir /chemin/vers/hyde/cloné --link
> ```

#### Instructions d'installation pour HyDE avec Hyde-install

> 📢 Pour obtenir la meilleure expérience, il est recommandé d'effectuer une installation fraîche de HyDE.

1. **Installation de base**

- Pour installer HyDE avec les paramètres par défaut, exécutez simplement la commande suivante :

  ```sh
  Hyde-install
  ```

> ⚠️ _Vous avez déjà HyDE avant de découvrir ce CLI ?_
> Exécutez simplement cette commande
> `Hyde-install --link --dir ~/HyDE`
> Notez que `~/HyDE` est le chemin vers le répertoire cloné.
> Voir **Installation avancée** ci-dessous pour plus d'informations.

2. **Installation avancée**

- Pour plus de contrôle sur le processus d'installation, vous pouvez utiliser les options suivantes :

  - **Spécifier le répertoire local** : Pour cloner HyDE dans un répertoire local spécifique et exécuter l'installation, utilisez le flag `-d` ou `--dir` suivi du chemin du répertoire.

    ```sh
    Hyde-install --dir /chemin/vers/répertoire
    ```

  - **Spécifier le dépôt Git distant** : Pour cloner HyDE depuis un dépôt Git distant spécifique, utilisez le flag `-g` ou `--git` suivi de l'URL du dépôt.

    ```sh
    Hyde-install --git https://hôte/propriétaire/dépôt
    ```

  - **Lier un dépôt Git local** : Pour lier un dépôt Git local, utilisez le flag `-l` ou `--link`.

    ```sh
    Hyde-install --link
    ```

3. **Synchroniser les changements**

- Si vous souhaitez obtenir les derniers changements du dépôt `hyprdots/HyDE` et les appliquer à votre installation locale

  ```sh
  Hyde update
  Hyde restore Config
  ```

> ⚠️ Si vous avez précédemment installé HyDE sans utiliser le CLI, vous pouvez toujours utiliser le CLI pour gérer votre installation.
> Pour ce faire, combinez les flags `--dir` et `--link` où se trouve le dépôt cloné localement.
>
> Par exemple :
>
> ```sh
> Hyde-install --dir /chemin/vers/hyde/cloné --link
> ```
