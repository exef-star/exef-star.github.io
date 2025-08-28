---
title: '[Python]使用Python生成属于你的网站二维码！'
type: Python
tags:
  - Python
  - 前端小玩意
categories: Python
description: 运用Python中的MyQR库来生成属于你的网站二维码！
top_img: 'https://i.p-i.vip/68/20241215-675e9ed437563.png'
cover: 'https://i.p-i.vip/68/20241215-675e9ed437563.png'
abbrlink: a3aa
date: 2024-08-15 20:33:48
---

# 序言
在网上想学习Python，学着学着想着生成个二维码玩一下，就在搜索引擎上面搜到了这个：`MyQR`
这个二维码的目的就是让手机端的用户能够访问到我的博客，{% psw 虽然我的博客大部分时间都访问不了 %}
{% link https://pypi.org/project/MyQR/, https://pypi.org/project/MyQR/, https://s1.imagehub.cc/images/2024/08/15/e1d11c730eed5ebecb2c7cdc0be8d47e.th.jpg %}
生成出来的二维码是这样的
![63e1a3465fdd9x5t qrcode](https://s1.imagehub.cc/images/2024/08/15/e3da6e7b0b5823d08b0a33e800be02a0.md.gif)
当然如果你想骚一点点的话也可以吧动图给改一下
![3976a1faa8631d060d58b6577c28e6d1](https://s1.imagehub.cc/images/2024/08/15/d54530bbc2b984f73a0ba074d4f26c36.md.gif)
![1372447457 5d783d903900a](https://s1.imagehub.cc/images/2024/08/15/d50d3f64510239c68598b0a6897920ea.md.webp)

# 教程
## 安装
### 通过pip安装
1. 如果你的`Python`安装了环境变量，那你就可以通过以下`pip`指令安装`MyQR`
```bash
pip install myqr
```
2. 如果你只想给另一个`Python`安装插件，那么可以找到`Python`的安装路径，然后选择`Script`文件夹，打开拖动`pip3.exe`拖进`cmd`，在后面补上`install myqr`。
3. 之后就在cmd窗口输入指令吧
## 使用
### 单QR二维码（无任何装饰）
格式为`myqr` + `你的网站域名（带https://）` + `-v` + `一个空格` + `1~50`
示例：
```bash
myqr https://exef-star.github.io -v 10
```

效果：
![xqdbqydyewfbdawrfjwu](https://s1.imagehub.cc/images/2024/08/15/c28c91699c0cbe8942793548d37512d7.png)

### 图片背景二维码

格式为`myqr` + `你的网站域名（带https://）` + `-p` + `同文件夹的图片文件` + `-c`
示例：
```bash
myqr https://exef-star.github.io -v 10 -p example.gif -c
```

这里如果你要可爱风的话可以像我一样搞个咖波猫猫虫一样的动图二维码
当然如果你想沿着搞怪风的话，{% psw 你也可以弄来生瓜蛋子的图片或者鸽鸽打篮球的图片 %}。
效果：
![jsgvtsfshgjvjhhbjvtrsdred](https://s1.imagehub.cc/images/2024/08/15/e3da6e7b0b5823d08b0a33e800be02a0.gif)

### 参数头示例

| 参数头 | 释义                                                                              |
| ------ | --------------------------------------------------------------------------------- |
| -v     | 代表Version，数值在1~40之间，数值越大则生成耗费时间更多，精细度也会更大。         |
| -p     | 代表Picture，在该参数头空一格并填上当前目录文件夹图片名称（仅限jpg、png、gif）    |
| -c     | 代表Color，加此参数头代表二维码背景将会呈现彩色，不加则二维码图片背景呈现灰白色， |
| -n     | 代表Name，在该参数头后空一格填上`名字`+`.后缀名（取决于背景图片文件的后缀名）`    |