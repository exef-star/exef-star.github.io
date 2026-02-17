NProgress.configure({
    easing: 'ease',
    speed: 400,
    showSpinner: true,
    trickleSpeed: 100,
    minimum: 0.2
});

// 监听 PJAX 事件
document.addEventListener('pjax:send', () => NProgress.start());
document.addEventListener('pjax:complete', () => NProgress.done());

// 监听页面首次加载
document.addEventListener('DOMContentLoaded', () => NProgress.start());
window.addEventListener('load', () => NProgress.done());