---
title: （进阶）更高级的Uptime Statusの部署笔记
tags: 前端
categories: 前端
description: 记录一下另一版的Uptime Status页面搭建
top_img: 'https://i.p-i.vip/68/20250629-6860fc11bca72.webp'
cover: 'https://i.p-i.vip/68/20250629-6860fc11bca72.webp'
abbrlink: '9893'
swiper_index: 3
date: 2025-06-29 10:09:51
---

# 🧀前言

芜湖~~~，考完试了。再熬过一个星期就可以享受差不多有两个月的暑假啦，由于生地会考的缘故，期末考试自然少了这两门功课，级长又闲着没事给我们加了个问卷调查，前面的声明还好好的问我们是关于`学习`的问卷，结果有一题直接问我们{% psw 家里有几间厕所 %}，下次写文章的时候直接写{% psw 抽象问卷大赏114514.0 %}。{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/Yurui-Neko/005.png, height=40px %}

上次已经介绍了`Uptime Status`的一个主题版本，之后又有留言说还有个更好康的，在这里感谢`Peter267`{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/Yurui-Neko/014.png, height=40px %}

![](https://i.p-i.vip/68/20250629-6860e3c403d4c.webp)

# 🍔正文

## 🌮Fork及配置

打开这个链接：

{% link Uptime-Status, 优雅的站点状态监控面板, https://github.com/JLinmr/Uptime-Status %}

如果访问不了，可以开个加速器之类的，点击图片提示的`Fork`按钮。{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/Yurui-Neko/005.png, height=40px %}

![](https://i.p-i.vip/68/20250629-6860e4c89a865.webp)

按照`Fork`提示操作，会在自己的仓库中创建一个的仓库，点击仓库列表里的`.env`文件，可以看到里面有一些配置，我们需要修改一下。{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/Yurui-Neko/008.png, height=40px %}

![](https://i.p-i.vip/68/20250629-6860e7e036008.webp)

```plaintext
# UptimeRobot API Key
VITE_UPTIMEROBOT_API_KEY = "ur2290572-af4663a4e3f83be26119abbe"

# UptimeRobot API URL 
# 除腾讯云 EdgeOne Pages 、vercel 、cloudflare pages 外 
## 其它部署方式需要自行搭建 API 代理 
## 代理地址 https://api.uptimerobot.com/v2/getMonitors
VITE_UPTIMEROBOT_API_URL = "/api/status"

# 站点名称
VITE_APP_TITLE = "梦爱吃鱼"
```

- `VITE_UPTIMEROBOT_API_KEY`：这个是你的UptimeRobot的API密钥，可以在UptimeRobot的设置中找到。不知道如何获取的可以看上一篇文章，里面有详细的教程。
- `VITE_UPTIMEROBOT_API_URL（可选）`：这个是API的URL，除腾讯云 EdgeOne Pages 、vercel 、cloudflare pages 外 其它部署方式需要自行搭建 API 代理。这次我们就采用`Vercel`平台来部署站点监控。
- `VITE_APP_TITLE`：这个是站点的标题，主要显示在网页标题，可以修改成xxxの站点监控。

修改完之后点击`Commit changes`，保存修改，接下来就是美化了。{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/Yurui-Neko/012.png, height=40px %}

## 🎂美化

以下就是我修改过的源代码，我会标记它的路径，方便查看修改的地方。

`/index.html`（这里将原来Bilibili提供的的鸿蒙字体包改为了悠哉字体包）

```diff
- <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
- <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
+ <link rel="icon" type="image/svg+xml" href="你自己的图片地址" />
+ <link rel="apple-touch-icon" href="你自己的图片地址" />
- <title>%VITE_APP_TITLE% - 站点监测</title>
+ <title>%VITE_APP_TITLE%</title>
- <meta name="author" content="梦爱吃鱼" />
- <meta name="copyright" content="梦爱吃鱼" />
+ <meta name="author" content="你的网名昵称" />
+ <meta name="copyright" content="你的网名昵称" />
- <link rel="stylesheet" href="https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css">
+ <link rel="stylesheet" href="https://chinese-fonts-cdn.deno.dev/packages/yozai/dist/Yozai-Regular/result.css">
```

`/src/App.vue`

```diff
- <div class="flex-1 p-3 sm:p-8">
+ <div class="flex-1 p-3 sm:p-8" style = "background: url(你的图片地址，不用引号) top; background-repeat: no-repeat; background-attachment: fixed; background-size: cover;">
```

`/src/style.css`（这里是改为了`Yozai`字体）

```diff
+ * {
+   font-family: Yozai,Yozai,Yozai,sans-serif; /* 字体 */
+   -ms-overflow-style: none;  /* IE and Edge */
+   scrollbar-width: none;  /* Firefox */
}
```

`src/components/Footer.vue`（在大约91行的位置写上你的网名昵称）

```diff
- JLinmr
+ 你的网名昵称
```

`src/components/Header.vue`（可选）

```diff
- <h1 class="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
+ <h1 class="text-lg sm:text-2xl font-bold text-gray-100 dark:text-gray-100">
```

**注**：如果你的监控加上了背景图之后标题不明显，可以试着将`text-gray-800`改为`text-gray-100`。

## 🍯部署

这次还是一样，部署平台选择Vercel，同样，打开[Vercel](https://vercel.com/)，点击`Add New`按钮，选择`Project`，然后选择刚刚`Fork`仓库，点击`Deploy`按钮，等待部署完成。{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/Yurui-Neko/035.png, height=40px %}

![](https://i.p-i.vip/68/20250622-68579669422f4.webp)

![](https://i.p-i.vip/68/20250629-6860fa437a56a.webp)

![](https://i.p-i.vip/68/20250629-6860fa76edf51.webp)

# 🍮效果图

![](https://i.p-i.vip/68/20250629-6860fabe3c827.webp)

# ⭐封面图

![](https://i.p-i.vip/68/20250629-6860fcacdda6e.webp)