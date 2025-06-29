document.addEventListener('DOMContentLoaded', function() {
    new Vue({
        data: function () {
            this.$notify({
                title: "最新公告🍯",
                message: "图床叒叒叒证书过期了。。。。<br>已经是第二次了，导致博客的图片显示功能瘫痪<br>已经和图床的盆友联系了一下，不必担心<br>(。﹏。)<br>PS：修好啦o(*≧▽≦)ツ",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "info",
                duration: 5000
            });
        }
    })
});

