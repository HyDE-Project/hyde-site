---
title: theme.import.py
description: Página do manual do theme import.
---

### Prévia

![preview theme import](../../../../assets/man-pages/theme.import/image.png)

### NOME

theme.import.py - Importa temas do repositório da galeria do HyDE.

### SYNOPSIS

`theme.import.py` [OPÇÕES]

### DESCRIÇÃO

`theme.import.py` é um script para importar e gerenciar temas do repositório da galeria do HyDE. Ele permite que usuários clonem o repositório, busquem dados do tema, vejam uma prévia do tema, e apliquem temas selecionados.

### OPÇÕES

- `-j`, `--json`
  Carrega dados JSON após clonar o repositório.

- `-S`, `--select`
  Seleciona temas usando `fzf`.

- `-p`, `--preview` TEMA.
  Mostra uma prévia do tema especificado

- `-t`, `--preview-text` TEMA.r
  Prévia do texto para mostrar quando usando a opção `--preview`.

- `--skip-clone`
  Pula a clonagem do repositório.

- `-f`, `--fetch` THEME
  Busca e atualiza um tema específico por nome. Use `all` para buscar todos os temas em `xdg_config/hyde/themes`.

### ENVIRONMENT VARIABLES

- `LOG_LEVEL`
  Configuração o nível de log (padrão: `INFO`).

- `XDG_CACHE_HOME`
  Diretório para o cache (padrão: `~/.cache`).

- `XDG_CONFIG_HOME`
  Diretório para os arquivos de configuração (padrão: `~/.config`).

- `FULL_THEME_UPDATE`
  Sobrescreve os ficheiros arquivados (Útil para atualizações e mudanças nos arquivos).

### EXAMPLES

Abre menu fzf e seleciona temas.

```shell
theme.import.py --select
```
