---

title: अक्सर पूछे जाने वाले प्रश्न और सुझाव
description: HyDE से जुड़े अक्सर पूछे जाने वाले प्रश्न

---

### ग्लोबल या कस्टम वॉलपेपर कैसे जोड़ें

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

#### ग्लोबल वॉलपेपर

ग्लोबल वॉलपेपर सभी थीम में सिलेक्टर में दिखेंगे।

अपने `xdg_config/hyde/config.toml` में यह जोड़ें:

```toml
[wallpaper]
custom_paths = [
    "$XDG_PICTURES_DIR",
    "/path/to/pretty/wallpapers",
] # वॉलपेपर खोजने के लिए पाथ की सूची
```

#### प्रत्येक थीम के लिए कस्टम वॉलपेपर

##### विकल्प 1: GUI

डॉल्फिन का उपयोग करके किसी थीम के लिए वॉलपेपर चुनना

![image](https://github.com/user-attachments/assets/a72458fc-da94-45e4-8dd4-dba48b910e82)

1. इमेज चुनें
2. राइट क्लिक करें और "Set As Wallpaper" पर जाएं
3. गंतव्य थीम चुनें

##### विकल्प 2: CLI

कस्टम वॉलपेपर प्रत्येक थीम के लिए जोड़े जाते हैं।

1. वॉलपेपर को `~/.config/hyde/themes/Theme-Name/wallpapers/*` में जोड़ें।
2. फिर `hyde-shell reload` चलाएं।

</details>

### स्क्रीन रिकॉर्ड कैसे करें?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

आप निम्नलिखित वेइलैंड आधारित रिकॉर्डिंग पैकेज का उपयोग कर सकते हैं:

`wl-screenrec`
`wf-recorder`
`kooha`
`obs`

</details>

### अपनी पसंद कैसे सेट करें?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

आप अपनी Hyprland पसंद `xdg_config/hypr/userprefs.conf` में सेट कर सकते हैं। ये सेटिंग्स अपडेट के बाद भी बनी रहती हैं।

जानने के लिए `Configuring` > `Hyprland` देखें कि हम Hyprland कॉन्फ़िगरेशन कैसे बनाते हैं।

</details>

### डॉटफाइल्स को नवीनतम कैसे अपडेट करें?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

```sh
cd ~/HyDE/Scripts
git pull
./install.sh -r
```

देखें `Resources` > `Restore Configuration` कि यह कैसे काम करता है।

</details>

### मॉनिटर रिज़ॉल्यूशन और रिफ्रेश रेट कैसे सेट करें?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

यह पढ़ें: [https://wiki.hyprland.org/Configuring/Monitors/](https://wiki.hyprland.org/Configuring/Monitors/)

मॉनिटर रिज़ॉल्यूशन और रिफ्रेश रेट `~/.config/hypr/monitors.conf` में सेट करें।

उदाहरण:
`monitor = DP-1,2560x1440@144,0x0, 1`
यहाँ @ के बाद रिफ्रेश रेट सेट होता है, लेकिन ध्यान दें कि आपका मॉनिटर सभी रिफ्रेश रेट सपोर्ट नहीं करता होगा।

</details>

### पोकेमॉन कैरेक्टर हटाने या टर्मिनल स्टार्टअप इंट्रो बदलने का तरीका?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

आपको अपने होम डायरेक्टरी में `.hyde.zshrc` फाइल को एडिट करना होगा (`~/.hyde.zshrc`)

1. `~/.hyde.zshrc` खोलें
2. लाइन 158 पर जहाँ लिखा है `pokego --no-title -r 1,3,6` उसके आगे # लगाएं
3. सेव करें

</details>

### sddm वॉलपेपर या सेटिंग्स कैसे एडिट करें?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

* **वॉलपेपर बदलना**
  लॉगिन स्क्रीन के लिए वॉलपेपर सेट करने के लिए मैनुअली `~/.config/hypr/sddmwall.sh` स्क्रिप्ट चलाएं। आप थीम से वॉलपेपर चुन सकते हैं और सुनिश्चित करें कि वह वर्तमान swww वॉलपेपर हो।

* **SDDM सेटिंग्स बदलना**
  (रंग, बैकग्राउंड, तारीख़ का फॉर्मेट, फ़ॉन्ट) को `/usr/share/sddm/themes/corners/theme.conf` में बदला जा सकता है।

अगर आप स्ट्रक्चर बदलना चाहते हैं तो `/usr/share/sddm/themes/corners/components` में qml फाइलें एडिट करनी होंगी।

</details>

### कीबोर्ड लेआउट कैसे बदलें?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

यह पढ़ें: [https://wiki.hyprland.org/Configuring/Variables/#input](https://wiki.hyprland.org/Configuring/Variables/#input)

HyDE में, आप `~/.config/hypr/userprefs.conf` में निम्न कॉन्फ़िगरेशन जोड़ें:

```
input {
  kb_layout = us,de
}
```

`SUPER` + `K` दबाकर लेआउट बदलें।

</details>

### सेलेक्टर्स में थंबनेल नहीं दिख रहे?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

अगर आपके थंबनेल नहीं दिख रहे, तो वॉलपेपर कैश रीबिल्ड करें:

`swwwallcache.sh`

</details>

### वेयबार कैसे एडिट करें?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

अपनी जरूरत के मॉड्यूल इस फाइल में सेट करें - `~/.config/waybar/config.ctl`

[Waybar Wiki](https://github.com/Alexays/Waybar/wiki) में थीमिंग डाक्यूमेंटेशन देखें।

</details>

### वेयबार का ब्लर कैसे हटाएं?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

थीम के डायरेक्टरी में `theme.conf` की आखिरी लाइन में `blurls = waybar` को कॉमेंट (#) करके वेयबार का ब्लर हटा सकते हैं।
थीम्स डायरेक्टरी: `~/.config/hypr/themes/`

</details>

### प्रिव्यू में दिख रहे गेमबार को कैसे लॉन्च करें?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

आपके सिस्टम में Steam गेम या Lutris लाइब्रेरी इंस्टॉल होनी चाहिए, फिर यह कमांड चलाएं:

`~/.config/hypr/scripts/gamelauncher.sh <n>`
यहाँ n स्टाइल नंबर है \[1-4]

</details>

### ऐप लॉन्चर में इसे कैसे लॉन्च करें?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

यह कमांड चलाकर `.desktop` फाइल खोजें:
`find /usr/share/applications -name '*code.desktop'`

फिर हर एप्लिकेशन की `.desktop` फाइल को कॉपी करें और एडिट करें:
`~/.local/share/applications/`

`Exec =` वाली लाइन में जरूरी फ्लैग्स जोड़ें।

यहाँ [Arch Wiki](https://wiki.archlinux.org/title/Desktop_entries) है `.desktop` एंट्रीज के बारे में।

</details>

### Xwayland(👹)

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

इस बारे में विस्तार से जानने के लिए [Hyprland Wiki](https://wiki.hyprland.org) देखें।

[XWayland](https://wiki.hyprland.org/Configuring/XWayland/)
ध्यान दें, अगर कोई ऐप्लिकेशन Wayland सपोर्ट नहीं करता, तो HyDE, Hyprland या Wayland इसे जादुई तरीके से ठीक नहीं कर सकते। इसे इशू के रूप में रिपोर्ट न करें, बल्कि [Discussion panel](https://github.com/HyDE-Project/Hyde-cli) में मदद के लिए प्रश्न पूछें।

**जानी-मानी समस्याएं:**

* Rofi कॉन्फिग में कुछ स्केलिंग इशू, क्योंकि ये मेरे अल्ट्रावाइड (21:9) डिस्प्ले के लिए बनाए गए हैं।
* रैंडम लॉकस्क्रीन क्रैश: [https://github.com/swaywm/sway/issues/7046](https://github.com/swaywm/sway/issues/7046)
* वेयबार से रोफी लॉन्च करने पर माउस इनपुट टूट जाता है (वर्कअराउंड के लिए sleep 0.1 जोड़ा गया): [https://github.com/Alexays/Waybar/issues/1850](https://github.com/Alexays/Waybar/issues/1850)
* Flatpak QT ऐप सिस्टम थीम का पालन नहीं करते

</details>

### SDDM पर "Login failed!" लूप?

<details>
<summary>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</summary>

अगर आपका यूजर नाम (या लॉगिन नाम) कैपिटल लेटर या स्पेशल कैरेक्टर शामिल करता है, तो आपको SDDM थीम को एडिट करना होगा ताकि लॉगिन हो सके।

इस तरह करें:

1. SDDM स्क्रीन पर `Ctrl + Alt + F6` दबाकर एक tty खोलें
2. उस अकाउंट से लॉगिन करें जिसमें समस्या है
3. `nano usr/share/sddm/themes/[theme name]/theme.conf` खोलें
4. `AllowBadUsername` पैरामीटर खोजें और इसे true सेट करें
5. रिबूट करें

अगर अब भी लॉगिन नहीं हो रहा, तो उसी फाइल में `AllowEmptyPassword` को true करें, रिबूट करें, पासवर्ड डालकर लॉगिन करें, फिर लॉगिन के बाद इसे फिर से false कर दें।

यहाँ [GitHub Issue](https://github.com/HyDE-Project/HyDE/issues/404) है इस समस्या के बारे में।

</details>
