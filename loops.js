/* Build a function forLoop. It takes an array as an argument.
Start counting from 0, and, using a for loop, add a string to the array.
But not just any string. If your i value is 1, add the string "I am 1 strange loop.";
but if your i value is anything else, add the string "I am ${i} strange loops." to the array 25 times.
(Remember flow control with if and else? And how do we interpolate i?) Then return the array. */

/* loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times: */

function forLoop(array) {
  for (let 1 = 0; i < 25 ; i++) {
    if (i === 1) {
      array.push('I am ${i} strange loop ${i===0 ? \'\' : \'s\' }.')
  }

  return array;

}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done'
}


function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
 do {
   array.pop();
   return array;
 } while ( array.length > 0 && maybeTrue() );
}
