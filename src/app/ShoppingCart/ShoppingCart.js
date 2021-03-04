import { createEl, log } from '../util'
import createCart from './Cart'

export default class ShoppingCart {
    constructor (app) {
        this.app = app
        this.el = createEl('div')
        this.cart = createCart()
    }

    initShowBtn () {
        const showBtn = createEl('button')
        showBtn.innerText = 'The Cart'
        showBtn.onclick = () => {
            this.showCart()
        }
        this.el.appendChild(showBtn)
    }

    @log('show cart')
    showCart () {
        console.log(this.cart.getList())
    }

    render () {
        this.app.app.appendChild(this.el)
    }

    init () {
        this.initShowBtn()
        this.render() 
    }
}