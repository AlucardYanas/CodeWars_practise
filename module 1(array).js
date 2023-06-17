// Sort array by string length

function sortByLength (array) {
 
    return array.sort((a,b) => a.length - b.length);

};

console.log(sortByLength(["Beg", "Life", "I", "To"]))


//The Office I - Outed


function outed(meet, boss) {

  let colleaguesVoices = 0;
  let meetLength = 0;

  for (let kea in meet) {
      kea === boss ? colleaguesVoices += meet[kea] * 2 : colleaguesVoices += meet[kea]; // проверяем равенство переменной ки и аргумента функции Босс
      meetLength++;                                                                     // если совпадает с боссом, то умножает его число голсоов на два и прибавляем к голосам остальных коллег 
  } // делаем инкремент meetLength за каждого коллегу

  const overallHapappiness = colleaguesVoices / meetLength;

  if (overallHapappiness <= 5) {
      return 'Get Out Now!';
  } else {
      return 'Nice Work Champ!';
  }
}

console.log(outed(({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura')));

//5 Grouping in string  In this kata you have to find whether same elements of the string are grouped together.

const isConsecutive = (str) => {

  let arrayStr =  Array.from(String(str), Number);  // превращаем строку в массив чисел

  for(i = 0; i < arrayStr.length; i++) {
    if(arrayStr[i+1] === arrayStr[i]) {
      return true
    }
    return false
  }
  
  }

  // console.log(isConsecutive(112200)) //true
  console.log(isConsecutive(11234400522)) //false

// 1 Latin Squares
function createNumberArray(n) { // функция для наполнения массива случайными числами

  const numberArray = [];

  for (let i = 1; i <= n; i++) { // здесь наполняем массив значениями от 1 до n. i последовательно принимает эти значения.
    numberArray.push(i);
  }

  return numberArray.sort((a, b) => 0.5 - Math.random()); // случайно перемешиваем числа
}

// const n = 5; // Size of the array
// const numberArray = createNumberArray(n);

function makeLatinSquare(n) {
  const latinSquare = [];

  for (let i = 0; i < n; i++) {
    latinSquare[i] = []; // инициализруем пустой ряд

    for (let j = 0; j < n; j++) {
      latinSquare[i][j] = createNumberArray(n); // присваем значения через функцию наполнения
    }
  }

  return latinSquare;
}

console.log(makeLatinSquare(4))



// 2 Length and two values. заполняем массив значениями в количестве n.

function alternate(n, firstValue, secondValue){
 
  let finalFilledArray = [];
  
  for(i = 1; i <= n; i++) {
    finalFilledArray.push(firstValue, secondValue)

  }
  return finalFilledArray;
}

console.log(alternate(3,'2',2))


//3 Find Duplicates выводим только дубликаты один дубликат одно число

function duplicates(arr) {
  const duplicatesArr = [];

 let sortedArray = arr.sort();

  for(i = 0; i < sortedArray.length; i++) {
    if(sortedArray[i+1] === sortedArray[i]) {
      duplicatesArr.push(sortedArray[i])
    }
  }

   return duplicatesArr
  
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"])) // [4, 3, 1]





  //6 n Largest Elements

  function largest(n, array) {

    const sortedArray = array.sort((a,b) => a < b);

    return sortedArray

    for (i = 1; i< sortedArray.length; i++) {

    }

    
    return [];
  }

  console.log(largest(2, [5, 1, 5, 2, 3, 1, 2, 3, 5])) //[5, 3]


  function chunk(arr, n = 1) {

    const chunkedArray = [];
    let intermediateArray = [];
  
    for (i = 0; i < arr.length; i++) {
  
      intermediateArray.push(arr[i])
  
      if (intermediateArray.length === n) {
        chunkedArray.push(intermediateArray)
  
        intermediateArray = [];
        
      }
  
    }
  
    if (intermediateArray.length) {
      chunkedArray.push(intermediateArray)
    }
    
    return chunkedArray
  }
  
  
  // console.log(chunk(['a', 'b', 'c', 'd'], 2))
  // // => [['a', 'b'], ['c', 'd']]
  
  // console.log(chunk(['a', 'b', 'c', 'd'], 3))
  // => [['a', 'b', 'c'], ['d']]
  
  console.log(chunk(['a', 'b', 'c', 'd']))
  // // => [['a'], ['b'], ['c'], ['d']]