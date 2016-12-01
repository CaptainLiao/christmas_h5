/*
function pageB(cb) {
    setTimeout(() => {
        cb()
    }, 2000)
}*/

function pageB(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(cb)}, 2000);
    })
}
