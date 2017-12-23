// var { selectSort } = require('./../选择排序/selectionSort')

exports.testSort = (arr, n, fn) => {
    var startTime = new Date().getTime() / 1000
    fn(arr, n)
    var endTime = new Date().getTime() / 1000
        // console.log(arr)
    console.log((endTime - startTime) + 's')
}