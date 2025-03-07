---
title: Création de Thèmes
description: Comment créer des thèmes pour HyDE
---

Nous allons vous guider à travers le processus de création de thèmes pour HyDE étape par étape.
Ce tutoriel fonctionne à la fois pour hyprdots et HyDE.

### Guide de Démarrage Rapide

Clonez le dépôt hyde-theme-starter dans votre répertoire de thèmes

:::tip
Renommez `MyTheme` en le nom de votre thème, assurez-vous qu'il n'y a pas de conflit de noms dans [HyDE-Gallery](https://github.com/HyDE-Project/hyde-gallery)
:::

```bash
git clone https://github.com/richen604/hyde-theme-starter ~/MyTheme
```

1. Composants requis - tous doivent être au format `tar.*` :

   - Un thème GTK (obligatoire)
     - recherchez sur [Gnome-Look Themes](https://www.gnome-look.org/browse?cat=135&ord=latest) pour des thèmes existants
     - ou consultez [Générer GTK4](#generer-gtk4-depuis-wallbash) pour générer un thème GTK à partir d'un fond d'écran
   - Pack d'icônes (optionnel) - par défaut Tela-circle
     - recherchez sur [Gnome-Look Icons](https://www.gnome-look.org/browse?cat=132&ord=latest) pour des packs d'icônes existants
   - Thème de curseur (optionnel) - par défaut Bibata-Modern-Ice
     - recherchez sur [Gnome-Look Cursors](https://www.gnome-look.org/browse?cat=107&ord=latest) pour des thèmes de curseur existants
   - Police (optionnel)
     - recherchez sur [fonts.google.com](https://fonts.google.com/) pour des polices web
     - recherchez sur [nerdfonts.com](https://www.nerdfonts.com/) pour des polices de développeur patchées

2. Une collection de fonds d'écran qui correspondent à votre style/schéma de couleurs souhaité

   - [Wallhaven](https://wallhaven.cc/) - Pour les fonds d'écran
   - [farbenfroh.io](https://farbenfroh.io/) - Pour faire correspondre les couleurs des fonds d'écran si vous avez un schéma de couleurs en tête
   - N'ajoutez pas trop de fonds d'écran, 8-10 est un bon nombre

3. Installez `just` pour exécuter les scripts d'aide `yay -S just`

Allez dans votre répertoire de thème `cd ~/MyTheme` (remplacez `MyTheme` par le nom de votre thème)

:::tip
Renommez `MyTheme` dans le `justfile` en le nom de votre thème
:::

```bash
theme = "MyTheme"
```

Exécutez `just init` pour générer la structure initiale du répertoire

Votre thème devrait avoir la structure suivante :

```bash
~/MyTheme/
├── Config/                  # Partie de votre thème final - Fichiers de configuration
│   └── hyde/
│       └── themes/
│           └── MyTheme/     # répertoire principal du thème
│               └── wallpapers/
├── refs/                    # pour les fichiers de référence que nous générons
├── screenshots/             # pour les captures d'écran de votre thème
├── Source/                  # Partie de votre thème final - Arcs ie. gtk, curseur, icône, police
│   └── arcs/
├── .gitignore
├── justfile                 # pour exécuter les scripts d'aide
└── README.md                # liens vers cette page web
```

### Arcs

Les Arcs sont les composants GTK, icônes, curseur et police qui constituent les parties de votre thème.
Ajoutons-les immédiatement au répertoire `Source/arcs` pour qu'ils soient prêts à être testés.

Votre structure de dossiers devrait ressembler à ceci :

```bash
~/MyTheme/
├── Source/
│   └── arcs/
│       ├── Gtk_<Votre-Thème-GTK>.tar.*
│       ├── Cursor_<Votre-Thème-Curseur>.tar.*
│       └── Icon_<Votre-Thème-Icônes>.tar.*
│       └── Font_<Nom-De-Votre-Police>.tar.*
```

**Assurez-vous d'utiliser le préfixe correct pour chaque arc**. ex. `Gtk_<Votre-Thème-GTK>.tar.*`

### Visualiser votre thème avec Wallbash

Copiez vos fonds d'écran dans votre répertoire de thème

```bash
cp -r ~/wallpapers ~/MyTheme/Config/.config/hyde/themes/MyTheme/wallpapers
```

cd dans votre répertoire de thème

```bash
cd ~/MyTheme
```

installez votre thème

```bash
just install
```

### Tester votre thème avec wallbash

Il y a deux façons d'initialiser votre thème. depuis wallbash ou depuis un thème existant.

Nous allons utiliser wallbash pour ce guide. car il vous donne une bonne compréhension de la façon dont wallbash génère les couleurs pour votre thème. Vous pouvez en savoir plus sur wallbash [ici](#comprendre-wallbash).

Ouvrez Wallbash, réglage auto, sombre ou clair (`Meta + Shift + R`). </br>
Définissez votre fond d'écran choisi comme fond d'écran actuel (`Meta + Shift + W`)

Observez comment wallbash adapte les couleurs à votre fond d'écran pour les applications suivantes :

- GTK (nwg-look)
  - pour tester votre arc de thème gtk, passez du mode wallbash au mode thème (Meta + Shift + R)
  - puis vérifiez `pavucontrol` pour voir si votre thème gtk semble étrange. si c'est le cas, suivez les instructions dans [Générer GTK4](#générer-gtk4-depuis-wallbash) pour générer les fichiers de thème GTK4 en utilisant wallbash
- Kitty (kitty)
- QT (qt5ct + qt6ct)
- Waybar (waybar)
- Spotify (spotify)
- VSCode (code) - nécessite wallbash activé comme thème de couleur
- Cava (cava)

### Générer les fichiers de thème

Assurez-vous que le fond d'écran que vous avez choisi est le meilleur fond d'écran que wallbash génère pour votre thème. </br>
Maintenant, exécutez les commandes suivantes pour générer les fichiers wallbash.

```bash
just gen-all
just set-wall
```

Vous verrez un tas de nouveaux fichiers dans le répertoire `refs` de votre thème.

```bash
~/MyTheme/
├── refs/                   # pour les fichiers de référence que nous générons
│   ├── gtk-4.0/            # Fichiers de thème GTK4
│   │   ├── gtk.css         # Thème clair
│   │   └── gtk-dark.css    # Thème sombre
│   ├── kvantum/            # Fichiers de thème Kvantum
│   │   ├── kvantum.theme   # Configuration du thème Kvantum
│   │   └── kvconfig.theme  # Configuration Kvantum
│   ├── hypr.theme          # Thème Hyprland
│   ├── kitty.theme         # Thème Kitty terminal
│   ├── rofi.theme          # Thème Rofi
│   ├── theme.dcol          # Surcharges du mode "thème" wallbash
│   └── waybar.theme        # Thème Waybar
│   └── wall.set            # Premier fond d'écran utilisé par le thème
```

Vous pouvez copier tous les fichiers dans votre répertoire `Config/.config/hyde/themes/MyTheme`.

```bash
cp -r ./refs/* ./Config/.config/hyde/themes/MyTheme
```

exécutez `just install` à nouveau pour mettre à jour votre thème

```bash
just install
```

Ces fichiers sont utilisés pour définir le mode "thème" pour votre thème. (`Meta + Shift + R`)

### Édition des fichiers \*.theme

Ces fichiers sont importants pour que les thèmes fonctionnent correctement.

Vous devriez vous référer à un thème comme [Bad Blood](https://github.com/HyDE-Project/hyde-gallery/blob/Bad-Blood/Configs/.config/hyde/themes/Bad%20Blood) tout au long de ce guide.

Chaque fichier \*.theme contient des lignes de configuration

La première ligne a le format : chemin_du_fichier | commande_à_exécuter

- hypr.theme - `$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf`
- kitty.theme - `$HOME/.config/kitty/theme.conf|killall -SIGUSR1 kitty`
- rofi.theme - `$HOME/.config/rofi/theme.rasi`
- waybar.theme - `$HOME/.config/waybar/theme.css|${scrDir}/wbarconfgen.sh`

le fichier le plus important est `hypr.theme`

```bash
$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf
# ~/.config/hypr/theme/theme.conf est un fichier auto-généré. Ne pas éditer.

$GTK_THEME=Bad-Blood # nom du dossier à l'intérieur de `Source/arcs/Gtk_<Votre-Thème-GTK>.tar.*`
$ICON_THEME=besgnulinux-mono-red # nom du dossier à l'intérieur de `Source/arcs/Icon_<Votre-Thème-Icônes>.tar.*`
$COLOR_SCHEME=prefer-dark # prefer-dark, prefer-light, ou auto
$CURSOR_THEME=Night-Diamond-Red # nom du dossier à l'intérieur de `Source/arcs/Cursor_<Votre-Thème-Curseur>.tar.*`
$CURSOR_SIZE=30 # taille du curseur en pixels
```

- Éditez les variables pour les arcs, doivent correspondre au nom du dossier **à l'intérieur** de chaque arc dans `Source/arcs` comme ci-dessus
- Définissez les bordures hyprland, les couleurs et autres paramètres liés au thème
- Vous pouvez utiliser hypr.theme pour définir des programmes supplémentaires pour votre thème. comme SDDM ou le thème Vscode
- Devient `$HOME/.config/hypr/themes/theme.conf`

Toute mise à jour de votre thème dans `Config` ou `Source` doit être exécutée avec `just install` pour mettre à jour votre thème.

### Édition de theme.dcol

Le fichier `theme.dcol` est utilisé pour remplacer certaines couleurs générées par wallbash pour les modes wallbash.
Consultez [comprendre wallbash](#comprendre-wallbash) pour plus d'informations.

Ce fichier est entièrement optionnel

### Finaliser votre thème

Votre thème devrait maintenant être prêt à être ajouté à la hyde-gallery !

Quelques dernières retouches :

- Ajoutez quelques captures d'écran dans `~/screenshots`
- Ajoutez votre thème à la Hyde-Gallery

### Ajouter des Thèmes à Hyde-Gallery

Dans votre répertoire de thème, générez le readme en utilisant

```bash
python3 generate_readme.py
```

Initialisez git

```bash
git init && git branch -M main && git add . && git commit -m "Mon premier thème HyDE"
```

[créez un dépôt github](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

```bash
git remote add origin <votre-url-repo>
git push -u origin main
```

Fork hyde-gallery <https://github.com/HyDE-Project/hyde-gallery> </br>
Ajoutez votre thème à la liste et `hyde-themes.json`

## Plus d'informations

### Comprendre Wallbash

Wallbash est un outil qui génère des thèmes à partir de fonds d'écran. Il utilise `imagemagick` pour extraire les couleurs dominantes d'une image et les utilise pour générer des thèmes pour différentes applications.

Il existe trois modes de génération de couleurs :

- auto - utilise les couleurs dominantes de l'image
- sombre - utilise les couleurs sombres de l'image
- clair - utilise les couleurs claires de l'image

Vous pouvez basculer entre ces modes avec `Meta + Shift + R`

Les couleurs sont générées dans l'ordre suivant :

1. Couleur d'accentuation (accent)
2. Couleur de fond (background)
3. Couleur de texte (text)
4. Couleur de surbrillance (highlight)

### Générer GTK4 depuis Wallbash

Si votre thème GTK ne fonctionne pas correctement avec GTK4, vous pouvez générer un thème GTK4 à partir de wallbash.

1. Assurez-vous que votre thème est en mode wallbash (`Meta + Shift + R`)
2. Définissez le fond d'écran que vous souhaitez utiliser comme base pour votre thème (`Meta + Shift + W`)
3. Exécutez la commande suivante pour générer les fichiers de thème GTK4 :

```bash
just gen-gtk4
```

4. Copiez les fichiers générés dans votre thème :

```bash
cp -r ./refs/gtk-4.0 ./Config/.config/hyde/themes/MonTheme
```

5. Installez votre thème :

```bash
just install
```

### Comprendre les Arcs

Les Arcs sont les composants de votre thème qui sont installés globalement sur votre système.
Ils sont stockés dans `Source/arcs` et sont installés dans les répertoires appropriés lors de l'installation du thème.

Voici comment ils sont installés :

- GTK - `~/.themes`
- Icônes - `~/.icons`
- Curseur - `~/.icons`
- Police - `~/.local/share/fonts`

### Comprendre les Fichiers de Configuration

Les fichiers de configuration sont stockés dans `Config/.config/hyde/themes/MonTheme` et sont copiés dans les répertoires appropriés lors de l'installation du thème.

Les fichiers les plus importants sont :

- `hypr.theme` - Configuration principale du thème
- `theme.dcol` - Surcharges de couleurs pour wallbash
- `wall.set` - Premier fond d'écran que le thème utilise

### Dépannage

Si votre thème ne fonctionne pas correctement, vérifiez les points suivants :

1. Assurez-vous que tous les arcs sont au format `tar.*`
2. Vérifiez que les noms des dossiers dans les arcs correspondent à ceux dans `hypr.theme`
3. Assurez-vous que tous les fichiers de configuration sont au bon endroit
4. Vérifiez les journaux pour les erreurs :

   ```bash
   just logs
   ```

### Ressources Utiles

- [Guide de Style GTK](https://developer.gnome.org/hig/reference/style.html)
- [Documentation Hyprland](https://wiki.hyprland.org/Configuring/Variables/)
- [Documentation Wallbash](https://github.com/HyDE-Project/wallbash)
- [Documentation HyDE](https://hyde-project.github.io/hyde/)
