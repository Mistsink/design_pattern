import { createEl } from '../util'
import createItem from './Item'

export default class ShoppingList {
    constructor (app) {
        this.app = app
        this.el = createEl('div')
    }

    fetchData () {
        return new Promise.resolve(DATA)
    }

    initItemList (data) {
        data.forEach(info => {
            console.log('initItemList this:', this)
            const item = createItem(this, info)
            item.init()
        })
    }

    render () {
        this.app.app.append(this.el)
    }

    init () {
        this.fetchData()
            .then(this.initItemList)
            .then(this.render)
    }

}


const DATA = [
    {
        id: '1',
        name: 'item-1',
        price: 123
    },
    {
        id: '2',
        name: 'item-2',
        price: 323
    },
    {
        id: '3',
        name: 'item-3',
        price: 567
    },
]