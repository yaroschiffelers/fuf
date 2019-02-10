// The algebraic definition of function composition:
// (f ∘ g)(x) = f(g(x))
const compose = exports.compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

// Composition with extended unwrapping functions that can handle more complexity. 
const composeM = exports.composeM = chainMethod => (...ms) => (
    ms.reduce((f, g) => x => g(x)[chainMethod](f))
)

// With composeM we can create higher order function compositions out of native prototype methods:  
// 
// Compose promises: 
const composePromises = exports.composePromises = composeM('then')

// Compose maps:
const composeMap = exports.composeMap = composeM('map')

// Compose fletMaps: 
const composeFlatMap = exports.composeMap = composeM('flatMap')
