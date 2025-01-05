// 监听 window.onload 事件
window.onload = function() {
    new Vue({
        data: function () {
            this.$notify({
                title: "当前版本：1.10🌿",
                message: "当前为最新版本，并且优化了FPS、修改了公告栏、使用CloudFlare CDN加速网站🍃",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "success",
                duration: 5000
            });
        }
    })
};