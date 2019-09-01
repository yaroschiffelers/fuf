/**
 * The algebraic definition of function composition:
 * (f ∘ g)(x) = f(g(x))
 */

/**
 * Basic compose method; add one or more functions to create a new one. 
 * Each function should expect only one argument (unary). The last function, 
 * will be the first to be executed. The return value of the first will be 
 * the input of the second, and so on. 
 * Same as 'pipe' but in reversed order. 
 * @param  {Function) - one or more functions 
 * @return {Function} - a composition of the provided functions. 
 */
const compose = exports.compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

/**
 * Composition with extended unwrapping functions that can handle more complexity. 
 * @param  {Function} chainMethod - method 
 * @return {Function}             - compose version of the provided chainMethod 
 */
const composeM = exports.composeM = chainMethod => (...ms) => (
    ms.reduce((f, g) => x => g(x)[chainMethod](f))
)

/**
 * With composeM we can create higher order function compositions 
 * out of native prototype methods:
 */

/**
 * Compose promises
 * @type {Function}
 */
const composePromise = exports.composePromise = composeM('then')

/**
 * Compose map
 * @type {Function}
 */
const composeMap = exports.composeMap = composeM('map')

/**
 * Compose flatMap
 * @type {Function}
 */
const composeFlatMap = exports.composeMap = composeM('flatMap')
