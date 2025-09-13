console.info("%cINFO%c Validating config", "color: green;", "");
console.log(" %c Hanta %c 5.4.3 %c https://blog.hanta2011.top/", "background:#A8D6D2 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", "background:#fff ; padding: 1px; border-radius: 0 3px 3px 0;  color: #67717d", "background:unset ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff");
const validDomain = 'blog.hanta2011.top';
const redirectUrl = 'https://blog.hanta2011.top';
const hostname = document.location.hostname;
const isLocalHost = (hostname === 'localhost' || hostname === 'blog-1.hanta2011.top' || hostname === 'blog-2.hanta2011.top' || hostname === 'hanta.hanta2011.top');

// 输出格式化控制台消息，便于测试
const GENUINE_LEFT_STYLE = "color: #d1fae5; background: #064e3b; padding:5px 0;";
const GENUINE_RIGHT_STYLE = "color: #064e3b; background: #d1fae5; padding:5px 0;";
const GENUINE_MESSAGE_TEMPLATE = `  
%c hanta2011.top 镜像反制措施 %c V0.4.1 `;
console.log(
    GENUINE_MESSAGE_TEMPLATE,
    GENUINE_LEFT_STYLE,
    GENUINE_RIGHT_STYLE
);

// 检查项1：域名合法性检查
// 精确提取域名后缀
const domainParts = hostname.split('.');
const validDomainParts = validDomain.split('.').length;
const baseDomain = domainParts.slice(-validDomainParts).join('.');
if (!isLocalHost && baseDomain !== validDomain) {
    createWatermark(validDomain)
    const userResponse = confirm(`警告：本页面非官方页面，可能存在有害信息！建议您立即跳转 ${validDomain} 并向站长举报该冒牌镜像站！`);
    if (userResponse) {
        window.location.replace(redirectUrl);
    }
}

// 检查项2：此时网页是否在 iframe 中
if (window.top !== window.self) {
    const userResponse = confirm(`检测到页面被嵌套在iframe中，这通常是恶意网站行为！请在独立窗口访问 ${validDomain}。`);
    if (userResponse) {
        window.open(redirectUrl, '_blank');
    }
}

/**
 水印生成函数
 */
function createWatermark(text) {
    const watermarkDiv = document.createElement('div');
    watermarkDiv.style.pointerEvents = 'none';
    watermarkDiv.style.position = 'fixed';
    watermarkDiv.style.top = '0';
    watermarkDiv.style.left = '0';
    watermarkDiv.style.width = '100%';
    watermarkDiv.style.height = '100%';
    watermarkDiv.style.zIndex = '9999';
    watermarkDiv.style.opacity = '0.35';
    watermarkDiv.style.background = 'transparent';
    watermarkDiv.style.overflow = 'hidden';
    watermarkDiv.style.display = 'flex';
    watermarkDiv.style.justifyContent = 'center';
    watermarkDiv.style.alignItems = 'center';
    watermarkDiv.style.flexWrap = 'wrap';

    const watermarkText = document.createElement('div');
    watermarkText.innerText = text;
    watermarkText.style.color = '#8d8d8d';
    watermarkText.style.fontSize = '30px';
    watermarkText.style.transform = 'rotate(-30deg)';
    watermarkText.style.whiteSpace = 'nowrap';
    watermarkText.style.margin = '20px';
    // 文本阴影（增加干扰）
    watermarkText.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.5)';

    for (let i = 0; i < 100; i++) {
        watermarkDiv.appendChild(watermarkText.cloneNode(true));
    }

    document.body.appendChild(watermarkDiv);
}
