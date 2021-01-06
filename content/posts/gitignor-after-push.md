---
title: اعمال تغیرات فایل گیت ایگنور بعد از پوش کردن
slug: blog/gitignor-after-push
date: 2020-08-06
---



```console
 git rm -r --cached . 
 git add .
 git commit -m 'Removed all files that are in the .gitignore' 
 git push origin master
```