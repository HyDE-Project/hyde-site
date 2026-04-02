---
title: Secrets & Portals
description: How a default HyDE setup handles secrets, XDG compliance, autostart, and desktop portals.
sidebar:
  order: 3
  badge:
    text: Draft
    variant: caution
---

## Overview

This document tries to piece together some information about HyDE's secrets, XDG compliance, autostart, and desktop portals, intended to clear up some confusion I've noticed and hopefully prevent issues that people report semi-often. It is a work in progress and may not be complete.


## Secrets

A **secret** is any piece of sensitive data an application needs to store securely — most commonly a password or an authentication token that the app must persist across sessions.

### The org.freedesktop.secrets standard

Many Linux applications rely on the [org.freedesktop.secrets](https://specifications.freedesktop.org/secret-service/latest/) API (_shortened to_ **o.f.s.**) to store and retrieve credentials. This API is provided by backend implementations such as **KDE Wallet (KWallet)** and the **GNOME Keyring**.

:::tip[How o.f.s. works in a nutshell]
The o.f.s. API holds your passwords alongside **lookup attributes** that an application can query via **D-Bus**. Secrets can only be *unlocked* when a user session is active, and they can only be *modified* when their `isLocked` state is `false`.
:::

### How HyDE handles secrets by default

On a contemporary HyDE installation, the libsecret api defined by `org.freedesktop.secrets` is present because **KWallet** is pulled in as a dependency of `kio`. `kio` is installed because **Dolphin** is HyDE's default GUI file explorer as defined in `pkg_core.lst`.

For system-level privilege escalation (e.g., running GParted or Dolphin as root), HyDE uses **`polkit`** as the authentication agent and polkit-gnome for prompts/graphical interface. This requires `xorg-xhost` to be installed for certain apps to properly launch.

1. **A service requires elevation** — A service (such as gparted, dolphin, etc) requires elevation to perform a task. The system calls `polkit` to know whether or not the process is privileged and how to proceed under the policy established in `/usr/share/polkit-1/...`. If the process requires a secret, polkit-gnome renders a prompt asking the user for a password if valid, allows the service to climb privileges.

2. **Retrieving a credential** — When the application needs those credentials again, it will ask for your password via gnome-polkit, so long as it complies with the polkit policy defined by the system and you aren't missing dependencies or have a misconfig.



---

## XDG compliance

The [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/) defines standard locations for user data, configuration, cache, and runtime files. HyDE tries to follow this specification through several core packages.

### Relevant packages in `pkg_core.lst`

| Package | Purpose |
|---|---|
| `polkit-gnome` | Graphical and general authentication agent for privilege-escalation prompts (e.g., GParted, running Dolphin as admin). |
| `xdg-user-dirs` | Sets the standard user directories (`Documents`, `Pictures`, etc.) according to the XDG specification. |
| `xdg-desktop-portal-hyprland` (XDPH) | Enables D-Bus communication between applications and the Hyprland compositor. Essential for Flatpak apps — powers screen sharing, PipeWire integration, and more. |
| `xdg-desktop-portal-gtk` | Fallback portal for GTK-based applications (e.g., polkit-gnome) that need to communicate via D-Bus. |

---

## Autostart & UWSM

[UWSM](https://github.com/Vladimir-csp/uwsm) (Universal Wayland Session Manager) manages application launching by treating them as **systemd units**. On its own, it uses systemd to start the desktop environment/window manager and launch applications as services, providing (in theory):

- A clean startup experience.
- Establish HyDE environment variables and configurations.
- Better automatic handling of system resources and fallbacks.
- A clearer boundary between what belongs to the *graphical session* and what does not.

### HyDE's UWSM configuration scripts

HyDE ships three configuration scripts to integrate with UWSM and apply sensible fallbacks for systems that do not have UWSM:

| Script | Location | Role |
|---|---|---|
| `00-hyde.sh` | `$XDG_CONFIG_HOME/uwsm/env.d/` | Sets environment variables for the session. |
| `01-gpu.sh` | `$XDG_CONFIG_HOME/uwsm/env.d/` | GPU-specific environment variables. |
| `00-hyde.sh` | `$XDG_CONFIG_HOME/uwsm/env-hyprland.d/` | Sets defaults for Electron apps, Hyprland config paths, and toolkit fallbacks. |

:::tip[You don't need to edit these]
These configuration scripts are opinionated so that HyDE's variables, keybinds, and theme configuration work out of the box. There is no need to modify them manually under normal circumstances.
:::

---
## Desktop portals

Desktop portals provide a sandboxed interface for applications to request host 
system capabilities via D-Bus — file pickers, screen sharing, secret storage, 
printing, and more. Applications (especially Flatpaks) cannot access these 
resources directly; they go through the portal instead.

You can list the portals installed on your system with:
```bash
ls /usr/share/xdg-desktop-portal/portals/
```

### Portals shipped with HyDE

| Portal | Can Handle | Notes |
|---|---|---|
| `hyprland.portal` | Screen capture, window selection, remote desktop | Primary portal; Hyprland-native. |
| `gtk.portal` | Desktop entries, file explorer, security  | Fallback for GTK apps. Functions as secondary handler here. |
| `kwallet.portal` | Secret storage via KWallet | Present via the `kio` → KWallet dependency chain; not explicitly configured by HyDE. |

Priority is set in `/usr/share/xdg-desktop-portal/hyprland-portals.conf` — 
Hyprland is default, GTK is fallback. You can override this per-user by 
creating `~/.config/xdg-desktop-portal/hyprland-portals.conf`.

:::note
If an application bypasses portals entirely (common with older native apps and 
some Electron apps), no portal configuration will affect its behavior. This is 
the most frequent reason an app ignores your system theme or preferences.
:::

---

## Theming

HyDE's theming stack targets four application categories, each themed 
through a different mechanism. Knowing which category an app falls into tells 
you immediately where to look when something looks wrong.

### How theme switching works

HyDE has two separate concepts that users often conflate:

- **Theme** (`Super + Shift + T` or `hyde-shell theme select`) — selects a complete 
  theme bundle: wallpaper set, GTK arc, icon pack, cursor, Kvantum preset, and 
  pre-defined color overrides.
- **Mode** (`Super + Shift + R`) — cycles between wallbash modes (colors 
  extracted live from your current wallpaper) and theme mode (colors from the 
  theme bundle's pre-defined palette). This affects wallbash-driven apps without 
  changing the theme itself.

Switching a theme triggers wallbash to regenerate color tokens and push them to 
every registered template. Switching mode does the same but with a different 
color source.

### Application categories

### Rofi

Rofi manages its own theming independently of Qt, GTK, or Kvantum. HyDE's 
default Rofi themes live in `~/.local/share/hyde/rofi/themes/` — do not edit 
these directly as they are overwritten on updates.

Switch Rofi style with `Super + Shift + A`. If you want a custom Rofi theme, 
place it in `~/.config/rofi/` and reference it from your layout config, don't use the rofi theme selector app.


#### Qt apps (Dolphin, KWalletManager, qt-based system tools)

Themed via **Kvantum** (the style engine) and **qt5ct** / **qt6ct** (the 
settings bridges). Wallbash generates a Kvantum theme from your active colors 
and writes it to `~/.config/Kvantum/`. Qt apps pick this up automatically 
because HyDE sets `QT_QPA_PLATFORMTHEME=-qt6ct` in the session environment via 
the UWSM config scripts.

If a Qt app looks unstyled, check that `kvantum`, `qt5ct`, and `qt6ct` are all 
installed and that the environment variable is present in your session:
```bash
echo $QT_STYLE_OVERRIDE   # should return: kvantum
```

#### GTK2, GTK3, GTK4 apps 

Themed via **nwg-look**, which writes settings to `~/.gtkrc-2.0` and 
`~/.config/gtk-3.0/settings.ini`. HyDE's active GTK arc (the `.tar.*` file 
inside the theme bundle) is applied here. Run `nwg-look` to apply or verify 
settings. Changes take effect on the next app launch and include GTK4 handling that should follow your
themes design, but it seems to depend on the theme.

If a GTK4 app looks plain white or ignores your theme, the generated gtk.css 
could either be missing or the app is sandboxed (Flatpak) and can't read it.

#### Electron apps (VS Code, Spotify, Discord)

Electron apps use their own Chromium rendering pipeline and do not natively 
participate in Qt or GTK theming. HyDE's wallbash templates attempt to push 
colors to these apps via their GTK integration layer, with varying results:

- **VS Code** — wallbash can apply a color theme if the wallbash extension or 
  color theme is active inside the editor.
- **Spotify** — potentially powerful if a proper spicetify setup is in place.
- **Discord** — typically requires a client mod (e.g., Vencord) that reads 
  CSS; wallbash templates exist for this in the community.

:::tip
For Electron apps, the most reliable approach is an app-specific wallbash 
template in `~/.config/hyde/wallbash/scripts/`. This lets wallbash push color 
and other data directly to the app's config format on every wallpaper or theme switch.
:::


### Flatpak apps

Flatpak apps run in a sandbox and may not be able to read your GTK or Qt theme 
files depending on what filesystem permissions the Flatpak declares. Grant 
access with:
```bash
flatpak override --user --filesystem=xdg-config/gtk-3.0:ro
flatpak override --user --filesystem=xdg-config/gtk-4.0:ro
```

Even with these overrides, portal-mediated theming (via the GTK portal's 
settings endpoint) is the cleaner long-term path and depends on 
`xdg-desktop-portal-gtk` being active in your session.