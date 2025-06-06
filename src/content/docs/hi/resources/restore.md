---

title: कॉन्फ़िगरेशन पुनर्स्थापित करें
description: पुनर्स्थापना स्क्रिप्ट का लॉजिक

---

## पाइप सेपरेटेड वैल्यूज़ (PSV)

यह एक पाइप (`|`) से अलग की गई वैल्यू फाइल है। इसमें डॉटफाइल्स के पाथ और उनके संबंधित पैकेज डिपेंडेंसीज़ शामिल हैं।

#### नोट:

* `#` से शुरू होने वाली लाइने टिप्पणी (comments) होती हैं।
* ज्ञात एकमात्र वैरिएबल `${HOME}` है।
* यह 4 कॉलम वाली फ़ाइल है, जिनके बीच `|` से विभाजन होता है।
* प्रत्येक कॉलम में array तत्वों को स्पेस से अलग किया जाना चाहिए।

#### संरचना:

```shell
flag|path|target|dependency
```

#### फ्लैग्स:

* **( P ) Populate/Preserved**

  * यह फ्लैग सुनिश्चित करता है कि लक्ष्य केवल तभी कॉपी किया जाए जब वह पहले से मौजूद न हो।
  * यह मौजूदा फाइल या डायरेक्टरी को ओवरराइट या मॉडिफाई होने से बचाता है।

* **( S ) Sync**

  * यदि लक्ष्य फ़ाइल/फ़ाइलें मौजूद हों, तो उन्हें ओवरराइट करें।
  * यदि लक्ष्य डायरेक्टरी हो, तो केवल सूचीबद्ध फाइलों को ओवरराइट करें।
  * लक्ष्य डायरेक्टरी में जिन फाइलों का उल्लेख नहीं है, उन्हें बरकरार रखें।
  * यह व्यवहार `cp -r` कमांड के समान है।

* **( O ) Overwrite**

  * यह फ्लैग एक आक्रामक सिंक ऑपरेशन करता है। स्रोत से लक्ष्य को पूरी तरह से रिप्लेस करता है।
  * यदि लक्ष्य डायरेक्टरी है, तो उसकी हर फाइल और सबडायरेक्टरी को स्रोत की समान आइटम से ओवरराइट करता है।
  * यदि लक्ष्य फाइल है, तो उसे पूरी तरह स्रोत फाइल से ओवरराइट करता है।
  * यह ऑपरेशन लक्ष्य स्थान की कोई भी मौजूदा फाइल या डायरेक्टरी नहीं बचाता, सब कुछ रिप्लेस कर देता है।
  * कोर कॉन्फ़िगरेशन और स्क्रिप्ट्स को अपडेट करने के लिए उपयोगी।

* **( B ) Backup**

  * लक्ष्य का बैकअप बनाएं।
  * P, S, O फ्लैग्स के साथ भी लक्ष्य फाइल/डायरेक्टरी का बैकअप लिया जाएगा।

<details>
<summary>PSV फ़ाइल का उदाहरण</summary>

```shell
 Hyde कोर फाइलें 
P|${HOME}/.config/hyde|config.toml|hyprland
P|${HOME}/.config/hypr|hyde.conf animations.conf windowrules.conf keybindings.conf userprefs.conf monitors.conf|hyprland
P|${HOME}/.config/hypr|nvidia.conf|hyprland nvidia-utils
P|${HOME}/.config/hypr/themes|theme.conf wallbash.conf colors.conf|hyprland
P|${HOME}/.local/state|hyde|hyprland

S|${HOME}/.config/hypr|hyprland.conf|hyprland
S|${HOME}/.local|bin|hyprland
S|${HOME}/.config|gtk-3.0|nwg-look
S|${HOME}/.config|nwg-look|nwg-look
S|${HOME}/.config|xsettingsd|nwg-look
S|${HOME}|.gtkrc-2.0|nwg-look
S|${HOME}/.config|Kvantum|kvantum
S|${HOME}/.config|qt5ct|qt5ct
S|${HOME}/.config|qt6ct|qt6ct
S|${HOME}/.config/hyde|wallbash|hyprland
S|${HOME}/.config/hypr|animations|hyprland

O|${HOME}/.local/share|hyde|hyprland
O|${HOME}/.local/lib|hyde|hyprland

 एडिटर 
P|${HOME}/.config/Code - OSS/User|settings.json|code
P|${HOME}/.config/Code/User|settings.json|visual-studio-code-bin
P|${HOME}/.config/VSCodium/User|settings.json|vscodium-bin

 बार 
P|${HOME}/.config/waybar|config.ctl|waybar
S|${HOME}/.config/waybar|modules config.jsonc theme.css style.css|waybar

 टर्मिनल 
P|${HOME}/.config|lsd|lsd
S|${HOME}/.config|fastfetch|fastfetch
S|${HOME}/.config/kitty|hyde.conf theme.conf|kitty
P|${HOME}/.config/kitty|kitty.conf|kitty

 शेल 
P|${HOME}/.config|fish|fish
P|${HOME}|.zshrc .hyde.zshrc .p10k.zsh|zsh zsh-theme-powerlevel10k pokego-bin
S|${HOME}|.zshenv|zsh zsh-theme-powerlevel10k

 फाइल एक्सप्लोरर 
P|${HOME}/.local/state|dolphinstaterc|dolphin
P|${HOME}/.config|baloofilerc|dolphin
S|${HOME}/.config/menus|applications.menu|dolphin
S|${HOME}/.config|dolphinrc|dolphin
S|${HOME}/.config|kdeglobals|dolphin
S|${HOME}/.local/share/kio/servicemenus|hydewallpaper.desktop|dolphin
S|${HOME}/.local/share/kxmlgui5|dolphin|dolphin
S|${HOME}/.local/share|dolphin|dolphin

 इनपुट 
P|${HOME}/.config|libinput-gestures.conf|libinput-gestures

 वेइलैंड 
P|${HOME}/.config|spotify-flags.conf|spotify
P|${HOME}/.config|code-flags.conf|code
P|${HOME}/.config|code-flags.conf|visual-studio-code-bin
P|${HOME}/.config|vscodium-flags.conf|vscodium-bin
P|${HOME}/.config|electron-flags.conf|electron

 नोटिफिकेशंस 
S|${HOME}/.config|dunst|dunst

 गेमिंग 
S|${HOME}/.config|MangoHud|mangohud

 लॉन्चर 
S|${HOME}/.config|rofi|rofi
S|${HOME}/.config|wlogout|wlogout

 लॉक स्क्रीन 
S|${HOME}/.config|swaylock|swaylock-effects
P|${HOME}/.config/hypr|hyprlock.conf|hyprlock
S|${HOME}/.config/hypr|hyprlock|hyprlock

 आइडल डेमन 
P|${HOME}/.config/hypr|hypridle.conf|hypridle
```

</details>

## TOML कॉन्फ़िगरेशन

🚧 🚧 कार्य प्रगति पर 🚧 🚧

PSV कॉन्फ़िगरेशन फ़ाइल स्क्रिप्ट के लिए पढ़ने और लिखने में सुविधाजनक है। हालांकि, यह बहुत सीमित और उपयोगकर्ता-अनुकूल नहीं है।
अधिक कस्टमाइज़ेशन के लिए, हम TOML कॉन्फ़िगरेशन फ़ाइलों का उपयोग कर सकते हैं।

...