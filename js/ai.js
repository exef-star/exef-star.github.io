// 打字机效果
function typeTextMachineStyle(text, targetSelector, options = {}) {
    const {
        delay = 50,
        startDelay = 2000,
        onComplete = null,
        clearBefore = true,
        eraseBefore = true, // 新增：是否以打字机方式清除原文本
        eraseDelay = 30,    // 新增：删除每个字符的间隔
    } = options;

    const el = document.querySelector(targetSelector);
    if (!el || typeof text !== "string") return;

    setTimeout(() => {
        const startTyping = () => {
            let index = 0;
            function renderChar() {
                if (index <= text.length) {
                    el.textContent = text.slice(0, index++);
                    setTimeout(renderChar, delay);
                } else {
                    onComplete && onComplete(el);
                }
            }
            renderChar();
        };

        if (clearBefore) {
            if (eraseBefore && el.textContent.length > 0) {
                let currentText = el.textContent;
                let eraseIndex = currentText.length;

                function eraseChar() {
                    if (eraseIndex > 0) {
                        el.textContent = currentText.slice(0, --eraseIndex);
                        setTimeout(eraseChar, eraseDelay);
                    } else {
                        startTyping(); // 删除完毕后开始打字
                    }
                }

                eraseChar();
            } else {
                el.textContent = "";
                startTyping();
            }
        } else {
            startTyping();
        }
    }, startDelay);
}

function renderAISummary() {
    const summaryEl = document.querySelector('.ai-summary .ai-explanation');
    if (!summaryEl) return;

    const summaryText = summaryEl.getAttribute('data-summary');
    if (summaryText) {
        typeTextMachineStyle(summaryText, ".ai-summary .ai-explanation"); // 如果需要切换，在这里调用另一个函数即可
    }
}

document.addEventListener('pjax:complete', renderAISummary);
document.addEventListener('DOMContentLoaded', renderAISummary);
