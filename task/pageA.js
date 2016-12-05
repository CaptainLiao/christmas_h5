function pageA(ele) {
    this.$root = ele;
    this.boy = ele.find('.chs-boy');
    this.window = ele.find(".window");
    this.winLeft = this.window.find(".window-left");
    this.winRight = this.window.find(".window-right");
    this.run();
}
// 开窗
pageA.prototype.openWindow = function(cb) {
    this.winLeft.addClass("window-transition hover");
    this.winRight.addClass("window-transition hover");
};

pageA.prototype.next = function (options) {
    var _this = this;
    var promise = new Promise((resolve, reject) => {
        _this.boy.css({
            "top": options.style.top,
            "right": options.style.right,
            "transform": options.style.transform || options.style.rotateY,
            "transition-property": "all",
            "transition-duration": options.time,
            "transition-timing-function": "linear"
        });/*.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", () => {
                console.log("animationend")
            });*/
        var timeout = setTimeout(resolve, parseInt(options.time,10)*1000);
    });
    return promise;
};

pageA.prototype.stopAnimation = function() {
    this.boy.removeClass("chs-boy-deer");
};

pageA.prototype.run = function() {
    var _this = this;
     _this.next({
        time:"8s",
        style: {
            top: "4rem",
            right: '16rem',
            transform: 'scale(1.2)'
        }
    })
         .then(function () {
             console.log("resolved2");
             return _this.next({
                 "time":"1s",
                 "style": {
                     "rotateY" : "rotateY(-180deg)"
                 }
             })
         })
        .then(function() {
            console.log("resolved3");
            return _this.next({
                time:"5s",
                style: {
                    top: "8rem",
                    right: '1.2rem',
                    "transform" : "rotateY(180deg) scale(1.5)"
                }
            })
        })
         .then(function() {
             _this.stopAnimation();
         })
         .then(function() {
             _this.openWindow();
         })

};