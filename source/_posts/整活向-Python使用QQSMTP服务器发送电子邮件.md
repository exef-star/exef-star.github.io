---
title: 整活向-Python使用QQSMTP服务器发送电子邮件
tags: Python
categories: Python
description: 闲着没事给老师用Python发个邮件
top_img: 'https://i.p-i.vip/68/20250525-6832c563bf129.webp'
cover: 'https://i.p-i.vip/68/20250525-6832c563bf129.webp'
abbrlink: dd92
date: 2025-05-25 10:38:46
---

# 🍋碎碎念

自从双减了之后，学校里面多了几个素质扩展的课，以前星期四下午的自习课又多了一种选择，`C++`项目一直以来都是我的短板，所以就顺势报了个课。

但是没想到原来上了课还要交作业，还要发邮件给老师交作业，服了，本来给的代码就运行不了，还让我们硬交作业，没办法，只能硬着头皮交上去个运行不了的代码。

交作业的时候就想到了一个问题，既然每次写邮件这么麻烦，还不如直接写个代码来自动发送，只要修改一下文字，运行一下，不用费劲想半天要写什么内容，直接就能发出去。

`网络编程`，是`Python`的一大类强项，不需要像`C++`一样写一些头文件和导入一些第三方库，为了一碟醋而做了一盘饺子。而此时`Python`的优势也显现了出来，我们需要用到的`SMTP`服务器和`mail`模块在安装的时候就内置在了`Python`里。因此，我们就能实现只用少许的代码和配置就能发送自动邮件。

这次使用的是`QQ邮箱`的`SMTP`，一方面是注册账号的时候`QQ`就会分配给你一个邮箱地址，另外`QQ邮箱`按目前发邮件速度和稳定性较好，所以也不用担心发邮件失败的问题。更重要的是，免费，这就是我为什么选择`QQ邮箱`的原因。

# 🍯正文

## 🍭获取QQ邮箱授权码

登陆你的QQ邮箱：

{% link QQ邮箱, 安全、稳定、快速、便捷的免费电子邮箱。 强大的反垃圾邮件过滤，10G超大附件发送，轻松管理所有电子发票，尽在QQ邮箱。, https://mail.qq.com/ %}

进去之后点击右上角设置图标：

![](https://i.p-i.vip/68/20250525-6832a98c591ef.webp)

进入设置之后，往下拉左边的选项栏，点击{% wavy 账号与安全 %}，会进入`QQ邮箱安全中心`，点击侧边栏的{% wavy 安全设置 %}，以图片为辅助，看一下有没有开启服务，没有就打开，打开之后点击{% wavy 生成授权码 %}，按照提示操作，有可能需要你用到手机号验证，然后就会出现你的授权码，复制这个授权码，最好新开个记事本粘贴下来，这是我们访问QQ邮箱SMTP服务器的{% wavy 密码 %}，后面会用到。

![](https://i.p-i.vip/68/20250525-6832abab99d67.webp)

最后要做的就是，记下你的QQ邮箱地址（如xxx@qq.com），不知道也可以在邮箱首页查看。

![](https://i.p-i.vip/68/20250525-6832ad26b1a3c.webp)

## 🍔开始写代码！！！

代码不多，{% wavy 变量设置+邮件内容+邮件发送+报错判断 %}，只有56行。

### 🥗完整代码

```python
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# 发件人邮箱地址和授权码
sender_email = "你的QQ邮箱地址（如xxx@qq.com）"
sender_password = "你的QQ邮箱授权码"

# 收件人邮箱地址
receiver_email = "你要发的人的邮箱地址"

# 创建一个多部分的邮件
message = MIMEMultipart()
message['From'] = sender_email
message['To'] = receiver_email
message['Subject'] = '自动化邮件测试'

# 设置邮件正文，并使用HTML设置字体
body = """\
<html>
  <head></head>
  <body>
    <h3 style="font-family: Arial, sans-serif; color: black;">老师：</h3>
    <span style="font-family: Arial, sans-serif; color: black;"><b>这是课后作业。</b></span><br>
    <span style="font-family: Arial, sans-serif; color: black;">源文件在下方的链接中，请查收。</span><br>
    <span style="font-family: Arial, sans-serif; color: black;">注：网盘支持免登录下载，无密码</span><br>
    <a href="xxx" style="font-family: Arial, sans-serif; color: blue;">xxx</a>
    <p style="font-family: Arial, sans-serif; color: black;">20xx年x月x号</p>
    <img src="xxx" alt="示例图像">
  </body>
</html>
"""

# 将正文附加到邮件中
message.attach(MIMEText(body, 'html'))

# 连接到SMTP服务器
try:
    server = smtplib.SMTP('smtp.qq.com', 587)
    server.starttls()  # 启用TLS加密
    server.login(sender_email, sender_password)  # 登录邮箱

    # 发送邮件
    server.sendmail(sender_email, receiver_email, message.as_string())

    # 关闭连接
    server.quit()
    print("邮件发送成功！")
except smtplib.SMTPAuthenticationError:
    print("身份验证失败，请检查邮箱地址和授权码。")
except smtplib.SMTPException as e:
    print(f"SMTP 错误: {e}")
except Exception as e:
    print(f"发生错误: {e}")
```

### 🧇A Little 解释

### 🥜导入库

```python
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
```

先来说一下什么是`smtplib`库：

`smtplib`，顾名思义，是一个能够让`Python`使用`SMTP服务器`来发送邮件的库，它内置于`Python` 中，不需要额外安装。只需要在`Python`文件中导入库，就可以用它快速发送邮件。包括以下功能：

- **连接到SMTP服务器**：使用 SMTP 或 SMTP_SSL 类连接到邮件服务器。
- **启用TLS加密**：使用 starttls() 方法启用TLS加密，以确保邮件传输的安全性。
- **登录邮箱**：使用 login() 方法登录到你的邮箱账户（QQ的授权码相当于smtplib的密码）。
- **发送邮件**：使用 sendmail() 方法发送邮件。
- **关闭连接**：使用 quit() 或 close() 方法关闭与SMTP服务器的连接。

而关于`email`包的描述，Python官方是这么解释的：

{% note info simple %}
{% u email %}包是一个用于管理电子邮件消息的库。 它*并非*专门被设计用来执行向 SMTP (**RFC 2821**), NNTP或其他服务器发送电子邮件消息；这些是{% u smtplib %}等模块的功能。 {% u email %}包试图尽可能地遵循RFC，支持**RFC 5322**和**RFC 6532**，以及与MIME相关的各个RFC例如**RFC 2045**,**RFC 2046**,**RFC 2047**,**RFC 2183**和**RFC 2231**。
——[email --- 电子邮件与 MIME 处理包](https://docs.python.org/zh-cn/3/library/email.html)
{% endnote %}

引入这三个包的目的就是为了实现{% u 发送邮件 %}、{% u 设置邮件 %}、{% u 设置正文 %}等功能。

### 🍟配置项

```python
# 发件人邮箱地址和授权码
sender_email = "你的QQ邮箱地址（如xxx@qq.com）"
sender_password = "你的QQ邮箱授权码"

# 收件人邮箱地址
receiver_email = "你要发的人的邮箱地址"
```

这里还是单独揪出来讲：

- **sender_email**：发件人邮箱地址，就是你自己的邮箱地址，比如`xxx@qq.com`。
- **sender_password**：授权码，就是你在`QQ邮箱`安全中心生成的授权码，用来登录你的邮箱。
- **receiver_email**：收件人邮箱地址，就是你要发给谁的邮箱地址，比如`xxx@example.com`。

### 🍕设置邮件内容

```python
# 创建一个多部分的邮件
message = MIMEMultipart()
message['From'] = sender_email
message['To'] = receiver_email
message['Subject'] = '自动化邮件测试'

# 设置邮件正文，并使用HTML设置字体
body = """\
<html>
  <head></head>
  <body>
    <h3 style="font-family: Arial, sans-serif; color: black;">老师：</h3>
    <span style="font-family: Arial, sans-serif; color: black;"><b>这是课后作业。</b></span><br>
    <span style="font-family: Arial, sans-serif; color: black;">源文件在下方的链接中，请查收。</span><br>
    <span style="font-family: Arial, sans-serif; color: black;">注：网盘支持免登录下载，无密码</span><br>
    <a href="xxx" style="font-family: Arial, sans-serif; color: blue;">xxx</a>
    <p style="font-family: Arial, sans-serif; color: black;">20xx年x月x号</p>
    <img src="xxx" alt="示例图像">
  </body>
</html>
"""

# 将正文附加到邮件中
message.attach(MIMEText(body, 'html'))
```

- **MIMEMultipart()**：目的为创建一个多部分的邮件对象，你可以往里面添加纯文本正文，或者HTML正文，以及附件等。
- **From**：发件人邮箱地址。无需更改。
- **To**：收件人邮箱地址。同样无需更改。
- **Subject**：邮件主题。按需更改。可以随便起，不过建议起个有意义的名字，可以少点社交上的麻烦。
- **message.attach**：将正文附加到邮件中。这样收件人就可以看到程序发的邮件了

### 🎂发送邮件

```python
# 连接到SMTP服务器
try:
    server = smtplib.SMTP('smtp.qq.com', 587)
    server.starttls()  # 启用TLS加密
    server.login(sender_email, sender_password)  # 登录邮箱

    # 发送邮件
    server.sendmail(sender_email, receiver_email, message.as_string())

    # 关闭连接
    server.quit()
    print("邮件发送成功！")
except smtplib.SMTPAuthenticationError:
    print("身份验证失败，请检查邮箱地址和授权码。")
except smtplib.SMTPException as e:
    print(f"SMTP 错误: {e}")
except Exception as e:
    print(f"发生错误: {e}")
```

在这里，{% u smtplib %}尝试去连接到`smtp.qq.com:587`（QQSMTP服务器地址），然后启用TLS加密保证安全性，然后使用`login()`方法登录到邮箱账户，使用`sendmail()`来发送邮件，最后再使用`server.quit()`来进行退出。当然，程序也具有最基本的报错处理，如果出现错误，就会打印出错误信息。包括`身份验证错误`、`SMTP错误`、`其他错误`等。

### 🥧运行代码

如果运行代码正常的话，控制台应该就会输出这条消息：

![](https://i.p-i.vip/68/20250525-6832c131501e6.webp)

当然，收件人地址一定要填对，不然你就会收到这封邮件：

![](https://i.p-i.vip/68/20250525-6832c19267f41.webp)

收件人一方收到的应该是这样子的：

![](https://i.p-i.vip/68/20250525-6832c1f528d78.webp)

至此，我们就完成了邮件的自动发送。

# 🍩结尾

`smtplib`作为一个自动化的内置库，使用起来确实不错，很简单。
目前新开了一条`Vercel`线路，速度方面已经通过`CNAME`替换的方式来优化网站访问速度了，速度如下：

![](https://i.p-i.vip/68/20250525-6832c33d93ac9.webp)

PS：下面这个是主线路的：

![](https://i.p-i.vip/68/20250525-6832c37e6ba81.webp)

# ⭐封面图

![6e501611880511ebb6edd017c2d2eca2.jpg](https://i.p-i.vip/68/20250525-6832c5cced392.jpg)