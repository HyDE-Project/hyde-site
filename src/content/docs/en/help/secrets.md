---
title: Secrets & Portals
description: How a default HyDE setup handles secrets, XDG compliance, autostart, and desktop portals.
sidebar:
  order: 3
  badge:
    text: Draft
    variant: caution
---

This document aims to explain how HyDE handles secrets, XDG compliance, autostart, and desktop portals. It is intended to clear up common confusion and prevent frequently reported issues. This document is a work in progress and may not be complete.

## Secrets

A **secret** is any piece of sensitive data an application needs to store securely — most commonly a password or an authentication token that the app must persist across sessions.

### The org.freedesktop.secrets standard

Many Linux applications rely on the [org.freedesktop.secrets](https://specifications.freedesktop.org/secret-service/latest/) API (_shortened to_ **o.f.s.**) to store and retrieve credentials. This API is provided by backend implementations such as **KDE Wallet (KWallet)** and the **GNOME Keyring**. Even if only for compatibility reasons, you likely have it on your system:

```bash
sudo pacman -Qi libsecret
```

:::tip[How o.f.s. works in a nutshell]
The o.f.s. API holds your passwords alongside **lookup attributes** that an application can query via **D-Bus**. Secrets can only be *unlocked* when a user session is active, and they can only be *modified* when their `isLocked` state is `false`.
:::

### How HyDE handles secrets by default

On a contemporary HyDE installation, the libsecret API defined by `org.freedesktop.secrets` is present because **KWallet** is pulled in as a dependency of `kio`. `kio` is installed because **Dolphin** is HyDE's default GUI file explorer, as defined in `pkg_core.lst`.

For system-level privilege escalation (e.g., running GParted or Dolphin as root), HyDE uses **`polkit`** as the auth framework and **`polkit-gnome`** for prompts on the graphical interface.

:::tip[Problems launching those apps?]
It may be that installing `xorg-xhost` fixes your issue:

```bash
sudo pacman -Sy xorg-xhost
```

Then reboot.
:::

1. **A service requires elevation** — A service (such as GParted or Dolphin) requires elevation to perform a task. The system uses the policies defined by `polkit` (and established in `/usr/share/polkit-1/...`) to determine whether the task requires elevated privileges. If a secret is needed, `polkit-gnome` renders a prompt asking the user for a password. If valid, the service is allowed to climb privileges temporarily.

2. **Retrieving a credential** — When the application needs those credentials again, it asks for your password via `polkit-gnome`. This should be seamless so long as you are not missing dependencies or have a misconfiguration from installing [HyDE incorrectly](../../getting-started/installation/).

---

## XDG compliance

The [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/) defines standard locations for user data, configuration, cache, and runtime files. HyDE tries to follow this specification through several core packages:

### Relevant packages in `pkg_core.lst`

| Package | Purpose |
|---|---|
| `polkit-gnome` | Graphical and general authentication agent for privilege-escalation prompts. |
| `xdg-user-dirs` | Sets the standard user directories (`Documents`, `Pictures`, etc.) according to the XDG specification. |
| `xdg-desktop-portal-hyprland` (XDPH) | Enables D-Bus communication between applications and Hyprland. Essential for Flatpak apps — screen sharing, PipeWire integration, and more. |
| `xdg-desktop-portal-gtk` | Fallback portal for GTK-based applications (e.g., `polkit-gnome`) that need to communicate via D-Bus. |

---

## Autostart & UWSM

[UWSM](https://github.com/Vladimir-csp/uwsm) (Universal Wayland Session Manager) manages application launching by treating them as **systemd units**, enabling control of certain environment variables. On its own, it allows scripts to be run at the service level (before even Hyprland) and uses systemd to bind to our `graphical-session-pre.target`, `graphical-session.target`, and `xdg-desktop-autostart.target` to provide (in theory):

- A clean startup/shutdown experience.
- HyDE scripts and config established at the service level.
- Better automatic handling of system resources and fallbacks.
- A clearer boundary between what belongs to the *graphical session* and what does not.

What UWSM does _not_ do:

- Grant a magic increase in performance.
- Containerize or sandbox all your apps.
- Fix issues related to anything outside the graphical session running UWSM.

### HyDE's UWSM configuration scripts

HyDE ships three configuration scripts to integrate with UWSM and apply the standards it should follow:

| Script | Location | Role |
|---|---|---|
| `00-hyde.sh` | `$XDG_CONFIG_HOME/uwsm/env.d/` | Sets environment variables for the session. |
| `01-gpu.sh` | `$XDG_CONFIG_HOME/uwsm/env.d/` | GPU-specific environment variables. |
| `00-hyde.sh` | `$XDG_CONFIG_HOME/uwsm/env-hyprland.d/` | Sets defaults for Electron apps, Hyprland config paths, and toolkit fallbacks. |

:::note[You don't need to edit these]
These configuration scripts are opinionated so that HyDE's variables, keybinds, and theme configuration have redundant (good) fallbacks. If you're having autostart issues, the recommendation is to make sure UWSM is selected at your login manager. Alternatively, reinstall HyDE to ensure your system's UWSM is properly set up by removing any leftover configs in both `~/.local` and `~/.local/share`.
:::

Refer to [the Hyprland configuring section](../../configuring/hyprland/) for finer control of what occurs on login under HyDE.

---

## Desktop portals

Desktop portals provide a sandboxed interface for applications to request host system capabilities via D-Bus — think color pickers, screen sharing, secret storage, printing, and more. Applications (especially Flatpaks) typically cannot access these resources directly; they must go through the portal instead.

You can list the portals installed on your system with:

```bash
ls /usr/share/xdg-desktop-portal/portals/
```

### Portals shipped with HyDE

| Portal | Can Handle | Notes |
|---|---|---|
| `hyprland.portal` | Screen capture, window selection, remote desktop | Primary portal; Hyprland-native. |
| `gtk.portal` | Desktop entries, file explorer, security | Fallback for GTK apps. Functions as secondary handler here. |
| `kwallet.portal` | Secret storage via KWallet | Present via the `kio` → KWallet dependency chain; not explicitly configured by HyDE. |

Priority is set in `/usr/share/xdg-desktop-portal/hyprland-portals.conf` — Hyprland is default, GTK is fallback. You can override this by creating `~/.config/xdg-desktop-portal/hyprland-portals.conf`.

:::note
If an application bypasses portals entirely (common with older native apps and some Electron apps), no portal configuration will affect its behavior. This can explain why an app ignores your system theme or preferences.
:::

---

## Theme switching and confusion

HyDE's theming stack currently targets *four* application categories explained below, each themed through a different mechanism. Knowing which category an app falls into tells you immediately where to look when something looks wrong.

### How theme switching works

HyDE has two separate concepts that users often conflate:

- **Theme** (<kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd> or `hyde-shell theme select`) — selects a complete theme bundle: wallpaper set, GTK arc, icon pack, cursor, Kvantum preset, and pre-defined color overrides. (and even mode behavior via wallbash)
- **Mode** (<kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>) — cycles between _wallbash_ modes (colors extracted live from your current wallpaper) and _theme_ mode (colors from the theme bundle's pre-defined palette). This affects wallbash-driven apps without changing the theme itself.

Switching a theme triggers (among other things) wallbash to regenerate color tokens and push them to every registered template. Switching mode does the same but with a different color source.

### Rofi

Rofi manages its own theming independently of Qt, GTK, or Kvantum. HyDE's default Rofi themes live in `~/.local/share/hyde/rofi/themes/` — do not edit these directly as they are overwritten on updates.

Switch Rofi style with <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd>. If you want a custom Rofi theme, place it in `~/.config/rofi/` and reference the [theming section](../../theming/wallbash-and-dcol/).

#### Qt apps (Dolphin, ark, think kde apps)

Themed via **Kvantum** (the style engine) and **qt5ct** / **qt6ct** (the settings bridges). Wallbash generates a Kvantum theme from your active colors and writes it to `~/.config/Kvantum/`. Qt apps pick this up automatically because HyDE sets `QT_QPA_PLATFORMTHEME=qt6ct` in the session environment via the UWSM config scripts.

If a Qt app looks unstyled, check that `kvantum`, `qt5ct`, and `qt6ct` are all installed and that the environment variable is present in your session:

```bash
echo $QT_QPA_PLATFORMTHEME  # should return: qt6ct
```

#### GTK2, GTK3, GTK4 apps (from GParted to PavuControl)

Themed mainly via **nwg-look**, which writes settings to `~/.gtkrc-2.0` and `~/.config/gtk-3.0/settings.ini`. HyDE's active GTK arc (the `.tar.*` file inside the theme bundle) is applied here.

Open `nwg-look` or — more preferably — press <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> / run `hyde-shell wallbashtoggle` and compare with PavuControl or Blueman-Manager. Changes take effect on the next app launch. GTK4 handling should follow your theme's design, but behavior may depend on how the theme was authored.

If a GTK4 app looks plain white or ignores your theme, the required `gtk.css` file could be missing, not properly generated, or the app is sandboxed (Flatpak) and cannot read it.

#### Electron apps (VS Code, Spotify, Discord)

Electron apps use their own Chromium rendering pipeline and do not natively participate in Qt or GTK theming. HyDE's wallbash templates attempt to push colors to these apps via their GTK integration layer, with varying results:

- **VS Code** — wallbash can apply a color theme if the wallbash extension or color theme is active inside the editor.
- **Spotify** — potentially powerful if a proper Spicetify setup is in place.
- **Discord** — typically requires a custom client (e.g., Vencord) that reads CSS; wallbash templates exist for this in the community.

:::tip
For Electron apps, the most reliable approach is an app-specific wallbash template in `~/.config/hyde/wallbash/scripts/`. This lets wallbash push color and other data directly to the app's config format on every wallpaper or theme switch.
:::

### Flatpak apps

Flatpak apps run in a sandbox and are generally configured well with a clean HyDE install. You can use **Warehouse** to see what's installed via Flathub, or run `./install_fpk.sh` in the `~/HyDE/Scripts/extra` directory to verify the setup and configuration state.

Portal-mediated theming (like with ARCs) is the cleaner long-term path and depends on `xdg-desktop-portal-gtk` being active in your session.