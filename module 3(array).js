// 1 Odd or Even?

function oddOrEven(array) {
  
  if(array.length === 0) {
    array = [0]
  };

  const accamulatedNumbers = array.reduce( (acc, digit) =>
     acc + digit
  );

  return accamulatedNumbers % 2 != 0 ? 'odd' : 'even';
}

console.log(oddOrEven([0, 1, 4]));


// 2 Sorting Arrays

let a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
let a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

function sortArray(a1, a2) {
  let firstLetterArray = a1.map(word => word[0]); 

  return a2.sort(function(a, b) {
    const a1Letters = firstLetterArray.indexOf(a[0]); 
    const b1Letters = firstLetterArray.indexOf(b[0]); 

    if (a1Letters < b1Letters) {
      return -1;
    }
    if (a1Letters > b1Letters) {
      return 1;
    }
    return 0;
  });
}

console.log(sortArray(a1, a2)); //['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

//3 Testing 1-2-3

function numbering (array) {

  const numberedArray =  array.map(function(item, i){
    return `${i+1}: ${item}`
  })

  return numberedArray;
}

console.log(numbering(["a", "b", "c"]))  // ["1: a", "2: b", "3: c"]


//4 Sum of Minimums

const array = [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]];

function sumOfMinimums(array) {

  return array
  .map((elem) => {return Math.min(...elem)})
  .reduce((currentSum, currentNumber) => {return currentSum + currentNumber});
};

console.log(sumOfMinimums(array));


//!5 remove the minimum !

function removeSmallest(numbers) {
  const bigNumbers = [];

  let minNumber = Math.min(...numbers);

  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] !== minNumber) {
      bigNumbers.push(numbers[i])
    }
  };

  return bigNumbers;
}

console.log(removeSmallest([1, 1, 2, 3, 4, 5]));


// 6 Ones and Zeros

const binaryArrayToNumber = arr => {
 let stringedArray =  arr.join('').toString(2);
 return parseInt(stringedArray, 2)
};

console.log(binaryArrayToNumber([0,0,0,1]))

// 7 Divide and Conquer

function reducer(array) {
  return array.reduce((currentSum, currentNumber) => {return currentSum + currentNumber}); 

}

function divCon(x) {
  const digits = [];
  let strings = [];

  if (x === undefined || x.length == 0) {
    return x
}

  for(let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'number') {
      digits.push(x[i]);
    } else if (typeof x[i] === 'string') {
      strings.push(x[i]);
    }
  };

  const digitedStrings = strings.map(Number);

  return reducer(digits) - reducer(digitedStrings);
}

console.log(divCon([]))

//8 Fizz Buzz

function fizzbuzz(n) {
  let fizzArray = [];

  for(let i = 1; i <= n; i++) {
    fizzArray[i] = i;
  }
  
  return fizzArray.slice(1).map((elem, index) => {
    if((index + 1) % 3 === 0 && (index + 1) % 5 === 0) {
      return 'FizzBuzz';
    } else if((index + 1) % 3 === 0) {
      return 'Fizz';
    } else if((index + 1) % 5 === 0) {
      return 'Buzz';
    } else {
      return elem;
    }
  });
}

console.log(fizzbuzz(15))


//9 Olympic Rings  (В условиях задачи четко не указано все буквы, которые дают кольца, поэтому не могу пройти все тесты)

function olympicRing(a){
  let counter = 0;

  const olympicRexexp = /[o,O,p,P,e,A,a,b,g]/g;

  const olympicRegexpB = /B/g;

  for(let i = 0; i< a.length; i++) {
    if(a[i].match(olympicRexexp)){
      counter++;
    }
    if(a[i].match(olympicRegexpB)){
      counter += 2;
    }
  };

  let rings =  Math.round(counter/2);

  if(rings <= 1) {
    return 'Not even a medal!';
  }
  if(rings <= 2) {
    return 'Bronze!';
  }
  if(rings <= 3) {
    return 'Silver!';
  }
  if(rings > 3) {
    return 'Gold!';
  }

}

console.log(olympicRing('wHjMudLwtoPGocnJB')) //4

// 10 Hells Kitchen

function gordon(a) {
  const aRegexp = /a/gi;
  const exclamationRegexp = /\s+\b|\s*$|\b(?=\W*$)/gi;
  const vowelRegexp = /[e,u,i,o]/gi;

  return a.replace(exclamationRegexp, '!!!! ').replace(aRegexp, '@').replace(vowelRegexp, '*').toUpperCase().slice(0, -1);

}

console.log(gordon('What feck damn cake')) //'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'