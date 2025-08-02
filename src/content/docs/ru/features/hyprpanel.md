---
title: HyprPanel
description: Шаблон wallbash для HyprPanel
---

![241005_14h24m09s_screenshot](https://github.com/user-attachments/assets/355aa7f0-856b-47f6-8ced-58bc0c4a3481)
![241005_14h26m11s_screenshot](https://github.com/user-attachments/assets/e7551bec-573c-4d37-91b9-de9400176cac)
![241005_14h19m51s_screenshot](https://github.com/user-attachments/assets/11f40837-08fe-4979-b16e-b1d0a6fd4fcd)


### Шаблон Wallbash для HyprPanel

Этот шаблон предназначен для использования с HyprPanel. Для получения дополнительной информации посетите [HyprPanel](https://hyprpanel.com/).

> **ПРИМЕЧАНИЕ:** Это не отдельный пакет. Убедитесь, что у вас установлен HyDe и работает HyprPanel.

## Использование

Добавьте файл [/hyprpanel.dcol](https://github.com/HyDE-Project/HyprPanel/blob/3f20c8922d7c3547688a2b16eb74846170a9f224/hyprpanel.dcol) в `~/.config/hyde/wallbash/Wall-Ways` или `~/.config/hyde/wallbash/Wall-Dcol`.

### Разница между Wall-Ways и Wall-Dcol

- **Wall-Ways**: Этот файл используется всегда, независимо от режима темы или режима wallbash.
- **Wall-Dcol**: Этот файл пытается найти шаблон темы (если включен режим темы) и, если шаблон недоступен, использует доминирующий цвет обоев.

### Использование этого шаблона для тем

1. **Header Line**:
    ```sh
    ${cacheDir}/landing/hyprpanel_wallbash.json | ags -r "useTheme('${cacheDir}/landing/hyprpanel_wallbash.json')"
    ```
    Эта команда устанавливает тему, используя кэшированный, сгенерированный wallbash `.json` файл.
    `$cacheDir` — это путь к `~/.cache/hyde/`.

2. **Генерация Wallbash**:
    ```sh
    ${cacheDir}/landing/hyprpanel_wallbash.json
    ```
    Эта команда генерирует `.json` файл wallbash.

3. **Необязательная команда**:
    ```sh
    ags -r "useTheme('${cacheDir}/landing/hyprpanel_wallbash.json')"
    ```
    Эта команда использует кэшированный, сгенерированный wallbash `.json` файл для установки темы.
