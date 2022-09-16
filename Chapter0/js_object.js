// Object of JavaScript

// Object which values are STRING
let obj1 = { a: "apple", b: "banana", c: "carrot" };

// Object which values are NUMBER
let obj2 = { a: 1, b: 2, c: 2 };

// Object which values are VARIOUS TYPES
let obj3 = { a: "hello", b: 100, c: [1, 2, 3, 4] };

// Object which values are OBJECT
let obj4 = {
    a: { a1: 1, a2: 2},
    b: { b1: 3, b2: 4},
    c: { c1: 5, c2: 6}
};


console.log(obj1['a']); // result : "apple"

console.log(obj2.a); // result : 1

console.log(obj3['c']); // result : [1, 2, 3, 4]

console.log(obj4.c.c2); // result : 6