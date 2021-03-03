/**
 * 装饰器模式
 */

export class Circle {
    draw () {
        console.log('draw a circle')
    }
}

export class Decorator {
    constructor (circle) {
        this.circle = circle
    }
    draw () {
        this.circle.draw()
        this.setRedBorder()
    }
    setRedBorder() {
        console.log('set red border')
    } 
}