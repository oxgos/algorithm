var { insertSortOther } = require('./../插入排序/insertionSort')

exports.mergeSort = (arr, n) => {
    // 把[s, l]的数组归并排序
    (function _mergeSort(arr, s, l) {
        /* if ( s >= l) {
            return; */
        if ( l - s <= 15) {
            insertSortOther(arr, s, l)
            return
        } else {
            var mid = Math.floor((s + l) / 2)
            _mergeSort(arr, s, mid)
            _mergeSort(arr, mid + 1, l)
            if (arr[mid] > arr[mid + 1]) {
                _merge(arr, s, mid, l)
            }
        }
    })(arr, 0, n - 1)
    
    function _merge(arr, s, mid, l) {
        // 新建一个用于储存 ‘需排序的数组’ 的数组
        // 用于对比‘左边开始的0’与‘右边开始的mid+1’的数字,小的数字放回原数组，并且小的一方索引+1
        var arrCopy = []
        for (let i = s; i <= l; i++) {
            arrCopy.push(arr[i])
        }
        var i = s, 
            j = mid + 1

        for (var k = s; k <= l; k++) {
            // 判断左右的界限，左边没有数字了，就把右边剩下的全部放回数组，右边同理
            if (i > mid) {
                arr[k] = arrCopy[j - s]
                j++
            } else if (j > l) {
                arr[k] = arrCopy[i - s]
                i++
            } else {
                if (arrCopy[i - s] < arrCopy[j - s]) {
                    arr[k] = arrCopy[i - s]
                    i++
                } else {
                    arr[k] = arrCopy[j - s]
                    j++
                }
            }
        }
    }
}