---
title: Lua для користувача та міграція
description: Як розгортається, налаштовується та мігрується з застарілого макета Hyprlang Lua-середовище виконання Hyprland у HyDE.
---

Цей документ пояснює стек Hyprland на основі Lua, впроваджений [міграцією на Lua](https://github.com/HyDE-Project/HyDE/discussions/1717). Він написаний для наявних користувачів HyDE, які вирішують, чи (і як) переходити з застарілої конфігурації Hyprlang.

:::caution[Документація перехідного періоду]
Міграція на Lua змінює й видаляє dot-файли та цілі директорії. Зробіть резервну копію конфігурації Hyprland і HyDE перед відновленням лише Lua-dotfiles, якщо ви редагували директорії HyDE `.local/lib`, `.local/share`, `.local/state`, `.config/` (drop-ins мають зберегтися). Поточна стаття [Конфігурація Hyprland](../../configuring/hyprland/) документує застарілий макет `.conf`; використовуйте цю сторінку як супровідний довідник з міграції, доки цю статтю не оновлено.
:::

## Коротко про головне 👁️‍🗨️

HyDE не замінює кожен формат конфігурації на Lua. Ми також не змушуємо переробляти кожен скрипт і компонент.
Йдеться переважно про довговічність — закріплення **середовища виконання Hyprland** з дерева `.conf` Hyprlang у щось стабільніше.
Крім того, додавання Lua-модулів і збереження TOML для декларативних налаштувань HyDE та маніфестів dotfiles — природний вибір.
По суті, ми переходимо на щось із кращою підтримкою — **Lua**. Досить популярна скриптова та системна мова, яка, серед іншого, створює такі змінні, як `hl`, `start`, `hyde`, `hs` тощо. Це ключове оновлення:

Hyprlang був старим матеріалом, який ми використовували для передачі важливих змінних середовища, і його функціональність була обмеженою. Ось приклад зі старого startup.conf:

```sh
exec-once = dbus-update-activation-environment --systemd --all #? Might fail so we hardcode the variables below
exec-once = $start.DBUS_SHARE_PICKER    # dbus-update-activation-environment (one-time setup)
exec-once = $start.SYSTEMD_SHARE_PICKER # systemctl --user import-environment (one-time setup)
exec-once = $start.XDG_PORTAL_RESET     # resetxdgportal.sh (one-time setup)
```

Як бачите, ця інфраструктура завжди була дещо незбалансованою щодо довгострокової життєздатності. Простіше кажучи,
Hyprlang добре підходив для таблиці змінних, але не для рухомих частин, які потрібні для операцій під час виконання.

``` lua [.local/share/hypr/lua/start_up.lua]
    hl.on(
            "hyprland.start",
            function()
                check_exec(hs.dbus_share_picker)
                check_exec(hs.systemd_share_picker)
                check_exec(hs.auth_dialogue)
    )
```

Замість того, щоб сподіватися, що `startup.conf` спрацює до запуску hyprland, ми оголошуємо подію `hyprland.start` або `hyde.activate`, яка вбудовується в операцію під час виконання; `hyde-shell reload` демонструє це, перебудовуючи основні середовища.


## Перший крок
Виконайте `uninstall.sh` перед запуском `install.sh -r`. Це допомагає прибрати файли, які можуть конфліктувати один з одним.


## Компонування (Layouts)

Layouts — це нова й ексклюзивна функція Lua, яка дозволяє користувачу змінити поведінку всього віконного менеджера однією швидкою дією:
клавіатурні скорочення, переходи між робочими просторами й вікнами, а також загальне _відчуття_ від роботи з комп'ютером.
Типовий робочий процес і налаштування компонування не встановлені, тобто щось інше має їх запускати.

Оберіть компонування:

```sh
hyde-shell layouts --select
```

### Важливі файли й моменти

| Питання | Застаріле налаштування | Налаштування Lua |
| --- | --- | --- |
| Точка входу Hyprland | `~/.config/hypr/hyprland.conf` або `$XDG_DATA_HOME/hyprland.conf` | `$XDG_DATA_HOME/hypr/hyde.lua` та `~/.config/hypr/hyprland.lua` |
| Правила вікон | `~/.config/hypr/windowrules.conf` | `$XDG_DATA_HOME/hypr/lua/window_rules.lua`, але бажано перенести їх у `hyprland.lua` |
| Налаштування запуску | `[hyprland-start]` у `config.toml` | `[desktop.start]` у `$XDG_DATA_HOME/hyde/config-registry.toml` |
| Уподобання користувача | `.config/hypr/userprefs.conf` | `~/.local/share/hypr/lua/defaults.lua` |
| резервне копіювання/відновлення | [застарілі списки відновлення](../resources/restore.md) | [маніфести `deez`, що викликаються через `install.sh -r`](../resources/restore.md#конфігурація-toml) |

:::tip[HyDE+Lua приносить абсолютно нову межу модулів]
Якщо ви звикли редагувати conf-файли через глючне оформлення тем або невчасні оновлення — вам сподобається нова строгість Lua, а якщо ви ніколи з цим не стикалися, вважайте це чудовою нагодою долучитися й зробити HyDE кращим.
:::

Lua позбавляє від багатьох одноразових хитрощів, на які ми покладалися, щоб змусити hyprlang працювати для тонших сценаріїв,
але це **не є** гарантованим приростом продуктивності. Головна перевага — зручніша для підтримки конфігурація та довгострокова підтримка. Наступна таблиця враховує "зміни" як різницю між останньою доступною dev-гілкою та "стабільним" релізом до 12 травня 2026 [95adf01]:
нові папки `dots` і `dots-groups` у ~/HyDE/Scripts/, що містять схеми dot-файлів.

`Допоміжні функції` для `install.sh`, покликані спростити міграцію та посилити python-середовище
_~/HyDE/Scripts/dots/hyprland.toml_ розгортає дерево Lua.

Усі попередні точки входу оновлено;

| Точка входу | Опис |
| --- | --- |
| $XDG_DATA_HOME/hypr/hyde.lua | Виконує обіцянки щодо середовища, як-от середовище виконання, основні lua-скрипти, всі уподобання `.config/` та резервні варіанти `.local/` |
| $XDG_CONFIG_HOME/hypr/hyprland.lua | Шар користувацьких перевизначень, або просто "уподобання користувача", є частиною бажаної зони для взаємодії з цим оновленням — від додавання клавіатурних скорочень до виклику скриптів HyDE через lua. Директива `require("")` тут корисна |

---

:::danger
Не чіпайте дані TOML або Lua, яких ви не розпізнаєте: наслідки запуску зламаного налаштування dot-файлів набагато серйозніші, як і наша здатність розвивати HyDE. $XDG_DATA_HOME/hypr/lua/* визначає значну частину того, що відбувається після запуску uwsm та монтування вбудованої конфігурації HyDE, і лежить в основі функціональності HyDE.
:::


### Оновлення hyde.toml

Кілька ключів у `.config/hyde/hyde.toml` було перейменовано для кращої зрозумілості та розширюваності.

Перейменовано / переміщено
- hyprland.browser → desktop.app.browser
- hyprland.editor → desktop.app.editor
- hyprland.explorer → desktop.app.explorer
- hyprland.lockscreen → desktop.app.lockscreen
- hyprland.terminal → desktop.app.terminal
- hyprland.quickapps → desktop.app.quickapps
- налаштування hyprland.* desktop/UI → desktop.*, де застосовно
- конфігурація hyprland-start → desktop.start

Обов'язково замініть їх, щоб усе працювало відповідно до старої версії.



### Оновлення середовища виконання

Оскільки lua тепер працює паралельно нашому python-середовищу, HyDE активує стек Lua через UWSM:

```text
UWSM environment scripts
  -> ~/.local/lib/hyde/shell/activate
  -> HYDE_MODE=lua and HYPRLAND_CONFIG=.../hypr/hyde.lua
  -> Hyprland loads hyde.lua
  -> HyDE loads its Lua modules and ~/.config/hypr/hyprland.lua
```

Спільне середовище виконання належить до `$XDG_DATA_HOME/hypr/`; ваші власні зміни належать до `$XDG_CONFIG_HOME/hypr/`. Це відповідає звичному для HyDE розділенню між підтримуваними даними та конфігурацією, що належить користувачу. Дивіться [Секрети та портали](../secrets/) щодо пов'язаної моделі сесії UWSM і XDG.

:::note[Не редагуйте спільне середовище виконання без потреби]
Файли під `~/.local/share/hypr/lua/` і `~/.local/share/hypr/hyde.lua` розгортаються HyDE і можуть змінюватися під час відновлення. Розгалужуйтеся, розміщуючи прямі перевизначення у `~/.config/hypr/hyprland.lua`, і розбивайте більші налаштування на Lua-файли, які можна завантажити пізніше через `require()`.
:::

## Від Hyprlang до Lua

**Файли Hyprlang декларативні**: вони описують налаштування й команди диспетчеризації. Те, що містилося у файлі .conf, було свого роду ілюзією — це завжди був і залишиться синтаксис, сумісний з `Hypr`. Lua може виражати ті самі налаштування, а також додавати функції, обробники подій і спільні допоміжні засоби там, де це доречно — що деякі conf-файли й так робили.

Наприклад, застарілий блок input, такий як:

```ini
# ~/.config/hypr/userprefs.conf
input {
    kb_layout = us,es
    accel_profile = flat
}
```

перетворюється на змістовніший профіль:

```lua
-- ~/.config/hypr/hyprland.lua
hl.config({
    input = {
        kb_layout = "us,es",
        accel_profile = "flat",
    },
})
```

Аналогічно, для клавіатурного скорочення можна використати допоміжні засоби Lua HyDE замість рядка `bind`, розділеного комами:

```lua
hl.bind(
    "SUPER + Q",
    hl.dsp.window.close(),
    { description = "[Window Management] close focused window" }
)
```

```ini
#~/.config/hypr/hyprland Conf -> Lua guide
MOD=hyde.config.modifiers.main
_F = {description = "[Launcher|Apps] Demuestra layouts"}
hl.bind(MOD .. " + ALT + L", hl.dsp.exec_cmd("hyde-shell layouts --select"), _F)
```

Почніть із вбудованих модулів HyDE, щоб знайти зразки, що відповідають встановленому середовищу виконання; ви навіть можете відновити попередні клавіатурні скорочення на свій смак і поекспериментувати зі start_up, як ми побачимо далі.

### TOML досі має роль

TOML залишається шаром даних між скриптингом і викликами під час виконання. `$XDG_DATA_HOME/hyde/config-registry.toml` містить портативні налаштування HyDE, як-от застосунки робочого столу, команди запуску та корисні псевдоніми, тоді як встановлена схема описує допустимі поля. Реєстр конфігурації HyDE також використовує TOML для опису редагованих файлів та їхніх хуків, зокрема `~/.config/hypr/hyprland.lua`.

Розділення:

+ Використовуйте **TOML** для параметрів HyDE та даних, що спираються на схему.
+ Використовуйте **Lua** для налаштувань Hyprland, прив'язок клавіш, правил, компонувань і поведінки на основі подій.
+ Не чіпайте керовані HyDE файли в `$XDG_DATA_HOME`, якщо тільки ви не розробляєте сам HyDE.

### Що потрібно перенести вручну

Щонайменше:

+ `keybindings.conf`
+ `windowrules.conf`
+ `monitors.conf`
+ `userprefs.conf`

Маніфест Lua свідомо конфліктує із застарілим маніфестом Hyprland. Старі файли можуть залишатися на диску після відновлення, але вони більше не є джерелом конфігурації. Тримайте резервну копію, доки не перевірите кожну прив'язку, монітор, правило й службу запуску в новій сесії.

## Компонування та запуск

Використовуйте `hyde-shell layouts --select`, щоб обрати вбудоване або власне компонування.

```text
~/.config/hypr/lua/layouts/custom.lua
```

Стару секцію `[hyprland-start]` замінено на `[desktop.start]` у `$XDG_DATA_HOME/hyde/schema/config.toml`. `start_up.lua` у Lua запускає ці події відповідно до локальної схеми, коли Hyprland надсилає власну подію запуску. Схема, встановлена разом із HyDE, документує підтримувані ключі.

### Відновлення та `deez`

`deez` — це бекенд розгортання dotfiles HyDE у міграції на Lua. Зазвичай це деталь реалізації: `./install.sh -r` використовує приватний виконуваний файл у python-середовищі HyDE для розгортання відповідних маніфестів. Чесно кажучи, для використання нового клієнта dotfiles потрібне дуже мало ручного втручання.

Якщо під час відновлення повідомляється, що `deez-dots` відсутній, переконайтеся, що ваша локальна тека `~/HyDE` актуальна, а потім
швидко підготуйте середовище:

```bash
cd /path/to/HyDE/Scripts
./install.sh -p
./install.sh -r
```

Для навмисно контрольованої повторної спроби використовуйте той самий формат команди, що й у інсталяторі, а не старішу підкоманду `dot`:

```bash
"$HOME/.local/state/hyde/python_env/bin/deez" \
  --source /path/to/HyDE \
  --config /path/to/HyDE/Scripts/dots-groups/core.toml \
  dots --skip-git --list
```

**Замінюйте прапорець `--list` на `--deploy all` лише якщо впевнені, що це не спричинить конфліктів**
Якщо конфлікт станеться, будь ласка, не повідомляйте про це. Як уже згадувалося, `deez-dots` — це _деталь реалізації_,
дуже практична поза нашим контекстом, але всередині нього обмежена так, щоб залишалося дуже мало
ризику збою через щось інше, ніж помилка користувача.

:::tip[Використовуйте повний інсталятор]
Запустіть `./install.sh -p`, щоб налаштувати середовище відповідно до найновішого git pull HyDE, і `./install.sh -r` для відновлення Lua. **Не конвертує .conf у .lua**. Це розгортає як основні, так і додаткові маніфести, відновлює стан теми та виконує подальші кроки HyDE. Ви можете надати пріоритет певним конфігураціям у директорії `HyDE/Scripts/dots`, щоб вони переживали перезаписи.
:::

+ Старі файли Hyprlang та їхні заміни на Lua

```ini
#This is the practical migration map, useful if you want to clean-up a migration:
  -- ~/.config/hypr/hyprland.conf -> ~/.local/share/hypr/hyde.lua:1
  -- ~/.config/hypr/keybindings.conf -> ~/.local/share/hypr/lua/key_binds.lua:1
  -- ~/.config/hypr/userprefs.conf -> ~/.config/hypr/hyprland.lua:17
  -- ~/.config/hypr/windowrules.conf, monitors.conf, nvidia.conf -> user hyprland.lua or a Lua module under lua/
  -- ~/.config/hypr/animations.conf, workflows.conf -> Lua workflow/animation selectors, not the old conf files
  -- ~/.local/share/hypr/_.conf and ~/.local/share/hyde/_.conf files -> mostly retired leftovers, kept only for migration/backups, the schema folder is useful to backup only if you have edited relevant startup instructions.
```

## Контрольний список міграції

1. Перегляньте [Встановлення](../../getting-started/installation/) і клонуйте ревізію HyDE з підтримкою Lua, яку плануєте використовувати.
2. Зробіть розумну резервну копію. Рекомендую: `~/.config/hypr`, `~/.config/hyde`, `~/.config/dconf`, `~/.config/gtk-3.0`, `~/.config/qt5ct`, `~/.config/qt6ct`, `~/.config/kdeglobals`, `~/.gtkrc-2.0` і `~/.config/uwsm`.
3. Обов'язково переконайтеся, що `luarocks` і підготовчий етап налаштовані: `./install.sh -p`. Запуск `./install.sh -r` не буде й **не зможе** перекласти чи перенести наявний синтаксис .conf у придатний синтаксис HyDE+Lua.
4. Перенесіть застарілі налаштування Hyprlang у директорії, описані впродовж цього документа. ($XDG_DATA_HOME, $HYPRLAND_CONFIG, $UWSM_FINALIZE_VARNAMES)
5. Розпочніть нову сесію HyDE (це має відбутися автоматично), потім перевірте середовище виконання й перезавантажте Hyprland:

```bash
sh -c '
printf "%-18s %s\n" "HYDE_MODE"        "${HYDE_MODE:-<unset>}"
printf "%-18s %s\n" "HYPRLAND_CONFIG"  "${HYPRLAND_CONFIG:-<unset>}"
printf "%-18s %s\n" "DCONF_PROFILE"    "${DCONF_PROFILE:-<unset>}"
printf "%-18s %s\n" "HYDE_ACTIVATED"   "${HYDE_ACTIVATED:-<unset>}"
printf "%-18s %s\n" "HYDE_FEATURE_LUA" "${HYDE_FEATURE_LUA:-<unset>}"
printf "%-18s %s\n" "QT_QPA_PLATFORM"  "${QT_QPA_PLATFORM:-<unset>}"
echo
need_p=0
if command -v luarocks >/dev/null 2>&1; then
    echo "luarocks: "
else
    echo "luarocks: not found"
    need_p=1
fi
if [ -x "$HOME/.local/state/hyde/python_env/bin/deez" ]; then
    echo "deez (python env): found"
else
    echo "deez (python env): not found"
    need_p=1
fi
if [ -n "$HYPRLAND_CONFIG" ] && [ -f "$HYPRLAND_CONFIG" ]; then
    echo "HYPRLAND_CONFIG: "
else
    echo "HYPRLAND_CONFIG: unset!"
    exit 1
fi
if [ -n "$DCONF_PROFILE" ] && [ ! -f "$DCONF_PROFILE" ]; then
    echo "warn: DCONF_PROFILE is set but the file itself is missing."
fi
echo
if [ "$need_p" -eq 1 ]; then
    echo "=> run ./install.sh -p before ./install.sh -r"
else
    echo "=> ./install.sh -p ran, safe to skip straight to -r"
fi
'
```

:::note[Потрібен застарілий посібник?]
Поточна сторінка [Конфігурація Hyprland](../../configuring/hyprland/) залишається довідником для встановлення HyDE без Lua. Не змішуйте приклади `.conf` з активним середовищем виконання Lua, попередньо не визначивши, який стек конфігурації використовує ваша сесія.
:::
