---
title: Preguntas frecuentes y consejos
description: Preguntas frecuentes sobre HyDE
---

:::tip
Las preguntas relacionadas con Hyprland deben consultarse en la [Wiki de Hyprland](https://wiki.hyprland.org)
:::

### Añadir fondos de pantalla globales o personalizados

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

#### Fondos de pantalla globales

Los fondos de pantalla globales se mostrarán en el selector para todos los temas.

En tu archivo `xdg_config/hyde/config.toml` añade esto:

```toml
[wallpaper]
custom_paths = [
    "$XDG_PICTURES_DIR",
    "/ruta/a/bonitos/fondos",
] # Lista de rutas para buscar fondos de pantalla

```

#### Fondos de pantalla personalizados por tema

##### Opción 1: Interfaz gráfica

Usar dolphin para seleccionar uno o varios fondos para un tema

![imagen](https://github.com/user-attachments/assets/a72458fc-da94-45e4-8dd4-dba48b910e82)

1. Selecciona la imagen
2. Haz clic derecho y pasa el cursor sobre "Establecer como fondo de pantalla"
3. Elige un tema de destino

##### Opción 2: Línea de comandos

Los fondos personalizados se añaden por tema.

1. Añade un fondo en `~/.config/hyde/themes/Nombre-del-Tema/wallpapers/*`.
2. Luego ejecuta `hyde-shell reload`

---

---

</details>

### ¿Cómo puedo grabar la pantalla?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Puedes grabar la pantalla usando los siguientes paquetes de grabación basados en Wayland:

`wl-screenrec`

`wf-recorder`

`kooha `

`obs`

</details>

### ¿Cómo establezco mis propias preferencias?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Puedes establecer tus preferencias de Hyprland en `xdg_config/hypr/userprefs.conf`. Estas configuraciones se mantienen incluso al actualizar el repositorio.

Consulta `Configuración` > `Hyprland` para aprender cómo estructuramos las configuraciones de Hyprland.

</details>

### ¿Cómo actualizo mis dotfiles a la última versión?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

```sh
cd ~/HyDE/Scripts
git pull
./install.sh -r
```

Consulta `Recursos` > `Restaurar Configuración` para entender cómo funciona

</details>

### ¿Cómo configuro la resolución y la frecuencia de actualización de mi monitor?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Puedes configurar la resolución y la frecuencia de actualización del monitor en `~/.config/hypr/monitors.conf`

`monitor = DP-1,2560x1440@144,0x0, 1` >> El @ establece la frecuencia de actualización

Esta es una pregunta sobre "cómo usar Hyprland", siempre consulta su wiki en https://wiki.hyprland.org/Configuring/Monitors/

</details>

### ¿Cómo elimino los personajes Pokémon o cambio la introducción de inicio de la terminal?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Necesitas editar el archivo `.hyde.zshrc` en tu directorio home en `~/.hyde.zshrc`

1. Edita `~/.hyde.zshrc`
2. Añade un # a la línea 158 donde aparece pokego --no-title -r 1,3,6
3. Guarda

</details>

### ¿Cómo edito el fondo de pantalla o la configuración de SDDM?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

- Cambiar fondo de pantalla
  Necesitas ejecutar manualmente el script `~/.config/hypr/sddmwall.sh` en el fondo que deseas para la pantalla de inicio de sesión, puedes seleccionar el fondo desde los temas y asegurarte de que sea el fondo actual de swww.
- Cambiar configuración de SDDM
  (colores, fondo, formato de fecha, fuente) se puede configurar en `/usr/share/sddm/themes/corners/theme.conf`

Si quieres modificar la estructura, tendrás que modificar los archivos qml en /usr/share/sddm/themes/corners/components

</details>

### ¿Cómo puedo cambiar la distribución del teclado?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Lee esto primero: https://wiki.hyprland.org/Configuring/Variables/#input

En HyDE genera un archivo `~/.config/hypr/custom.lua`, añade la configuración allí.

```lua
-- ~/.config/hypr/hyprland.lua
hl.config({
    input = {
        kb_layout = "us,es",
        accel_profile = "flat",
    },
})
```

Usa `SUPER` + `K` para cambiar entre distribuciones.

</details>

### ¿No hay miniaturas en los selectores?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Si tus miniaturas no se cargan, intenta reconstruir la caché de fondos de pantalla.

`swwwallcache.sh`

</details>

### ¿Cómo edito la waybar?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Puedes configurar los módulos necesarios en este archivo - `~/.config/waybar/config.ctl`

Consulta la documentación de temas aquí en la Wiki. [Waybar](https://github.com/Alexays/Waybar/wiki)

</details>

### ¿Cómo elimino el desenfoque en waybar?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Puedes eliminar el desenfoque en waybar quitando blurls = waybar en el directorio de temas comentando la línea al final de cada archivo `theme.conf`.
Directorio de temas: `~/.config/hypr/themes/`

</details>

### ¿Cómo lanzo la barra de juegos mostrada en la vista previa?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Necesitarás tener instalada la biblioteca de juegos de Steam o Lutris, y luego ejecutar esto:

`~/.config/hypr/scripts/gamelauncher.sh <n>` # donde n es el estilo [1-4]

</details>

### ¿Cómo puedo lanzarlo en el lanzador de aplicaciones?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Encuentra la entrada .desktop usando este útil comando find /usr/share/applications -name '\*code.desktop'
Deberías copiar y luego editar la entrada .desktop de cada aplicación en `~/.local/share/applications/`
Encuentra la parte Exec = y luego añade las banderas

> 📢 Recuerda, si estás buscando editar o crear un archivo .desktop, es una buena práctica colocarlo en ~/.local/share/applications/ para evitar modificar >archivos de todo el sistema. Esto asegura que tus cambios sean específicos para el usuario y no requieran privilegios administrativos

Aquí está la [wiki](https://wiki.archlinux.org/title/Desktop_entries) sobre cómo manejar las entradas .desktop.

</details>

### Xwayland(👹)

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Por favor, navega a la wiki de Hyprland para obtener la explicación.

[XWayland](https://wiki.hyprland.org/Configuring/XWayland/)
Ten en cuenta que si la aplicación no es compatible con Wayland, HyDE, Hyprland y Wayland en sí no tienen el poder de arreglar mágicamente el problema. No reportes esto como un error, intenta abrir preguntas en el [Panel de Discusión](https://github.com/HyDE-Project/Hyde-cli) para obtener ayuda.

Problemas conocidos

- Algunos problemas de escalado con las configuraciones de rofi, ya que están creadas en base a mi pantalla ultrawide (21:9).
- Bloqueo aleatorio de la pantalla de bloqueo, consulta https://github.com/swaywm/sway/issues/7046
- La barra Waybar al lanzar rofi interrumpe la entrada del ratón (se añadió sleep 0.1 como solución), consulta https://github.com/Alexays/Waybar/issues/1850
- Las aplicaciones Flatpak QT no siguen el tema del sistema

</details>

### ¿Bucle de "¡Inicio de sesión fallido!" en SDDM?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

Si tu usuario (o nombre de inicio de sesión) contiene mayúsculas o caracteres especiales, necesitarás editar tu tema SDDM para poder iniciar sesión a través de SDDM.

Para hacer esto, sigue estos pasos:

1. Cuando estés en la pantalla de SDDM, abre una tty con `Ctrl + Alt + F6` (u otra tecla F)
2. Inicia sesión como la cuenta con el problema
3. `nano usr/share/sddm/themes/[nombre del tema]/theme.conf`
4. Encuentra el parámetro `AllowBadUsername` y establécelo en true
5. Reinicia

Si aún no puedes iniciar sesión después de estos pasos, puedes establecer, en el mismo archivo, `AllowEmptyPassword` en true, reiniciar, iniciar sesión escribiendo tu contraseña, y después de iniciar sesión puedes devolverlo a false de manera segura.

Aquí hay un [Problema de GitHub](https://github.com/HyDE-Project/HyDE/issues/404) sobre este comportamiento.

</details>