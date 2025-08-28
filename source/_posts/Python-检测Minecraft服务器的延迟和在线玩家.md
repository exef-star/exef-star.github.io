---
title: '[Python]检测Minecraft服务器的延迟和在线玩家'
tags:
  - Minecraft
  - Python
categories:
  - Minecraft
description: 利用Python的mcstatus库检测Minecraft服务器在线玩家以及延迟
top_img: 'https://pic.imgdb.cn/item/662c8f020ea9cb140324abd3.png'
cover: 'https://pic.imgdb.cn/item/662c8f020ea9cb140324abd3.png'
abbrlink: 51f8
date: 2024-06-16 16:45:17
---

# 序言

自从下载了Minecraft，就想琢磨一下这玩意能不能加服务器

今天在网上看到了一个库，叫mcstatus，是一个用来检测Minecraft服务器延迟和在线玩家数的PYPI库，具体看仓库

{% btn 'https://gitcode.com/py-mine/mcstatus/overview?utm_source=artical_gitcode',直达链接,far fa-hand-point-right,outline blue larger %}

这个库的语法很简单，基本上官方给的代码去掉注释只有几行代码，这对文件体积来说非常👍nice

# 基本代码

```python
from mcstatus import JavaServer

# 您可以在minecraft地址字段中输入相同的地址到'lookup'函数
# 如果您已知主机和端口，则可以跳过此步骤并直接使用JavaServer("example.org", 1234)
server = JavaServer.lookup("example.com")

# 'status'适用于所有版本1.7及以上Minecraft服务器。
# 不要期望玩家列表总是完整的，因为许多服务器运行插件来隐藏此信息，
# 或限制返回的玩家数量，甚至修改列表以包含虚假玩家，以实现自定义消息功能。
status = server.status()
print(f"服务器有{status.players.online}位在线玩家，响应时间为{status.latency}毫秒")

# 'ping'也适用于所有版本1.7及以上Minecraft服务器。
# 虽然它被包括在'status'调用中，但如果您不需要额外的信息，也可以单独使用。
latency = server.ping()
print(f"服务器响应时间为{latency}毫秒")
```

这里的代码不是原来的，因为最后的第三段代码显示出`socket.timeout: timed out`，这就说明服务器离你有点远

## 改进代码

增加了可以输入域名查询服务器

```python
from mcstatus import JavaServer

print('请输入要测评的Minecraft服务器域名（不能包括http或https开头）')
a = input('>')

# 您可以在minecraft地址字段中输入相同的地址到'lookup'函数
# 如果您已知主机和端口，则可以跳过此步骤并直接使用JavaServer("example.org", 1234)
server = JavaServer.lookup(a)

# 'status'适用于所有版本1.7及以上Minecraft服务器。
# 不要期望玩家列表总是完整的，因为许多服务器运行插件来隐藏此信息，
# 或限制返回的玩家数量，甚至修改列表以包含虚假玩家，以实现自定义消息功能。
status = server.status()
print(f"服务器有{status.players.online}位在线玩家，响应时间为{status.latency}毫秒")

# 'ping'也适用于所有版本1.7及以上Minecraft服务器。
# 虽然它被包括在'status'调用中，但如果您不需要额外的信息，也可以单独使用。
latency = server.ping()
print(f"服务器响应时间为{latency}毫秒")
```