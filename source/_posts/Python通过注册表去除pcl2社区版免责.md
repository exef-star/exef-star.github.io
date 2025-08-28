---
title: Python通过注册表去除pcl2社区版免责
tags: Python
categories: Python
description: 用Python往注册表里添加注册表项去除PCL2社区版免责声明
top_img: 'https://i.p-i.vip/68/20250413-67fb022917cfd.webp'
cover: 'https://i.p-i.vip/68/20250413-67fb022917cfd.webp'
abbrlink: b0f2
date: 2025-04-12 15:28:26
---

# 前言

PCL2社区版是一个PCL2下游的分支启动器版本，添加了一些{% psw 龙猫不想加的和加不了的 %}，在Github上对于字体修改的意见，龙猫明确的表示现有的渲染实现不了，但是！社区版做到了，并且实测下来字体显示还是挺舒服的。
但唯一的缺点就是每次启动的时候都要弹出免责声明，并且在启动的页面还有一个免责声明小卡片。虽然可以去翻注册表改一下，但是一般情况下你可能会找不到注册表然后给电脑改废。

所以，有没有什么办法可以自动修改注册表，去除免责声明呢？

这就是为什么会有这篇文章的原因，最后我也会将源代码编译为exe文件放在文章的末尾，方便大家使用。

# 解决方案
代码如下，加上注释和空格只有21行：

```python
import winreg

def set_registry_string_value(hive, key_path, value_name, value):
    try:
        # 打开或创建注册表项
        key = winreg.OpenKey(hive, key_path, 0, winreg.KEY_SET_VALUE | winreg.KEY_CREATE_SUB_KEY)
        # 设置字符串值
        winreg.SetValueEx(key, value_name, 0, winreg.REG_SZ, value)
        # 关闭注册表项
        winreg.CloseKey(key)
        print(f"成功在注册表路径 {key_path} 下添加字符串值 {value_name}，值为 {value}")
    except Exception as e:
        # 出错时打印错误信息
        print(f"在注册表中添加字符串值时出错: {e}")
# 变量设置
hive = winreg.HKEY_CURRENT_USER # 注册表根项，指当前的用户注册表信息
key_path = r"SOFTWARE\PCLCE" # 注册表项路径
value_name = "UiLauncherCEHint" # 需要添加的注册表项
value = "False" # 需要往注册表项里添加的值

set_registry_string_value(hive, key_path, value_name, value) # 调用函数
```

# 代码说明
## 导入模块

```python
import winreg
```

## 定义函数

```python
def set_registry_string_value(hive, key_path, value_name, value):
    try:
        # 打开或创建注册表项
        key = winreg.OpenKey(hive, key_path, 0, winreg.KEY_SET_VALUE | winreg.KEY_CREATE_SUB_KEY)
        # 设置字符串值
        winreg.SetValueEx(key, value_name, 0, winreg.REG_SZ, value)
        # 关闭注册表项
        winreg.CloseKey(key)
        print(f"成功在注册表路径 {key_path} 下添加字符串值 {value_name}，值为 {value}")
    except Exception as e:
        # 出错时打印错误信息
        print(f"在注册表中添加字符串值时出错: {e}")
```

我们先看到这一行：

```python
key = winreg.OpenKey(hive, key_path, 0, winreg.KEY_SET_VALUE | winreg.KEY_CREATE_SUB_KEY)
```
这里主要使用了winreg模块的`KEY_SET_VALUE`函数打开注册表项（主要用于检测是否有`UiLauncherCEHint`这一项），如果没有的话，就直接调用`KEY_CREATE_SUB_KEY`这一个函数。以此来设置`key`这个值。

然后我们设置字符串值：

```python
winreg.SetValueEx(key, value_name, 0, winreg.REG_SZ, value)
```
这里使用了`SetValueEx`函数，一共有`key`、`value_name`、`value`三个变量、其中`value_name`、`value`两个变量是我们待会要设置的，先不要急，因为这是函数，所以如果你不调用它，一般不会执行，可以后面设置。

那么最后就是关闭注册表项并输出一下：

```python
winreg.CloseKey(key)
print(f"成功在注册表路径 {key_path} 下添加字符串值 {value_name}，值为 {value}")
```

这里主要用了`CloseKey`函数关闭注册表项，然后打印一下`key_path`、`value_name`、`value`这三个变量。

## 变量设置

```python
hive = winreg.HKEY_CURRENT_USER # 注册表根项，指当前的用户注册表信息
key_path = r"SOFTWARE\PCLCE" # 注册表项路径
value_name = "UiLauncherCEHint" # 需要添加的注册表项
value = "False" # 需要往注册表项里添加的值
```
这里单独拎出来每个变量解释一下：

- `hive`：注册表根项，指当前的用户注册表信息，这里我们使用`HKEY_CURRENT_USER`这个常量，这是PCL2社区版在注册表里注册的根目录。
- `key_path`：注册表项路径，这里我们使用`SOFTWARE\PCLCE`这个路径，这是PCL2社区版在注册表里注册的路径。加上`r`是因为我们的目录里存在反斜杠，如果不加就会被识别为转义字符，所以需要加上`r`来表示这是原始字符串。让Python正常输出。
- `value_name`：需要添加的注册表项，这里我们使用`UiLauncherCEHint`这个值，这是PCL2社区版在注册表里隐藏声明的键值。在社区版的README里可以找到。
- `value`：需要往注册表项里添加的值，这里我们使用`False`这个值，这是PCL2社区版在注册表里隐藏声明的键值对应的真值。在社区版的README里也可以找到。

## 调用函数

```python
set_registry_string_value(hive, key_path, value_name, value) # 调用函数
```
这个地方就没什么好说的，简单的调用函数，把变量传进去。

## 编译文件
压缩包里有一份可执行程序的文件和一份源代码，不放心的话可以自己检查编译代码

{% link PCL2_CE_Hint.rar, 蓝奏云, https://wwqo.lanzouo.com/iPamT2tghfpa, https://i.p-i.vip/68/20250323-67dfca286f340.png %}

# 运行结果
![](https://i.p-i.vip/68/20250413-67fb17a500d22.webp)
![](https://i.p-i.vip/68/20250413-67fb179f5071a.webp)
![](https://i.p-i.vip/68/20250413-67fb17a211f3c.webp)
![](https://i.p-i.vip/68/20250413-67fb17a35a997.webp)
![](https://i.p-i.vip/68/20250413-67fb17a0b499e.webp)
![](https://i.p-i.vip/68/20250413-67fb1a58700c3.webp)
## 后记

本质上这其实就是一个注册表注册程序，只不过修改为了社区版的注册键值，不过也算是认识了一个新的库。
软件已经运行过了，可以正常使用，祝大家玩得开心ο(=•ω＜=)ρ⌒☆