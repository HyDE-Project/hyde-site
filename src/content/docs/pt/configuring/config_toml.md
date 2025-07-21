---
title: Configuração principal
description: Guia de configuração do HyDE
sidebar:
  order: 2
---

<link rel="stylesheet" href="/src/styles/tables.css">

<!-- TODO:

Translators:
Request a translation for config.toml schema at
https://github.com/HyDE-Project/HyDE/blob/master/Configs/.local/share/hyde/schema/config.toml

translate the schema to your language
example:
config.en.toml

run `./gen-table.py config.en.toml` to generate the table
then paste it in here. 

 -->

---
O HyDE expõe o arquivo `xdg_config/hyde/config.toml` para usuários modificarem. Isto permite que usuários tenham a habilidade de interagir com os scripts sem usar parâmetros de comando.

Os usuários são encorajados a usar um editor que suporte validação de schema para garantir que o arquivo de configuração é válido.
```toml
"$schema" = "https://raw.githubusercontent.com/HyDE-Project/HyDE/refs/heads/master/Configs/.local/share/hyde/schema/config.toml.json"
```
---
### [battery.notify]

Configuração para o batterynotify.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| dock | Status do dock para notificações da bateria. | true |
| interval | Intervalo para notificações da bateria. | 5 |
| notify | Limite de notificações. | 1140 |
| timer | Timer para notificações da bateria. | 120 |

### [battery.notify.execute]

Comando para executar para notificações da bateria.

| Key | Description | Default |
| --- | ----------- | ------- |
| charging | Comando para executar quando carregando. |  |
| critical | Comando para executar quando bateria critica. | systemctl suspend |
| discharging | Comando para executar quando descarregando. |  |
| low | Comando para executar quando bateria baixa. |  |
| unplug | Comando para executar quando desconectado. |  |

### [battery.notify.threshold]

Limiar para notificações da bateria.

| Key | Description | Default |
| --- | ----------- | ------- |
| critical | Limiar para bateria critica. | 10 |
| full | Limiar para bateria cheia. | 90 |
| low | Limiar para bateria baixa. | 20 |
| unplug | Limiar para desconectar bateria. | 100 |

### [brightness]

Configuração do brightnesscontrol.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| notify | Habilitar notificações para controle de brilho. | true |
| steps | Número de passos para incrementar/reduzir volume. | 5 |

### [cava.hyprlock]

Configuração do 'cava.sh hyprlock'.

| Key | Description | Default |
| --- | ----------- | ------- |
| bar | Caracteres de barra do cava. | ▁▂▃▄▅▆▇█ |
| max_instances | número máximo de instâncias do cava. | 1 |
| range | Número de barras, menos um. | 7 |
| standby | Caractere de standby do cava. | 🎶 |
| width | Largura da saida do cava. | 20 |

### [cava.stdout]

Configuração do 'cava.sh stdout'.

| Key | Description | Default |
| --- | ----------- | ------- |
| bar | Caracteres de barra para o cava. | ▁▂▃▄▅▆▇█ |
| max_instances | número de instâncias máxima do cava. | 1 |
| range | número de barras, menos um. | 7 |
| standby | Caractere de espera do cava. | 🎶 |
| width | Largura da saída do cava. | 20 |

### [cava.waybar]

'Configuração do cava.sh waybar'.

| Key | Description | Default |
| --- | ----------- | ------- |
| bar | Caracteres de barra do cava. | ▁▂▃▄▅▆▇█ |
| max_instances | número máximo de instâncias do cava. | 1 |
| range | número de barras, menos um. | 7 |
| standby | Caractere de espera do cava. | 🎶 |
| width | Largura da saída do cava. | 20 |

### [hypr.config]

Configuração do Hypr.

| Key | Description | Default |
| --- | ----------- | ------- |
| sanitize | Lista de regex para higienizar no theme.config. | [".*rgba\(.*,.*,.*,.*\)"] |

### [hyprland]

Configuração do hyprland.

| Key | Description | Default |
| --- | ----------- | ------- |
| background_path | Caminho do papel de parede da tela de bloqueio. |  |
| bar | Barra. | waybar |
| browser | Navegador. | firefox |
| button_layout | Layout do botão. (apenas gtk) |  |
| color_scheme | Esquema de cores. | prefer-dark |
| cursor_size | Tamanho do cursor. | 24 |
| cursor_theme | Tema do cursor. | Bibata-Modern-Ice |
| document_font_size | Tamanho da fonte do documento. | 10 |
| editor | Editor. | code |
| explorer | Gerenciador de arquivos. | dolphin |
| font | Fonte. | Canterell |
| font_antialiasing | Antialiasing da fonte. | rgba |
| font_hinting | Font hinting. | full |
| font_size | Tamanho da fonte. | 10 |
| gtk_theme | Tema GTK. | Wallbash-Gtk |
| icon_theme | Tema dos ícones. | Tela-circle-dracula |
| idle | Gerenciador de ociosidade. | hypridle |
| lockscreen | Tela de bloqueio. | lockscreen.sh |
| monospace_font | Fonte mono espaçada. | CaskaydiaCove Nerd Font Mono |
| monospace_font_size | Tamanho da fonte mono espaçada. | 9 |
| quickapps | Aplicativos de acesso rápido. | kitty |
| terminal | Terminal. | kitty |

### [hyprland_start]

Configuração de inicialização hyprland.

| Key | Description | Default |
| --- | ----------- | ------- |
| apptray_bluetooth | Applet do Bluetooth | blueman-applet |
| auth_dialogue | Caixa de diálogo da autenticação. | polkitkdeauth.sh |
| bar | Barra. | hyde-shell waybar --watch |
| battery_notify | Script de notificação da bateria. | batterynotify.sh |
| dbus_share_picker | Share picker do DBus. | dbus-update-activation-environment --systemd --all |
| idle_daemon | Gerenciador de ociosidade. | hypridle |
| image_clipboard | Área de transferência de imagens. | wl-paste --type image --watch cliphist store |
| network_manager | Gerenciador de rede. | nm-applet --indicator |
| notifications | Notificações. | swaync |
| removable_media | Gerenciador de mídias removíveis. | udiskie --no-automount --smart-tray |
| systemd_share_picker | Share picker do systemd. | systemctl --user import-environment QT_QPA_PLATFORMTHEME WAYLAND_DISPLAY XDG_CURRENT_DESKTOP |
| text_clipboard | Área de transferência do texto. | wl-paste --type text --watch cliphist store |
| wallpaper | Script do papel de parede. | $scrPath/wallpaper.sh --global |
| xdg_portal_reset | Script de reset do XDG-Portal. | resetxdgportal.sh |

### [mediaplayer]

Configuração do mediaplayer.py.

| Key | Description | Default |
| --- | ----------- | ------- |
| artist_track_separator | Simbolo do separador para mostrar entre o artista e a música. |    |
| max_length | Tamanho máximo para o string da música e artista. | 70 |
| prefix_paused | Prefixo para mídia pausada. |    |
| prefix_playing | Prefixo para mídia tocando. |  |
| standby_text | Prefix para standby. |   Music |

### [notification]

Configuração do script de notificação.

| Key | Description | Default |
| --- | ----------- | ------- |
| font | Fonte para notificações. | mononoki Nerd Font |
| font_size | Tamanho da fonte para notificações. | 10 |

### [rofi]

Configuração global do Rofi.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Escala para o Rofi. | 10 |

### [rofi.animation]

Configuração do 'animation.sh select'.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Escala para a animação. | 10 |

### [rofi.cliphist]

Configuração do cliphist.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Escala para o cliphist.sh. | 10 |

### [rofi.emoji]

Configuração para o emoji-picker.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Escala para o seletor de emojis. | 10 |
| style | Estilo para o seletor de emojis. | 1 |

### [rofi.glyph]

Configuração do glyph-picker.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Escala para o glyph-picker.sh. | 10 |

### [rofi.hyprlock]

Configuração do 'hyprlock.sh select'.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Escala para o hyprlock. | 10 |

### [rofi.launch]

Configuração para o rofilaunch.sh

| Key | Description | Default |
| --- | ----------- | ------- |
| drun_args | Argumentos adicionais para o modo drun. | [] |
| filebrowser_args | Argumentos adicionais para o modo filebrowser. | [] |
| run_args | Argumentos adicionais para o modo run. | [] |
| scale | Escala para abertura. | 5 |
| window_args | Argumentos adicionais para o modo window. | [] |

### [rofi.theme]

Configuração do themeselect.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Escala para o seletor de temas. | 6 |

### [rofi.wallpaper]

Configuração para o swwwallselect.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| scale | Escala para o papel de parede. | 10 |

### [rofi.keybind.hint]

Configuração do keybind_hint.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| delimiter | Delimitador para sugestões de teclas. |    |
| height | Altura para sugestões de teclas. | 40em |
| line | Número de linhas para sugestões de teclas. | 16 |
| width | Largura para sugestões de teclas. | 40em |

### [screenshot]

Configuração do screenshot.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| annotation_post_command | Comando a executar após a captura de tela. | [""] |
| annotation_pre_command | Comando a executar antes da captura de tela. | [] |
| annotation_tool | Ferramenta de anotação para capturas de tela. | satty |

### [sysmonitor]

Configuração do sysmonlaunch.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| commands | Opções do comando de fallback. | [""] |
| execute | Comando padrão para executar. |  |

### [volume]

Configuração do volumecontrol.sh.

| Key | Description | Default |
| --- | ----------- | ------- |
| boost | Habilitar amplificação do volume. | false |
| boost_limit | Limite da amplificação do volume. | 120 |
| notify | Habilitar notificações para controle do volume. | true |
| steps | número de passos para incrementar/reduzir o volume. | 5 |

### [wallbash]

Configuração do wallbash.

| Key | Description | Default |
| --- | ----------- | ------- |
| skip_template | Templates a serem ignorados pelo wallbash. | [""] |

### [wallpaper]

Configuração do papel de parede

| Key | Description | Default |
| --- | ----------- | ------- |
| backend | Backend do papel de parede, requer o script 'wallpaper.<backend>.sh' no $PATH para funcionar | swww |
| custom_paths | Lista de caminhos para procurar papéis de parede | [] |

### [wallpaper.swww]

Configuração do swwwallselect.sh

| Key | Description | Default |
| --- | ----------- | ------- |
| duration | Duração da transição do papel de parede. | 1 |
| framerate | Framerate da transição do papel de parede. | 60 |
| transition_default | Modo de transição do papel de parede padrão. | grow |
| transition_next | Modo de transição para o próximo papel de parede. | grow |
| transition_prev | Modo de transição para o papel de parede anterior. | outer |

### [waybar]

Configuração do waybar.

| Key | Description | Default |
| --- | ----------- | ------- |
| font | Fonte para o waybar. | JetBrainsMono Nerd Font |
| icon_size | Tamanho dos ícones do waybar. | 10 |
| scale | Escala global do waybar. | 10 |

### [weather]

Configuração do módulo do clima.

| Key | Description | Default |
| --- | ----------- | ------- |
| forecast_days | número de dias a serem mostrados na previsão (0-3). | 3 |
| location | Localização/coordenadas para o clima. |  |
| show_icon | Mostra o ícone do clima no waybar. | true |
| show_location | Mostra a localização no waybar. | true |
| show_today | Mostra descrição detalhada de hoje no tooltip. | true |
| temperature_unit | Unidade de temperatura ('c' ou 'f'). | c |
| time_format | Formato da hora ('12h' ou '24h'). | 24h |
| windspeed_unit | Unidade da velocidade do vento ('km/h' ou 'mph'). | km/h |

### [wlogout]

Configuração do wlogout.

| Key | Description | Default |
| --- | ----------- | ------- |
| style | Estilo para o wlogout. | 2 |
