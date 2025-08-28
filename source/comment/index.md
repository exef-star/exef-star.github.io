---
title: 留言板QwQ
date: 2025-08-24 18:52:02
---

![](https://i.p-i.vip/68/20250602-683d7a33a5b09.webp)

{% span center logo large, 欢迎来到留言板！ %}

<div style="text-align: center; border: 2px solid #8c8c8c; padding: 20px; width: 100%;">
    <span style="font-size: 20px; line-height: 1.6;color: #8c8c8c; text-align: center;">꧁༺金句༻꧂ </span>
    <p id="hitokoto" style="font-size: 20px; line-height: 1.6; color: #8c8c8c; text-align: center;"><p id="hitokoto_text" style="color: #8c8c8c; text-align: center;">:D 获取中...</p></p>
    <script>
        fetch('https://v1.hitokoto.cn')
          .then(response => response.json())
          .then(data => {
            const hitokoto = document.querySelector('#hitokoto_text')
            hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
            hitokoto.innerText = data.hitokoto
          })
          .catch(console.error)
    </script>
</div>

> 由于~~某不知名的 Hexo Bug~~，因此重写留言板页面！

这里是网站的留言板，主要用于关于友链的替换、网站情况变换告知以及看完之后的一些闲聊（*＾-＾*）

如果有什么**想说的**、**想问的**或者**发现了本站的BUG**，欢迎留言告知(′▽`〃)

如果想要添加友链的话，请在[申请友链](https://blog.hanta2011.top/addyoulian/)评论区留言(*^▽^*)

**以下是留言板守则**：

{% folding green, 留言板守则 %}
- **文明发言**：使用文明用语，禁止辱骂、人身攻击、恶意诋毁等不文明行为，共同维护友善交流氛围。​
- **遵守法规**：严禁发布违反国家法律法规、宣扬暴力、色情、恐怖主义等有害内容，不传播谣言及不实信息。​
- **主题相关**：留言内容需围绕留言板主题，避免发布无关信息，不得发送广告、刷屏内容，保持版面整洁有序。​
- **尊重隐私**：不得泄露他人隐私信息，包括但不限于姓名、联系方式、住址等，未经授权禁止公开他人资料。​
- **违规处理**：违反本守则的留言将被删除，严重违规者将限制或取消留言权限，并保留追究法律责任的权利。
{% endfolding %}