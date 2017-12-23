exports.insertSort = (arr, n) => {
    for (var i = 0; i < n - 1; i++) {
        // 优化版，对比元素先复制出去，直到最后结果才赋值到那个位置
        var j,
            checkarr = arr[i + 1]
        for (j = i + 1; j > 0 && checkarr < arr[j - 1]; j--) {
            arr[j] = arr[j - 1]
        }
        arr[j] = checkarr

        /* for (var j = i + 1; j > 0 && arr[j] < arr[j - 1]; j--) {
            var temp = arr[j - 1]
            arr[j - 1] = arr[j]
            arr[j] = temp
        } */
    }
    return arr
}