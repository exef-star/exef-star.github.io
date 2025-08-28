---
title: Tkinter扩展Tix和PMW
type: Python
tags:
  - Python
  - Tkinter扩展
categories: Tkinter               # 分类
description: Tkinter中不为人知的冷门扩展  # 描述
top_img: https://pic.imgdb.cn/item/6676ad14d9c307b7e9aaa594.jpg # 顶部背景图
cover: https://pic.imgdb.cn/item/6676ad14d9c307b7e9aaa594.jpg   # 文章封面
abbrlink: 27934
date: 2024-06-23 12:24:31
---

# 序言

今天在房间收拾的时候（不是自愿的qwq）找到了一本很厚的大书，打开一看是我小学六年级的时候买的，当时看到里面密密麻麻的文字后~~果断放在角落里吃灰~~，这次翻到了GUI编程那一章，觉得还挺有趣的，就把它拿出来讲一下

# Tix

Tix是Tcl/Tk的一个扩展库，它添加了许多新的控件、图像类型以及其他可以使Tk作为一个GUI开发工具包的命令。这里用一段代码演示一下

```python
import tkinter as tk  # 导入Tkinter
import tkinter.ttk as ttk  # 导入Tkinter.ttk
from tkinter.constants import *  # 导入Tkinter常量，例如 SUNKEN
 
root = tk.Tk()  # 创建Tk主窗口
 
width = 300  # 窗口宽度（像素）
height = 200  # 窗口高度（像素）
x, y = 150, 250  # 屏幕上窗口的位置坐标
root.geometry('{}x{}+{}+{}'.format(width, height, x, y))  # 设置窗口的位置和大小
root.title("布局演示")
 
la = tk.Label(root, text='aaa', relief=SUNKEN, bd=1)
la.place(x=50, y=50)  # 使用place方法定位
 
lb = ttk.Label(root, text='bbb')
lb.place(x=50, y=100)  # 使用place方法定位
 
# 对于tix.Label的实例lc，因为原来使用的是form布局，我们需要使用其他布局管理器如place来代替
lc = tk.Label(root, text='ccc', relief=SUNKEN, bd=1)
lc.place(relx=0.5, rely=0.3)  # 使用place方法定位，相对位置（窗口宽度和高度的百分比）
 
ld = tk.Label(root, text='ddd', relief=SUNKEN, bd=1)
ld.place(relx=0.5, y=130)  # 使用place方法定位，相对x位置和绝对y位置
 
le = tk.Label(root, text='eee', relief=SUNKEN, bd=1)
le.place(x=lc.winfo_x(), rely=0.3)  # 使用place方法定位，基于lc的x坐标和相对y位置
 
root.mainloop()  # 开启tk主循环
```

![效果图](https://pic.imgdb.cn/item/6677adf9d9c307b7e9446c30.png)

# PMW

```python
from tkinter import *
import pwn
root = Tk()

from tkinter.dialog import *
import tkinter.messagebox as msg


def calc(a, b):
    # dlg = Pmw.Dialog(root, buttons=("Ok",), defaultbutton="Ok")
    # Label(dlg.interior(), text="%d" % (a*b)).pack()
    Dialog(None, title="answer", text="%d" % (a*b), strings=("Ok",), default=0, bitmap=DIALOG_ICON)
    # msg.showinfo("answer", "%d" % (a*b))


sf = Pmw.ScrolledFrame(root, labelpos=N, label_text="Scrolled Frame", hull_width=300, hull_height=200,
                       usehullsize=1, borderframe=1)
f = sf.interior()
sf.pack()
for i in range(9):
    fm = Frame(f)
    fm.pack(anchor=NW)
    y = i+1
    for j in range(y):
        btn = Button(fm, text="%d x %d" % (i+1, j+1), bg="moccasin", borderwidth=1, command=lambda a=i+1, b=j+1: calc(a, b))
        btn.pack(side=LEFT)
sf.component("frame").configure(bg="linen")
root.mainloop()
```

![效果图](https://pic.imgdb.cn/item/6677bb71d9c307b7e95da44c.png)

# 插曲

> 使用阿里云PYPI下载PMW，类似如下报错

```bash
PS C:\Users\Admin> pip install Pmw
Looking in indexes: https://mirrors.aliyun.com/pypi/simple
WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', FileNotFoundError(2, 'No such file or directory'))': /pypi/simple/pmw/
WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', FileNotFoundError(2, 'No such file or directory'))': /pypi/simple/pmw/
WARNING: Retrying (Retry(total=2, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', FileNotFoundError(2, 'No such file or directory'))': /pypi/simple/pmw/
WARNING: Retrying (Retry(total=1, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', FileNotFoundError(2, 'No such file or directory'))': /pypi/simple/pmw/
WARNING: Retrying (Retry(total=0, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', FileNotFoundError(2, 'No such file or directory'))': /pypi/simple/pmw/
ERROR: Could not find a version that satisfies the requirement Pmw (from versions: none)
```

# 解决办法

开加速器就行，直接关掉就可以了

不知道为什么，阿里云首页可以开科学上网访问到，但是他的PYPI不行