import { mountElement } from './util'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import ShoppingList from './ShoppingList/ShoppingList'


export default class App {

    constructor (id) {
        this.app = mountElement('#' + id)
    }

    initShoppingCart () {
        const shoppingCart = new ShoppingCart(this)
        shoppingCart.init()
    }

    initShoppingList () {
        const shoppingList = new ShoppingList(this)
        shoppingList.init()
    }

    render () {
        
    }

    init () {
        this.initShoppingCart()
        this.initShoppingList()
        console.log('init app')
    }
}