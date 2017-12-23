var { isSort } = require('./isSort')
var assert = require('assert')

// 测试排序时间
exports.testSort = (arr, n, fn) => {
    var startTime = new Date().getTime() / 1000
    fn(arr, n)
    var endTime = new Date().getTime() / 1000

    // 断言,不为真就抛出错误
    assert.ok(isSort(arr, n))
    console.log((endTime - startTime) + 's')
}