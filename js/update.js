document.addEventListener('DOMContentLoaded', function() {
    new Vue({
        data: function () {
            this.$notify({
                title: "当前版本为 1.17（留言板更新）🍵",
                message: "🎂详情请见博客の更新日志！🍰",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "success",
                duration: 5000
            });
        }
    })
});

