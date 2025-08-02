---
title: Waybar
description: Конфигурация Waybar
---

## Иерархичная конфигурация

```text
📂 ~/.config/waybar/
├── 📂 layouts/
├── 📂 menus/
├── 📂 modules/
├── 📂 styles/
├── 📂 includes/
├── 📄 config.jsonc
├── 📄 style.css
├── 📄 theme.css
└── 📄 user-style.css
```

- **config.jsonc**
  - Копия конфигурации макета. См. [макеты](#макеты).
  - Это временный файл, поэтому изменения должны сохраняться в `~/.config/waybar/layouts/`
- **style.css**
  - Автоматически сгенерированный файл.
  - style.css импортирует 3 файла:
    - **Текущий** `styles/*.css`, который соответствует `layout.jsonc`. См. [стили](#стили)
    - **theme.css**, генерируемый темами, который может переопределять выбранный стиль.
    - **user-style.css** -- это необязательный файл, куда вы можете добавлять свои собственные переопределения. Вы также можете тестировать свой CSS здесь.

- **theme.css**
  - Файл, сгенерированный темой.

:::note
Вы должны знать, что `xdg_share/waybar` (~/.local/share/waybar) это каталог, предоставляемый HyDE. НИКОГДА не редактируйте файлы в этом каталоге, так как они будут перезаписаны при обновлениях. Вместо этого вам следует редактировать свой собственный каталог `~/.config/waybar`!

Обратите внимание, что оба каталога имеют одинаковую структуру, и я предлагаю вам скопировать файлы из `xdg_share/waybar` в `~/.config/waybar` редактировать их там.

:::

### Модули

Каталог: `./modules/`

```text
└── 📂 modules/
   ├── 📄 backlight.jsonc
   ├── 📄 clock.jsonc
   ├── 📄 cpu.jsonc
   ├── 📄 custom-cpuinfo.jsonc
   ├── 📄 hyprland-language.jsonc
   ├── 📄 idle_inhibitor.jsonc
   ├── 📄 pulseaudio#microphone.jsonc
   ├── 📄 pulseaudio.jsonc
   ├── 📄 tray.jsonc
   ├── 📄 wlr-taskbar#windows.jsonc
   └── 📄 wlr-taskbar.jsonc
```

- Храните все модули в `~/.config/waybar/modules/`.
- Файлы в этом каталоге рекурсивно добавляются как записи в `includes/includes.jsonc`
- Все модули в определенном дереве будут следовать соглашению `parent-child`. Пример: `custom/cpuinfo` будет преобразовано в `custom-cpuinfo`. Это используется для легкого определения имени класса в CSS без путаницы.

Пример:
```css
.custom-cpuinfo {
  padding: 1em;
}
```

### Макеты

Каталог: `./layouts/`

```text
└── 📂 layouts/
   ├── 📄 layout-1.jsonc
   ├── 📄 layout-2.jsonc
   ├── 📄 khing.jsonc
   ├── 📄 macos.jsonc
   └── 📄 ....jsonc
```

HyDE хранит все готовые к использованию конфигурации в каталоге: `layouts/`. По ним можно перемещаться с помощью скрипта `hyde-shell waybar`.

:::note
Если пользователь случайно настроит  `./waybar/config.jsonc`, он будет перемещен в  `~/.config/waybar/layouts/backup/имя_timestamp.jsonc`. Даже с такими мерами предосторожности мы рекомендуем создавать копию вашей конфигурации в `~/.config/waybar/layouts/`.
:::

Для стилизации макетов с помощью CSS см. [стили](#стили).

### Стили

Каталог:  `./styles/`

```text
└── 📂 styles/
   └── 📂 groups/
   ├── 📄 layout-1.css
   ├── 📄 layout-2.css
   ├── 📄 khing.css
   ├── 📄 macos.css
   └── 📄 ...*.css
```

Каталог `styles/` содержит соответствующие CSS-файлы для макетов.
При выборе макета HyDE попытается использовать эквивалентный CSS-стиль, сопоставляя базовые имена, например, `khing.jsonc` будет использовать `khing.css`.

Также поддерживаются явные опции`--config <file>` и `--style <file>`.

### Includes

Каталог:  `./includes/`

```text
└── 📂 includes/
   ├── 📄 includes.jsonc
   ├── 📄 border-radius.css
   └── 📄 global.css
```

- **border-radius.css**
  - Динамический радиус скругления углов для [групп](#groups).

#### Предпросмотр динамического радиуса скругления

**Без скругления** в Hyprland

![0 rounding in hyprland](../../../../assets/waybar/rounding-0.png)

**Squircle (скругление 10)** в Hyprland

![10 rounding in hyprland](../../../../assets/waybar/rounding-10.png)

**Круг (скругление 100)** в Hyprland

![100 rounding in hyprland](../../../../assets/waybar/rounding-100.png)

**Уловили идею?**

- **global.css** - Включает динамический размер и семейство шрифтов. Это сделано динамически, чтобы темы могли переопределять эти значения через `hypr.theme` >> `$BAR_FONT`

### Меню

Каталог: `./menus/`

Хранит все XML-файлы объектов GTK. Для правильного управления файлами мы добавили XML-файлы GObject в `~/.config/waybar/menus/`

## Класс Group для стилизации

Вы должны знать, что Waybar предоставляет ТОЛЬКО 3 варианта позиционирования для модулей: `modules-left`, `modules-center` и `modules-right`. Чтобы достичь желаемого позиционирования или популярного эффекта "пилюли", нам нужно использовать класс `group`.

Например:
![Groups in pill shape](../../../../assets/waybar/groups.png)

Содержимое `../waybar/styles/groups/` спользуется для стилизации радиуса скругления углов для данной группы. Группы — это комбинация модулей, некоторые называют их "островами".

В HyDE, чтобы использовать группы, мы можем сначала объявить модули внутри группы:

Пример в `~/.config/waybar/layouts/my_config.jsonc`:

```jsonc
{
  "group/pill": {
    "orientation": "inherit",
    "modules": [
      "custom/gpuinfo",
      "clock"
    ]
  }
}
```

Теперь мы можем добавить группу в модули waybar:

```jsonc
{
  "modules-center": [
    "group/pill",
    "group/pill#tag1",
    "group/pill-in"
  ]
}
```

**Styling** это легко, так как мы уже сгруппировали модули. Таким образом, мы можем использовать имя группы в качестве имени класса:

```css
#pill,
#pill-in {
  /* Your styles here */
}
```

**Note:** `pill` и `pill#tag*` имеют имя класса `pill`. Это соглашение waybar, позволяющее пользователям добавлять похожий модуль, но с общим именем класса.


## Создание собственного макета waybar

:::note

Это очень поверхностное руководство. Для получения дополнительной информации вам следует обратиться к [вики Waybar](https://github.com/Alexays/Waybar/wiki/Configuration)

:::


### Это полный файл макета, используемый для инструкций

<details open>
  <summary>MyBar.jsonc</summary>

```jsonc
{
  /* 
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │     Глобальные опции для конфигурации Waybar                                │
  └─────────────────────────────────────────────────────────────────────────────┘
 */

  "layer": "top",
  "output": ["*"],
  "position": "top",
  "reload_style_on_change": true,

  /* 
  ┌────────────────────────────────────────────────────────────────────────────┐
  │                                                                            │
  │ Это одна из важнейших частей конфигурации, она позволяет вам включать      │
  │ другие файлы.                                                              │
  │ `"$XDG_CONFIG_HOME/waybar/includes/includes.json"` автоматически           │
  │ генерируется скриптом waybar.py.                                           │
  │ 1. Включает все модули из `./waybar/modules`                               │
  │ 2. Определяет все размеры для иконок, с которыми style.css в waybar        │
  │ НЕ МОЖЕТ справиться.                                                       │
  │ 3. Конечно, это необязательно, вы можете удалить это, если не хотите       │
  │ использовать, и включить свой собственный набор модулей.                   │
  │                                                                            │
  └────────────────────────────────────────────────────────────────────────────┘
 */

  "include": ["$XDG_CONFIG_HOME/waybar/includes/includes.json"],

  /* 
  ┌────────────────────────────────────────────────────────────────────────────┐
  │ Объявите модули внутри желаемых форм групп.                                │
  │  На данный момент у нас есть:                                              │
  │                                                                            │
  │ - pill-left - изгиб направлен влево                                        │
  │ - pill-right - изгиб направлен вправо                                      │
  │ - pill-up - изгиб направлен вверх                                          │
  │ - pill-down - изгиб направлен вниз                                         │
  │ - pill-in - изгиб направлен внутрь независимо от положения                 │
  │ - pill-out - изгиб направлен наружу независимо от положения                │
  │ - leaf - форма листа                                                       │
  │ - leaf-inverse - форма листа, но инвертированная                           │
  │                                                                            │
  └────────────────────────────────────────────────────────────────────────────┘
 */

  "group/pill-left": {
    "orientation": "inherit",
    "modules": ["custom/keybindhint", "custom/updates"]
  },
  "group/pill-right": {
    "orientation": "inherit",
    "modules": ["battery", "custom/hyde-menu"]
  },
  "group/pill-up": {
    "orientation": "inherit",
    "modules": ["wlr/taskbar"]
  },
  "group/pill-down": {
    "orientation": "inherit",
    "modules": ["hyprland/workspaces"]
  },
  "group/pill-in": {
    "orientation": "inherit",
    "modules": ["idle_inhibitor", "clock"]
  },
  "group/pill-out": {
    "orientation": "inherit",
    "modules": ["custom/weather", "hyprland/language"]
  },
  "group/leaf": {
    "orientation": "inherit",
    "modules": ["custom/workflows", "memory"]
  },
  "group/leaf-inverse": {
    "orientation": "inherit",
    "modules": ["custom/gpuinfo", "custom/cpuinfo"]
  },

  /* 
  ┌────────────────────────────────────────────────────────────────────────────┐
  │                                                                            │
  │ Объявите модули, которые будут отображаться в Waybar.                      │
  │                                                                            │
  └────────────────────────────────────────────────────────────────────────────┘
 */

  "group/pill-down#right": {
    "orientation": "inherit",
    "modules": ["pulseaudio", "pulseaudio#microphone", "tray"]
  },
  "group/pill-up#right": {
    "orientation": "inherit",
    "modules": ["privacy", "custom/hyprsunset", "backlight#intel_backlight"]
  },

  /* 
  ┌────────────────────────────────────────────────────────────────────────────┐
  │                                                                            │
  │ Declare the groups in the module position provided by waybar               │
  │                                                                            │
  └────────────────────────────────────────────────────────────────────────────┘
 */
  "modules-left": ["group/pill-left", "group/pill-down", "group/pill-up"],
  "modules-center": ["group/leaf", "group/pill-in", "group/leaf-inverse"],
  "modules-right": [
    "group/pill-up#right",
    "group/pill-down#right",
    "group/pill-right"
  ]
}

```

</details>


### Шаги

#### Создайте новый файл макета

Создайте новый файл в  `~/.config/waybar/layouts/my_config.jsonc` или скопируйте один из существующих из `~/.local/share/waybar/layouts/`.

```bash
cp ~/.local/share/waybar/layouts/layout-1.jsonc ~/.config/waybar/layouts/my_config.jsonc
```

#### Шаг 2: Добавьте глобальные параметры конфигурации

Начните с основных глобальных конфигураций, которые определяют базовое поведение вашего waybar:

```jsonc
{
  "layer": "top",                    // Слой позиционирования: "top" или "bottom"
  "output": ["*"],                   // Применить ко всем мониторам (* означает все выводы)
  "position": "top",                 // Позиция панели: top, bottom, left, right
  "reload_style_on_change": true,    // Автоматически перезагружать при изменении файла стиля
```

#### Шаг 3: Включите определения модулей HyDE

Добавьте директиву include для автоматической загрузки всех модулей и конфигураций HyDE:

```jsonc
  "include": ["$XDG_CONFIG_HOME/waybar/includes/includes.json"],
```

:::tip
Файл `includes.json` автоматически генерируется скриптом `hyde-shell waybar` от HyDE и предоставляет:
- Все модули из `./waybar/modules/`
- Конфигурации размеров иконок, с которыми не может справиться CSS
- Динамические конфигурации, специфичные для HyDE
:::

#### Шаг 4: Определите формы групп

HyDE предоставляет несколько предопределенных форм групп для создания эффектов "пилюли" и пользовательских макетов. Определите свои группы перед назначением модулей:

```jsonc
  // Доступные формы групп:
  // pill-left, pill-right, pill-up, pill-down
  // pill-in, pill-out, leaf, leaf-inverse
  
  "group/pill-left": {
    "orientation": "inherit",
    "modules": ["custom/keybindhint", "custom/updates"]
  },
  "group/pill-right": {
    "orientation": "inherit",
    "modules": ["battery", "custom/hyde-menu"]
  },
  "group/pill-up": {
    "orientation": "inherit",
    "modules": ["wlr/taskbar"]
  },
  "group/pill-down": {
    "orientation": "inherit",
    "modules": ["hyprland/workspaces"]
  },
  "group/pill-in": {
    "orientation": "inherit",
    "modules": ["idle_inhibitor", "clock"]
  },
  "group/pill-out": {
    "orientation": "inherit",
    "modules": ["custom/weather", "hyprland/language"]
  },
  "group/leaf": {
    "orientation": "inherit",
    "modules": ["custom/workflows", "memory"]
  },
  "group/leaf-inverse": {
    "orientation": "inherit",
    "modules": ["custom/gpuinfo", "custom/cpuinfo"]
  },
```

#### Шаг 5: Повторное использование групп с тегами

Вы можете повторно использовать одну и ту же форму группы несколько раз, добавляя теги  (`#имятега`):

```jsonc
  "group/pill-down#right": {
    "orientation": "inherit",
    "modules": ["pulseaudio", "pulseaudio#microphone", "tray"]
  },
  "group/pill-up#right": {
    "orientation": "inherit",
    "modules": ["privacy", "custom/hyprsunset", "backlight#intel_backlight"]
  },
```

#### Шаг 6: Расположите группы в позициях модулей

Наконец, назначьте ваши группы на три доступные позиции:

```jsonc
  "modules-left": ["group/pill-left", "group/pill-down", "group/pill-up"],
  "modules-center": ["group/leaf", "group/pill-in", "group/leaf-inverse"],
  "modules-right": [
    "group/pill-up#right",
    "group/pill-down#right",
    "group/pill-right"
  ]
}
```

#### Шаг 7: Примените вашу конфигурацию

Чтобы использовать ваш новый макет, выполните:

```bash
# Перейдите к вашим макетам с помощью rofi
hyde-shell waybar -S

# Или примените напрямую
waybar -c ~/.config/waybar/layouts/my_config.jsonc
```
![alt text](/src/assets/waybar/selector.png)

:::note 
Смотрите hyde-shell waybar --help для получения дополнительных опций.
:::

### Доступные формы групп

| Shape | Description |
|-------|-------------|
| `pill-left` | Изгиб направлен влево |
| `pill-right` | Изгиб направлен вправо |
| `pill-up` | Изгиб направлен вверх |
| `pill-down` | Изгиб направлен вниз |
| `pill-in` | Изгиб направлен внутрь независимо от положения |
| `pill-out` | Изгиб направлен наружу независимо от положения |
| `leaf` | Форма листа |
| `leaf-inverse` | Инвертированная форма листа |


### Настройка содержимого модулей

Чтобы настроить отдельные модули, отредактируйте файлы в `~/.config/waybar/modules/` или создайте новые, следуя соглашению об именовании, описанному в разделе [Модули](#modules).




