var { generateRandomArray } = require('./util/generateRandomArray')
var { generateNearlyOrderedArray } = require('./util/generateRandomArray')
var { selectSort } = require('./选择排序/selectionSort')
var { insertSort } = require('./插入排序/insertionSort')
var { mergeSort } = require('./归并排序/mergeSort')
var { testSort } = require('./util/testSort')

// 数组个数
var n = 10000
// var arr2 = []

var swapTimes = 100
var arr4 = generateNearlyOrderedArray(n, swapTimes)

// 生成数组
var arr = generateRandomArray(n, 0, n)

// 复制一个同样的数组,三种方法都行
// arr2 = arr.map((item) => item)
// arr2.push(...arr)
var [...arr2] = arr4
var [...arr3] = arr4

/* testSort(arr, n, selectSort) */
testSort(arr2, n, insertSort)
testSort(arr3, n, mergeSort)
