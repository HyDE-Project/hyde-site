---
title: थीम कैसे बनाएं
description: थीम कैसे बनाएं
---

यहाँ हम आपको HyDE के लिए थीम बनाने की प्रक्रिया को चरण-दर-चरण समझाएंगे।
यह ट्यूटोरियल hyprdots और HyDE दोनों के लिए काम करेगा।


### त्वरित आरंभ गाइड

* अपने थीम डायरेक्टरी में `hyde-theme-starter` रिपोजिटरी क्लोन करें

```bash
git clone https://github.com/richen604/hyde-theme-starter ~/MyTheme
```

1. आवश्यक कंपोनेंट (सभी `tar.*` फॉर्मेट में होने चाहिए):

   * GTK थीम (जरूरी)

     * [Gnome-Look Themes](https://www.gnome-look.org/browse?cat=135&ord=latest) से थीम खोजें
     * या [Generate GTK4](#generate-gtk4-from-wallbash) देखें ताकि वॉलपेपर से GTK थीम जनरेट कर सकें
   * आइकन पैक (वैकल्पिक) - डिफ़ॉल्ट `Tela-circle`

     * [Gnome-Look Icons](https://www.gnome-look.org/browse?cat=132&ord=latest) देखें
   * कर्सर थीम (वैकल्पिक) - डिफ़ॉल्ट `Bibata-Modern-Ice`

     * [Gnome-Look Cursors](https://www.gnome-look.org/browse?cat=107&ord=latest) देखें
   * फ़ॉन्ट (वैकल्पिक)

     * [Google Fonts](https://fonts.google.com/)
     * [Nerd Fonts](https://www.nerdfonts.com/)

2. अपने थीम के स्टाइल/रंग योजना से मेल खाते वॉलपेपर संग्रहित करें

   * [Wallhaven](https://wallhaven.cc/) - वॉलपेपर के लिए
   * [farbenfroh.io](https://farbenfroh.io/) - रंग योजना के अनुसार वॉलपेपर के लिए
   * ज्यादा वॉलपेपर न जोड़ें, 8-10 ठीक हैं

3. `just` इंस्टॉल करें (helper स्क्रिप्ट्स के लिए)

   ```bash
   yay -S just
   ```

* अपनी थीम डायरेक्टरी में जाएं `cd ~/MyTheme` (जहाँ `MyTheme` आपकी थीम का नाम है)
* `justfile` में `MyTheme` को अपनी थीम नाम से बदलें

```bash
theme = "MyTheme"
```

* `just init` चलाकर डायरेक्टरी स्ट्रक्चर बनाएं

### आपकी थीम का फोल्डर संरचना कुछ इस प्रकार होगी:

```
~/MyTheme/
├── Config/                  # अंतिम थीम का हिस्सा - कॉन्फिग फाइलें
│   └── hyde/
│       └── themes/
│           └── MyTheme/
│               └── wallpapers/
├── refs/                    # जेनरेट की गई संदर्भ फाइलें
├── screenshots/             # थीम के स्क्रीनशॉट्स
├── Source/                  # अंतिम थीम का हिस्सा - Arcs (gtk, cursor, icon, font)
│   └── arcs/
├── .gitignore
├── justfile                 # helper स्क्रिप्ट्स के लिए
└── README.md                # इस वेबपेज के लिंक
```

### Arcs क्या हैं?

Arcs आपके थीम के GTK थीम, आइकन, कर्सर और फ़ॉन्ट कम्पोनेंट होते हैं। इन्हें `Source/arcs` में रखें ताकि टेस्टिंग के लिए तैयार रहें।

```
~/MyTheme/
├── Source/
│   └── arcs/
│       ├── Gtk_<Your-GTK-Theme>.tar.*
│       ├── Cursor_<Your-Cursor-Theme>.tar.*
│       ├── Icon_<Your-Icon-Theme>.tar.*
│       └── Font_<Your-Font-Name>.tar.*
```

> **ध्यान दें:** सही prefix का उपयोग करें जैसे `Gtk_`, `Cursor_`, `Icon_`, `Font_`

### Wallbash के साथ थीम देखें

* वॉलपेपर को थीम डायरेक्टरी में कॉपी करें

```bash
cp -r ~/wallpapers ~/MyTheme/Config/.config/hyde/themes/MyTheme/wallpapers
```

* थीम डायरेक्टरी में जाएं

```bash
cd ~/MyTheme
```

* थीम इंस्टॉल करें

```bash
just install
```

### Wallbash के साथ थीम टेस्ट करें

थीम इनिशियलाइज़ करने के दो तरीके हैं - wallbash से या किसी मौजूदा थीम से। यहाँ हम wallbash का उपयोग करेंगे क्योंकि इससे आप समझ पाएंगे कि wallbash कैसे रंग जेनरेट करता है।

* Wallbash खोलें, auto/dark/light मोड सेट करें (`Meta + Shift + R`)
* वॉलपेपर सेट करें (`Meta + Shift + W`)

देखें कि wallbash कैसे इन ऐप्स के रंग बदलता है:

* GTK (nwg-look)
* Kitty
* QT (qt5ct + qt6ct)
* Waybar
* Spotify
* VSCode (wallbash enabled color theme चाहिए)
* Cava

### थीम फाइलें जनरेट करें

सबसे अच्छा वॉलपेपर चुनें जो wallbash आपके लिए बनाए।

```bash
just gen-all
just set-wall
```

आपको `refs` फोल्डर में नई फाइलें दिखेंगी:

```
~/MyTheme/
├── refs/
│   ├── gtk-4.0/
│   │   ├── gtk.css
│   │   └── gtk-dark.css
│   ├── kvantum/
│   ├── hypr.theme
│   ├── kitty.theme
│   ├── rofi.theme
│   ├── theme.dcol
│   └── waybar.theme
│   └── wall.set
```

* इन फाइलों को कॉपी करें

```bash
cp -r ./refs/* ./Config/.config/hyde/themes/MyTheme
```

* फिर से इंस्टॉल करें

```bash
just install
```

### \*.theme फाइलें संपादित करना

* हर थीम फाइल में कॉन्फ़िगरेशन लाइनें होती हैं। उदाहरण:

```
$HOME/.config/hypr/themes/theme.conf|> $HOME/.config/hypr/themes/colors.conf
```

* `hypr.theme` सबसे महत्वपूर्ण है, इसमें आपकी GTK, ICON, CURSOR थीम के नाम सेट होते हैं:

```bash
$GTK_THEME=Bad-Blood
$ICON_THEME=besgnulinux-mono-red
$COLOR_SCHEME=prefer-dark
$CURSOR_THEME=Night-Diamond-Red
$CURSOR_SIZE=30
```

* अपनी arcs के नाम को `Source/arcs` में मौजूद फ़ोल्डर के अनुसार सेट करें।

### theme.dcol फ़ाइल

यह optional है, यह wallbash के जेनरेट रंगों को ओवरराइड करती है।

### थीम को अंतिम रूप देना

* `screenshots` फोल्डर में स्क्रीनशॉट जोड़ें
* थीम को [HyDE-Gallery](https://github.com/HyDE-Project/hyde-gallery) में जोड़ें

### HyDE-Gallery में थीम जोड़ना

* रीडमी जनरेट करें

```bash
python3 generate_readme.py
```

* गिट इनिशियलाइज़ करें

```bash
git init && git branch -M main && git add . && git commit -m "My first HyDE theme"
```

* [GitHub पर नया रिपोजिटरी बनाएं](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

* HyDE-gallery को fork करें और अपनी थीम को लिस्ट में जोड़ें

---

## अतिरिक्त जानकारी

### GTK4 जेनरेट करें (wallbash से)

अगर आपकी थीम में GTK4 सपोर्ट नहीं है तो कुछ ऐप्स सफेद दिख सकते हैं।

```bash
just gen-gtk4
```

```bash
mkdir -p ./Config/.config/hyde/themes/MyTheme/gtk-4.0
cp -r ./refs/gtk-4.0/* ./Config/.config/hyde/themes/MyTheme/gtk-4.0/
```

### wallbash को समझना

* wallbash आपकी वॉलपेपर से 4 मुख्य रंग जेनरेट करता है (`wallbash_pry1` से `wallbash_pry4`)
* हर मुख्य रंग के लिए 1 टेक्स्ट रंग और 9 एक्सेंट रंग होते हैं
* कुल मिलाकर 44 बेस रंग + RGBA वेरिएंट होते हैं

`just gen-dcol` चलाकर अपनी सक्रिय वॉलपेपर के लिए `theme.dcol` फाइल जेनरेट करें।
