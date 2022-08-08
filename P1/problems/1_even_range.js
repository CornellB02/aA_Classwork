/*******************************************************************************
Write a function evenRange(start, end) that returns an array containing all even
numbers between 'start' and 'end' in sequential order.

Examples:

evenRange(4, 11) => [ 4, 6, 8, 10 ]
evenRange(8, 5) => []
*******************************************************************************/

function evenRange(start, end) {
  let newArr = []

  for (let i = start;i <= end;i += 1){
    if (i % 2 === 0);
    newArr.push(i);
  }
  return newArr
}

console.log(evenRange(13, 20)) // [ 14, 16, 18, 20 ]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenRange;
