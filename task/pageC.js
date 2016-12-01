function pageC(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(cb)}, 2000);
    })
}