---
title: git问题
icon: material-symbols:error
order: 2
category:
  - git报错
tag:
  - git
---

git 报错 fatal: unable to access 'https://github.com/zisgood/zisgood.github.io.git/': SSL certificate problem: unable to get local issuer certificate

用谷歌搜索了一下，发现说这个错误并不重要是系统证书的问题，系统判断到这个行为会造成不良影响，所以进行了阻止，只要设置跳过SSL证书验证就可以了

那么用命令 ： 
```` git
git config --global http.sslVerify false
````
