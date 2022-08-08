/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
*******************************************************************************/

function reverseString(string) {
  let str = string.split('-')
  let arr = []

  for(let i = str.length - 1; i >= 0; i--) {
    word = str[i]
    arr.push(word);
  }
  // let reversed = arr.join('-')
  return reversed
}

console.log(reverseString("Jump,-jump-for-joy")) //=> "joy-for-jump-Jump,"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseString;
