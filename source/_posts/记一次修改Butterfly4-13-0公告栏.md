---
title: 记一次修改Butterfly4.13.0公告栏
tags:
  - Butterfly魔改
  - pug修改
categories: Butterfly魔改
description: 对于Butterfly4.13.0无法像Fomal大佬直接修改配置文件添加文字的教程
top_img: 'https://pic1.imgdb.cn/item/66b87b42d9c307b7e945f78b.png'
cover: 'https://pic1.imgdb.cn/item/66b87b42d9c307b7e945f78b.png'
abbrlink: d132
date: 2025-01-05 11:10:45
---

# 前提
> 1. 你已经安装了Butterfly4.13.0
> 2. 你已经知道如何修改pug文件（记得备份文件）
> 3. 在这之前需要用到pug的语法，可以参考[pug官方文档](https://www.pugjs.cn/api/getting-started)
> 4. 教程中会使用diff代码块，`+`代表你需要添加的内容，复制的时候只要把`+`给删除掉就是正常缩进的代码块。
> 5. 在这之前先去网上找一个你最喜欢的表情包

# 修改公告栏

打开`[BlogRoot]\themes\butterfly\layout\includes\widget\card_announcement.pug`这个文件，这就是负责显示公告栏的pug文件。

打开就会像这样子，我的和你们的可能有些许不同，因为我把原来的fontawesom的图标换成了iconfont的图标：

```pug
if theme.aside.card_announcement.enable
  .card-widget.card-announcement
    .item-headline
      i.iconfont.icon-gonggaolanmu
      span= _p('aside.card_announcement')
    .announcement_content!= theme.aside.card_announcement.content
```
> 这个`i.iconfont.icon-gonggaolanmu`不是原来Butterfly自带的，是我后面加上的，看到了没关系，可以接着往下看。

接下来往这里面添加以下内容：

```diff
if theme.aside.card_announcement.enable
  .card-widget.card-announcement
    .item-headline
      i.iconfont.icon-gonggaolanmu
      span= _p('aside.card_announcement')
    .announcement_content!= theme.aside.card_announcement.content
+    p= '🍀全站使用XXX🍀'
+    p= '🍁请勿滥用资源🍁'
+    img(src='换上你自己的表情包地址' width='200' height='195')
```
这样就改好了，记得要清一下缓存，就像这样：

```bash
hexo cl&&hexo s
```
这样就能看到你添加的文字和表情包了，效果如下：

![公告栏](https://i.p-i.vip/68/20250105-677a58445fb55.webp)