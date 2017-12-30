var assert = require('assert')
// 随机生成数组
exports.generateRandomArray = (n, min, max) => {
    assert.ok(min <= max)

    var arr = []
    for (var i = 0; i < n; i++) {
        var rand = Math.floor(Math.random() * (max - min + 1) + min)
        arr.push(rand)
    }
    return arr
}

exports.generateNearlyOrderedArray = (n, swapTimes) => {
    for (var i = 0, arr = []; i < n; i++) {
        arr.push(i);
    }
    for (var j = 0; j < swapTimes; j++) {
        let posx = parseInt(Math.random() * n )
        let posy = parseInt(Math.random() * n )
        let temp = arr[posx]
        arr[posx] = arr[posy]
        arr[posy] = temp
    }
    return arr
}