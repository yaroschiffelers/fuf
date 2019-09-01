const fp = require('lodash/fp')

const initDataset = ({ imports = []} = {}) => {
    const data = Object.create(null)

    if (imports) {
        imports.map(mod => data[mod] = mod)
    }

    return data
}

// Utils
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const composeM = chainMethod => (...ms) => ms.reduce((f, g) => x => g(x)[chainMethod](f))
const zipObject = fp.zipObject
const chain = fp.chain
const pipe = fp.pipe

// Base
const add = o => fp.map(a => a + o)
const sum = initialType => fp.reduce((prev, curr) => prev + curr, initialType)

// Derivatives
const addOne = add(1)
const sumNum = sum(0)

// Compositions
const addOneSum = fp.pipe([addOne, sumNum])

const ds = [1, 2, 3]

// Results
const a = addOneSum()

const _end = null