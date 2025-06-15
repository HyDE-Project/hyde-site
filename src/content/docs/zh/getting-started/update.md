---
title: 更新
description: HyDE Dotfiles 管理指南
---

## 自动更新

要更新 HyDE，您需要从 GitHub 拉取最新的更改，并通过运行以下命令恢复配置：

```shell
cd ~/HyDE/Scripts
git pull origin master
./install.sh -r
```

:::note

如果 `Scripts/restore_cfg.psv` 中列出了需要覆盖的配置，您所做的任何更改都将被覆盖。
但是，所有被替换的配置都会被备份，您可以从 `~/.config/cfg_backups` 中恢复。
有关更多信息，请参阅 [恢复配置](/hyde/installation/restore/)。

:::

## 更精细的控制更新

除了上述命令，您还可以修改 [Scripts/restore_cfg.psv](https://github.com/HyDE-Project/HyDE/blob/master/Scripts/restore_cfg.psv)。文件中有相关文档说明。

另请参阅 [此处](../../resources/restore/)。

### 仅更新 dotfiles

:::note

> 进一步说明，“restore”指的是将仓库中的 dotfiles 恢复（覆盖）到你的 $HOME 目录，而不是将本地更改同步回仓库。

```sh
./restore_cfg.sh </path/to/file.psv > <optional /path/to/hyde/clone>
```

:::

<details>
<summary>类似如下操作</summary>

```sh
cd ~/HyDE/Scripts
./restore_cfg.sh ./restore_cfg.psv
```

</details>

---
