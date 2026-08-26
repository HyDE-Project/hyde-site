---
title: Оновлення
description: Посібник з керування dotfiles HyDE
---

## Автоматичне оновлення

Щоб оновити HyDE, вам потрібно отримати останні зміни з GitHub та відновити конфігурації, виконавши такі команди:

```shell
cd ~/HyDE/Scripts
git pull origin master
./install.sh -r
```

:::note

Будь-які внесені вами налаштування буде перезаписано, якщо вони позначені для цього у `Scripts/restore_cfg.psv`.
Однак усі замінені конфігурації резервуються та можуть бути відновлені з `~/.config/cfg_backups`.
Дивіться [Відновлення конфігурації](/hyde/installation/restore/) для отримання додаткової інформації.

:::

## Детальне та ручне оновлення

На додаток до наведеної вище команди ви можете змінити [Scripts/restore_cfg.psv](https://github.com/HyDE-Project/HyDE/blob/master/Scripts/restore_cfg.psv). Документація міститься в самому файлі.

Також дивіться [це](../../resources/restore/).

### Оновлення ЛИШЕ dotfiles

:::note

> "restore" (відновлення) у цьому контексті означає відновлення dotfiles із репозиторію до вашого $HOME, а не навпаки.

```sh
./restore_cfg.sh </path/to/file.psv > <optional /path/to/hyde/clone>
```

:::

<details>
<summary>Приклад</summary>

```sh
cd ~/HyDE/Scripts
./restore_cfg.sh ./restore_cfg.psv
```

</details>

---
