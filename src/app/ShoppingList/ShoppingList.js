import { createEl } from '../util'
import createItem from './Item'

export default class ShoppingList {
    constructor (app) {
        console.log('app: ', app)
        this.app = app
        this.el = createEl('div')
    }

    fetchData () {
        return Promise.resolve(DATA)
    }

    initItemList (data) {
        data.forEach(info => {
            const item = createItem(this, info)
            item.init()
        })
    }

    render () {
        console.log(this.app)
        this.app.app.appendChild(this.el)
    }

    init () {
        this.fetchData()
            .then((data)=>this.initItemList(data))
            .then(()=>this.render())
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