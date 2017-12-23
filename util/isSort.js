// 检测有没有排序
exports.isSort = (arr, n) => {
    for(var i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}