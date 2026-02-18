let talkTimer = null;

const cacheKey = 'talksCache';
const cacheTimeKey = 'talksCacheTime';
const cacheDuration = 30 * 60 * 1000; // 缓存有效期 30分钟

function indexTalk() {
    if (talkTimer) {
        clearInterval(talkTimer);
        talkTimer = null;
    }

    if (!document.getElementById('bber-talk')) return;

    function toText(ls) {
        return ls.map(item => {
            let c = item.content || '';

            const hasImg = /\!\[.*?\]\(.*?\)/.test(c);
            const hasLink = /\[.*?\]\(.*?\)/.test(c);

            c = c
                .replace(/#(.*?)\s/g, '')
                .replace(/\{.*?\}/g, '')
                .replace(/\!\[.*?\]\(.*?\)/g, '<i class="fa-solid fa-image"></i>')
                .replace(/\[.*?\]\(.*?\)/g, '<i class="fa-solid fa-link"></i>');

            const icons = [];

            if (item.images?.length && !hasImg) icons.push('fa-solid fa-image');
            if (item.extension_type === 'VIDEO') icons.push('fa-solid fa-video');
            if (item.extension_type === 'MUSIC') icons.push('fa-solid fa-music');
            if (item.extension_type === 'WEBSITE' && !hasLink) icons.push('fa-solid fa-link');
            if (item.extension_type === 'GITHUBPROJ' && !hasLink) icons.push('fab fa-github');

            if (icons.length) c += ' ' + icons.map(i => `<i class="${i}"></i>`).join(' ');
            return c;
        });
    }

    // 渲染与轮播
    function talk(ls) {
        let html = '';
        ls.forEach((item, i) => {
            html += `<li class="item item-${i + 1}">${item}</li>`;
        });

        let box = document.querySelector("#bber-talk .talk-list");
        if (!box) return;

        box.innerHTML = html;

        talkTimer = setInterval(() => {
            if (box.children.length > 0) {
                box.appendChild(box.children[0]);
            }
        }, 3000);
    }

    const cachedData = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    const currentTime = new Date().getTime();

    // 判断缓存是否有效
    if (cachedData && cachedTime && (currentTime - cachedTime < cacheDuration)) {
        const data = toText(JSON.parse(cachedData));
        talk(data.slice(0, 6)); // 使用缓存渲染数据
    } else {
        fetch('https://ech0.hanta2011.top/api/echo/page', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ page: 1, pageSize: 30 })
        })
            .then(res => res.json())
            .then(data => {
                // 适配新版结构：code=1 且 data.items 存在
                if (data.code === 1 && data.data && Array.isArray(data.data.items)) {
                    localStorage.setItem(cacheKey, JSON.stringify(data.data.items));
                    localStorage.setItem(cacheTimeKey, currentTime.toString());

                    const formattedData = toText(data.data.items);
                    talk(formattedData.slice(0, 6));
                } else {
                    console.warn('Unexpected API response format:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }
}

// pjax 支持
function whenDOMReady() {
    indexTalk();
}

whenDOMReady();
document.addEventListener("pjax:complete", whenDOMReady);
