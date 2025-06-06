---
title: अपडेट करना
description: HyDE डॉटफाइल्स प्रबंधन गाइड
---

## स्वचालित

HyDE को अपडेट करने के लिए, आपको GitHub से नवीनतम परिवर्तन पुल करने होंगे और निम्नलिखित कमांड चलाकर कॉन्फ़िग पुनर्स्थापित करनी होगी:

```shell
cd ~/HyDE/Scripts
git pull origin master
./install.sh -r
```

:::note

यदि आपके द्वारा की गई कोई कॉन्फ़िग `Scripts/restore_cfg.psv` में सूचीबद्ध है, तो उसे **ओवरराइट** किया जाएगा।  
हालाँकि, सभी प्रतिस्थापित कॉन्फ़िग्स का बैकअप `~/.config/cfg_backups` में लिया जाता है और वहाँ से पुनर्प्राप्त किया जा सकता है।  
अधिक जानकारी के लिए देखें: [कॉन्फ़िग पुनर्स्थापन](/hyde/installation/restore/)

:::

## चरणबद्ध और मैनुअल अपडेट्स

ऊपर दिए गए कमांड के अलावा, आप [Scripts/restore_cfg.psv](https://github.com/HyDE-Project/HyDE/blob/master/Scripts/restore_cfg.psv) फ़ाइल को संपादित कर सकते हैं।  
इस फ़ाइल में ही प्रलेखन मौजूद है।

साथ ही यह भी देखें: [यह दस्तावेज़](../resources/restore.md)

### केवल डॉटफाइल्स अपडेट करना

:::note

> "restore" का मतलब यहाँ रेपो से आपके `$HOME` में डॉटफाइल्स को पुनर्स्थापित करना है, न कि विपरीत दिशा में।

```sh
./restore_cfg.sh </path/to/file.psv> <optional /path/to/hyde/clone>
```

:::

<details>
<summary>कुछ इस तरह से</summary>

```sh
cd ~/HyDE/Scripts
./restore_cfg.sh ./restore_cfg.psv
```

</details>