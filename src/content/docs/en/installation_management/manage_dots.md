---
title: Updates
description: HyDE Dotfiles Management guide
---

## Automated

To update HyDE, you will need to pull the latest changes from GitHub and restore the configs by running the following commands:

```shell
cd ~/HyDE/Scripts
git pull origin master
./install.sh -r
```

:::note

Any configurations you made will be overwritten if listed to be done so as listed by `Scripts/restore_cfg.psv`.
However, all replaced configs are backed up and may be recovered from in `~/.config/cfg_backups`.
See [Restore Configuration](/hyde/installation_management/restore/) for more information.

:::

## Granular and Manual Updates

In addition to the command above, you can modify the [Scripts/restore_cfg.psv](https://github.com/HyDE-Project/HyDE/blob/master/Scripts/restore_cfg.psv). The documentation on is on the file.

### Updating the dotfiles ONLY

:::note

> "restore" in further context is restoring the dotfiles from the repository to your $HOME, not the other way around.

```sh
./restore_cfg.sh </path/to/file.psv > <optional /path/to/hyde/clone`
```

:::

<details>
<summary>Something like this</summary>

```sh
cd ~/HyDE/Scripts
./restore_cfg.sh ./restore_cfg.psv
```

</details>

---

### Theme update and importing

Themes are located at [Scripts/themepatcher.lst](https://github.com/HyDE-Project/HyDE/blob/master/Scripts/themepatcher.lst)

A User can create a new themepatcher list file and use this file to be installed instead.
example, we can have `my_themes.lst`

```sh
./restore_thm.sh /path/to/my_themes.lst
```
