// The monad laws:
// Left identity: unit(x).chain(f) ==== f(x)
// Right identity: m.chain(unit) ==== m
// Associativity: m.chain(f).chain(g) ==== m.chain(x => f(x).chain(g))
// 
// The Identity Laws
// A monad is a functor. A functor is a morphism between categories, A -> B. The morphism is represented by an arrow. 
// In addition to the arrow we explicitly see between objects, each object in a category also has an arrow back to itself. 
// In other words, for every object X in a category, there exists an arrow X -> X. That arrow is known as the identity arrow, 
// and it's usually drawn as a little circular arrow pointing from an object and looping back to the same object.
// 
// Associativity
// Associativity just means that it doesn’t matter where we put the parenthesis when we compose. For example, 
// if you’re adding, a + (b + c) is the same as (a + b) + c. The same holds true for function composition: (f ∘ g) ∘ h = f ∘ (g ∘ h).
// The same holds true for Kleisli composition. You just have to read it backwards. When you see the composition operator (chain), think after
