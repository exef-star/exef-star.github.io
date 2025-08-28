---
title: 解决Vercel平台的Twikoo测试邮件正常但没有评论邮件发送的问题
tags: Twikoo
categories: Twikoo
description: 解决Vercel部署的Twikoo评论系统面板测试邮件发送正常但是评论邮件无法正常发送的问题
top_img: 'https://i.p-i.vip/68/20250608-6845513a4d196.webp'
cover: 'https://i.p-i.vip/68/20250608-6845513a4d196.webp'
abbrlink: 85eb
date: 2025-06-08 16:18:41
---

# 问题描述

众所周知，本站一直以来都有一个评论系统，使用的是[Twikoo](https://twikoo.js.org/)，部署在[Vercel](https://vercel.com/)平台上。

邮件服务商使用的一直是`QQ邮箱`，配置也完全正确，点击测试发送邮件也正常，但是评论邮件却无法正常发送。

这个问题一直困扰着我，因为我不知道原因，也没有找到解决方法。

这次也是在逛搜索引擎的时候找到了正确答案，顺便也再水一篇文章，小小记录一下，实在没有更多的精力去写一篇优质的文章了，实在抱歉{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/018.gif, height=40px %}

在此之前确保你的`QQ邮箱配置正确`

# 解决办法

打开`Vercel`，找到你的`Twikoo`评论系统卡片，点击进入，点击上方导航栏中的`Setting`，在搜索栏中搜索`Vercel Authentication`关掉它，点击右下角的`Save`。这时候就可以去试一下你的评论系统是否可以正常发送邮件了。{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/011.gif, height=40px %}

![](https://i.p-i.vip/68/20250608-68454b87f2517.webp)

# 结尾

网站的评论系统邮件提示终于正常了，感兴趣的可以在网上找模版改一下。目前网站的邮件模版如下（再次感谢柳神大佬！）。{% inlineimage https://twikoo-magic.oss-cn-hangzhou.aliyuncs.com/ali/002.gif, height=40px %}

![](https://i.p-i.vip/68/20250608-6845503a97b73.webp)