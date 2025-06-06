---
title: इंस्टॉलेशन
description: HyDE इंस्टॉलेशन गाइड
---

इंस्टॉलेशन स्क्रिप्ट को एक न्यूनतम [Arch Linux](https://wiki.archlinux.org/title/Arch_Linux) इंस्टॉल के लिए डिज़ाइन किया गया है, लेकिन यह कुछ [Arch-आधारित डिस्ट्रीब्यूशन्स](https://wiki.archlinux.org/title/Arch-based_distributions) पर भी **काम कर सकती है**।

HyDE को किसी अन्य [DE](https://wiki.archlinux.org/title/Desktop_environment)/[WM](https://wiki.archlinux.org/title/Window_manager) के साथ इंस्टॉल करना संभव है, लेकिन यह एक अत्यधिक कस्टमाइज़्ड सेटअप है, इसलिए यह आपके [GTK](https://wiki.archlinux.org/title/GTK)/[Qt](https://wiki.archlinux.org/title/Qt) थीमिंग, [Shell](https://wiki.archlinux.org/title/Command-line_shell), [SDDM](https://wiki.archlinux.org/title/SDDM), [GRUB](https://wiki.archlinux.org/title/GRUB) आदि के साथ **कंफ्लिक्ट** कर सकता है। कृपया अपने जोखिम पर आगे बढ़ें।

NixOS समर्थन के लिए एक अलग प्रोजेक्ट [Hydenix](https://github.com/richen604/hydenix/tree/main) पर मेंटेन किया जा रहा है।

:::note

इंस्टॉल स्क्रिप्ट आपके सिस्टम में NVIDIA कार्ड को स्वचालित रूप से पहचानकर आपके कर्नेल के लिए `nvidia-dkms` ड्राइवर इंस्टॉल करता है।  
कृपया सुनिश्चित करें कि आपका NVIDIA कार्ड [यहाँ](https://wiki.archlinux.org/title/NVIDIA) दी गई सूची में dkms ड्राइवर को सपोर्ट करता है।

:::

:::danger

यह स्क्रिप्ट आपके `grub` या `systemd-boot` कॉन्फ़िग को NVIDIA DRM सक्षम करने के लिए संशोधित करता है।

:::

### स्वचालित इंस्टॉलेशन स्क्रिप्ट

```shell
pacman -S --needed git base-devel
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
./install.sh
```

:::tip
आप `Scripts/pkg_user.lst` फ़ाइल में कोई भी अतिरिक्त ऐप जोड़ सकते हैं जिन्हें आप HyDE के साथ इंस्टॉल करना चाहते हैं और फिर इस फ़ाइल को पैरामीटर की तरह स्क्रिप्ट को दे सकते हैं:

```shell
./install.sh pkg_user.lst
```

:::

:::note
आप `Scripts/pkg_extra.lst` से अपनी सूची का संदर्भ ले सकते हैं  
या फिर यदि आप सभी अतिरिक्त पैकेज इंस्टॉल करना चाहते हैं, तो `cp Scripts/pkg_extra.lst Scripts/pkg_user.lst` कर सकते हैं।
:::

### चरणबद्ध और मैनुअल इंस्टॉलेशन

#### क्लोन करें

रेपो को क्लोन करें और स्क्रिप्ट डायरेक्टरी में जाएँ।  
सुनिश्चित करें कि उपयोगकर्ता को क्लोन डायरेक्टरी में [w]राइट और [x]एक्सिक्यूट अनुमति है।

```shell
pacman -Sy git
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
cd ~/HyDE/Scripts
```

:::caution
**कभी भी** स्क्रिप्ट को `sudo` या रूट उपयोगकर्ता के रूप में निष्पादित **न करें**!
:::

#### मोड्स

इंस्टॉल स्क्रिप्ट विभिन्न मोड में चलाई जा सकती है:

- डिफ़ॉल्ट पूरी Hyprland इंस्टॉलेशन (कॉन्फ़िग्स सहित) के लिए:

```shell
./install.sh
```

- पूरी या न्यून Hyprland इंस्टॉलेशन + आपकी पसंद के पैकेज (जैसे `pkg_user.lst`):

```shell
./install.sh pkg_user.lst # पूर्ण इंस्टॉल pkg_core.lst + pkg_user.lst कॉन्फ़िग्स सहित
./install.sh -i pkg_user.lst # न्यून इंस्टॉल pkg_core.lst + pkg_user.lst बिना कॉन्फ़िग्स के
```

- प्रत्येक [सेक्शन](#process) को स्वतंत्र रूप से भी चलाया जा सकता है:

```shell
./install.sh -i    # न्यून इंस्टॉल, बिना कॉन्फ़िग्स
./install.sh -d    # न्यून इंस्टॉल, बिना कॉन्फ़िग्स, लेकिन (--noconfirm) के साथ
./install.sh -r    # केवल कॉन्फ़िग फ़ाइलों को पुनर्स्थापित करता है
./install.sh -s    # सिस्टम सेवाओं को शुरू और सक्षम करता है
./install.sh -t    # टेस्ट रन (dry run) करता है, बिना निष्पादन के
./install.sh -m    # थीम इंस्टॉलेशन को छोड़ता है
./install.sh -n    # NVIDIA इंस्टॉलेशन को छोड़ता है
./install.sh -irst # सभी के लिए टेस्ट रन
```

<!--  
:::note

> कृपया इंस्टॉल स्क्रिप्ट पूरा होने के बाद सिस्टम को रिबूट करें, यह आपको SDDM लॉगिन स्क्रीन (या ब्लैक स्क्रीन) पर ले जाएगा।
> :::
-->

