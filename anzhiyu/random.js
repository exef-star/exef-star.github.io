var posts=["2024/12/29/2024，再见-2024总结/","2024/06/29/Hexo魔改教程1/","2024/06/10/PCL粗略使用/","2024/08/15/Python-使用Python生成属于你的网站二维码！/","2024/08/31/Python-折腾一下？自制文件夹加密程序/","2024/06/16/Python-检测Minecraft服务器的延迟和在线玩家/","2024/06/02/Python简易计算器/","2024/09/22/Python-配置Python-VSCode代码环境/","2024/06/23/Tkinter扩展Tix和PMW/","2025/01/23/hello-world/","2024/08/17/使用FittenCode来提升你的工作效率/","2024/08/11/公开-Bilibili表情包图片/","2024/12/06/局域网共享文件！chfsgui-exe使用教程/","2024/12/21/我换了域名/","2024/08/09/推荐一下网易云音乐上的歌（无毒）/","2024/07/28/新时代电子文盲——当代人离电脑越来越远了/","2025/01/24/纯靠石粒和同学-期末总结札记/","2024/07/24/记一次B站进度条无法拖动进度条/","2025/01/05/记一次修改Butterfly4-13-0公告栏/","2025/01/29/记一次让Python重复做一个工作-重复打印文本/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };