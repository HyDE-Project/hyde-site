---
title: Обновление
description: Руководство по управлению дотфайлами HyDE
---

## Автоматическое обновление

Чтобы обновить HyDE, вам нужно будет загрузить последние изменения с GitHub и восстановить конфигурации, выполнив следующие команды:

```shell
cd ~/HyDE/Scripts
git pull origin master
./install.sh -r
```

:::note

Любые сделанные вами конфигурации будут перезаписаны, если они указаны в `Scripts/restore_cfg.psv`.
Однако все замененные конфигурации сохраняются в виде резервных копий и могут быть восстановлены из `~/.config/cfg_backups`.
Смотрите [Восстановление конфигурации](/hyde/installation/restore/) для получения дополнительной информации.

:::

## Детальное и ручное обновление

В дополнение к вышеуказанной команде вы можете изменить файл [Scripts/restore_cfg.psv](https://github.com/HyDE-Project/HyDE/blob/master/Scripts/restore_cfg.psv). Документация находится в самом файле.
Также смотрите [это](../../resources/restore/).

### Обновление ТОЛЬКО дотфайлов

:::note

> «Восстановление» в дальнейшем контексте означает восстановление дотфайлов из репозитория в ваш каталог $HOME, а не наоборот.

```sh
./restore_cfg.sh </path/to/file.psv > <optional /path/to/hyde/clone>
```

:::

<details>
<summary>Примерно так</summary>

```sh
cd ~/HyDE/Scripts
./restore_cfg.sh ./restore_cfg.psv
```

</details>

---
