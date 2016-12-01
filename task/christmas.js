/**
 * 慕课网特制
 * 圣诞主题效果
 * @type {Object}
 */

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

    new pageA(changePagePromise($pageA, 'effect-out').then(function(){
        new pageB(changePagePromise($pageC, 'effect-in'))
    }))

};



$(function() {
    //圣诞主题效果，开始
    $("#choose").on('click', Christmas);
})