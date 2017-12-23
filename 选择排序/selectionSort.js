exports.selectSort = (arr, n) => {
    var minIndex = 0
    for (var i = 0; i < n; i++) {
        minIndex = i
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                let temp = arr[minIndex]
                arr[minIndex] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}