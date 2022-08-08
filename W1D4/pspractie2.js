// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

// function sumArray(array) {
//     sum = 0
//     // arr = []
//     for(let i = 0; i < array.length; i ++) {
//         arrayNum = array[i]
//         sum += arrayNum
//     }
//     return sum
// }

// console.log(sumArray([5, 8, 4])); // => 15


// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []


// function range(start, end) {
//     let newArray = []
//     for(let i = start;i <= end; i++) {
//         newArray.push(i)
//     }
//     return newArray
// }

// console.log(range(1,92))


// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'

// function wordPeriods(sentence) {
//     let newSen = [];
//     senArray = sentence.split(' ');
//     for(let i = 0; i < senArray.length; i++) {
//     word = senArray[i]
//     words = word + '.'
//     newSen.push(words)
//     }
//     return newSen
// }


// console.log(wordPeriods('what is the weather today')); // => 'what. is. the. weather. today.'


// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//

function capWords(words) { 
    let arr = []
    let word = words[i]
    for(let i = 0; i <= word.length; i++) {
        let uppWord = word.toUpperCase();
        arr.push(word(uppWord))
    }
    return arr
}
console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!']