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
        return this.list.reduce((pre, cur) => pre += '\n' + cur.name, '')
    }
}

/**
 * 单例模式
 */
const createCart = (() => {
    let cart
    let count = 0
    return function(){
        if (!cart) {
            cart = new Cart()
        }
        return cart
    }
})()
export default createCart