/**
 * 状态模式
 */

 /**
  * 将状态 与 主体分离，状态改变 由 状态本身来控制
  */
class State {
    constructor (stateNum) {
        this.state = stateNum
    }

    handle (context) {
        console.log('handle state change', this.state)
        context.setState(this)
    }
}

class Context {
    constructor () {
        this.state = null
    }

    getState () {
        return this.state
    }

    setState(state) {
        this.state = state
    }
}



//  test
const con = new Context()
const a = new State(1)
const b = new State(2)
const c = new State(3)

console.log(con.getState())
a.handle(con)
console.log(con.getState().state)
b.handle(con)
console.log(con.getState().state)
c.handle(con)
console.log(con.getState().state)


//  promise 其实就是一个状态机