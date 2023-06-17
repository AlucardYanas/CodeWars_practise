// 1 Disemvowel Trolls

function disemvowel(str) {

  const vowelRegExp = /[aeiou]/gi;
  return str.replace(vowelRegExp, '');
}

console.log(disemvowel("This website is for losers LOL!"));

//2 Capitalize First Letter of a String

function capitalize(string) {

  const capitalizedRegexp = /(^|(\!\?\.))\w/;

  return string.replace(capitalizedRegexp, match => match.toUpperCase());

}

console.log(capitalize('hello world'));


//3 Remove consecutive duplicate words

function removeConsecutiveDuplicates(string) {

  const duplicateVowels = /(\b\w+\b)(?:\s+\1)+/;
  return string.replace(duplicateVowels, '');
}

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))


//"alpha beta gamma delta alpha beta gamma delta"


//4 The Culling of Stratholme. You will receive a string s as input: Each "word" represents a house, and each letter represents a citizen. All infected citizens are represented as "i" or "I" in s. You must eradicate them, and their neighbors. If an infected citizen appears after or before a space, you should not delete the space, but keep in mind that the distance from "house" to "house" (word to word) has to have only one space.

function purifyTheStratholme(s) {

  const purifiedRegexp = /(?<=i)\w+(?=i)/gi
  return s.replace(purifiedRegexp, '')
}

console.log(purifyTheStratholme("STRING" )) //"STG"


//5 C.Wars

function initials(n){
  
  const initialsRegexp = /^(\w)\w+\s+(\w)\w+\s+(\w+)$/g;

  return n.replace(initialsRegexp)

}

console.log(initials('Barack Hussain obama')) //B.H.Obama 


//6 Capitalize First Letter of a String

JavaScript

let list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

function greetDevelopers(list) {

    const greetings = [];

    for (const developers of list) {
        developers['greeting'] = `Hi ${developers.firstName}, what do you like the most about ${developers.language}?`
        greetings.push(developers);

    }
    return greetings
}

console.log(greetDevelopers(list1))

//7 Regex validate PIN code

function validatePIN (pin) {
  const pinRegexp = /^(?:\d{4}|\d{6})$/;
  
    if(pin.length!== 4 && pin.length!== 6) {
      return false
    }
  
  return pinRegexp.test(digitedString)
}

console.log(validatePIN('0000'))



//8 Dropcaps

function dropCap(n) {

  const dropCapRegexp = /\b\w{3,}/g;


  return n.toLowerCase().replace(dropCapRegexp, match => match.charAt(0).toUpperCase() + match.slice(1));

}

console.log(dropCap('zKDuiDjBdac Q'));


// 9 Difference between years


function yearExtractor(string) {
  const yearsRegexp = /\d{4}/g;
  let arrayedYear =  yearsRegexp.exec(string).slice(0,3);
  return parseInt(arrayedYear[0], 10);
}

function getYearsDiff(date1, date2){


  return Math.max(yearExtractor(date1), yearExtractor(date2)) 
  - Math.min(yearExtractor(date1), yearExtractor(date2));

}

console.log(getYearsDiff('1997/10/10', '2015/10/10'))


//10 Password maker

function makePassword(phrase) {
  const firstLettersRegexp = /\b[A-Z]/gi;

  const wordsToDigitRegexp = /[i,o,s]/gi;
  let firstLetters =  phrase.match(firstLettersRegexp);

  return firstLetters.join('').replace(wordsToDigitRegexp, function(match) {
    if (match === 'I' || match === 'i') {
      return '1';
    } else if (match === 'O' || match === 'o') {
      return '0';
    } else if (match === 'S' || match === 's') {
      return '5';
    }
  });

}

console.log(makePassword("Give me liberty or give me death"));

//11 Return String of First Characters

function makeString(s){

  const firstLettersRegexp = /\b[A-Z]/gi;
  return s.match(firstLettersRegexp).join('');
}

console.log(makeString("This Is A Test"));