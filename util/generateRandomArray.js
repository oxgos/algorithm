// 随机生成数组
exports.generateRandomArray = (n, min, max) => {
    var arr = []
    for (var i = 0; i < n; i++) {
        var rand = Math.floor(Math.random() * (max - min + 1) + min)
        arr.push(rand)
    }
    return arr
}