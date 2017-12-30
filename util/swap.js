Array.prototype.swap = function(x, y) {
    let temp = this[x];
    this[x] = this[y]
    this[y] = temp
    return this
}