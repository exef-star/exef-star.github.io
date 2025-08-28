---
title: 记一次让Python重复做一个工作-重复打印文本
tags: Python
type: Python
categories: Python
description: 讲述如何用Python拼接字符串
top_img: 'https://i.p-i.vip/68/20250126-67963c51cd3bb.webp'
cover: 'https://i.p-i.vip/68/20250126-67963c51cd3bb.webp'
abbrlink: ff9
date: 2025-01-29 19:04:04
---

# 自动化的开始

最近入坑Twikoo的评论系统，表情包的还好就是感觉少了一点点。就上其他的博客逛了一下，看见一个Twikoo的json表情包文件挺好的，还是感觉还不够，于是开始了自己的折腾

最初盯上了MC百科的表情包，选了几个搬到了json里，推到了仓库里，但是写说明文件甚是让人头疼：文件都呈有序编号，后面还要更上`.gif`，选完之后以防其他人看不懂，想着在每个表情包文件夹里放个`fileurl.txt`文件，每运行一次让两个字符和变量拼接一下，思路如下
1. 程序先定义一个变量的值
2. 让程序将字符以`字符`+`变量`+`字符`的形式拼接在一起，以弗雷顿表情包网址做例子，最大为61，就像这样：

> `https://www.mcmod.cn/ueditor/dialogs/emotion/images/G/0`+`i（变量）`+`.gif?v=1.1`
> 到了9这里还要把迁移字符串的最后一位`0`删掉，就像这样：
> `https://www.mcmod.cn/ueditor/dialogs/emotion/images/G/`+`i（变量）`+`.gif?v=1.1`

3. 让程序将代码输出到我们`事先（这里要提前创建一个和py文件同个目录的my_directory/fileurl.txt）`，并进行换行
4. 程序打印完后，我们再将打印完成的信息输出到控制台，大功告成！

思路有了之后，就可以开始开搞了

# 代码实现
水友们可以直接复制代码了，原理很简单，在下面会详细介绍

```python
# 定义文件路径和文件名
file_path = 'my_directory/fileurl.txt'

# 确保目录存在，如果不存在则创建目录
import os
if not os.path.exists('my_directory'):
    os.makedirs('my_directory')

with open(file_path, 'w', encoding='utf-8') as file:
    i = 1
    while i <= 9:
        # 使用 f-string 格式化字符串
        text_content = f"https://www.mcmod.cn/ueditor/dialogs/emotion/images/G/0{i}.gif?v=1.1"
        
        # 写入文本内容
        file.write(text_content + '\n')  # 每个 URL 后面添加换行符
        i += 1

    i = 10  # 重置 i 的值，使其从 10 开始
    while i <= 61:
        # 使用 f-string 格式化字符串
        text_content = f"https://www.mcmod.cn/ueditor/dialogs/emotion/images/G/{i}.gif?v=1.1"
        
        # 写入文本内容
        file.write(text_content + '\n')  # 每个 URL 后面添加换行符
        # 在这里加一，没达到，返回到循环开始，达到，下一步
        i += 1

# 打印完成信息
print(f"文件 {file_path} 已创建并写入内容。")
```

> 不要觉得`i = xx`可以删掉，如果删掉，你会得到一个几十万kb数据的txt文件，这里加`i = xx`的意思是限制文档出现的重复数据！

# 代码解析

## 匹配到你的文件

首先看到这里：

```python
# 定义文件路径和文件名
file_path = 'my_directory/fileurl.txt'

# 确保目录存在，如果不存在则创建目录
import os
if not os.path.exists('my_directory'):
    os.makedirs('my_directory')
```

`file_path`的作用就是指出你刚才在`my_directory`创建的`fileurl.txt`的路径，然后os模块会寻找你的my_directory文件夹是否存在，如果不存在，则创建文件夹。

## 打开并写入字符串

```python
with open(file_path, 'w', encoding='utf-8') as file:
    i = 1
    while i <= 9:
        # 使用 f-string 格式化字符串
        text_content = f"https://www.mcmod.cn/ueditor/dialogs/emotion/images/G/0{i}.gif?v=1.1"
        
        # 写入文本内容
        file.write(text_content + '\n')  # 每个 URL 后面添加换行符
        i += 1

    i = 10  # 重置 i 的值，使其从 10 开始
    while i <= 61:
        # 使用 f-string 格式化字符串
        text_content = f"https://www.mcmod.cn/ueditor/dialogs/emotion/images/G/{i}.gif?v=1.1"
        
        # 写入文本内容
        file.write(text_content + '\n')  # 每个 URL 后面添加换行符
        # 在这里加一，没达到，返回到循环开始，达到，下一步
        i += 1
```
这一部分的`i = 1`部分和`i = 10`部分都是同样的代码，只不过参数和字符串改了一下，如何去写入开头的部分，如下：

```python
# 使用 f-string 格式化字符串
text_content = f"https://www.mcmod.cn/ueditor/dialogs/emotion/images/G/0{i}.gif?v=1.1"

# 写入文本内容
file.write(text_content + '\n')  # 每个 URL 后面添加换行符
```
主题是先用`text_connect`控制要输出的文本内容，再用Write函数进行输出，最后加上换行符。
后面的`i += 1`则是让下一次的循环的变量比上一次的变量大一，然后就回到了循环的开头，一直持续到`i = 9`
后面的也是同样的，只不过改成了61而已

## 打印完成信息

```python
# 打印完成信息
print(f"文件 {file_path} 已创建并写入内容。")
```
其中的`file_path`对应着上面的`file_path`，这里只是打印一下完成信息，方便你知道然后跑去查看是否打印成功而已。
到这里就大功告成啦！

# 效果
![最终效果](https://i.p-i.vip/68/20250130-679b87e0054ae.png)
![格雷科寄？](https://i.p-i.vip/68/20250130-679b87de6c9c0.png)