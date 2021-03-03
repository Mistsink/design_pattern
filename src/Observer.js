/**
 * 观察者模式
 */

class Observer {

    constructor (name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }

    update (state) {
        console.log(this.name,  'get new state: ', state)
    }
}

class Subject {
    constructor () {
        this.state = 0  //  记录状态
        this.observers = []
    }

    getState () {
        return this.state
    }

    setState (state) {
        this.state = state
        this.notifyAllObservers()
    }

    notifyAllObservers () {
        this.observers.forEach(observer => observer.update(this.state))
    }

    attach (observer) {
        this.observers.push(observer)
    }
}


//  test
const sub = new Subject()
const o1 = new Observer('o1', sub)
const o2 = new Observer('o2', sub)
const o3 = new Observer('o3', sub)

sub.setState('2')