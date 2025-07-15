---
title: Hyprland
description: Configurações relacionadas ao Hyprland
sidebar:
  order: 3
---

<link rel="stylesheet" href="/src/styles/tables.css">

# Árvore de configuração

```
. 📂 ~/.config/hypr
└── 📂 animations/
├── 📄 animations.conf
├── 📄 hyde.conf
├── 📄 hypridle.conf
├── 📄 hyprland.conf
└── 📂 hyprlock/
├── 📄 hyprlock.conf
├── 📄 keybindings.conf
├── 📄 monitors.conf
├── 📄 nvidia.conf
└── 📂 themes/
│ ├── 📄 colors.conf
│ ├── 📄 theme.conf
│ ├── 📄 wallbash.conf
├── 📄 userprefs.conf
└── 📄 windowrules.conf
├──
. 📂 ~/.local/share/hyde
│ ├── 📄 hyprland.conf
```

---

:::caution

**Leia a [_Wiki_ do _Hyprland_](https://wiki.hyprland.org/) primeiro!**

:::

# Configuração do _Hyprland_ do _HyDE_

Como o _Hyprland_ importa o `~/.config/hypr/hyprland.conf`, a configuração do _Hyprland_ do _HyDE_ é dividida em três seções:

- [Modelo base](#1-boilerplate)
- [Sobrescrições](#2-overrides)
- [Usuários](#3-users)

## 1. Modelo base

Essa seção contêm a configuração padrão do _HyDE_. Não é recomendado mudar esta seção.

**Caminho:** `$XDG_DATA_HOME/hyde/hyprland.conf`

Essa configuração é importada em cima de outras configurações em `~/.config/hypr/hyprland.conf`.

```ini
# Boilerplate configuration
source = ~/.local/share/hyde/hyprland.conf
```

## 2. Sobreescrições

Essa seção é para sobrescrever a configuração padrão do _HyDE_.

:::caution

O arquivo `xdg_config/hypr/hyde.conf` é obsoleto. Use `xdg_config/hyde/config.toml` em vez disso.

:::

Para sobrescrever a configuração padrão, configure estas seções no seu `config.toml`:

- **[hyprland]** - Aplicativos padrão, temas e configurações de display.
- **[hyprland_start]** - Comandos na inicialização e serviços.

**Arquivo de configuração:** `$XDG_STATE_HOME/hyde/hyprland.conf`

Para opções mais detalhadas, veja:
- [hyprland configuration](../config_toml/#hyprland)
- [hyprland_start configuration](../config_toml/#hyprland_start)

## 3. Usuário;

Essa seção é para configuração do usuário. É recomendado mudar esta seção de acordo com seu gosto.

**Caminhos:**

- `./keybindings.conf`
- `./windowrules.conf`
- `./monitors.conf`
- `./userprefs.conf`

---

:::tip

Você provavelmente só precisa destes arquivos para configurar suas preferências.
As variáveis do _Hyprland_ podem ser sobrescritas, logo você pode mudar os valores padrão de acordo com seu gosto.

O _Hyprland_ pode recarregar instantaneamente os arquivos de configuração, então você pode editá-los, e ver as mudanças imediatamente.

:::

Agora você deve saber qual arquivo é responsável pelo oque. Refira-se a [_Wiki_ do _Hyprland_](https://wiki.hyprland.org) para mais informações e para conseguir sua experiência de _desktop_ perfeita.

Também veja [Duvidas Frequentes e Dicas](../help/faq#how-can-i-change-keyboard-layout).
