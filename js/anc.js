document.addEventListener('DOMContentLoaded', function() {
    new Vue({
        data: function () {
            this.$notify({
                title: "最新公告🍯",
                message: "开了个全球线路，使用了Cloudflare的Pages，可以在左上角的六个点中的线路找到！",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "info",
                duration: 5000
            });
        }
    })
});

