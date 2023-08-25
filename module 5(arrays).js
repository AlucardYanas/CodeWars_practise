// 1 +1 Array

function upArray(arr){

  if (arr.length === 0) {
    return null
  }
  
  for(let i = 0; i< arr.length; i++) {
    if(arr[i] < 0 || arr[i] > 9) {
      return null
    }
  }

  let stringArray = arr.join('');
  console.log(stringArray)
  if(stringArray.length > 9) {
    const bigIntincreasedDigits = (BigInt(stringArray) +BigInt(1))
    
    return Array.from(String(bigIntincreasedDigits), Number);
     
  } else {
    const digitedArray = parseInt(stringArray, 10);
  // console.log(digitedArray)
  const increasedDigits =  digitedArray + 1;
  // console.log(increasedDigits)

  if(arr[0,1] === 0 ) {
    
    let digitWhith2Null =   increasedDigits.toString()
    const addedNull = '00' + digitWhith2Null;
   return Array.from(String(addedNull), Number);

  }
  if(arr[0] === 0) {
   let digitWhithNull =   0 + increasedDigits.toString()
   return Array.from(String(digitWhithNull), Number);
  } 
  
  else {
    return Array.from(String(increasedDigits), Number);
  }
  }
  
}

console.log(upArray([0,0,4,7,8,6,4,8])) 


// 2 Odd-heavy Array

function isOddHeavy(n){
  const oddDigits = [];
  const evenDigits = [];


  for (const number of n) {

    if (number % 2 === 0) {
      evenDigits.push(number);
    }
    else { 
      oddDigits.push(number);
  }
  } 

  console.log(oddDigits,evenDigits)

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, oddDigits);
  }

  const maxedOdd = getMaxOfArray(oddDigits)

  // const resultedOdd = oddDigits.reduce(function (acc, val) {
  //   return acc + val;
  // });

  const resultedEven = evenDigits.reduce(function (acc, val) {
    return acc + val;
  });
  // console.log(resultedOdd,resultedEven)

  if (maxedOdd > resultedEven) {
    return true
  } else return false

  
}

console.log(isOddHeavy([ 0, 1, 3, -2, 5, 4 ]))


// 3  Zipwhith


const firstArray1 = [4, 10, 20, 60]

const secondArray1 = [2, 7, 15, 40]

// // [0, 3, 5, 20]



function zipWith(a0, a1) {

  function divisionOfDigits(digit1, digit2) {
    const division = digit1 % digit2;
    return division
}

    const newArray = []
    const arrayLength = Math.min(a0.length, a1.length)

    for (let i = 0; i < arrayLength; i++) {
        newArray.push(divisionOfDigits(a0[i], a1[i]))
    }

    return newArray;
}

console.log(zipWith(firstArray1, secondArray1))



//4 Create Phone Number

function createPhoneNumber(numbers){


  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) );

//5 Ziiiiip!

function zipObject(keys, values) { 
  const zippedObject = {};

  if (keys === undefined && values === undefined) {
    return zippedObject;
  }

  
   if (Array.isArray(keys[0]) && Array.isArray(keys[1])) {
    for (let i = 0; i < keys[0].length; i++) {
      zippedObject[keys[0][i]] = keys[1][i];
    }
    return zippedObject;
  }
  
    if (values === undefined) {
    for (const [key, value] of keys) {
      zippedObject[key] = value;
    }
    return zippedObject;
  }

  for (let i = 0; i < keys.length; i++) {
    zippedObject[keys[i]] = keys[i];
  }

  return zippedObject;

}



console.log(zipObject([["a","b"],[1,2]]))