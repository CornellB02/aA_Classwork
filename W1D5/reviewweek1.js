// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true

// function isInside(array, ele) {
//     return array.indexOf(ele) > -1 
// }
// console.log(isInside(['chase', 'phi', 'eliot'], 'fred')); // => false

// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'

// function reverseStr(str){
//     string = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//     let strs = str[i]  
//         string += strs
//         }
//         return string
//     }

//     console.log(reverseStr('bootcamp'))

    // Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

function luckySevens(max) {
    let arr = []
    for (i = 0; i <= max; i++) {
        if (i % 7 === 0) {
        arr.push(i)
        }
    }
    return arr
}

console.log(luckySevens(25))

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]


function copyMachine(ele, num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(ele)
    }
    return arr
}
//

console.log(copyMachine(11, 6)); // => [ 11, 11, 11, 11, 11, 11 ]