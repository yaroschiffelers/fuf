const { compose, composeM, composePromise, composeMap, composeFlatMap } = require('./compose')
const { pipe } = require('./pipe')
const { trace } = require('./trace')

exports.fu = {
    compose, 
    composeM, 
    composePromise, 
    composeMap, 
    composeFlatMap,
    pipe,
    trace 
}

exports.compose
exports.composeM
exports.composePromise
exports.composeMap
exports.composeFlatMap
exports.pipe
exports.trace
