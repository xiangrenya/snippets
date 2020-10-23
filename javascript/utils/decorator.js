const log = (target, name, descriptor) => {
    const original = descriptor.value;
    if (typeof original === 'function') {
        descriptor.value = function (...args) {
            let result = original.apply(this, args);
            if (typeof result === 'object') {
                result = JSON.stringify(result)
            }
            console.log(`${name}(${args}) = ${result}`);
            return result;
        }
    }
}

function getParamNames(func) {
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    var ARGUMENT_NAMES = /([^\s,]+)/g;
    var fnStr = func.toString().replace(STRIP_COMMENTS, '');
    var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
    if (result === null)
        result = [];
    return result;
}

const log = (target, name, descriptor) => {
    const original = descriptor.value;
    if (typeof original === 'function') {
        const paramNames = getParamNames(original)
        descriptor.value = function (...args) {
            const params = paramNames.reduce((obj, pn, i) => {
                obj[pn] = args[i];
                return obj;
            }, {})
            let result = original.apply(this, args);
            if (typeof result === 'object') {
                result = JSON.stringify(result)
            }
            console.log(`${name}(${JSON.stringify(params)}) = ${result}`);
            return result;
        }
    }
}

class MyClass {
    @log
    sum(a, b) {
        return a + b;
    }
}