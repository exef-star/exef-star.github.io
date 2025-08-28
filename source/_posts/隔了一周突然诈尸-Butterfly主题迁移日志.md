---
title: 从安知鱼迁回Butterflyの札记
tags: 前端
categories: 前端
description: 一周过去了，直接一个诈尸行为
cover: 'https://i.p-i.vip/68/20250828-68b020f5a08dc.webp'
swiper_index: 6
abbrlink: 13472
date: 2025-08-25 17:17:58
---

# 前言

实在抱歉，没有搞清楚状况就直接发了一个停更通知，事情变故有点快，是我没有料及到的，目前更新状态将持续到这个月结束才是停更状态，在这里向大家说声`对不起`

言归正传，早在一个月前，我就发现了我的博客主题的`Bug`，当访客跳转到详情页的时候会直接导致整个网页的图片（不包括顶部图）全部都不加载。另外一个小通病就是只要不是从主页链接点击进来的而是直接顺着文章的链接过来时就会出现背景消失的情况，即时在css中加了`!important`样式之后也还是无济于事。最为严重的是就在我发出暂时性通知后和加了看板娘之后，全站图片彻底崩溃消失。`于是`！在我{% psw 诈尸 %}的这几天中，我便一直很怀念`Butterfly`的稳定性，即使手上还有安知鱼主题的存档，但我还是想要回去看一下现在的`Butterfly`主题现在到底怎么样了。

![呜呜呜图片没了](https://i.p-i.vip/68/20250827-68aecba91e8ed.webp)

单开了一个文件夹用来存放博客主题，克隆了`Butterfly`的主题仓库，美化之旅也正式开始. . .

{% note primary simple %}
魔改须知！！！

- 魔改前需备份博客文件，魔改一时爽，改废火葬场！
- 如果出现问题可以按下键盘上的{% kbd F12 %}打开浏览器调试工具，查看报错信息，解决问题后再进行下一步操作。当然这招并不是百试百灵，还需要结合Hexo控制台的输出进行结合
- 美化的同时注意一下性能与外观的结合，避免改的页面过于花哨造成卡顿影响阅读体验，避免影响博客的加载速度。
- 没有什么可以说的了，尽情发挥！！！
{% endnote %}

# 配置文件速读

{% note primary simple %}
这里只选取我修改过觉得比较好的地方，建议是直接将_config.yml文件需要改动的地方复制过来再进行修改，这样由于主配置文件改废了之后还可以对照着主题配置文件进行修改。
{% endnote %}

`_config.butterfly.yml`

```yml
font:
  global_font_size: 15px
  code_font_size: 15px
  font_family: LXGW WenKai, LXGW WenKai, "LXGW WenKai", "LXGW WenKai", Lato, Roboto, "LXGW WenKai", "LXGW WenKai", "LXGW WenKai", sans-serif
  code_font_family: consolas, Menlo, "LXGW WenKai", "LXGW WenKai", "LXGW WenKai", sans-serif

# hexo-abbrlink
abbrlink:
  alg: crc32      #支持crc16和crc32算法（默认crc16）
  rep: hex        #支持dec和hex值（默认dec）
  drafts: false   #(true)Process draft,(false)Do not process draft. false(default) 
  # Generate categories from directory-tree
  # depth: the max_depth of directory-tree you want to generate, should > 0
  auto_category:
     enable: true  #true(default)
     depth:        #3(default)
     over_write: false 
  auto_title: false #enable auto title, it can auto fill the title by path
  auto_date: false #enable auto date, it can auto fill the date by time today
  force: false #enable force mode,in this mode, the plugin will ignore the cache, and calc the abbrlink for every post even it already had abbrlink.

# https://umami.is/
umami_analytics:
  enable: true
  # For self-hosted setups, configure the hostname of the Umami instance
  serverURL: xxx
  website_id: xxx
  option:
  UV_PV:
    site_uv: true
    site_pv: true
    page_pv: true
    # Umami Cloud (API key) / self-hosted Umami (token)
    token: 自己获取，不给~
```

`_config.yml`（主题文件夹下的）

```yml
# CDN Settings
# Don't modify the following settings unless you know how they work
CDN:
  # The CDN provider for internal and third-party scripts
  # Options for both: local/jsdelivr/unpkg/cdnjs/custom
  # Note: Dev version can only use 'local' for internal scripts
  # Note: When setting third-party scripts to 'local', you need to install hexo-butterfly-extjs
  internal_provider: local
  third_party_provider: custom

  # Add version number to url, true or false
  version: false

  # Custom format
  # For example: https://cdn.staticfile.org/${cdnjs_name}/${version}/${min_cdnjs_file}
  custom_format: https://cdnjs.onmicrosoft.cn/ajax/libs/${cdnjs_name}/${version}/${min_cdnjs_file}

  option:
    # abcjs_basic_js:
    # activate_power_mode:
    # algolia_js:
    # algolia_search:
    # aplayer_css:
    # aplayer_js:
    # artalk_css:
    # artalk_js:
    # blueimp_md5:
    # busuanzi:
    # canvas_fluttering_ribbon:
    # canvas_nest:
    # canvas_ribbon:
    # chartjs:
    # click_heart:
    # clickShowText:
    # disqusjs:
    # disqusjs_css:
    # docsearch_css:
    # docsearch_js:
    # egjs_infinitegrid:
    # fancybox:
    # fancybox_css:
    # fireworks:
    # fontawesome:
    # gitalk:
    # gitalk_css:
    # giscus:
    # instantpage:
    # instantsearch:
    # katex:
    # katex_copytex:
    # lazyload:
    # local_search:
    # main:
    # main_css:
    # mathjax:
    # medium_zoom:
    # mermaid:
    # meting_js:
    # prismjs_autoloader:
    # prismjs_js:
    # prismjs_lineNumber_js:
    # pjax:
    # sharejs:
    # sharejs_css:
    # snackbar:
    # snackbar_css:
    # translate:
    # twikoo:
    # typed:
    # utils:
    # valine:
    # waline_css:
    # waline_js:
```

`_config.yml`（博客根目录下的）

```yml
# _config.yml
OhMyLive2d:
  enable: true
  CDN: https://registry.npmmirror.com/oh-my-live2d/latest/files
  # CDN: https://registry.npmmirror.com/oh-my-live2d/0.13/files/dist/index.min.js
  option:
    # importType: 'cubism2' #  导入类型, 默认使用全量导入: complete , 可选值: complete, cubism2, cubism5
    libraryUrls: # 自定义 Cubism SDK 外部资源地址
      complete: https://registry.npmmirror.com/oh-my-live2d/latest/files/lib/complete.js
      cubism2: https://registry.npmmirror.com/oh-my-live2d/latest/files/lib/cubism2.js
      cubism5: https://registry.npmmirror.com/oh-my-live2d/latest/files/lib/cubism5.js
    # menus:
    # items: |
    #   (defaultItems)=>{
    #    return [
    #      ...defaultItems,
    #      {
    #        id: 'github',
    #        icon: 'github-fill',
    #        title: '我的github',
    #        onClick: ()=>window.open('https://github.com/hacxy')
    #      }
    #    ]
    #   }

    # items:
    #   - id: 'github'
    #     icon: 'github-fill'
    #     title: '我的github'
    #     onClick: ()=>window.open('https://github.com/hacxy')

    mobileDisplay: false # 是否在移动端显示
    models:
      - path: /live2d-model-vertin/vertin.model3.json
        mobilePosition: [-10, 23] # 移动端时模型在舞台中的位置。 默认值: [0,0] [横坐标, 纵坐标]
        mobileScale: 0.5 # 移动端时模型的缩放比例 默认值: 0.1
        mobileStageStyle: # 移动端时舞台的样式
          width: 180
          height: 166
        motionPreloadStrategy: IDLE # 动作预加载策略 默认值: IDLE 可选值: ALL | IDLE | NONE
        position: [-150, -30] # 模型在舞台中的位置。 默认值: [0,0] [横坐标, 纵坐标]
        scale: 0.4 # 模型的缩放比例 默认值: 0.1
        # showHitAreaFrames: false # 是否显示点击区域 默认值: false
        stageStyle:
          width: 250
          height: 250
    parentElement: document.body #为组件提供一个父元素，如果未指定则默认挂载到 body 中
    primaryColor: 'var(--btn-bg)' # 主题色 支持变量
    sayHello: false # 是否在初始化阶段打印项目信息
    tips:
      style:
        width: 200
        height: 60
        left: calc(50% - 20px)
        top: -100px
      mobileStyle:
        width: 180
        height: 80
        left: calc(50% - 30px)
        top: -100px
      idleTips:
        interval: 1500
        # message:
        #   - 你好呀~
        #   - 欢迎来到我的小站~
        # 自定义提示语 需要 引入 axios 库 ,也可以使用其他方法
        message: |
          function(){
            return axios.get('https://v1.hitokoto.cn?c=i')
              .then(function (response) {
                return response.data.hitokoto ;
              })
              .catch(function (error) {
                console.error(error);
              });
          }
        # wordTheDay: true
        # 自定义  https://v1.hitokoto.cn  数据
        # wordTheDay: |
        #   function(wordTheDayData){
        #     return `${wordTheDayData.hitokoto}    by.${wordTheDayData.from}`;
        #   }
  # then: |
  #   (oml2d)=>{
  #      setTimeout(() => {
  #     oml2d.tipsMessage('hello world', 3000, 10);
  #   }, 8000);
  #   }
```

# 配置文件修改项

## Umami Analytics

```yml
# https://umami.is/
umami_analytics:
  enable: false
  # 在私有部署中，请配置Umami的域名
  serverURL: 你的umami主页域名
  website_id: 你的网站的ID
  option:
  # 类似于不蒜子的访客统计，取决于你的Umami的速度，可以代替不蒜子
  UV_PV:
    site_uv: false
    site_pv: false
    page_pv: false
    # Umami官方 (API key) / 私有部署的Umami (token)
    token: xxx
```

在`Butterfly 5.0`中，主题加入了`Umami集成`，你可以在主题中填写Umami的配置，来统计网站的访问量、访客量、页面浏览量。以下是配置项的说明：

- `enable`: Umami统计的开关，默认`false`
- `serverURL`: Umami的主页域名，例如`https://xxx.yourdomain.com`
- `website_id`: 你的网站的ID，在Umami的`设置` -> `网站` -> 你的网站旁的`编辑` -> `网站ID`中获取
- `option`: 其他Umami的配置项，暂时没有用到，可以忽略
- `site_uv`: 是否统计网站的独立访客数，默认`false`（前提为你配置了`token`项，否则会获取失败）
- `site_pv`：是否统计网站的页面浏览量，默认`false`（前提为你配置了`token`项，否则会获取失败）
- `page_pv`：是否统计网页的访客量，默认`false`（前提为你配置了`token`项，否则会获取失败）
- `token`：Umami的token。

关于私有部署`token`的获取，你可以在`Python`中运行这些代码：

```python
import requests
import json
url = "你的Umami主页域名"
requestData={
    "username": "你需要统计的网站所处的用户的登陆用户名",
    "password": "你需要统计的网站所处的用户的登陆密码"
}
header = {
            "content-type": "application/json",
        }
res = requests.post(url=url, data=json.dumps(requestData), headers=header)
print(res.text)
```

运行后会得到这么一串`json`（这里整理过了）：
```json
{
  "token": "xxx",
  "user": {
    "id": "xxx",
    "username": "xxx",
    "role": "xxx",
    "createdAt": "xxx",
    "isAdmin": xxx
  }
}
```

`token`项后面的值就是我们要的`token`了，填进去，就可以看到相应的值，填上去就可以用了。

至于`token`的安全问题，据官方所说，这个`token`是用来进行调用的，而不是用来存储敏感信息的，所以安全性应该是没有问题的。

## 基于Umami替代不蒜子

前面的配置文件中`umami_analytics`里有这三条配置：

```yml
    site_uv: false
    site_pv: false
    page_pv: false
```

如果你配置了`Umami`的`Token`或`API Key`和`serverURL`、`website_id`这些，又希望替代不蒜子的访客统计，就可以开启这三个选项，开启后会调用你的`Umami`，替代不蒜子的统计。可以有效的加快你的博客加载速度，当然这取决于你的Umami的速度。效果如下：

![](https://i.p-i.vip/68/20250827-68aec03318d7a.webp)

## 字体的修改

如果你和我一样，觉得原本的字体实在不好看，想要尝试一下`霞鹜文楷`这个优雅的字体的话，可以直接跟着我的步骤修改：

1. 在你的配置文件中的`inject`中的`head`引入这个（将加号删除就是正常缩进，在此感谢`ZSFT(ZeoSeven™ Fonts)`提供的字体CDN）：
```diff
inject:
  head:
+    - <link rel='stylesheet' href='https://fontsapi.zeoseven.com/292/main/result.css' />
```

2. 将你的配置文件项里的`font`替换为如下格式，`global_font_size`和`code_font_size`按照自己的需求来调就行：

```yml
font:
  global_font_size: 15px
  code_font_size: 15px
  font_family: LXGW WenKai, LXGW WenKai, "LXGW WenKai", "LXGW WenKai", Lato, Roboto, "LXGW WenKai", "LXGW WenKai", "LXGW WenKai", sans-serif
  code_font_family: consolas, Menlo, "LXGW WenKai", "LXGW WenKai", "LXGW WenKai", sans-serif
```

## 生成短链接

在这之前，你需要安装`hexo-abbrlink`插件：

```bash
npm install hexo-abbrlink --save
```

进入到你的`博客根目录`下的`config.yml`，修改`permalink`一项为：

```yml
permalink: posts/:abbrlink.html
```

然后在你的配置文件`_config.butterfly.yml`中配置`abbrlink`：

```yml
# hexo-abbrlink
abbrlink:
  alg: crc32      #支持crc16和crc32算法（默认crc16）
  rep: hex        #支持dec和hex值（默认dec）
  drafts: false   #（true）处理草稿，（false）不处理草稿。false（默认）
  # 从目录树生成分类
  # depth：要生成的目录树的最大深度，应大于 0
  auto_category:
     enable: true  #true(default)
     depth:        #3(default)
     over_write: false 
  auto_title: false #启用自动标题，可以根据路径自动填充标题。
  auto_date: false #启用自动日期，可以根据日期自动填充。
  force: false #启用强制模式，在此模式下，插件将忽略缓存，并为每篇文章重新计算生成链接，即使文章已经有了链接。
```

然后直接Hexo一键三连：

```bash
hexo cl&&hexo g&&hexo s
```

此时`abbrlink`会生成一个短链接，这样做的目的就是为了让你的文章链接更短，从而达到优化SEO的目的。

## CDN的替换

通过`Butterfly`配置文件的注释，我们可以知道`Butterfly`的第三方`CDN`主要为`cdnjs`。但是有一个很容易误导新手的一个地方，`staticfile`的`CDN`是没有`/ajax/libs/`这个的，这就导致了新手只是将其他的镜像域名替换原来的`staticfile`就完事了，但是运行一看，博客的UI元素像是被大运创飞了一样，这就很难受了。但是又因为`staticfile`的投毒，就{% psw 总感觉有无数双眼睛在盯着我 %}。

但是，在最后，突然想到：既然是cdnjs的源，是不是可以借鉴一下原来的`cdnjs`链接。我们便可以得到以下拆解：

![](https://i.p-i.vip/68/20250827-68aec7114c643.webp)

```
https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js
https://cdnjs.cloudflare.com/ajax/libs/${cdnjs_name}/${version}/${min_cdnjs_file}
```

刚好，渺软CDN的格式和这个大差不差：

```
https://cdnjs.onmicrosoft.cn/ajax/libs/aplayer/1.10.1/APlayer.min.js
https://cdnjs.onmicrosoft.cn/ajax/libs/${cdnjs_name}/${version}/${min_cdnjs_file}
```

因此，我们就可以得到以下配置：

```uml
CDN:
  # 自定义资源
  # 例如：https://cdn.staticfile.org/${cdnjs_name}/${version}/${min_cdnjs_file}
  custom_format: https://cdnjs.onmicrosoft.cn/ajax/libs/${cdnjs_name}/${version}/${min_cdnjs_file}
```

这样我们访问博客时就会快的很多，可以有效的提升网站的加载速度。

# 博客看板娘

{% note primary simple %}
`在这里感谢[@红柚不是红袖](https://space.bilibili.com/23499284)提供的小维Live2D模型，原链接如下：`[领养一只属于你的小维](https://www.bilibili.com/video/BV1Yf421m7CD/)，支持原作者，三连已奉上！
![](https://i.p-i.vip/68/20250827-68aecd5f82233.webp)
{% endnote %}

配置完主题后，感觉到有点空，想着加一个看板娘，需要满足简易，支持隐藏，以及文件自定义模型的要求。果断选择了[hexo-oh-my-live2d](https://github.com/kongxiangyiren/hexo-oh-my-live2d)，很好，很喜欢。

如果想要免费的Live2D模型，其实有个最广，并且最全面的地方——[Bilibili](https://search.bilibili.com)，上面有很多画师上传的免费模型的介绍视频，一般在简介或者评论区（置顶）就有下载链接。肥肠好用！

需要注意的是，有些模型明确标注出了不可商用的字样，如果你的博客存在盈利情况的话，就需要找一款可以商用的皮肤了，由于我的博客没有广告等这些盈利项目，所以可以直接用，只需要通知一下画师就好了，这里再次感谢`@红柚不是红袖`的`小维Live2D模型`，人非常好，发出去消息后等了几个小时就告诉我可以用的，在此感谢！

![](https://i.p-i.vip/68/20250827-68aecfe156226.webp)

配置很简单，先安装`hexo-oh-my-live2d`插件：

```bash
npm install oh-my-live2d
```

在`[博客根目录]\source`下新建一个文件夹，名为`live2d-model-xxx（你的模型英文名）`，先解压你获得的压缩包到一个文件夹，我解压出来的文件是这样的：

```
小维正式版
├─ ico_小维正式版.png
├─ 小维正式版.1024
│  └─ texture_00.png
├─ 小维正式版.cdi3.json
├─ 小维正式版.moc3
├─ 小维正式版.model3.json
└─ 小维正式版.physics3.json
```

也就是

```
[解压出来的Live2D模型文件夹根目录]
├─ xxx.png
├─ xxx.分辨率
│  └─ texture_00.png
├─ xxx.cdi3.json
├─ xxx.moc3
├─ xxx.model3.json
└─ xxx.physics3.json
```

而我们则需要这些文件：

```
├─ xxx.分辨率
│  └─ texture_00.png
├─ xxx.moc3
├─ xxx.model3.json
└─ xxx.physics3.json
```

也就是

```
├─ 小维正式版.1024
│  └─ texture_00.png
├─ 小维正式版.moc3
├─ 小维正式版.model3.json
└─ 小维正式版.physics3.json
```

把这些放进我们刚刚创建的`live2d-model-xxx`里，然后打开博客根目录下的`_config.yml`，在末尾添加以下内容：

```yml
# _config.yml
OhMyLive2d:
  enable: true
  CDN: https://registry.npmmirror.com/oh-my-live2d/latest/files
  # CDN: https://registry.npmmirror.com/oh-my-live2d/0.13/files/dist/index.min.js
  option:
    # importType: 'cubism2' #  导入类型, 默认使用全量导入: complete , 可选值: complete, cubism2, cubism5
    libraryUrls: # 自定义 Cubism SDK 外部资源地址
      complete: https://registry.npmmirror.com/oh-my-live2d/latest/files/lib/complete.js
      cubism2: https://registry.npmmirror.com/oh-my-live2d/latest/files/lib/cubism2.js
      cubism5: https://registry.npmmirror.com/oh-my-live2d/latest/files/lib/cubism5.js
    # menus:
    # items: |
    #   (defaultItems)=>{
    #    return [
    #      ...defaultItems,
    #      {
    #        id: 'github',
    #        icon: 'github-fill',
    #        title: '我的github',
    #        onClick: ()=>window.open('https://github.com/hacxy')
    #      }
    #    ]
    #   }

    # items:
    #   - id: 'github'
    #     icon: 'github-fill'
    #     title: '我的github'
    #     onClick: ()=>window.open('https://github.com/hacxy')

    mobileDisplay: false # 是否在移动端显示
    models:
      - path: /live2d-model-xxx/xxx.model3.json # 模型文件路径
        mobilePosition: [-10, 23] # 移动端时模型在舞台中的位置。 默认值: [0,0] [横坐标, 纵坐标]
        mobileScale: 0.5 # 移动端时模型的缩放比例 默认值: 0.1
        mobileStageStyle: # 移动端时舞台的样式
          width: 180
          height: 166
        motionPreloadStrategy: IDLE # 动作预加载策略 默认值: IDLE 可选值: ALL | IDLE | NONE
        position: [-150, -30] # 模型在舞台中的位置。 默认值: [0,0] [横坐标, 纵坐标] | 可以将这个理解为模型的偏移值
        scale: 0.4 # 模型的缩放比例 默认值: 0.1 | 这里调大了一点，默认的0.1非常小，调试区间在0.1~1.0区间
        # showHitAreaFrames: false # 是否显示点击区域 默认值: false
        stageStyle:
          width: 250
          height: 250
    parentElement: document.body #为组件提供一个父元素，如果未指定则默认挂载到 body 中
    primaryColor: 'var(--btn-bg)' # 主题色 支持变量
    sayHello: false # 是否在初始化阶段打印项目信息
    tips:
      style:
        width: 200
        height: 60
        left: calc(50% - 20px)
        top: -100px
      mobileStyle:
        width: 180
        height: 80
        left: calc(50% - 30px)
        top: -100px
      idleTips:
        interval: 1500
        # message:
        #   - 你好呀~
        #   - 欢迎来到我的小站~
        # 自定义提示语 需要 引入 axios 库 ,也可以使用其他方法
        message: |
          function(){
            return axios.get('https://v1.hitokoto.cn?c=i')
              .then(function (response) {
                return response.data.hitokoto ;
              })
              .catch(function (error) {
                console.error(error);
              });
          }
        # wordTheDay: true
        # 自定义  https://v1.hitokoto.cn  数据
        # wordTheDay: |
        #   function(wordTheDayData){
        #     return `${wordTheDayData.hitokoto}    by.${wordTheDayData.from}`;
        #   }
  # then: |
  #   (oml2d)=>{
  #      setTimeout(() => {
  #     oml2d.tipsMessage('hello world', 3000, 10);
  #   }, 8000);
  #   }
```

重点看这三个选项：
- `path`：模型的路径，这里我们把模型放到了`[博客根目录]\source\live2d-model-xxx`文件夹下，所以这里填写`live2d-model-xxx/xxx.model3.json`，需要确保你有`xxx.model3.json`这个文件。
- `position`：模型在舞台中的位置。 默认值: `[0,0]` [横坐标, 纵坐标]，你可以将这个理解为模型的偏移值，会有一个限定的透明边框的容器，一旦超出了这个边框，模型就会显示不全，所以需要调整模型的位置。
- `scale`：模型的缩放，区间在`0.1~1.0`之间

调好之后进行Hexo三连：

```bash
hexo cl&&hexo g&&hexo s
```

`hexo g`的目的是为了让看板娘都能生成在每个页面上。

在游览器中看一下，芜湖~，可爱捏~

![](https://i.p-i.vip/68/20250828-68b012f5d73ee.webp)

# 一些我魔改的地方和链接

- `配置文件`：[Butterfly 文档(三) 主题配置](https://butterfly.js.org/posts/4aa8abbe/)
- `页脚`：[Butterfly_一图流背景与页脚美化](https://www.almango.cn/posts/butterfly_%E4%B8%80%E5%9B%BE%E6%B5%81%E8%83%8C%E6%99%AF%E4%B8%8E%E9%A1%B5%E8%84%9A%E7%BE%8E%E5%8C%96/)
- `iconfont引入`：[Butterfly 文档(六) 进阶教程](https://butterfly.js.org/posts/4073eda/)
- `首页文章滚动`：[Swiper Bar](https://akilar.top/posts/8e1264d1/)
- `首页文章分类`：[教程：hexo-magnet 插件 1.0](https://zfe.space/post/hexo-magnet.html)
- `新的标签外挂`：[Tag Plugins Plus](https://akilar.top/posts/615e2dec/)
- `版权美化`：[Butterfly主题博客魔改美化教程总览（一）](https://blog.3ms.run/archives/2fff1258.html)
- `Live2D看板娘`：[在 hexo 中使用](https://oml2d.hacxy.cn/guide/hexo.html)

# 效果

{% folding green, 点我查看QwQ %}
![](https://i.p-i.vip/68/20250828-68b01f35c8534.webp)
![](https://i.p-i.vip/68/20250828-68b01f5c4a4cf.webp)
![](https://i.p-i.vip/68/20250828-68b01f662479a.webp)
![](https://i.p-i.vip/68/20250828-68b01f717f5c4.webp)
{% endfolding %}

# 后记

由于换了`abbrlink`，博客评论有一些没能迁移过来，呜呜呜. . .

# 封面图

![](https://i.p-i.vip/68/20250828-68b020f5a08dc.webp)