---
title: hyde-shell
description: Wrapper do HyDE para executar scripts e executáveis do HyDE.
sidebar:
  order: 2
---

## Nome

`hyde-shell` - Wrapper de execução dos scripts do HyDE e resolvedor de ambiente.

## Sinopse

```
hyde-shell [comando] [argumentos...]
hyde-shell [--help | help | -h]
hyde-shell [-r | reload]
```

## Descrição

`hyde-shell` é um script de wrapper universal que executa scripts do HyDE sem extensões de arquivo e resolve problemas relacionados ao PATH, onde usuários podem acidentalmente sobrescrever `~/.local/lib/hyde` no PATH.

Localizado em `~/.local/bin/`, o `hyde-shell` automaticamente descobre e executa scripts do diretório de biblioteca do HyDE, lidando com scripts Python (.py) e scripts shell (.sh) sem precisar de extensões de arquivo.

## Opções

**`--help, help, -h`**
: Exibe mensagem de ajuda mostrando comandos disponíveis e instruções de uso.

**`-r, reload`**
: Recarrega o ambiente HyDE e recarrega todas as configurações.

## Comandos embutidos

**`wallbash`**
: Executa um script wallbash para estilização dinâmica e gerenciamento de cores.

## Execução de scripts

`hyde-shell` fornece acesso a todos os scripts HyDE sem precisar de extensões de arquivo:

```bash
hyde-shell waybar              # Executa waybar.py
hyde-shell theme.import        # Executa theme.import.py
hyde-shell wallpaper           # Executa wallpaper.sh
hyde-shell screenrecord          # Executa screenrecord.sh
```

O wrapper automaticamente descobre e resolve todos os scripts no diretório da biblioteca HyDE.

## Usage Examples

Executa qualquer script HyDE sem precisar da extensão do arquivo:
```bash
hyde-shell waybar --help           # Executa waybar.py com o argumento de ajuda
hyde-shell theme.import            # Executa theme.import.py
hyde-shell wallpaper               # Executa wallpaper.sh
```

Usa comandos embutidos: 
```bash
hyde-shell wallbash                # Execute wallbash scripts in ~/.config/hyde/wallbash/scripts/

hyde-shell reload                  # Reload HyDE environment
```

Passa argumentos para o script subjacente:
```bash
hyde-shell waybar --set layout-1   # Passa arguments para o waybar.py
```

## Ferramentas chave

- **Resolução do caminho do Script**: Encontra scripts no `~/.local/lib/hyde/` independente da configuração do PATH.
- **Lida com extensões**: Automaticamente acrescenta extensões de arquivo apropriadas (.py, .sh).
- **Independência do PATH**: Funciona de forma independente da configuração atual do HyDE ou do diretório de trabalho.

## Arquivos

**`~/.local/bin/hyde-shell`**
: Executável principal do script de wrapper.

**`~/.local/lib/hyde/`**
: Diretório contendo todos scripts e módulos HyDE.

## Notas

- Sempre prefira `hyde-shell` sobre execução direta dos scripts para máxima compatibilidade.
- Extensões de arquivo são opcionais e automaticamente resolvidas.
- Versões futuras do HyDE vão cada vez mais depender do `hyde-shell` para execução de scripts.
