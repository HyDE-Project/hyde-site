---
title: Lua for the User & Migration
description: How HyDE's Lua-based Hyprland runtime is deployed, configured, and migrated from the legacy Hyprlang layout.
sidebar:
order: 4
---

This document explains the Lua-based Hyprland stack introduced by [the Lua migration](https://github.com/HyDE-Project/HyDE/discussions/1717). It is written for existing HyDE users deciding whether, and how, to move from the legacy Hyprlang configuration.

:::caution[Migration-era documentation]
The Lua migration changes and removes dot-files, and whole directories. Back up your Hyprland and HyDE configuration before restoring Lua dotfiles only if you have edited the `.local/lib` `.local/share` `.local/state` `.config/` HyDE dirs (drop-ins should survive.) The current [Hyprland configuration](../../configuring/hyprland/) article documents the legacy `.conf` layout; use this page as the companion migration reference until that article is updated.
:::

## At a glance 👁️‍🗨️

HyDE is not replacing every configuration format with Lua. Nor are we forcing a refactor of every script and component.
It is mostly about longevity, sealing down the **Hyprland runtime** from a Hyprlang `.conf` tree  into something stable.
Also, the addition of Lua modules and retaining TOML for declarative HyDE settings and dotfile manifests are natural fits.
Essentially, we're migrating to something with better support, **Lua**. Quite the popular scripting and systems language, among other tasks it creates variables like `hl`, `start`, `hyde`, `hs` etc. This is a core upgrade:

Hyprlang was the old material we used to carry important environment variables and its functionality was limited. Here's an example taken from the old startup.conf:

```conf
exec-once = dbus-update-activation-environment --systemd --all #? Might fail so we hardcode the variables below
exec-once = $start.DBUS_SHARE_PICKER    # dbus-update-activation-environment (one-time setup)
exec-once = $start.SYSTEMD_SHARE_PICKER # systemctl --user import-environment (one-time setup)
exec-once = $start.XDG_PORTAL_RESET     # resetxdgportal.sh (one-time setup)
```

As you can see the infrastructure was always somewhat unbalanced about the long-term viability. Simply put,
Hyprlang was good for having a table of variables, not for moving parts like is required for runtime operations.

``` lua [.local/share/hypr/lua/start_up.lua]
    hl.on(
            "hyprland.start",
            function()
                check_exec(hs.dbus_share_picker)
                check_exec(hs.systemd_share_picker)
                check_exec(hs.auth_dialogue)
    )
```

Instead of hoping that `startup.conf` goes off before hyprland starts, we declare an event `hyprland.start` or `hyde.activate` which chains into runtime operation, `hyde-shell reload` shows this off as it rebuilds core environments.

## Layouts

Layouts is a new and exclusive lua feature that allows the user to change the behaviour of their whole WM in 1 swift action,
keybinds, transitions inbetween workplaces, and windows among just the general _feel_ of your computer.
The default workflow and layout settings are unset, meaning that something else has to launch them.

Choose a layout:

```sh
hyde-shell layouts --select
```

### Notable files & concerns

| Concern | Legacy setup | Lua setup |
| --- | --- | --- |
| Hyprland entrypoint | `~/.config/hypr/hyprland.conf` or `$XDG_DATA_HOME/hyprland.conf` | `$XDG_DATA_HOME/hypr/hyde.lua` and `~/.config/hypr/hyprland.lua` |
| Window rules | `~/.config/hypr/windowrules.conf` | `/.local/share/hypr/lua/window_rules.lua` but preferably you'd port them into `hyprland.lua` |
| Startup settings | `[hyprland-start]` in `config.toml` | `[desktop.start]` in `$XDG_DATA_HOME/hyde/config-registry.toml` |
| UserPrefs | `.config/hypr/userprefs.conf` | `~/.local/share/hypr/lua/defaults.lua` |
| backup-restore | [legacy restore lists](../resources/restore.md) | [`deez` manifests invoked by `install.sh -r`](../resources/restore.md##tomlConfiguration) |

:::tip[HyDE+Lua brings a whole new module boundary]
If you're used to editing conf files due to glitchy themeing or mistimed updates then you'll love the new rigidness of Lua, and if you've never had to deal with that then consider it a perfect time to jump in and make HyDE better.
:::

Lua prevents a lot of the one-off tricks we started to rely on in-order to make hyprlang work for finer routines,
but it is **not** a guaranteed performance upgrade. Its main benefit is a more maintainable configuration and long-term support. The following table takes into account 'changes' as the differences between the latest available dev branch and a 'stable' release from before May 12th 2026 [95adf01]:

| Files changed | |LOC changes | Scripts | Description |
| --- | --- | --- | --- |
| 44 | +2,074 | −159 | 33 added, 11 modified, 29 unchanged | Adds dotfile manifests and migrations; updates installation and restore support. |

the new `dots` and `dots-groups` folders in ~/HyDE/Scripts/ containing the dot-file schemas.

`Helper functions` for `install.sh` which are supposed to make migrating more simple and reinforces the python env
_~/HyDE/Scripts/dots/hyprland.toml_ deploys the Lua tree.

All previous entrypoints have been updated;

| Entrypoint | Description |
| --- | --- |
| $XDG_DATA_HOME/.local/share/hypr/hyde.lua | Rewards promises to the environment such as the runtime environment, core lua scripts, all `.config/` userprefs and `.local/` fallbacks |
| $XDG_CONFIG_HOME/hypr/hyprland.lua | User override layer or simply 'user preferences' is part of the desired zone for interfacing with this upgrade, from adding keybinds to summoning HyDE scripts with lua. The `require("")`directive is helpful |

---

:::danger
Don't mess with TOML or Lua data you don't recognize, the punishment for running a broken dot-file setup is much bigger, as is our ability to build out HyDE. $XDG_DATA_HOME/hypr/lua/* defines a lot of what happends after uwsm launches and mounts HyDE's drop-in configuration and is at the heart of HyDE's functionality.
:::

### Runtime upgrades

Since lua is now parrallel in terms to our python environment. HyDE activates the Lua stack through UWSM:

```text
UWSM environment scripts
  -> ~/.local/lib/hyde/shell/activate
  -> HYDE_MODE=lua and HYPRLAND_CONFIG=.../hypr/hyde.lua
  -> Hyprland loads hyde.lua
  -> HyDE loads its Lua modules and ~/.config/hypr/hyprland.lua
```

The shared runtime belongs under `$XDG_DATA_HOME/hypr/`; your user changes belong under `$XDG_CONFIG_HOME/hypr/`. This follows HyDE's usual separation between maintained data and user-owned configuration. See [Secrets & Portals](../secrets/) for the related UWSM and XDG session model.

:::note[Do not edit the shared runtime for no reason]
Files below `~/.local/share/hypr/lua/` and `~/.local/share/hypr/hyde.lua` are deployed by HyDE and can change on restore. Branch out by placing direct overrides in `~/.config/hypr/hyprland.lua`, and split larger customisations into Lua files that can be loaded retroactively with `require()`.
:::

## Hyprlang to Lua

**Hyprlang files are declarative**: they describe settings and dispatch commands. What's inside a .conf file was a lie, it was and will always tend to be `Hypr` compliant syntax. Lua can express the same settings, then add functions, event handlers, and shared helpers where they make sense; which some conf files were doing anyways.

For example, a legacy input block such as:

```ini
# ~/.config/hypr/userprefs.conf
input {
    kb_layout = us,es
    accel_profile = flat
}
```

becomes a more meaningful profile:

```lua
# ~/.config/hypr/hyprland.lua
hl.config({
    input = {
        kb_layout = "us,es",
        accel_profile = "flat",
    },
})
```

Likewise, a key binding can use HyDE's Lua helpers instead of a comma-delimited `bind` line:

```lua
hl.bind(
    "SUPER + Q",
    hl.dsp.window.close(),
    { description = "[Window Management] close focused window" }
)
```

```ini
#~/.config/hypr/hyprland Conf -> Lua guide
MOD=hyde.config.modifiers.main
_F = {description = "[Launcher|Apps] Demuestra layouts"}
hl.bind(MOD .. " + ALT + L", hl.dsp.exec_cmd("hyde-shell layouts --select"), _F)
```

Start with HyDE's shipped modules for patterns that match the installed runtime, you could even restore the previous keybinds to your liking and mess about with the start_up as we'll see next up.

### TOML still has a role

TOML remains the data layer between scripting and runtime calls. `~/.config/hyde/config.toml` contains portable HyDE preferences such as desktop applications, startup commands and helpful aliases, while the installed schema describes valid fields. HyDE's configuration registry also uses TOML to describe editable files and their hooks, including `~/.config/hypr/hyprland.lua`.

The separation:

+ Use **TOML** for HyDE options and schema-backed data.
+ Use **Lua** for Hyprland settings, bindings, rules, layouts, and event-driven behaviour.
+ Leave HyDE-managed files in `$XDG_DATA_HOME` alone unless you are developing HyDE itself.

### What must be ported manually

At minimum:

+ `keybindings.conf`
+ `windowrules.conf`
+ `monitors.conf`
+ `userprefs.conf`

The Lua manifest intentionally conflicts with the legacy Hyprland manifest. Old files may remain on disk after a restore, but they are no longer the configuration source. Keep a backup until you have checked every bind, monitor, rule, and startup service in a new session.

## Layouts and startup

Use `hyde-shell layouts --select` to choose a shipped or custom layout.

```text
~/.config/hypr/lua/layouts/custom.lua
```

The old `[hyprland-start]` section has been replaced by `[desktop.start]` in `~/.config/hyde/config.toml`. Lua's `start_up.lua` runs these events in accordance to the local schema, when Hyprland emits its start event. The schema installed with HyDE documents the supported keys.

### Restore and `deez`

`deez` is HyDE's dotfile deployment backend in the Lua migration. It is normally an implementation detail: `./install.sh -r` uses the private executable in HyDE's Python environment to deploy the adequate manifests. Honestly, very litle manual intervention is needed in order to use the new dotfile client.

If restore reports that `deez-dots` is missing, make sure your local `~/HyDE` folder is up-to-date, then
prepare the environment quickly:

```bash
cd /path/to/HyDE/Scripts
./install.sh -p
./install.sh -r
```

For an intentionally controlled retry, use the same command shape as the installer, not an older `dot` subcommand:

```bash
"$HOME/.local/state/hyde/python_env/bin/deez" \
  --source /path/to/HyDE \
  --config /path/to/HyDE/Scripts/dots-groups/core.toml \
  dots --skip-git --list
```

**Replace the `--list` flag for `--deploy all` only if you're sure it won't cause conflicts**
If it does, please don't report on it. As mentioned `deez-dots` its an _implementation detail_,
it's very practical outside our context but within, has been harnessed down so that there's very litte
risk of it failing outside user error.

:::tip[Use the full installer]
Run `./install.sh -p` to establish environment setup according to the newest git pull of HyDE, and  `./install.sh -r` for a Lua restore. **Does not convert .conf -> .lua** It deploys both the core and extra manifests, restores theme state, and runs HyDE's follow-up steps. You can prioritize certain configurations in the `HyDE/Scripts/dots` directory so that they survive overwrites.
:::

+ Old Hyprlang files and their Lua replacements

```ini
#This is the practical migration map, useful if you want to clean-up a migration:
  -- ~/.config/hypr/hyprland.conf -> ~/.local/share/hypr/hyde.lua:1
  -- ~/.config/hypr/keybindings.conf -> ~/.local/share/hypr/lua/key_binds.lua:1
  -- ~/.config/hypr/userprefs.conf -> ~/.config/hypr/hyprland.lua:17
  -- ~/.config/hypr/windowrules.conf, monitors.conf, nvidia.conf -> user hyprland.lua or a Lua module under lua/
  -- ~/.config/hypr/animations.conf, workflows.conf -> Lua workflow/animation selectors, not the old conf files
  -- ~/.local/share/hypr/_.conf and ~/.local/share/hyde/_.conf files -> mostly retired leftovers, kept only for migration/backups
```

## Migration checklist

1. Review [Installation](../../getting-started/installation/) and clone the Lua-enabled HyDE revision you intend to use.
2. Make a smart backup. I recommend: `~/.config/hypr`, `~/.config/hyde`, `~/.config/dconf`, `~/.config/gtk-3.0`, `~/.config/qt5ct`, `~/.config/qt6ct`, `~/.config/kdeglobals`, `~/.gtkrc-2.0`, and `~/.config/uwsm`.
3. Definetly make sure `luarocks` and the preface is set-up: `./install.sh -p`. Running `./install.sh -r` will not and **can not** translsate or transfer your existing .conf syntax into usable HyDE+Lua syntax.
4. Port legacy Hyprlang customisations into the directoris described throughout this doc. ($XDG_DATA_HOME, $HYPRLAND_CONFIG, $UWSM_FINALIZE_VARNAMES)
5. Start a new HyDE session(should happen automatically), then verify the runtime and reload Hyprland:

```bash
printf 'mode: %s\nconfig: %s\nprofile: %s\n' \
  "$HYDE_MODE" "$HYPRLAND_CONFIG" "$DCONF_PROFILE" "$HYDE_ACTIVATED" "$HYDE_FEATURE_LUA" "$QT_QPA_PLATFORM" &&
test -f "$HYPRLAND_CONFIG" || read -r -p ans "Interupted, continue?(y/n)"
test -z "$DCONF_PROFILE" || test -f "$DCONF_PROFILE"
hyprctl reload
```

:::note[Need the legacy guide?]
The current [Hyprland configuration](../../configuring/hyprland/) page remains the reference for a non-Lua HyDE installation. Do not mix its `.conf` examples with an active Lua runtime without first deciding which configuration stack your session is using.
:::
