---
title: Heo Music&Uptime Statusの搭建美化小记
tags: 前端
categories: 前端
description: 记录一下HeoMusic和UptimeRobot的搭建
top_img: 'https://i.p-i.vip/68/20250622-6857a0e440dfe.webp'
cover: 'https://i.p-i.vip/68/20250622-6857a0e440dfe.webp'
swiper_index: 2
abbrlink: ed07
date: 2025-06-21 17:04:58
---

# 🧀前言

生地会考终于结束了，也算是知道了自己哪一些地方的不足，也算是有了一些新的收获。{% psw 桀！桀！桀！终于没有生物和物理这两门功课了！！！真的是太高兴了！！！，终于不用一天写六门课的作业啦啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈！！！！！ %}{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/008.gif, height=40px %}

最近在逛搜索引擎的时候，发现了`HeoMusic`这个项目。正好，安知鱼主题也自带了个类似的东西，但是需要自己导入音频文件，实属有点麻烦。于是就顺着上流找到了洪哥的音乐播放器，在此感谢[@张洪Heo](https://blog.zhheo.com/)大佬！{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/052.gif, height=40px %}

另一个就是一直困惑有没有可以不用服务器部署的网站状态监测工具。正巧，搜索引擎上面一搜就搜了出来，可以利用Vercel和UptimeRobot搭建一个网站状态监测工具。可以简单的看一下网站的情况，不用进行一些复杂的交互，并且用狗哥（itdog）测了一下速，似乎还可以，国内也可以正常访问。{% psw 懒癌石锤 %}{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/040.gif, height=40px %}

两个方法部署简单，并且使用起来还算方便，便记录一下自己的搭建过程，以备后用。{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/025.gif, height=40px %}

# 🥞正文

## 🍕准备工作

- `⛰️Github账号（必选）`：用于Fork仓库。
- `🔺Vercel账号（必选）`：用于部署网站。
- `🟢UptimeRobot账号（可选，如果部署Uptime Status必选）`：用于监控网站状态。
- `🧠你的脑子！！！`

## 🎼Heo Music

### 🍖Fork、配置及美化

打开以下链接：

{% link zhheo / HeoMusic, 一个基于Aplayer和MetingJS的静态音乐播放器, https://github.com/zhheo/HeoMusic %}

部分地区可能要开一下加速器才能访问，访问之后就是这样一个页面：

![](https://i.p-i.vip/68/20250622-6857831dece4e.webp)

按照图片的提示来，点击`Fork`按钮（如果可以的话就支持一下原作者点个`Star`），跟着应到页面走，什么都不要动，点击下面的大绿色按钮，等待它`Fork`完之后，你会看到这样一个类似的页面{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/040.gif, height=40px %}：

![](https://i.p-i.vip/68/20250622-685784ac1454c.webp)

往下拉到仓库文件列表，点击`config.js.demo`这个文件，点击`编辑`图标（看图片提示操作！）。

![](https://i.p-i.vip/68/20250622-685784e25e6dc.webp)

![](https://i.p-i.vip/68/20250622-68578556432d8.webp)

这就是我们改动歌单及音乐源的地方，以下就是源文件的`config.js.demo`内容：

```javascript
var userId = "8668419170";
var userServer = "tencent";
var userType = "playlist";
// var localMusic = [{
//     name: '重生之我在异乡为异客',
//     artist: '王睿卓',
//     url: '/music/重生之我在异乡为异客.mp3',
//     cover: '/music/重生之我在异乡为异客.png',
//     lrc: '/music/重生之我在异乡为异客.lrc'
// },
// {
//     name: '落',
//     artist: '唐伯虎',
//     url: '/music/落.mp3',
//     cover: '/music/落.png',
//     lrc: '/music/落.lrc'
// }
// ];
// var remoteMusic = "./musiclist.json"
```

我们需要改动以下地方（这里以网易云音乐为例）：
- `var userId`：这里改成你的歌单号，例如下面所演示的图片{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/029.gif, height=40px %}：

![](https://i.p-i.vip/68/20250622-685788ee3a724.webp)

- `var userServer`：如果这里的歌单来源是网易云音乐，则改成`netease`即可，具体见仓库里的`README.md`文件。

改完之后就是像我一样类似的一个东西了：

```javascript
var userId = "8674117203";
var userServer = "netease";
var userType = "playlist";
// var localMusic = [{
//     name: '重生之我在异乡为异客',
//     artist: '王睿卓',
//     url: '/music/重生之我在异乡为异客.mp3',
//     cover: '/music/重生之我在异乡为异客.png',
//     lrc: '/music/重生之我在异乡为异客.lrc'
// },
// {
//     name: '落',
//     artist: '唐伯虎',
//     url: '/music/落.mp3',
//     cover: '/music/落.png',
//     lrc: '/music/落.lrc'
// }
// ];
// var remoteMusic = "./musiclist.json"

```

最后别忘了，将文件名改为`config.js`，这样才能够生效，然后点击`Commit changes`按钮，提交你的改动，这样我们的音乐播放器就算配置完了。

如果你需要美化的话，可以点击仓库文件列表中的`index.html`，如图所示：

![](https://i.p-i.vip/68/20250622-68578a5200618.webp)

其中的原代码如下：

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HeoMusic - 用音乐感染人心</title>
  <link rel="stylesheet" type="text/css" href="./css/APlayer.css">
  <link rel="stylesheet" type="text/css" href="./css/main.css">
  <link rel="icon" type="image/x-icon" href="./img/icon.webp">
  <link rel="apple-touch-icon" href="./img/icon-r.webp">
  <meta name="apple-mobile-web-app-title" content="音乐">
  <link rel="bookmark" href="./img/icon.webp">
  <link rel="apple-touch-icon-precomposed" sizes="180x180" href="./img/icon-r.webp">
  <meta name="description" content="一个简单好用的音乐播放器。">
  <link rel="manifest" href="/manifest.json"> 
  <meta name="theme-color" content="#000000">
</head>
<body>
<div id="heoMusic-page">
</div>
<script src="./config.js"></script>
<script src="./js/APlayer.min.js"></script>
<script async data-pjax src="./js/main.js"></script>
</body>
</html>
```

当然，你可以按照我的模版去改动，以下是我改动之后的`index.html`文件，添加了`霞鹜文楷`字体支持、网站图标的修改等{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/011.gif, height=40px %}：

```diff
<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
- <title>HeoMusic - 用音乐感染人心</title>
+ <title>HantaMusic | 一个简单好用的音乐播放器</title>
  <link rel="stylesheet" type="text/css" href="./css/APlayer.css">
  <link rel="stylesheet" type="text/css" href="./css/main.css">
- <link rel="icon" type="image/x-icon" href="./img/icon.webp">
- <link rel="apple-touch-icon" href="./img/icon-r.webp">
+ <link rel="icon" type="image/x-icon" href="https://i.p-i.vip/68/20250316-67d6818047734.jpg">
+ <link rel="apple-touch-icon" href="https://i.p-i.vip/68/20250607-6843ba6a61647.png">
  <meta name="apple-mobile-web-app-title" content="音乐">
- <link rel="bookmark" href="./img/icon.webp">
- <link rel="apple-touch-icon-precomposed" sizes="180x180" href="./img/icon-r.webp">
+ <link rel="bookmark" href="https://i.p-i.vip/68/20250607-6843ba6a61647.png">
+ <link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://i.p-i.vip/68/20250316-67d6818047734.jpg">
  <meta name="description" content="一个简单好用的音乐播放器。">
  <link rel="manifest" href="/manifest.json"> 
  <meta name="theme-color" content="#000000">
+ <link rel='stylesheet' href='https://static.zeoseven.com/zsft/292/main/result.css' />
+ <style>* {font-family: LXGW WenKai Light;}</style>
</head>
<body>
<div id="heoMusic-page">
</div>
<script src="./config.js"></script>
<script src="./js/APlayer.min.js"></script>
<script async data-pjax src="./js/main.js"></script>
</body>
</html>
```

这样我们的美化就完成了，可以点击`Commit changes`按钮，提交你的改动。而接下来我们就要部署到Vercel上了。

### 🍗部署到Vercel

登陆你的[Vercel](https://vercel.com/)账号，点击`Add New`按钮，选择`Project`，然后选择刚刚`Fork`的`HeoMusic`仓库，点击`Deploy`按钮，等待部署完成。

![](https://i.p-i.vip/68/20250622-68578ccd66172.webp)

![](https://i.p-i.vip/68/20250622-68578d0710c38.webp)

![](https://i.p-i.vip/68/20250622-68578d5e2358f.webp)

部署完成之后，你会看到这样一个页面，此时点击Vercel给你分配的域名，你就能看到你的音乐播放器了。不过在中国大陆上有可能访问不了，可以根据自己需求绑定一个域名！

![](https://i.p-i.vip/68/20250622-68578dd03f047.webp)

## 🟢Uptime Status

### 🔐注册及获取API Key

点击下面链接，注册一个免费的`UptimeRobot`账号：

{% link UptimeRobot, The world's leading uptime monitoring service., https://uptimerobot.com/ %}

注册完之后点击`New Monitor`添加你的网站，如果是检测单一的静态网站，可以使用HTTPS，其他的使用方法可以查看官方文档。{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/011.gif, height=40px %}

然后我们点击侧边栏中三个点连在一起的图标，继续选择API，点击`Read-only API key`选项的创建按钮，复制API Key。

![](https://i.p-i.vip/68/20250622-68578fc5f293e.webp)

![](https://i.p-i.vip/68/20250622-68579032cdda0.webp)

![](https://i.p-i.vip/68/20250622-685790e241541.webp)

### 🥩配置Uptime Status

来到这个仓库：

{% link UptimeRobot, The world's leading uptime monitoring service., https://uptimerobot.com/ %}

![](https://i.p-i.vip/68/20250622-68579199a3741.webp)

进入之后，点击`Fork（记得Star一下原作者哦）`按钮，跟着应到页面走，什么都不要动，点击下面的大绿色按钮，等待它`Fork`完之后，你会看到这样一个类似的页面：

![](https://i.p-i.vip/68/20250622-685792010bf11.webp)

点击仓库文件列表中的`public`文件夹，再点击`config.js`配置文件进行编辑：

![](https://i.p-i.vip/68/20250622-6857929346880.webp)

以下是`config.js`文件的源代码：
```javascript
// 配置
window.Config = {

  // 显示标题
  SiteName: '云生站点监测',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'xxx',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://tjys.tk'
    },
    {
      text: '博客',
      url: 'https://blog.qikaile.tk'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/qikaile/uptime-status'
    },
  ],
};
```

主要修改以下地方：

- `SiteName`：修改为你的站点名称
- `ApiKeys`：填入你的`UptimeRobot`的`API Key`，也就是我们刚刚复制的那串`Read-only API key`
- `Navi`里的：导航栏配置项，按需修改。

修改完成后，点击`Commit changes`按钮，提交你的改动。

当然，原来的网站美化的已经够好的了，不过我还是修改了一点点，比如修改了一下字体，修改了网站的背景和头部的不透明度及字体颜色和网站标题等。

具体修改很简单：点击仓库文件列表中的`src`文件夹，再点击`app.scss`来进行修改，与`css`较为类似，以下就是我修改后的样式代码，可以直接按下{% kbd Ctrl %} + {% kbd F %} 进行全文搜索{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/067.gif, height=40px %}：

```css
body {
  background: url(https://i.p-i.vip/68/20250525-6832c5cced392.jpg) top;
  background-repeat: no-repeat;
  background-attachment: fixed;  
  background-size: cover;
  font-family: LXGW WenKai Light;
  font-size: 14px;
  line-height: 1;
  overflow: overlay;
  overflow-x: hidden;
}

#header {
  background: rgba(255, 255, 255, 0.4);
  padding: 30px 0 60px 0;
  color: white;
  width: 101%;
  height: 400px;
  padding-right: 1%;

  .container {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  .logo {
    font-size: 20px;
    font-weight: bold;
  }

  .navi {
    font-size: 14px;
    color: #ffffff;

    a {
      margin-left: 20px;
      transition: color ease 150ms;
      padding: 6px 10px;
      border-radius: 8px;
      transition: 0.3s;
    }

    a:hover {
      background: #ffffff52;
      transition: 0.3s;
    }
  }
}

#footer {
  font-size: 12px;
  text-align: center;
  line-height: 25px;
  color: #ffffff;
  margin-bottom: 40px;

  a {
    font-weight: bold;
    color: #FECC11;
  }
}
```

修改完成后，点击`Commit changes`按钮，提交你的改动。{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/063.gif, height=40px %}

### 🥪部署到Vercel

登陆你的[Vercel](https://vercel.com/)账号，点击`Add New`按钮，选择`Project`，然后选择刚刚`Fork`的`Uptime Status`仓库，点击`Deploy`按钮，等待部署完成。

![](https://i.p-i.vip/68/20250622-68579669422f4.webp)

![](https://i.p-i.vip/68/20250622-6857969f0f71a.webp)

![](https://i.p-i.vip/68/20250622-6857971d9a6cf.webp)

等他部署完之后，点击下面`Vercel`给你分配的域名或者点击Visit按钮，就可以看到你的站点了。如果有需求的话，可以为这个小玩意绑个域名，速度能快不少。{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/013.gif, height=40px %}

![](https://i.p-i.vip/68/20250622-6857977e12bef.webp)

## 🍰效果

**🎼Heo Music**：

![](https://i.p-i.vip/68/20250622-685798a9292ce.webp)

**🟢Uptime Status**：

![](https://i.p-i.vip/68/20250622-6857997eaf63f.webp)

# 🌈后记

音乐播放器和Uptime Status的配置到部署到Vercel上，整体难度还算简单，马上就要初中的期中考试了，在这里祝大家考试顺利！{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/040.gif, height=40px %}

网上找了个音质有点差的细糠，遂分享一同品尝：

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=2071809521&auto=1&height=66"></iframe>

悄悄话：桀桀桀，考完就有差不多两个月的暑假啦，这次暑假和作业热胀冷缩实在是太给力啦哈哈哈！！！（呜呜呜，暑假作业好多. . .）{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/011.gif, height=40px %}

# ⭐每日一图

{% image https://i.p-i.vip/68/20250622-6857a37d7bd2b.png, alt=树林，车站 %}