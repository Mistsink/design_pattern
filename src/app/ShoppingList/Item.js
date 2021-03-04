import createCart from '../ShoppingCart/Cart'
import { createEl, log } from '../util'

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

        const state = new State(this)

        function updateText () {
            operateBtn.innerText = state.text
        }

        operateBtn.onclick = () => {
            if (state.state) {
                state.doDel()
                updateText()
            } else {
                state.doAdd()
                updateText()
            }
        }
        updateText()
        this.el.append(operateBtn)
    }

    @log(`add`)
    addIntoCart () {
        this.cart.addItem(this.info)
    }

    @log(`del`)
    delFromCart () {
        this.cart.delById(this.info.id)
    }

    render () {
        this.list.el.append(this.el)
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



class State {
    constructor (ctx, state) {
        this.ctx = ctx
        this.state = state  //  state: 0 | 1
        this.text = 'add into cart'
    }

    doAdd () {
        this.state = 1
        this.text = 'del from cart'
        this.ctx.addIntoCart()
    }

    doDel () {
        this.state = 0
        this.text = 'add into cart'
        this.ctx.delFromCart()
    }
}