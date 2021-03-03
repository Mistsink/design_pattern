/**
 * 工厂模式
 */

export default class Creator {
    create (name) {
        return new Product(name)
    }
}

class Product {
    constructor (name) {
        this.name = name
    }

    init () {
        console.log('init product')
    }

    op1 () {
        console.log('operation one')
    }
}