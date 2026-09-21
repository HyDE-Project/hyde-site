---
title: Restaurar Configuración
description: Lógica de restauración
---

::: note
En este contexto, "restaurar" significa llevar los dotfiles del repositorio hacia su `$HOME`, no al revés.

```sh
./restore_cfg.sh </path/to/file.psv> <optional /path/to/hyde/clone>
```

**Advertencia — el segundo argumento es un origen, no un destino.** Si pasa algo como `~/.config` aquí, esperando que signifique "restaurar dentro de mi directorio de configuración", el script en cambio buscará los archivos de origen *anidados dentro de* `~/.config`.
Cada paso de restauración fallará silenciosamente con `No such file or directory`, mientras que la lista registrada sea incomprensible.
No ejecute el script de restore sin razón.

:::

Dado que `.local/lib/hyde` se restaura mediante este mismo mecanismo, una ejecución fallida aquí puede corromper la biblioteca de HyDE
 y luego no lograr reemplazarla — si `hyde-shell`  responde con algo como (`Error: Could not load HyDE, broken installation?`).
 Revise `"${XDG_CONFIG_HOME:-$HOME/.config}/cfg_backups/<timestamp>/.local/lib/hyde/"` cual incluye una copia de respaldo.

```bash
rsync -av ~/HyDE/Configs/.config/ "${XDG_CONFIG_HOME:-$HOME}/"&&
rsync -av ~/HyDE/Configs/.local/ "${XDG_DATA_HOME:-$HOME}/.local/"
```

## Valores Separados por Pipes (PSV)

Este es un archivo de valores separados por pipes. Contiene las rutas de los dotfiles y sus respectivas dependencias de paquetes.

**Nota:**

- Es un archivo de 4 columnas separadas por `|`.
- Cada columna debe usar espacios para separar los elementos del arreglo.
- HyDE incluye un único `restore_cfg.psv`, que define el conjunto de configuración por defecto o de respaldo (fallback).
- El formato se reutiliza en los archivos `.lst` y otras variantes.
- `restore.config.sh` Captura la serie de dependencias definida en formato PSV para varias listas y corre una de 4 operaciones.

### Estructura

```sh
flag|path|target|dependency
```

**Ejemplo:**

```sh
P|${HOME}/.config/hypr|hyde.conf animations.conf windowrules.conf keybindings.conf userprefs.conf monitors.conf|hyprland
S|${HOME}/.config/uwsm|env env-hyprland env.d env-hyprland.d|systemd hyprland uwsm
O|${HOME}/.local/share|hypr|hyprland
```

Se recomienda verificar que sus dotfiles locales estén alineados con los del repositorio, usando la siguiente comprobación de un solo comando:

```bash
rsync -rnc --itemize-changes --exclude='.git' \                                                               
 ~/HyDE/Configs/.config/ "${XDG_CONFIG_HOME:-$HOME}/.config/"
```

Las líneas que comienzan con `>f+++++++++` son archivos que existen en el upstream pero que faltan localmente. Las líneas como `>fc.......T` corresponden a archivos cuyo contenido difiere — por ejemplo, una personalización suya, o una copia desactualizada.

Una vez identificados los archivos de configuración faltantes, o incluso directorios completos ausentes, debe comenzar un respaldo, si bien desea convertir sus antiguo sintax a uno correspondiente con Lua, donde sea aplicable puede usar: [hyprconf2lua](https://github.com/Prateek-squadron/hyprconf2lua).

Tambien puedes acceder el directorio de respaldo mantenido por HyDE:

```bash
cd $XDG_CONFIG_HOME/cfg_backups/
```

## ¿Cómo restauro mi sistema para asegurar sincronizidad?

HyDE esta constantemente evolucionando, cada actualización brinda un despedido de configuraciones con la promesa de que mejore, podemos tomar ventaja y simplemente:

```sh
cd ~/HyDE/
git pull origin master
./install.sh -r #Si no te importan los archivos en .config y .local, respaldos son hechos de toda manera.
rsync -av ~/HyDE/Configs/.config $XDG_CONFIG_HOME/ &&
rsync -av ~/HyDE/Configs/.local $XDG_DATA_HOME
```

- **`HyDE/Scripts/install.sh -r`** — Utiliza 'deez_dots', cual requiere un entorno de python (./install.sh -p) y es el método genérico de restaurar tu sistema.

## Configuración TOML

TOML — Tom's Obvious, Minimal Language — es un lenguaje de configuración sintácticamente simple que, al igual que JSON, usa pares `clave = valor` junto con `[bloques de definición]` para construir una estructura de datos. El archivo `hyde.toml` de HyDE concentra la mayoría de los cambios clave entre actualizaciones. ¿Por qué TOML específicamente? Porque está pensado para ser legible por humanos ante todo — su contenido puede servir tanto de descripción como de instrucción.

También admite comentarios y se lee de forma similar a una unidad de servicio de systemd, por ejemplo:

```toml
# config.toml, circa 2024
[rofi.theme]
# themeselect.sh configuration
scale = 6

# Registro moderno
[rofi.files.theme]
description = "Rofi Theme"
path = "${XDG_CONFIG_HOME:-$HOME/.config}/rofi/themes/current.rasi"
pre_hook = ["bash", "-c", "mkdir -p ${XDG_CONFIG_HOME:-$HOME/.config}/rofi/themes"]
post_hook = ["bash", "-c", "echo 'Rofi theme updated.'"]
```

HyDE usa TOML para llevar registro de una variedad de estados importantes. Con el tiempo resultó más eficiente envolver ciertas configuraciones en bloques bien definidos. Los scripts y operaciones de restauración (`deez-dots`, `restore_cfg`, `install.sh -r`) intentan aprovechar el formato de lista que se les entregue — a menudo dentro de estos bloques bien definidos — para llevar registro de la evolución de HyDE, su manifiesto, y más, lo cual el sistema interpreta junto con variables de entorno y datos propios de HyDE. Véase también: [Configuración de Hyprland](https://hydeproject.pages.dev/en/configuring/hyprland/).

...
