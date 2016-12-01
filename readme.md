# 本仓库分为：圣诞节H5和腾讯面试机试题

### 一、圣诞节H5技术概要

#### 1. 包含文件：

index.html、pageA.js、pageB.js、pageC.js、christmas.js

#### 2. Promise 异步编程

所谓`Promise`，简单说就是一个容器，里面保存这某个未来才会结束的事件（通常是一个异步操作的结果）。

```
function changePagePromise(ele, effectClass) {
	// 这里必须返回一个Promise对象才能调用 .then()方法
    return new Promise((resolve, reject) => {
        ele.addClass(effectClass)
            .one('animationend webkitAnimationEnd', resolve);
    });
}
```

### 二、腾讯面试机试题

#### 1. 用原生js实现鼠标拖拽功能

1.1 鼠标事件类型

* `click`
* `dbclick`
* `mousedown`
* `mouseenter`
* `mousemove`
* `mouseout`
* `mouseup`
* `mouseover`
* `mouseleave`

#### 2. 用组件方式实现右键菜单功能

2.1 判断鼠标左中右键

```
function whichButton(e) {
    var btnNum = e.button;
    if(btnNum === 0) {
        alert("左键！");
    }else if(btnNum === 1) {
        alert("中键！");
    }else if(btnNum === 2) {
        alert("右键！");
    }
}
```

### 三、Babel 将ES6转化为 ES5 

#### 1. 安装插件

`npm install gulp-babel babel-preset-es2015 --save-dev`

#### 2. Gulp 配置

```
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/**/*.js")// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});
```

#### 3. Babel 配置

在项目根路径创建文件 `.babelrc`。内容为

```
{
  "presets": ["es2015"]
}
```

#### 4. 执行gulp 