/**
 * 单例模式
 */


 //     JS  中实现单例模式，只能依靠文档约定，千万不可 new 来创建实例，否则无法监控同一个实例对象
export default class SingleObject {
    login (name) {
        console.log(`${name} is logining`)
    }
}

//  这里相当于是 SingleObject 的 static方法
//  这是一个自执行的函数
SingleObject.getInstance = (() => {
    //  采用闭包来存储生成的实例
    let instance = null

    return () => {
        if (instance === null) {
            instance = new SingleObject()
        }
        return instance
    }

})()