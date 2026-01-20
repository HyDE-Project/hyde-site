---
title: Waybar
description: Configuración de Waybar
---

## Árbol de configuración

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
├── 📄 user-style.css
└── 📄 user-style.css
```

- **config.jsonc**
  - Copia de una configuración de layout. Ver [layouts](#layouts).
  - Es un archivo _transitorio_, por lo tanto las ediciones deben guardarse en `~/.config/waybar/layouts/`.
- **style.css**
  - Archivo autogenerado.
  - style.css importa 3 archivos:
    - **Actual**: `styles/*.css` que coincide con `layout.jsonc`. Ver [styles](#styles-estilos).
    - **theme.css**: Generado por los temas; esto puede sobrescribir el estilo seleccionado.
    - **user-style.css**: Archivo opcional donde puedes añadir tus propias anulaciones. También puedes probar tu CSS aquí.

- **theme.css**
  - Archivo generado por el tema.

:::note
Debes saber que `xdg_share/waybar` (ubicado en `~/.local/share/waybar`) es un directorio provisto por HyDE. NUNCA edites los archivos en este directorio, ya que serán sobrescritos en las actualizaciones. En su lugar, ¡edita tu propio directorio `~/.config/waybar`!

Ten en cuenta que ambos tienen la misma estructura, por lo que sugiero copiar los archivos de `xdg_share/waybar` a `~/.config/waybar` y editarlos allí.
:::

### Modules (Módulos)

Directorio: `./modules/`

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

- Almacena todos los módulos en `~/.config/waybar/modules/`.
- Los archivos aquí se agregan recursivamente como entrada en `includes/includes.jsonc`.
- Todos los módulos bajo un árbol específico tendrán la convención `parent-child`. Ejemplo: `custom/cpuinfo` se convertirá en `custom-cpuinfo`. Esto se utiliza para determinar fácilmente el nombre de la clase en CSS sin confusión.

Ejemplo:
```css
.custom-cpuinfo {
  padding: 1em;
}
```

### Layouts

Directorio: `./layouts/`

```text
└── 📂 layouts/
   ├── 📄 layout-1.jsonc
   ├── 📄 layout-2.jsonc
   ├── 📄 khing.jsonc
   ├── 📄 macos.jsonc
   └── 📄 ....jsonc
```

HyDE almacena todas las configuraciones listas para usar en el directorio `layouts/`. Estas se pueden navegar usando el script `hyde-shell waybar`.

:::note
Si los usuarios configuran accidentalmente `./waybar/config.jsonc`, este se moverá a `~/.config/waybar/layouts/backup/name_timestamp.jsonc`. Aún con estas medidas, recomendamos crear una copia de tu configuración en `~/.config/waybar/layouts/`.
:::

Para el estilo CSS de los layouts, ver [styles](#styles-estilos).

### Styles (Estilos)

Directorio: `./styles/`

```text
└── 📂 styles/
   └── 📂 groups/
   ├── 📄 layout-1.css
   ├── 📄 layout-2.css
   ├── 📄 khing.css
   ├── 📄 macos.css
   └── 📄 ...*.css
```

El directorio `styles/` contiene los archivos CSS equivalentes para los layouts.
Al elegir un layout, HyDE intentará usar el estilo CSS equivalente coincidiendo los nombres base, p. ej., `khing.jsonc` usará `khing.css`.

Las opciones explícitas `--config <archivo>` y `--style <archivo>` también son compatibles.

### Includes

Directorio: `./includes/`

```text
└── 📂 includes/
   ├── 📄 includes.jsonc
   ├── 📄 border-radius.css
   └── 📄 global.css
```

- **border-radius.css**
  - Radio de borde dinámico para los [grupos](#groups-grupos).

#### Vista previa de Radio de Borde Dinámico

**Sin Redondeo** en Hyprland

![0 redondeo en hyprland](../../../../assets/waybar/rounding-0.png)

**Squircle** (Redondeo 10) en Hyprland

![10 redondeo en hyprland](../../../../assets/waybar/rounding-10.png)

**Círculo** (Redondeo 100) en Hyprland

![100 redondeo en hyprland](../../../../assets/waybar/rounding-100.png)

**¿Entiendes la idea?**

- **global.css** - Incluye el tamaño de fuente y familia de fuente dinámicos. Esto es dinámico para que los temas puedan anular estos valores a través de `hypr.theme` >> `$BAR_FONT`.

### Menus (Menús)

Directorio: `./menus/`

Almacena todos los archivos XML de Objetos GTK. Para gestionar correctamente los archivos, agregamos los archivos XML GObject en `~/.config/waybar/menus/`.

## Group Class (Clase Grupal) para Estilizado

Debes saber que Waybar SOLO proporciona 3 opciones de posicionamiento para los módulos: `modules-left` (izquierda), `modules-center` (centro) y `modules-right` (derecha). Para lograr el posicionamiento deseado o el popular efecto de píldora ("pill"), necesitamos usar la clase `group`.

Por ejemplo:
![Grupos en forma de píldora](../../../../assets/waybar/groups.png)

El contenido de `../waybar/styles/groups/` se utiliza para estilizar el radio de borde del grupo dado. Los grupos son la combinación de módulos; algunos los llaman islas.

En HyDE, para poder hacer uso de los grupos, primero debemos declarar los módulos en un grupo:

Ejemplo en `~/.config/waybar/layouts/my_config.jsonc`:

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

Ahora podemos agregar el grupo en los módulos de waybar:

```jsonc
{
  "modules-center": [
    "group/pill",
    "group/pill#tag1",
    "group/pill-in"
  ]
}
```

**Estilizar** esto es fácil ya que agrupamos los módulos. De esta manera podemos usar el nombre del grupo como nombre de clase:

```css
#pill,
#pill-in {
  /* Tus estilos aquí */
}
```

**Nota:** `pill` y `pill#tag*` tienen un nombre de clase `pill`. Esta es una convención de waybar para permitir a los usuarios agregar un módulo similar pero compartiendo un nombre de clase común.

## Crea tu propio layout de waybar

:::note
Esta es una guía muy básica. Deberías consultar la [Wiki de Waybar](https://github.com/Alexays/Waybar/wiki/Configuration) para más información.
:::

### Este es el archivo de layout completo usado para las instrucciones

<details open>
  <summary>MyBar.jsonc</summary>

```jsonc
{
  /* 
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │     Opciones Globales para la configuración de Waybar                       │
  └─────────────────────────────────────────────────────────────────────────────┘
 */

  "layer": "top",
  "output": ["*"],
  "position": "top",
  "reload_style_on_change": true,

  /* 
  ┌────────────────────────────────────────────────────────────────────────────┐
  │                                                                            │
  │ Esta es una de las partes vitales de la configuración, te permite          │
  │ incluir otros                                                              │
  │ archivos                                                                   │
  │ El `"$XDG_CONFIG_HOME/waybar/includes/includes.json"` es autogenerado      │
  │ por el script waybar.py                                                    │
  │                                                                            │
  │ 1. Incluye todos los módulos en `./waybar/modules`                         │
  │ 2. Resuelve todos los tamaños para los íconos que style.css en waybar      │
  │ NO PUEDE                                                                   │
  │ manejar                                                                    │
  │ 3. Por supuesto, esto es opcional, puedes eliminarlo si no quieres usarlo  │
  │ e incluir tu propio conjunto de módulos.                                   │
  │                                                                            │
  └────────────────────────────────────────────────────────────────────────────┘
 */

  "include": ["$XDG_CONFIG_HOME/waybar/includes/includes.json"],

  /* 
  ┌────────────────────────────────────────────────────────────────────────────┐
  │ Declara los módulos dentro de tus formas de grupo deseadas                 │
  │  Hasta ahora tenemos:                                                      │
  │                                                                            │
  │ - pill-left - la curva mira hacia la izquierda                             │
  │ - pill-right - la curva mira hacia la derecha                              │
  │ - pill-up - la curva mira hacia arriba                                     │
  │ - pill-down - la curva mira hacia abajo                                    │
  │ - pill-in - la curva mira hacia adentro sin importar la posición           │
  │ - pill-out - la curva mira hacia afuera sin importar la posición           │
  │ - leaf - forma de hoja                                                     │
  │ - leaf-inverse - forma de hoja invertida                                   │
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
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Reutilizar un grupo es simple, solo necesitas agregar un #tag al nombre │
  │ del grupo.                                                              │
  └─────────────────────────────────────────────────────────────────────────┘
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
  │ Declara los grupos en la posición del módulo proporcionada por waybar      │
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


### Guía Paso a Paso

#### Paso 1: Crea tu Archivo de Configuración

Comienza creando un nuevo archivo `~/.config/waybar/layouts/my_config.jsonc` o copia uno de los existentes desde `~/.local/share/waybar/layouts/`.

```bash
cp ~/.local/share/waybar/layouts/layout-1.jsonc ~/.config/waybar/layouts/my_config.jsonc
```

#### Paso 2: Agrega Opciones de Configuración Global

Comienza con las configuraciones globales esenciales que definen el comportamiento básico de tu waybar:

```jsonc
{
  "layer": "top",                    // Capa de posición: "top" (arriba) o "bottom" (abajo)
  "output": ["*"],                   // Aplicar a todos los monitores (* significa todas las salidas)
  "position": "top",                 // Posición de la barra: top, bottom, left, right
  "reload_style_on_change": true,    // Autorecargar cuando el archivo de estilo cambia
```

#### Paso 3: Incluir Definiciones de Módulos HyDE

Agrega la directiva include para cargar automáticamente todos los módulos y configuraciones de HyDE:

```jsonc
  "include": ["$XDG_CONFIG_HOME/waybar/includes/includes.json"],
```

:::tip
El archivo `includes.json` es autogenerado por el script `hyde-shell waybar` de HyDE y proporciona:
- Todos los módulos de `./waybar/modules/`
- Configuraciones de tamaño de íconos que CSS no puede manejar
- Configuraciones dinámicas específicas de HyDE
:::

#### Paso 4: Define Formas de Grupos

HyDE proporciona varias formas de grupos predefinidas para crear efectos de píldora y layouts personalizados. Define tus grupos antes de asignar módulos:

```jsonc
  // Formas de grupo disponibles:
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

#### Paso 5: Reutilizar Grupos con Etiquetas

Puedes reutilizar la misma forma de grupo varias veces agregando etiquetas (`#tagname`):

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

#### Paso 6: Organizar Grupos en Posiciones de Módulos

Ahora puedes asignar tus grupos a las tres posiciones disponibles:

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

#### Paso 7: Aplica tu Configuración

Para usar tu nuevo layout, ejecuta:

```bash
# Navega a tus layouts usando rofi
hyde-shell waybar -S

# O aplica directamente
waybar -c ~/.config/waybar/layouts/my_config.jsonc
```
![alt text](/src/assets/waybar/selector.png)

:::note 
Ver hyde-shell waybar --help para más opciones.
:::

### Formas de Grupo Disponibles

| Forma | Descripción |
|-------|-------------|
| `pill-left` | Curva hacia la izquierda |
| `pill-right` | Curva hacia la derecha |
| `pill-up` | Curva hacia arriba |
| `pill-down` | Curva hacia abajo |
| `pill-in` | Curva hacia adentro sin importar la posición |
| `pill-out` | Curva hacia afuera sin importar la posición |
| `leaf` | Forma de hoja |
| `leaf-inverse` | Forma de hoja invertida |


### Personalizando el Contenido del Módulo

Para personalizar módulos individuales, edita los archivos en `~/.config/waybar/modules/` o crea nuevos siguiendo la convención de nombres descrita en la sección [Modules](#modules-módulos).
