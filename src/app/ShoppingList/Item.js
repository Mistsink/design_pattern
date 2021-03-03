import createCart from '../ShoppingCart/Cart'
import { createEl } from '../util'

class Item {
    constructor (list, info) {
        this.list = list
        this.info = info
        this.el = createEl('div')
        this.cart = createCart()
    }

    initItem () {
        const a = document.createElement('a')
        a.innerText
        const itemDiv = createEl('div')
        itemDiv.innerHTML = `
            <p>name: ${this.info.name}</p>
            <p>price: ${this.info.price}</p>
        `
        this.el.append(itemDiv)
    }

    initOperateBtn () {
        const operateBtn = createEl('button')
        operateBtn.innerText = `item state`

        this.el.append(operateBtn)
    }

    addIntoCart () {
        this.cart.addItem(this.info)
    }

    delFromCart () {
        this.cart.delById(this.info.id)
    }

    render () {
        this.list.append(this.el)
    }

    init () {
        this.initItem()
        this.initOperateBtn()
        this.render()
    }
}


export default function createItem (list, info) {
    return new Item(list, info)
}