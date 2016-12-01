let box = document.getElementById("box");
let EventUtil = {
    mouseDown: (e) => {
        e = e || window.event;
        // 获取鼠标到元素边框的距离
        let distx = e.clientX - box.offsetLeft,
            disty = e.clientY - box.offsetTop;
        document.onmousemove =  (e) => {
            e = e || window.event;
            let x = 0,y = 0,
                clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
            // x、y为元素的marginLeft、marginTop值
            x = e.clientX - distx;
            y = e.clientY - disty;
            if(x < 0) {x = 0};
            if(y < 0) {y = 0};
            if(x > (clientWidth - box.offsetWidth)) {
                x = clientWidth - box.offsetWidth - 14;
            }
            console.log(x);

            box.style.marginLeft = x + "px";
            box.style.marginTop = y + "px";
        }
    },
    mouseUp: () => {
        document.onmousemove = null;
    }
}

box.addEventListener("mousedown", EventUtil.mouseDown, false);
document.documentElement.addEventListener("mouseup", EventUtil.mouseUp, false);

var getJSON = (url) =>{
    var promise = new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();
        const handler = () => {
            if(xhr.readyState === 4) {
                if(xhr.status > 200 && xhr.status < 300 || xhr.status === 304) {
                    resolve(this.response);
                }else {
                    reject(new Error(this.status));
                }

            }
        }
    })
}
getJSON("/posts.json").then((json) => {
    console.log('Contents: ' + json);
}, (e) => {
    console.error('出错了', e);
})






