/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  vowels ="aeiouAEIOU";
  let count =0;
  arrVowels=vowels.split('');
  str = str.toLowerCase();
  array = str.split('');
  for (let i=0;i<str.length;i++){
    if(arrVowels.includes(array[i])){

      count++;
    }
  }
  return count;
}

module.exports = countVowels;