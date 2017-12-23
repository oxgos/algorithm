var { generateRandomArray } = require('./util/generateRandomArray')
var { selectSort } = require('./选择排序/selectionSort')
var { insertSort } = require('./插入排序/insertionSort')
var { testSort } = require('./util/testSort')

// 数组个数
var n = 10000
var arr2 = []

// 生成数组
var arr = generateRandomArray(n, 0, n)

// 复制一个同样的数组
// arr2 = arr.map((item) => item)
arr2.push(...arr)

testSort(arr, n, selectSort)
testSort(arr2, n, insertSort)