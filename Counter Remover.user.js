// ==UserScript==
// @name         Counter Remover
// @namespace    http://vk.com/just_sh1ne
// @version      1.0.7
// @description  The script removes the number of notifications from the title
// @author       Magikman008
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @downloadURL  https://github.com/Magikman008/Counter-Remover/raw/main/Counter%20Remover.user.js
// @updateURL    https://github.com/Magikman008/Counter-Remover/raw/main/Counter%20Remover.meta.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var titleEl = document.getElementsByTagName("title")[0];
    var docEl = document.documentElement;

    if (docEl && docEl.addEventListener) {
        docEl.addEventListener("DOMSubtreeModified", function(evt) {
            var t = evt.target;
            if (t === titleEl || (t.parentNode && t.parentNode === titleEl)) {
                document.title = document.title.replace(/^\(\d+\)/g, "");
            }
        }, false);
    } else {
        document.onpropertychange = function() {
            if (window.event.propertyName == "title") {
                document.title = document.title.replace(/\(\d.*\)/g, "");
            }
        };
    }
})();
