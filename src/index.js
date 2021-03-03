import Creator from './Creator'
import SingleObject from './SingleObject'
import { Target } from './Adaptee'
import { Circle, Decorator } from './Decorator'

import './Proxy'
import './Observer'
import './Iterator'
import './State'

// const creator = new Creator()
// const p1 = creator.create('p1')
// p1.init()
// p1.op1()

// const obj1 = SingleObject.getInstance()
// const obj2 = SingleObject.getInstance()
// obj1.login('obj1')
// obj2.login('obj2')

// console.log(`obj1 === obj2 ? => ${obj1 === obj2}`)

// const target = new Target()
// console.log(target.request())


// const circle = new Circle()
// circle.draw()

// const dec = new Decorator(circle)
// dec.draw()

// function testDec (bool) {
//     return tar => tar.dec= bool
// }

// @testDec(false)
// class test {}

// console.log(test.dec)