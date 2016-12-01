
let box = document.getElementById("box");

// 判断鼠标左中右哪个键按下
let EventUtil = {
    menuClick: (e) => {
        e = e || window.event;
        // 鼠标右键按下
        if(e.button === 2) {
            alert("右键");

        }
    },
    scrollDiv: () => {
        "use strict";
        var clientH = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight,
            scrollTop = document.body.scrollTop,
            wholeH = document.body.scrollHeight;
        if(clientH + scrollTop >= wholeH) {
            alert("滚动到底部了");
        }else if (scrollTop <= 0) {
            alert("滚动到顶部了");
        }
    }
}



window.onscroll = EventUtil.scrollDiv;
box.onmousedown = EventUtil.menuClick;
