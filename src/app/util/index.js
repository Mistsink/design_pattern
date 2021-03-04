export function mountElement (queryTag) {
    return document.querySelector(queryTag)
}

export function createEl (nodeTag) {
    return document.createElement(nodeTag)
}

export function log (type) {
    return function (target, name, descriptor) {
        const oldVal = descriptor.value

        descriptor.value = function(...rest) {
            console.log(`log ----- ${type}`)

            oldVal.apply(this, rest)
        }

    }
}