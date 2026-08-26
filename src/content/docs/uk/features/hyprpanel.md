---
title: HyprPanel
description: Шаблон wallbash для HyprPanel
---

![241005_14h24m09s_screenshot](https://github.com/user-attachments/assets/355aa7f0-856b-47f6-8ced-58bc0c4a3481)
![241005_14h26m11s_screenshot](https://github.com/user-attachments/assets/e7551bec-573c-4d37-91b9-de9400176cac)
![241005_14h19m51s_screenshot](https://github.com/user-attachments/assets/11f40837-08fe-4979-b16e-b1d0a6fd4fcd)


### Шаблон Wallbash для HyprPanel

Цей шаблон призначений для використання з HyprPanel. Для отримання додаткової інформації відвідайте [HyprPanel](https://hyprpanel.com/).

> **ПРИМІТКА:** Це не окремий пакунок. Переконайтеся, що у вас встановлено HyDE та налаштовано робочу конфігурацію HyprPanel.

## Використання

Додайте файл [/hyprpanel.dcol](https://github.com/HyDE-Project/HyprPanel/blob/3f20c8922d7c3547688a2b16eb74846170a9f224/hyprpanel.dcol) до `~/.config/hyde/wallbash/Wall-Ways` або `~/.config/hyde/wallbash/Wall-Dcol`.

### Відмінність між Wall-Ways та Wall-Dcol

- **Wall-Ways**: цей файл завжди використовується незалежно від режиму теми оформлення чи режиму wallbash.
- **Wall-Dcol**: цей файл намагається знайти шаблон теми оформлення (якщо активний режим теми) і, якщо шаблон недоступний, повертається до використання домінантного кольору шпалер.

### Використання цього шаблону для тем оформлення

1. **Заголовний рядок**:
    ```sh
    ${cacheDir}/landing/hyprpanel_wallbash.json | ags -r "useTheme('${cacheDir}/landing/hyprpanel_wallbash.json')"
    ```
    Ця команда встановлює тему оформлення за допомогою кешованого файлу `.json`, згенерованого wallbash.
    `$cacheDir` — це шлях до `~/.cache/hyde/`.

2. **Генерація Wallbash**:
    ```sh
    ${cacheDir}/landing/hyprpanel_wallbash.json
    ```
    Ця команда генерує файл `.json` для wallbash.

3. **Опційна команда**:
    ```sh
    ags -r "useTheme('${cacheDir}/landing/hyprpanel_wallbash.json')"
    ```
    Ця команда використовує кешований файл `.json`, згенерований wallbash, для встановлення теми оформлення.
