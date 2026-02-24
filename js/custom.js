function scrollToTop() {
    btf.scrollToDest(0, 500);
}

//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = '别走啊 (⊙﹏⊙)‼️';
        clearTimeout(titleTime);
    } else {
        //返回当前页面时标签显示内容
        document.title = '欢迎回来 (*^▽^*)✔️';
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});

(function () {
    // ================= 配置区域 =================
    const TARGET_IMG_URL = "https://i.p-i.vip/68/20260219-6996f13605e77.gif";
    const STORAGE_KEY_STATUS = "hexo_motou_active";    // 记录是否开启摸头模式
    const STORAGE_KEY_ORIGIN = "hexo_motou_origin_src"; // 记录原始头像地址
    // ===========================================

    // 获取头像元素 (根据 Butterfly 主题结构)
    function getAvatarElement() {
        // 选择器：侧边栏 -> 卡片 -> 头像容器 -> 图片
        return document.querySelector('.aside-content .card-widget .avatar-img img');
    }

    // 执行替换逻辑
    function enableMotou() {
        const img = getAvatarElement();
        if (img) {
            if (!localStorage.getItem(STORAGE_KEY_ORIGIN)) {
                localStorage.setItem(STORAGE_KEY_ORIGIN, img.src);
            }
            img.src = TARGET_IMG_URL;
            localStorage.setItem(STORAGE_KEY_STATUS, "true");
            console.log("🤪 [Motou] 摸头模式已开启！作者已急哭(*￣︿￣)");
        } else {
            console.error("❌ [Motou] 未找到头像元素。请确认是否在首页，且侧边栏已加载。");
        }
    }

    // 执行恢复逻辑
    function disableMotou() {
        const img = getAvatarElement();
        const originSrc = localStorage.getItem(STORAGE_KEY_ORIGIN);

        if (img && originSrc) {
            img.src = originSrc;
            localStorage.removeItem(STORAGE_KEY_STATUS);
            localStorage.removeItem(STORAGE_KEY_ORIGIN);
            console.log("😇 [Motou] 摸头模式已关闭！作者没急哭！（゜▽＾*））");
        } else if (!originSrc) {
            console.warn("⚠️ [Motou] 未找到原始头像记录，可能从未开启过或记录已丢失。");
        }
    }

    // 核心检查函数（供普通加载和 PJAX 加载复用）
    function runMotouCheck() {
        // 如果未开启模式，直接跳过，节省性能
        if (localStorage.getItem(STORAGE_KEY_STATUS) !== "true") {
            return;
        }

        const img = getAvatarElement();
        if (img && img.src !== TARGET_IMG_URL) {
            // 防御性备份：防止 localStorage 丢失导致无法恢复
            if (!localStorage.getItem(STORAGE_KEY_ORIGIN) && img.src !== TARGET_IMG_URL) {
                localStorage.setItem(STORAGE_KEY_ORIGIN, img.src);
            }
            img.src = TARGET_IMG_URL;
            console.log("🔄 [Motou] PJAX 检测到模式开启，作者又被急哭 (￣︿￣ )");
        }
    }

    // 初始化入口
    function initMotou() {
        // 1. 普通页面加载时的检查
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', runMotouCheck);
        } else {
            // DOM 已就绪，直接执行（加个小延迟确保 Butterfly 侧边栏渲染完成）
            setTimeout(runMotouCheck, 800);
        }

        // 2. 🔥 PJAX 适配：监听 pjax:complete 事件 (Butterfly 主题标准事件)
        // 当 PJAX 加载新页面完成后，重新执行检查逻辑
        document.addEventListener('pjax:complete', function () {
            // PJAX 切换后 DOM 是瞬间替换的，但仍建议微延迟确保图片元素已插入
            setTimeout(runMotouCheck, 500);
        });
    }

    // 暴露全局命令到 window 对象，方便控制台调用
    window.motou = function (status) {
        if (status === true || status === "true") {
            enableMotou();
        } else if (status === false || status === "false") {
            disableMotou();
        } else {
            console.log("📖 用法说明：\n - 开启：motou(true) 或 motou('true')\n - 关闭：motou(false) 或 motou('false')");
        }
    };

    // 启动初始化
    initMotou();

})();