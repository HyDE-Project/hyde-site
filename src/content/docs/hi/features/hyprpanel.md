---

title: हाइपरपैनल
description: हाइपरपैनल वॉलबैश टेम्पलेट

---

![241005\_14h24m09s\_screenshot](https://github.com/user-attachments/assets/355aa7f0-856b-47f6-8ced-58bc0c4a3481)
![241005\_14h26m11s\_screenshot](https://github.com/user-attachments/assets/e7551bec-573c-4d37-91b9-de9400176cac)
![241005\_14h19m51s\_screenshot](https://github.com/user-attachments/assets/11f40837-08fe-4979-b16e-b1d0a6fd4fcd)

### हाइपरपैनल के लिए वॉलबैश टेम्पलेट

यह टेम्पलेट **HyprPanel** के साथ उपयोग के लिए डिज़ाइन किया गया है। अधिक जानकारी के लिए देखें: [HyprPanel](https://hyprpanel.com/)।

> **नोट:** यह एक स्वतंत्र पैकेज नहीं है। कृपया सुनिश्चित करें कि आपने **HyDe** इंस्टॉल किया है और आपका **HyprPanel** ठीक से सेटअप किया गया है।

## उपयोग विधि

[**/hyprpanel.dcol**](https://github.com/HyDE-Project/HyprPanel/blob/3f20c8922d7c3547688a2b16eb74846170a9f224/hyprpanel.dcol) फ़ाइल को निम्न स्थानों में से किसी एक पर जोड़ें:

* `~/.config/hyde/wallbash/Wall-Ways`
* `~/.config/hyde/wallbash/Wall-Dcol`

### Wall-Ways और Wall-Dcol में अंतर

* **Wall-Ways**: यह फ़ाइल हमेशा उपयोग होती है, चाहे कोई भी थीम मोड या वॉलबैश मोड सक्रिय हो।
* **Wall-Dcol**: यह फ़ाइल पहले थीम टेम्पलेट खोजने का प्रयास करती है (यदि थीम मोड में हैं), और यदि टेम्पलेट उपलब्ध नहीं है तो वॉलपेपर के डोमिनेंट कलर का उपयोग करती है।

### इस टेम्पलेट को थीम्स के लिए उपयोग करना

1. **हेडर लाइन**:

   ```sh
   ${cacheDir}/landing/hyprpanel_wallbash.json | ags -r "useTheme('${cacheDir}/landing/hyprpanel_wallbash.json')"
   ```

   यह कमांड कैश किए गए वॉलबैश जनरेटेड `.json` फ़ाइल से थीम सेट करता है।
   `$cacheDir` का पथ होता है: `~/.cache/hyde/`

2. **वॉलबैश जनरेशन**:

   ```sh
   ${cacheDir}/landing/hyprpanel_wallbash.json
   ```

   यह कमांड वॉलबैश `.json` फ़ाइल को जनरेट करता है।

3. **वैकल्पिक कमांड**:

   ```sh
   ags -r "useTheme('${cacheDir}/landing/hyprpanel_wallbash.json')"
   ```

   यह कमांड कैश की गई `.json` फ़ाइल का उपयोग करके थीम को लागू करता है।