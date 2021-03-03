class Cart {
    constructor () {
        this.list = []
    }

    addItem (item) {
        this.list.push(item)
    }

    delById (id) {
        this.list = this.list.filter(item => item.id != id)
    }

    getList () {
        return this.list.reduce((pre, cur) => pre += '\n' + cur.name)
    }
}

/**
 * 单例模式
 */
export default function createCart () {
    let cart = null
    return (() => {
        if (cart === null) {
            cart = new Cart()
        }
        return cart
    })()
}