function renderTalks() {
    const talkContainer = document.querySelector('#talk');
    if (!talkContainer) return;
    talkContainer.innerHTML = '';
    const generateIconSVG = () => {
        return `<svg viewBox="0 0 512 512"xmlns="http://www.w3.org/2000/svg"class="is-badge icon"><path d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z"fill="#1da1f2"></path></svg>`;
    }
    const waterfall = (a) => {
        function b(a, b) {
            var c = window.getComputedStyle(b);
            return parseFloat(c["margin" + a]) || 0
        }

        function c(a) {
            return a + "px"
        }

        function d(a) {
            return parseFloat(a.style.top)
        }

        function e(a) {
            return parseFloat(a.style.left)
        }

        function f(a) {
            return a.clientWidth
        }

        function g(a) {
            return a.clientHeight
        }

        function h(a) {
            return d(a) + g(a) + b("Bottom", a)
        }

        function i(a) {
            return e(a) + f(a) + b("Right", a)
        }

        function j(a) {
            a = a.sort(function (a, b) {
                return h(a) === h(b) ? e(b) - e(a) : h(b) - h(a)
            })
        }

        function k(b) {
            f(a) != t && (b.target.removeEventListener(b.type, arguments.callee), waterfall(a))
        }
        "string" == typeof a && (a = document.querySelector(a));
        var l = [].map.call(a.children, function (a) {
            return a.style.position = "absolute", a
        });
        a.style.position = "relative";
        var m = [];
        l.length && (l[0].style.top = "0px", l[0].style.left = c(b("Left", l[0])), m.push(l[0]));
        for (var n = 1; n < l.length; n++) {
            var o = l[n - 1],
                p = l[n],
                q = i(o) + f(p) <= f(a);
            if (!q) break;
            p.style.top = o.style.top, p.style.left = c(i(o) + b("Left", p)), m.push(p)
        }
        for (; n < l.length; n++) {
            j(m);
            var p = l[n],
                r = m.pop();
            p.style.top = c(h(r) + b("Top", p)), p.style.left = c(e(r)), m.push(p)
        }
        j(m);
        var s = m[0];
        a.style.height = c(h(s) + b("Bottom", s));
        var t = f(a);
        window.addEventListener ? window.addEventListener("resize", k) : document.body.onresize = k
    };

    const fetchAndRenderTalks = () => {
        const url = 'https://ech0.hanta2011.top/api/echo/page';
        const cacheKey = 'talksCache';
        const cacheTimeKey = 'talksCacheTime';
        const cacheDuration = 30 * 60 * 1000;
        const cachedData = localStorage.getItem(cacheKey);
        const cachedTime = localStorage.getItem(cacheTimeKey);
        const now = Date.now();

        if (cachedData && cachedTime && (now - cachedTime < cacheDuration)) {
            renderTalksList(JSON.parse(cachedData));
        } else {
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ page: 1, pageSize: 30 })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.code === 1 && data.data && Array.isArray(data.data.items)) {
                        localStorage.setItem(cacheKey, JSON.stringify(data.data.items));
                        localStorage.setItem(cacheTimeKey, now.toString());
                        renderTalksList(data.data.items);
                    }
                })
                .catch(err => console.error('Error fetching:', err));
        }
    };

    const renderTalksList = (list) => {
        list.map(formatTalk).forEach(item => talkContainer.appendChild(generateTalkElement(item)));
        waterfall('#talk');
    };

    const formatTalk = (item) => {
        const date = formatTime(item.created_at);
        let content = item.content || '';
        content = content.replace(/\[(.*?)\]\((.*?)\)/g, `<a href="$2" target="_blank" rel="nofollow noopener">@$1</a>`)
            .replace(/- \[ \]/g, '⚪')
            .replace(/- \[x\]/g, '⚫')
            .replace(/\n/g, '<br>');
        content = `<div class="talk_content_text">${content}</div>`;

        // 图片
        if (Array.isArray(item.images) && item.images.length > 0) {
            const imgDiv = document.createElement('div');
            imgDiv.className = 'zone_imgbox';
            item.images.forEach(img => {
                const link = document.createElement('a');
                link.href = img.image_url + "?fmt=webp&q=75";
                link.setAttribute('data-fancybox', 'gallery');
                link.className = 'fancybox';
                const imgTag = document.createElement('img');
                imgTag.src = img.image_url + "?fmt=webp&q=75";
                link.appendChild(imgTag);
                imgDiv.appendChild(link);
            });
            content += imgDiv.outerHTML;
        }

        // 外链 / GitHub 项目
        // 外链 / GitHub 项目
        if (['WEBSITE', 'GITHUBPROJ'].includes(item.extension_type)) {
            let siteUrl = '', title = '';
            let extensionBack = "https://i.p-i.vip/68/20260212-698d6733c4fbb.png";

            // 解析 extension 字段
            try {
                const extObj = typeof item.extension === 'string' ? JSON.parse(item.extension) : item.extension;
                siteUrl = extObj.site || extObj.url || item.extension;
                title = extObj.title || siteUrl;
            } catch {
                siteUrl = item.extension;
                title = siteUrl;
            }

            // 特殊处理 GitHub 项目
            if (item.extension_type === 'GITHUBPROJ') {
                extensionBack = "https://i.p-i.vip/68/20260212-698d674ca2185.png";

                // 提取 GitHub 项目名
                const match = siteUrl.match(/^https?:\/\/github\.com\/[^/]+\/([^/?#]+)/i);
                if (match) {
                    title = match[1]; // 获取仓库名
                } else {
                    // fallback：从最后一个路径段提取
                    try {
                        const parts = new URL(siteUrl).pathname.split('/').filter(Boolean);
                        title = parts.pop() || siteUrl;
                    } catch {
                        // 如果 URL 无效则保留原始
                    }
                }
            }

            // 输出 HTML 结构
            content += `
                <div class="shuoshuo-external-link">
                    <a class="external-link" href="${siteUrl}" target="_blank" rel="nofollow noopener">
                        <div class="external-link-left" style="background-image:url(${extensionBack})"></div>
                        <div class="external-link-right">
                            <div class="external-link-title">${title}</div>
                            <div>点击跳转<i class="fa-solid fa-angle-right"></i></div>
                        </div>
                    </a>
                </div>`;
        }


        // 音乐
        if (item.extension_type === 'MUSIC' && item.extension) {
            const link = item.extension;
            let server = '';
            if (link.includes('music.163.com')) server = 'netease';
            else if (link.includes('y.qq.com')) server = 'tencent';
            const idMatch = link.match(/id=(\d+)/);
            const id = idMatch ? idMatch[1] : '';
            if (server && id) {
                content += `<meting-js server="${server}" type="song" id="${id}" api="https://meting-api.hanta2011.top/api?server=:server&type=:type&id=:id&auth=:auth&r=:r"></meting-js>`;
            }
        }

        // 视频
        if (item.extension_type === 'VIDEO' && item.extension) {
            const video = item.extension;
            if (video.startsWith('BV')) {
                const bilibiliUrl = `https://www.bilibili.com/blackboard/html5mobileplayer.html?bvid=${video}&as_wide=1&high_quality=1&danmaku=0`;
                content += `
                    <div style="position: relative; padding: 30% 45%; margin-top: 10px;">
                        <iframe style="position:absolute;width:100%;height:100%;left:0;top:0;border-radius:12px;" 
                                src="${bilibiliUrl}" 
                                frameborder="no" 
                                allowfullscreen="true" 
                                loading="lazy"></iframe>
                    </div>`;
            } else {
                const youtubeUrl = `https://www.youtube.com/embed/${video}`;
                content += `
                    <div style="position: relative; padding: 30% 45%; margin-top: 10px;">
                        <iframe style="position:absolute;width:100%;height:100%;left:0;top:0;border-radius:12px;" 
                                src="${youtubeUrl}" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen></iframe>
                    </div>`;
            }
        }

        return {
            content,
            user: item.username || '匿名',
            avatar: 'https://i.p-i.vip/68/20260212-698d694fc8f8d.png',
            date,
            location: '',
            tags: Array.isArray(item.tags) && item.tags.length ? item.tags.map(t => t.name) : ['无标签'],
            text: content.replace(/\[(.*?)\]\((.*?)\)/g, '[链接]')
        };
    };

    const generateTalkElement = (item) => {
        const talkItem = document.createElement('div');
        talkItem.className = 'talk_item';

        const talkMeta = document.createElement('div');
        talkMeta.className = 'talk_meta';
        const avatar = document.createElement('img');
        avatar.className = 'no-lightbox avatar';
        avatar.src = item.avatar;

        const info = document.createElement('div');
        info.className = 'info';
        const nick = document.createElement('span');
        nick.className = 'talk_nick';
        nick.innerHTML = `${item.user} ${generateIconSVG()}`;
        const date = document.createElement('span');
        date.className = 'talk_date';
        date.textContent = item.date;
        info.appendChild(nick);
        info.appendChild(date);
        talkMeta.appendChild(avatar);
        talkMeta.appendChild(info);

        const talkContent = document.createElement('div');
        talkContent.className = 'talk_content';
        talkContent.innerHTML = item.content;

        const talkBottom = document.createElement('div');
        talkBottom.className = 'talk_bottom';
        const tags = document.createElement('div');
        const tag = document.createElement('span');
        tag.className = 'talk_tag';
        tag.textContent = `🏷️${item.tags}`;
        //const loc = document.createElement('span');
        //loc.className = 'location_tag';
        //loc.textContent = `🌍${item.location}`;
        tags.appendChild(tag);
        //tags.appendChild(loc);

        const commentLink = document.createElement('a');
        commentLink.href = 'javascript:;';
        commentLink.onclick = () => goComment(item.text);
        const icon = document.createElement('span');
        icon.className = 'icon';
        icon.innerHTML = '<i class="fa-solid fa-message fa-fw"></i>';
        commentLink.appendChild(icon);

        talkBottom.appendChild(tags);
        talkBottom.appendChild(commentLink);

        talkItem.appendChild(talkMeta);
        talkItem.appendChild(talkContent);
        talkItem.appendChild(talkBottom);

        return talkItem;
    };

    const goComment = (e) => {
        const match = e.match(/<div class="talk_content_text">([\s\S]*?)<\/div>/);
        const textContent = match ? match[1] : "";
        const textarea = document.querySelector(".atk-textarea");
        textarea.value = `> ${textContent}\n\n`;
        textarea.focus();
        btf.snackbarShow("已为您引用该说说，不删除空格效果更佳");
    };

    const formatTime = (time) => {
        const d = new Date(time);
        const pad = (n) => n.toString().padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    };

    fetchAndRenderTalks();
}

renderTalks();

// function whenDOMReady() {
//     const talkContainer = document.querySelector('#talk');
//     talkContainer.innerHTML = '';
//     fetchAndRenderTalks();
// }
// whenDOMReady();
// document.addEventListener("pjax:complete", whenDOMReady);
