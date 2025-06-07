---

title: Hyprland
description: Hyprland संबंधित कॉन्फ़िगरेशन

---

<style>
  .sl-markdown-content :is(th:first-child, td:first-child){
    padding-inline-start: 0.5rem;
  }

  .sl-markdown-content :is(th:last-child, td:last-child){
    padding-inline-end: 0.5rem;
  }

  table {
    width: 100%;
    margin: 0em 1em;
  }
  th, td {
    border: 0.1em solid var(--sl-color-gray-5);
    padding: 1em 2em;
    text-align: left;
  }
  th {
    background-color: var(--sl-color-accent);
    color: var(--sl-color-accent-high-contrast);
    text-align: center;
    margin: 10em;
    padding: 10em;
  }
  :root[data-theme="light"] th {
    color: var(--sl-color-white);
  }
</style>

# कॉन्फ़िगरेशन ट्री

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

# HyDE का Hyprland कॉन्फ़िगरेशन

चूंकि Hyprland `~/.config/hypr/hyprland.conf` को स्रोत करता है, इसलिए HyDE का hyprland कॉन्फ़िगरेशन तीन हिस्सों में विभाजित है:

* [बॉयलरप्लेट](#1-बॉयलरप्लेट)
* [ओवरराइड्स](#2-ओवरराइड्स)
* [यूज़र्स](#3-यूज़र्स)

## 1. बॉयलरप्लेट

यह अनुभाग HyDE की डिफ़ॉल्ट कॉन्फ़िगरेशन रखता है। इसे बदलना अनुशंसित नहीं है।

**फ़ाइल पथ:** `$XDG_DATA_HOME/hyde/hyprland.conf`

यह फ़ाइल `~/.config/hypr/hyprland.conf` में अन्य कॉन्फ़िगरेशन के ऊपर स्रोत की जाती है।

```ini
# बॉयलरप्लेट कॉन्फ़िगरेशन
source = ~/.local/share/hyde/hyprland.conf
```

## 2. ओवरराइड्स

यह अनुभाग HyDE की डिफ़ॉल्ट कॉन्फ़िगरेशन को ओवरराइड करने के लिए है।

Hyprland के [वैरिएबल्स की परिभाषा](https://wiki.hyprland.org/Hypr-Ecosystem/hyprlang/#defining-variables) के अनुसार, HyDE \$VARIABLES का उपयोग डिफ़ॉल्ट कॉन्फ़िगरेशन को ओवरराइड करने के लिए करता है।

इस अनुभाग को तब बदलें जब आप:

* स्टार्टअप और पर्यावरण चर बदलना चाहते हों
* किसी ऐप/सेवा को स्टार्ट होने से रोकना चाहते हों
* HyDE के डिफ़ॉल्ट वैरिएबल्स को ओवरराइड करना चाहते हों

**फ़ाइल पथ:** `$XDG_CONFIG_HOME/hypr/hyde.conf`

### HyDE कॉन्फ़िगरेशन वैरिएबल्स

| वैरिएबल                 | विवरण                   | डिफ़ॉल्ट मान                 |
| ----------------------- | ----------------------- | ---------------------------- |
| \$mainMod               | कीबोर्ड मॉडिफायर        | SUPER (Windows key)          |
| \$QUICKAPPS             | त्वरित ऐप लॉन्चर के लिए | (खाली)                       |
| \$BROWSER               | डिफ़ॉल्ट ब्राउज़र       | firefox                      |
| \$EDITOR                | डिफ़ॉल्ट संपादक         | code                         |
| \$EXPLORER              | डिफ़ॉल्ट फ़ाइल प्रबंधक  | dolphin                      |
| \$TERMINAL              | डिफ़ॉल्ट टर्मिनल        | kitty                        |
| \$LOCKSCREEN            | डिफ़ॉल्ट लॉक स्क्रीन    | hyprlock                     |
| \$IDLE                  | डिफ़ॉल्ट आईडल मैनेजर    | hypridle                     |
| \$GTK\_THEME            | GTK थीम                 | Wallbash-Gtk                 |
| \$ICON\_THEME           | आइकन थीम                | Tela-circle-dracula          |
| \$COLOR\_SCHEME         | रंग योजना               | prefer-dark                  |
| \$CURSOR\_THEME         | कर्सर थीम               | Bibata-Modern-Ice            |
| \$CURSOR\_SIZE          | कर्सर आकार              | 30                           |
| \$FONT                  | फ़ॉन्ट                  | Canterell                    |
| \$FONT\_SIZE            | फ़ॉन्ट आकार             | 10                           |
| \$DOCUMENT\_FONT        | दस्तावेज़ फ़ॉन्ट        | Cantarell                    |
| \$DOCUMENT\_FONT\_SIZE  | दस्तावेज़ फ़ॉन्ट आकार   | 10                           |
| \$MONOSPACE\_FONT       | मोनोस्पेस फ़ॉन्ट        | CaskaydiaCove Nerd Font Mono |
| \$MONOSPACE\_FONT\_SIZE | मोनोस्पेस फ़ॉन्ट आकार   | 9                            |
| \$FONT\_ANTIALIASING    | फ़ॉन्ट एंटीएलियासिंग    | rgba                         |
| \$FONT\_HINTING         | फ़ॉन्ट हिंटिंग          | full                         |

### स्टार्टअप कमांड्स (`$start.*`)

स्टार्टअप पर चलने वाले डिफ़ॉल्ट कमांड्स।

| वैरिएबल                        | विवरण                                                                | डिफ़ॉल्ट मान                                                                                      |
| ------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| \$start.XDG\_PORTAL\_RESET     | XDG पोर्टल रीसेट करता है                                             | \$scrPath/resetxdgportal.sh                                                                       |
| \$start.DBUS\_SHARE\_PICKER    | शेयर पिकर के लिए DBus पर्यावरण अपडेट करता है                         | dbus-update-activation-environment --systemd --all                                                |
| \$start.SYSTEMD\_SHARE\_PICKER | systemd का उपयोग कर शेयर पिकर के लिए पर्यावरण वैरिएबल्स आयात करता है | systemctl --user import-environment QT\_QPA\_PLATFORMTHEME WAYLAND\_DISPLAY XDG\_CURRENT\_DESKTOP |
| \$start.BAR                    | Waybar शुरू करता है                                                  | waybar                                                                                            |
| \$start.NOTIFICATIONS          | नोटिफिकेशन डेमन शुरू करता है                                         | swaync                                                                                            |
| \$start.APPTRAY\_BLUETOOTH     | ब्लूटूथ एप्लेट शुरू करता है                                          | blueman-applet                                                                                    |
| \$start.WALLPAPER              | वॉलपेपर सेट करता है                                                  | \$scrPath/swwwallpaper.sh                                                                         |
| \$start.TEXT\_CLIPBOARD        | टेक्स्ट क्लिपबोर्ड मैनेजर शुरू करता है                               | wl-paste --type text --watch cliphist store                                                       |
| \$start.IMAGE\_CLIPBOARD       | इमेज क्लिपबोर्ड मैनेजर शुरू करता है                                  | wl-paste --type image --watch cliphist store                                                      |
| \$start.BATTERY\_NOTIFY        | बैटरी नोटिफिकेशन स्क्रिप्ट शुरू करता है                              | \$scrPath/batterynotify.sh                                                                        |
| \$start.NETWORK\_MANAGER       | नेटवर्क मैनेजर एप्लेट शुरू करता है                                   | nm-applet --indicator                                                                             |
| \$start.REMOVABLE\_MEDIA       | रिमूवेबल मीडिया मैनेजर शुरू करता है                                  | udiskie --no-automount --smart-tray                                                               |
| \$start.AUTH\_DIALOGUE         | ऑथेंटिकेशन डायलॉग स्क्रिप्ट शुरू करता है                             | \$scrPath/polkitkdeauth.sh                                                                        |
| \$start.IDLE\_DAEMON           | आईडल डेमन शुरू करता है                                               | \$IDLE                                                                                            |

### पर्यावरण वैरिएबल्स (`$env.*`)

| वैरिएबल                                      | विवरण                                         | डिफ़ॉल्ट मान                  |
| -------------------------------------------- | --------------------------------------------- | ----------------------------- |
| \$env.GDK\_BACKEND                           | GTK बैकएंड (Wayland प्राथमिक)                 | wayland,x11,\*                |
| \$env.QT\_QPA\_PLATFORM                      | Qt प्लेटफ़ॉर्म (Wayland)                      | wayland                       |
| \$env.SDL\_VIDEODRIVER                       | SDL2 वीडियो ड्राइवर (Wayland)                 | wayland                       |
| \$env.CLUTTER\_BACKEND                       | Clutter बैकएंड (Wayland)                      | wayland                       |
| \$env.XDG\_CURRENT\_DESKTOP                  | XDG वर्तमान डेस्कटॉप वातावरण                  | Hyprland                      |
| \$env.XDG\_SESSION\_TYPE                     | XDG सेशन प्रकार                               | wayland                       |
| \$env.XDG\_SESSION\_DESKTOP                  | XDG सेशन डेस्कटॉप                             | Hyprland                      |
| \$env.QT\_AUTO\_SCREEN\_SCALE\_FACTOR        | Qt ऑटोमेटिक स्क्रीन स्केलिंग                  | 1                             |
| \$env.QT\_QPA\_PLATFORM                      | Qt प्लेटफ़ॉर्म                                | wayland                       |
| \$env.QT\_WAYLAND\_DISABLE\_WINDOWDECORATION | Qt एप्लिकेशन में विंडो डेकोरेशन अक्षम करता है | 1                             |
| \$env.QT\_QPA\_PLATFORMTHEME                 | Qt प्लेटफ़ॉर्म थीम                            | qt6ct                         |
| \$env.PATH                                   | पाथ पर्यावरण वैरिएबल                          | (खाली)                        |
| \$env.MOZ\_ENABLE\_WAYLAND                   | Firefox के लिए Wayland सक्षम करता है          | 1                             |
| \$env.GDK\_SCALE                             | HiDPI पर Xwayland के लिए GDK स्केल            | 1                             |
| \$env.ELECTRON\_OZONE\_PLATFORM\_HINT        | Electron Ozone प्लेटफ़ॉर्म संकेत              | auto                          |
| \$env.XDG\_RUNTIME\_DIR                      | XDG रनटाइम निर्देशिका                         | \$XDG\_RUNTIME\_DIR           |
| \$env.XDG\_CONFIG\_HOME                      | XDG कॉन्फ़िग निर्देशिका                       | \$HOME/.config                |
| \$env.XDG\_CACHE\_HOME                       | XDG कैश निर्देशिका                            | \$HOME/.cache                 |
| \$env.XDG\_DATA\_HOME                        | XDG डेटा निर्देशिका                           | \$HOME/.local/share           |
| \$LAYOUT\_PATH                               | Hyprlock लेआउट कॉन्फ़िगरेशन का पथ             | /path/to/hyprlock/layout.conf |
| \$BACKGROUND\_PATH                           | Hyprlock बैकग्राउंड छवि का पथ                 | \$HYPRLOCK\_BACKGROUND        |

## 3. यूज़र्स

यह अनुभाग उपयोगकर्ता कॉन्फ़िगरेशन के लिए है। इसे अपनी पसंद के अनुसार बदलना अनुशंसित है।

**फ़ाइल पथ:**

* `./keybindings.conf`
* `./windowrules.conf`
* `./monitors.conf`
* `./userprefs.conf`

---

अब आपको पता होना चाहिए कि कौन सी फ़ाइल किसके लिए है। अधिक जानकारी और अपनी परफेक्ट डेस्कटॉप अनुभव के लिए [Hyprland विकि](https://wiki.hyprland.org) देखें।

साथ ही देखें [FAQs और Tips](../help/faq#how-can-i-change-keyboard-layout)।
