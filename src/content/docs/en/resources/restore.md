---
title: Restore Configuration
description: Restore script's logic
---

:::note

"Restore" in this and further context is restoring the dotfiles from the repository to your $HOME, not the other way around.

```sh
./restore_cfg.sh </path/to/file.psv > <optional /path/to/hyde/clone>
```

**Warning - the second argument is an origin, not a destination.** If you pass something like `~/.config` there, hoping that means "restore out to _my_ config folder", the script will instead look for missing files in `~/.config`.
Every restoration step from then on fails silently with `No such file or directory` so long as the given list is incomprehensible.
Don't run the restore script on its own.

:::

Given that `.local/lib/hyde` populates via this exact mechanism, a failed run at this stage could corrupt the HyDE library without replacing it - if `hyde-shell` responds with something like (`Error: Could not load HyDE, broken installation?`)
 Copy a functional version of the library from either a local backup `"${XDG_CONFIG_HOME:-$HOME/.config}/cfg_backups/<timestamp>/.local/lib/hyde/"` or by making sure you're carrying the right files:

```bash
rsync -av ~/HyDE/Configs/.config/ "${XDG_CONFIG_HOME:-$HOME}/"&&
rsync -av ~/HyDE/Configs/.local/ "${XDG_DATA_HOME:-$HOME}/.local/"
```

## Pipe Separated Values (PSV)

This is a pipe-separated value file. It contains the paths of the dotfiles and their respective package dependencies.

**Note:**

- This is a 4-column file separated by `|`.
- Each column should use spaces to separate array elements.
- HyDE includes a single `restore_cfg.psv`, which defines the fallback configuration.
- This format is recognized outside strict psv operations.
- Specifically, `restore.config.sh` captures the list of dependencies in psv format across various lists and runs 1 of typically 4 operations.

### Structure

```shell
flag|path|target|dependency
```

If you wish to know more about the flags refer to the `restore_cfg.psv` file in `HyDE/Scripts/`

#### example:

```sh
P|${HOME}/.config/hypr|hyde.conf animations.conf windowrules.conf keybindings.conf userprefs.conf monitors.conf|hyprland
S|${HOME}/.config/uwsm|env env-hyprland env.d env-hyprland.d|systemd hyprland uwsm
O|${HOME}/.local/share|hypr|hyprland
```

It is recommended that you verify your local dotfiles are aligned with those of the HyDEs github repository.
The following one-shot tries to help you:

```bash
rsync -rnc --itemize-changes --exclude='.git' \                                                    
 ~/HyDE/Configs/.config/ "${XDG_CONFIG_HOME:-$HOME}/.config/"
```

Lines that start with `>f+++++++++++` are files that exist in the upstream but are missing locally.
Lines like `>fc...` belong to files whose contents differ between you and upstream - Like one of _your_ configurations or outdated content inside the file.

Once you've identified the missing configuration files/dirs, you must begin a backup, if you'd like to convert the outtaded syntax to one compatible with Lua, where applicable you can use: [hyprconf2lua](https://github.com/Prateek-squadron/hyprconf2lua).

You can also look to the cfg_backups folder managed by HyDE:

```bash
cd "${XDG_CONFIG_HOME:-$HOME}/cfg_backups/"
```

## How do I restore my system?

HyDE is constantly evolving, every update brings a farewell to older configurations with the promise of improvement, we can take advantage of this and simply:

```sh
cd ~/HyDE/
git pull origin master
cd Scripts/
./install.sh -r  #If you don't care about the files in .config and .local, backups are made regardless.
rsync -av ~/HyDE/Configs/.config $XDG_CONFIG_HOME/ &&
rsync -av ~/HyDE/Configs/.local $XDG_DATA_HOME
```

- **`HyDE/Scripts/install.sh -r`** - Utilizes 'deez_dots', which requires a python environment (./install.sh -p) and is the most generic way of restoring your system.

## TOML Configuration

TOML — Tom's Obvious, Minimal Language —  is a configuration language which, like JSON,
uses `key = value` pairs alongside `[Definition Blocks]` and a clear syntax to build data structures. Hyde's own `hyde.toml`
concentrates the majority of changes between updates. Why TOML specifically? Well, its human-legible first, machine-second - Its contents serve good descriptions as well as doubling-up for instructing.

Also it allows comments and is read similarly to a systemd service unit-file, e.g:

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

HyDE uses TOML to carry a registry of various important system states. With time it was found more efficient to wrap
certain configurations within well-defined blocks. The restore scripts and operations (`deez-dots`, `restore_cfg`, `install.sh -r`) try taking advantage of the list format that is given - usually inside the well-defined blocks - to carry a timeline of HyDE's evolution, manifest, and more. Which the system interprets alongside environment variables and other HyDE specific data. Look at: [Configuring Hyprland](https://hydeproject.pages.dev/en/configuring/hyprland/). For more information.

...
