/**
 * 适配器模式
 */

class Adaptee {
    specificRequest() {
        return 'special request'
    }
}

export class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }

    request () {
        const specialRequest = this.adaptee.specificRequest()

        //  do some adaptition the special req into required req

        return `adapte ${specialRequest} into required`
    }
}
