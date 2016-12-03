
/**
 * 背景音乐
 */
function HTML5Audio(url, loop) {
    var audio = new Audio(url);
    audio.autoplay = true;
    audio.loop = loop || false; //是否循环
    audio.play();
    return {
        end: function(callback) {
            audio.addEventListener('ended', function() {
                callback()
            }, false);
        },
        paused: function() {
            audio.addEventListener('paused', function(){
                audio.pause();
            }, false);
        }
    }
}
/*HTML5Audio.prototype.play = function (loop) {
    this.audio.autoplay = true;
    this.audio.loop = loop || false;
    if (this.audio.paused) {
        this.audio.play();
        console.log(this.audio);
    } else {
        this.audio.pause();

    }
}
HTML5Audio.prototype.paused = function() {

    if (this.audio.paused) {
        this.audio.play();
        console.log("1: "+this.audio);
    } else {
        this.audio.pause();
        console.log(this.audio.paused);

    }
}*/


/**
 * 切换页面
 * 模拟镜头效果
 * @return {[type]} [description]
 */
function changePage(element,effect,callback){
    element
        .addClass(effect)
        // 兼容动画完成事件
        .on("animationend webkitAnimationEnd", function() {
            callback && callback();
        })
}

function changePagePromise(ele, effectClass) {
    return new Promise((resolve, reject) => {
        ele.addClass(effectClass)
            .one('animationend webkitAnimationEnd', resolve);
    });
}


/**
 * 中间调用
 */
var Christmas = function() {
    //页面容器元素
    var $pageA = $(".page-a");
    var $pageB = $(".page-b");
    var $pageC = $(".page-c");

    //new pageA(changePagePromise($pageA, 'effect-out').then(function(){
    //    new pageB(changePagePromise($pageC, 'effect-in'))
    //}))
    new pageA($pageA);

};



$(function() {
    //圣诞主题效果，开始
    $("#choose").on('click', Christmas);
    $(".audioPlay").click(function () {
        var h5Audio = HTML5Audio("http://www.sunnylinner.com/Games/Music/Media/407.mp3", false);
        h5Audio.paused();
    });

    $(".endPlay").click(function () {
        Christmas();
    });
})


