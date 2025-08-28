---
title: 局域网共享文件！chfsgui.exe使用教程
tags:
  - 文件共享
  - 跨平台
categories: 文件共享程序
description: 介绍一下在网页端和PC端使用CuteHttpFileServer的chfsgui
top_img: 'https://i.p-i.vip/68/20241215-675ea52902e75.png'
cover: 'https://i.p-i.vip/68/20241215-675ea52902e75.png'
abbrlink: 816d
date: 2024-12-06 21:43:14
---

# 前言

不知道大家有没有遇到给朋友分享模组的情况，反正我是遇到了。
我的朋友和我一样下载好了Minecraft，来到了我家，说我要怎么把模组分享给他。
{% psw U盘给空调师傅维修了 %}，这时候又不想给他发一堆模组，只想把模组放在网页端，让他自己下载。
这时候就得翻一下神奇的文件夹了——

{% span center logo large, Cute HTTP File Server %}

# 正文
## 服务端使用
`官网`：[http://iscute.cn/chfs](http://iscute.cn/chfs)
官网列表有很多文件，如果你和我一样是Windows10及以上系统的话又不知道下载哪个的可以用百度网盘下载：
{% link 百度网盘[chfsgui.exe], https://pan.baidu.com/s/1re8gn1iLF9lq4v_4Ewh2yg?pwd=oici, https://s1.imagehub.cc/images/2024/12/07/9abadbe23c3330012d53a4082937c3c5.png %}
记得下载的时候用下载器下载，建议用XDM，能破了百度的{% psw 人机限速 %}，而且下载速度快。

下载完之后，记得解压软件，然后双击运行`chfsgui.exe`，就会打开这个界面
![chfsgui.exe主界面](https://s1.imagehub.cc/images/2024/12/07/7cd76b6c4b153858c24bc9d8a6a6d31e.png)
1. 点击添加文件夹，选择你要共享的文件夹，然后点击确定。
2. 输入一个端口号，这个端口号是你要分享文件的端口号，别人要访问你的文件的时候，就用这个端口号。最好不要超过四位数，建议用`1111`这个端口号，启动不了服务多半是这个局域网内的端口被某个程序占用了。
3. 点击最上面的启动按钮，就会启动服务端，如下图所示：
![chfsgui.exe启动服务端](https://s1.imagehub.cc/images/2024/12/07/513764e3ec7a9766e57db5e98187f99c.png)
按下{% kbd Ctrl %} + {% kbd 鼠标左键点击 %}，点击输出的绿字，就会打开游览器当前的局域网地址，如下图所示：
![chfsgui.exe局域网地址](https://s1.imagehub.cc/images/2024/12/07/cb8a221315eb0616bab0b887ea6d74c6.png)
## 客户端使用
- 建议将模组用一个文件夹整合起来，朋友可以直接下载这个文件夹再放进去。
- 直接点超链接就可以下载，下载情况看宽带网速最大上限。