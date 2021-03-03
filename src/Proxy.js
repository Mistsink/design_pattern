/**
 * 代理模式
 */

class RealTar {
    constructor(name) {
        this.name = name
    }

    display () {
        console.log('real->', this.name)
    }
}

class ProxyTar {
    constructor (name) {
        this.realTar = new RealTar(name)
    }

    display () {
        console.log('proxy->', this.realTar.display)
    }
}


//  ES6 中的 典型应用
let star = {
    name: 'h',
    age: 18,
    phone: 12345677
}

let agent = new Proxy(star, {
    get: (tar, key) => {
        if (key === 'phone') return 'proxy-phone: 123456'
    },
    set: (tar, key, val) => {
        if (key === 'customPrice') {
            if (val < 100000) throw new Error('too lower')
            else {
            tar[key] = val
            return true
        }
        } 
    }
})

console.log(agent.phone)
console.log(agent['customPrice'] = 1001222)
console.log(agent)
console.log(star)