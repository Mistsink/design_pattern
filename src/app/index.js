import { mountElement } from './util'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import ShoppingList from './ShoppingList/ShoppingList'


export default class App {

    constrcutor (id) {
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

    init () {
        console.log('init app')
    }
}