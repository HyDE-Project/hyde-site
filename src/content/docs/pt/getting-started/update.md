---
title: Atualizando
description: Guia de Gerenciamento dos Dotfiles HyDE
---

## Automatizada

Para atualizar o HyDE, você precisa puxar as mudanças mais recentes e restaurar as configurações executando os seguintes comandos:

shell
cd ~/HyDE/Scripts
git pull origin master
./install.sh -r


:::note

Quaisquer configurações que você fez serão sobreescritas se listadas para serem feitas em: Scripts/restore_cfg.psv.
No entanto, todas as configurações sobreescritas serão salvas e podem ser recuperadas em: ~/.config/cfg_backups.
Veja [Restaurando configuração](/hyde/installation/restore/) para mais informações.

:::

## Atualizações manuais e granulares

Além do comando acima, você pode modificar o [Scripts/restore_cfg.psv](https://github.com/HyDE-Project/HyDE/blob/master/Scripts/restore_cfg.psv). A documentação está no arquivo.

Também veja [isso](../../resources/restore/).

### Atualizando APENAS os dotfiles

:::note

> "restaurar" no contexto aqui é restaurar os dotfiles do repositório para seu $HOME, não o contrário.

sh
./restore_cfg.sh </path/to/file.psv > <optional /path/to/hyde/clone>


:::

<details>
<summary>Algo assim</summary>

sh
cd ~/HyDE/Scripts
./restore_cfg.sh ./restore_cfg.psv


</details>