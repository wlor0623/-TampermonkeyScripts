// ==UserScript==
// @name         计时器加速
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a 1-second delay to all timers.
// @match        *://*/*
// @run-at       document-start
// @grant        unsafeWindow

// ==/UserScript==

(function() {
    // 保存原始的 setInterval 和 setTimeout 方法
    const originalSetInterval = unsafeWindow.setInterval;
    const originalSetTimeout = unsafeWindow.setTimeout;

    // 重写 setInterval 方法
    unsafeWindow.setInterval = function(callback, interval) {
        console.log(callback)
        return originalSetInterval(callback,  10);
    };

    // 重写 setTimeout 方法
    unsafeWindow.setTimeout = function(callback, timeout) {
        return originalSetTimeout(callback,  10);
    };
})();
