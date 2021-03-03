/**
 * 迭代器模式
 */

class Iterator {
    constructor (container) {
        this.list = container.list
        this.index = 0
    }

    next () {
        return this.hasNext() ? this.list[this.index ++] : null
    }

    hasNext () {
        return this.index <= this.list.length - 1
    }

    each (fn) {
        while (this.hasNext()) {
            fn (this.next())
        }
        this.index = 0
    }
}

class Container {
    constructor (list) {
        this.list = list
    }

    genIterator () {
        return new Iterator(this)
    }
}

//  ES 6 中的Iterator 即为迭代器模式

//  test
let arr = [1, 3, 4, 5, 9]

let iter = new Container(arr).genIterator()

console.log(iter)
iter.each(console.log)

arr = document.querySelectorAll('li')

iter = new Container(arr).genIterator()

console.log(iter)
iter.each(console.log)