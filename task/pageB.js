/*
function pageB(cb) {
    setTimeout(() => {
        cb()
    }, 2000)
}*/

function pageB(ele, pageComplete) {
    var $boy = ele.find(".christmas-boy"),
        $girl = ele.find(".girl"),
        animationEnd = "animationend webkitAnimationEnd";

    /*
    * 小女孩儿动作分解：
    * 1.在沙发上起立动作
    * 2.走路动作
    * 3.对3D旋转礼物的选择
    * 4.泪奔
    * 5.拥抱*/
    var girlAction = {
        standUp: () => {
            return new Promise((resolve, reject) => {
                setTimeout(function() {
                    $girl.addClass("girl-standUp");
                } ,200);
                setTimeout(function() {
                    $girl.addClass("girl-throwBook");
                    resolve();
                } ,500);
            })
        },
        walk: (cb) => {
            return new Promise((resolve, reject) => {
                $girl.addClass("girl-walk");
                $girl.css({
                    "left": "4.5rem",
                    "transition-property": "all",
                    "transition-duration": "4s",
                    "transition-timing-function": "linear"
                });
                setTimeout(resolve ,4000);
            })
        },
        stopWalk: () => {
            $girl.addClass("walk-stop")
                .removeClass("girl-standUp")
                .removeClass("girl-walk")
                .removeClass("girl-throwBook")
                .addClass("girl-stand")
        },
        //选择3d
        choose: (callback) => {
            return new Promise((resolve, reject) => {
                $girl.addClass("girl-choose")
                    .removeClass("walk-stop");
                $girl.one(animationEnd, function() {
                    callback();
                    resolve();
                })
            })

        },
        // 泪奔
        weepWalk: (cb) => {
            $girl.addClass("girl-weep");
            $girl.css({
                "left": "7rem",
                "transition-property": "all",
                "transition-duration": "2s",
                "transition-timing-function": "linear"
            }).one(animationEnd, function(){
                $girl.addClass("walk-stop").removeClass("girl-weep");
                cb && cb();
            })
        },
        // 拥抱
        hug: function (){
            $girl.addClass("girl-hug walk-run");
        }
    };
    girlAction
        .standUp()
        .then(function(){
            return girlAction.walk();
        })
        .then(function() {
            return girlAction.stopWalk();
        })

        .then(function(){
            return girlAction.choose(function(){

            });
        })
        .then(function(){
            return girlAction.weepWalk();
        })
        .then(function () {
            girlAction.hug();
        })
    // 小男孩动作分解
    // 1. 小男孩从右边走出来的动作
    // 2. 小男孩解开包裹拿出礼物的动作
    // 3. 在3d旋转中脱衣的动作
    // 4. 转身拥抱的动作
    var boyAction = {
        walk: () => {
            return new Promise((resolve, reject) => {
                $boy.css({
                    "right": "6rem",
                    "transition-property": "all",
                    "transition-duration": "4s",
                    "transition-timing-function": "linear"
                });
                console.log($boy)
                setTimeout(resolve ,4000);
            })
        },
        // 停止动画
        stopWalk: () => {
            $boy.removeClass("boy-walk");
            $boy.addClass("boy-stand");
        },
        // 继续动画
        runWalk: () => {
            $boy.addClass("walk-run");
        },
        // 拆包裹
        unwrapp: () => {
            return new Promise((resolve, reject) => {
                $boy.addClass("boy-unwrapp");
                $boy.removeClass("boy-stand");
                console.log("拆包裹");
                setTimeout(resolve ,3000);

            })
        },
        // 脱衣服动作
        strips: () => {
            $boy.removeClass("boy-unwrapp");
            $boy.addClass("boy-strip");
        }
    }
    boyAction.walk()
        .then(function() {
            return boyAction.stopWalk();
        })
        .then(function() {
            return boyAction.unwrapp()
        })
        .then(function(){
            boyAction.strips();
        });


}
