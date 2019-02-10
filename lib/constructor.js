// In theory, .constructor could be useful to make generic functions which
// are capable of returning a new instance of whatever object you pass in.
// There is a specification for that: a static method on any factory or constructor called .of(). 
// The .of() method is a factory that returns a new instance of the data type containing whatever you pass into .of().

// Unfortunately, the static .of() method is just beginning to gain support in JavaScript.
// The Promise object does have a static method that acts like .of(), but it’s called .resolve() instead.
// 
// read more: https://medium.com/javascript-scene/why-composition-is-harder-with-classes-c3e627dcd0aa

const of = exports.of = instance => instance 

const empty = exports.empty = ({ constructor } = {}) => constructor.of 
    ? constructor.of()
    : undefined

// Example
// It’s easy to add support for .constructor and .of() to a factory
const createUser = ({ userName = 'Anonymous', avatar = 'anon.png' } = {}) => ({
    // You can even make .constructor non-enumerable by adding to the delegate prototype
    __proto__: {
    constructor: createUser
  },
  userName,
  avatar
})

createUser.of = createUser
