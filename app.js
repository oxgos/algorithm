var { generateRandomArray } = require('./util/generateRandomArray')
var { selectSort } = require('./选择排序/selectionSort')
var { insertSort } = require('./插入排序/insertionSort')
var { testSort } = require('./util/testSort')

var n = 10000
var arr2 = []
var arr = generateRandomArray(n, 0, n)
arr2 = arr
testSort(arr, n, selectSort)
testSort(arr2, n, insertSort)