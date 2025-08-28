---
title: '[Python]配置Python+VSCode代码环境'
tags:
  - Python
  - VSCode
categories: Python
description: Python+VSCode代码环境配置
top_img: 'https://i.p-i.vip/68/20241215-675ea408168c6.png'
cover: 'https://i.p-i.vip/68/20241215-675ea408168c6.png'
abbrlink: 89c7
date: 2024-09-22 20:34:51
---

# 开始
## 安装Python
从[官方网站](https://www.python.org/downloads/)下载安装包，根据你的操作系统选择安装。
![9cab13b68b19a7a0b85425fb600a29c3.png](https://s1.imagehub.cc/images/2024/09/22/9cab13b68b19a7a0b85425fb600a29c3.png)
下载之后点击安装程序，记得吧`Add to PATH`勾选上，这样以后打开cmd或powershell就能直接输入`pip`命令了。点击`Install Now`开始安装。（这里需要管理员权限）
等进度条跑完了之后，会出现完成安装的提示，接下来就要`安装VSCode`了。

## 安装VSCode
从[官方网站](https://code.visualstudio.com/)下载安装包，根据你的操作系统选择安装。
![https://s1.imagehub.cc/images/2024/09/22/aaf3a2fa126d814de30e01004f884a60.png](https://s1.imagehub.cc/images/2024/09/22/aaf3a2fa126d814de30e01004f884a60.png)
点击`下载 Windows 版`，就会跳转到帮助文档页面，会自动下载安装包。下载完成后，双击安装程序，选择安装路径，再选择创建快捷方式，无脑下一步安装即可。

## 配置VSCode
打开VSCode，点击左下角的`扩展`图标，搜索`Python`关键字，安装`Python`插件。
![https://s1.imagehub.cc/images/2024/09/22/2fccb184ceb640089c5655a8933ebfd6.png](https://s1.imagehub.cc/images/2024/09/22/2fccb184ceb640089c5655a8933ebfd6.png)
这里由于是安装好的，所以就显示了三个按钮，然后回到编辑器，新建一个`text.py`文件，写入以下测试代码
```python
print("Hello, World!")
```
先别急着运行代码，先选好Python解释器，在右下角点击这个文字
![https://s1.imagehub.cc/images/2024/09/22/2243be6d3af79cd34529f8c0cacbbcb7.png](https://s1.imagehub.cc/images/2024/09/22/2243be6d3af79cd34529f8c0cacbbcb7.png)
在编辑器上方会弹出选择编译器的对话框，直接点击你安装的Python解释器
接下来按下{% kbd F5 %}键运行代码，会在下方弹出一个Powershell的窗口，输出文本，完成运行

> 下期预告：美化你的VSCode编辑器