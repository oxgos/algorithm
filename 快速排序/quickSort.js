exports.quickSort = (arr, n) => {
    (function _quickSort(arr, s, l) {
        if (s >= l) {
            return
        } 
        var j = _partition(arr, s, l)
        _quickSort(arr, s, j - 1)
        _quickSort(arr, j + 1, l)

    })(arr, 0, n - 1)

    function _partition(arr, s, l) {
        var v = arr[s],
            j = s
            
        for (let i = s + 1; i <= l; i++) {
            if (arr[i] < v) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[i]
                arr[i] = temp
                j++
            }
        }
        let temp = arr[s]
        arr[s] = arr[j]
        arr[j] = temp
        return j
    }
}