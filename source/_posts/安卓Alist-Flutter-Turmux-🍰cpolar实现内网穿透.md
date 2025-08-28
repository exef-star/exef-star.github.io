---
title: "安卓Alist Flutter + Turmux cpolar实现内网穿透"
tags: Alist
categories: Alist
description: "Alist Flutter + Turmux \U0001F370cpolar自部署网盘教程"
top_img: 'https://i.p-i.vip/68/20250518-682999d014081.webp'
cover: 'https://i.p-i.vip/68/20250518-682999d014081.webp'
swiper_index: 1
abbrlink: e323
date: 2025-05-18 07:38:14
---

# 🍉前言

`☕AList`，一个将各家网盘集合起来的小程序，支持多家网盘，包括百度网盘、腾讯微云、Google Drive、OneDrive、Dropbox、蓝奏云等。

`🍬安卓7.1.2`，于 2017 年 4 月 3 日向 Nexus 及 Pixel 设备推送，同时也是我这台优学派平板魔改的原系统，原厂商给这个系统添加了两个桌面，其中就包括残血版的安卓原生桌面（不多，也就削了桌面小组件以及一大堆杂七杂八的东西）。

玩个Minecraft基岩版都卡的一批，更不用说网易版本了，还能干什么。刚好，`Github`上有一个项目——`🍵Alist Flutter`，可以将`Alist`通过安卓应用的方式安装在安卓上面，不需要命令行的方式，只要在GUI界面上就可以一键修改密码和启动AList。搭配上`📦Turmux`来实现免费的内网穿透，就可以实现在任意一个地方访问到AList网盘。

# 🍪准备工作

- `🍬安卓7.1.2`及以上版本的手机/平板
- `🍵Alist Flutter`（网盘主程序！）
- `📦Turmux`（内网穿透要用到的软件，可以是同类软件ZeroTurmux）
- `🧠你的脑子！！！`

# 🍯正文

## 🍵Alist Flutter

打开下面的网址👇：

{% link https://github.com/jing332/AListFlutter, Github, https://github.com/jing332/AListFlutter %}

选择最新的正式版，点进去之后按照自己的处理器类型选择

![](https://i.p-i.vip/68/20250518-6829538a7e0c3.webp)

下载之后正常安装，如果显示不兼容就换个安装包，安装好以后点击打开，点击右上角中间的按钮，设置一下`admin`的密码，然后点击确定。

![](https://i.p-i.vip/68/20250518-682989049d6ab.webp)

最后再点击右下角的启动按钮，然后下滑到控制中心，就会看到`Alist`的常驻通知，其中就有`☕Alist`的具体局域网IP，这时打开游览器，输入`你的AList具体局域网IP` + `5244`（比如说`192.168.1.2:5244`，其中`192.168.1.2`就是你的AList具体局域网IP，具体请以应用常驻通知的IP为准，`5244`就是端口号，前面要加上`:`号），就可以访问到你的`Alist`的网盘了。只不过这个网盘目前还只能在内网访问，别急，下一个就是内网穿透了

![](https://i.p-i.vip/68/20250518-682989d30713b.webp)

# 安装📦Turmux和🍰cpolar

🍰cpolar是一款安全的内网穿透工具，可以将内网站点发布至公网，方便给客户演示，高效调试微信公众号、小程序、对接支付宝网关等云端服务。除了正常的Linux，🍰cpolar还为Turmux做了一个适配，可以直接在Turmux上安装🍰cpolar，然后就可以实现内网穿透了。

打开下面网址

{% link https://termux.dev/cn/index.html, Turmux, https://termux.dev/cn/index.html %}

选择任意一个下载方式，下载并安装，打开`Turmux`，如果你是第一次使用，先熟悉一下如何去实现最基本的操作：
长按命令行，会出现三个选项：`COPY`、`PASTE`、`More`，我们只需要知道`COPY`、`PASTE`两个分别是`复制`、`粘贴`就行。

这时运行一下命令：

```bash
termux-change-repo
```
这是用来换源的，推荐使用清华源。如果显示不存在，可以运行以下命令：

```bash
pkg install termux-tools
```

然后按下输入法上的回车运行，安装完之后在运行一次换源指令，用`Turmux`自带的上下键控制，选择第二个（如果有）或者带有Main字样的选项，按下输入法上的空格选择，按下输入法上的回车确定，在新出现的页面上选择带有`mirrors.tuna.tsinghua.edu.cn`的选项，选择之后回车，等待它检测完成，再输入以下指令：

```bash
apt update
```

```bash
apt upgrade -y
```

执行完后再执行以下命令，安装`curl`和`dnsutils`:

```bash
apt install curl
```

```bash
apt install dnsutils
```

它会创建一个DNS解析文件，路径在`$PREFIX/etc/resolv.conf`，里面有配置DNS解析服务器地址（默认已经加了8.8.8.8）

接下来就是下载`🍰cpolar`本体（ARM版本）了，运行以下命令：

```bash
cd .
```

```bash
curl -O -L https://cpolar.com/static/downloads/cpolar-stable-linux-arm.zip
```

运行`cd .`的目的就是保证🍰cpolar能够处于根目录，从而能够顺利运行。然后解压文件：

```bash
unzip cpolar-stable-linux-arm.zip
```

来到[🍰cpolar的官网](https://www.cpolar.com)，注册，在`验证`选项卡里，你的验证命令就在代码框里，复制粘贴到`Turmux`

![](https://i.p-i.vip/68/20250518-68299557e79d5.webp)

继续执行最后一步，命令如下：

```bash
./cpolar http 你的AList具体局域网IP:5244
```
出现这样的页面，就说明你成功了：

![](https://i.p-i.vip/68/20250518-682996c744c43.webp)

在`Forwarding`，你可以看到cpolar分配给你的域名，复制到游览器上，就能够在外网访问到你的`☕AList`了

# 后记
在后面使用时，我发现了一些问题，速度较慢，域名不是固定的，并且自定义不了域名（付费才有），用起来属实不够优雅，不过还是值得尝试一下。

# 参考资料

- [https://www.cpolar.com/docs](https://www.cpolar.com/docs)
- [https://sansjtw.netlify.app/posts/34fe5026/](https://sansjtw.netlify.app/posts/34fe5026/)