// 1 Converting 12-hour time to 24-hour time

function to24hourtime(hour, minute, period) {
  
  
  if(period === 'am' && hour === 12){
    hour = 0; 
  }

  if(period === 'pm' && hour !== 12) {
    hour+=12;
  }
 if(hour < 10 && minute < 10 && period === 'am'){
    let convertedHour = 0 + hour.toString()
    let convertedMinute = 0 + minute.toString()  ;
    return convertedHour + convertedMinute
  
  }
  else if (hour < 10 && minute < 10) {
    let convertedHour = 0 + hour.toString()
    let convertedMinute = minute.toString() + 0;
    return convertedHour + convertedMinute

  } 
  
  else if(minute < 10) {
    let convertedMinute = 0 + minute.toString()
    let convertedHour = hour.toString();
    return convertedHour + convertedMinute + 42
    
  } else if(hour < 10 && minute > 10){
      let convertedHour = 0 + hour.toString()
      let convertedMinute = minute.toString() ;
      return convertedHour + convertedMinute
    
  } 
  else {
      let convertedHour = hour.toString();
      let convertedMinute = minute.toString();

      return convertedHour + convertedMinute
  }

}

console.log(to24hourtime(2,  3, "am")) // 0203

// 2 Simple Fun #74: Growing Plant

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  
  const dayCount = 0;
  let currentHeight = 0;
  
  for (let dayCount = 0; currentHeight <= desiredHeight; dayCount++) {
    
    currentHeight += upSpeed;
    if(currentHeight < desiredHeight) {
      currentHeight -= downSpeed;
    }
    if(currentHeight >= desiredHeight) {
      return dayCount+1;
    }
  }

}

console.log(growingPlant(100,10,910)) 

// 3 How many are smaller than me?

function smaller(nums) {
  const smallDigitArray = [];
  for (let i = 0; i < nums.length; i++) {
    let smallerCount = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        smallerCount++;
      }
    }
    smallDigitArray.push(smallerCount);
  }
  return smallDigitArray;
}

  console.log(smaller([1, 2, 1])) //[0, 1, 0]


  //4 Unflatten a list (Easy)


  function unflatten (flatArray) {
    const unflattenedArray = [];

    for(let i = 0; i < flatArray.length;) {
      const x = flatArray[i];
      if(x < 3) {
        unflattenedArray.push(x)
        i++
      } 

       else if (x > 2) {
        const nextDigits = flatArray.slice(i, i + x);
        unflattenedArray.push(nextDigits)
        i += x 
      }  
      else {
        unflattenedArray.push(x);
      i++;
      }
    }
    return unflattenedArray


}

console.log(unflatten([1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3])) //[1, [4,5,2,1], 2, [4,5,2,6], 2, [3, 3] 

//5 


function likeOrDislike(buttons) {


  const reverseButtons = buttons.reverse()

  for (let i = 0; i <reverseButtons.length; i++) {
    
    if(reverseButtons[i] === reverseButtons[i+1]) {
      return Nothing
    }
    if(reverseButtons[i] =  Like) {
      return Like
    }
     if(reverseButtons[i] =  Dislike)  {
      return Dislike
    }
  
  }

}

console.log(likeOrDislike([Like,Like,Dislike,Like,Like,Like,Like,Dislike]))


//6 
const sing = function () {
  const bottleArray = [];
  const repetitions = 199;
  let bottleCounter = 99;

  for(let i = 0; i < repetitions; i++) {
    let firstBottleString = `${bottleCounter} bottles of beer on the wall, ${bottleCounter} bottles of beer.`
    bottleCounter--
    let secondBottleString = `"Take one down and pass it around, ${bottleCounter} bottles of beer on the wall."`
    
    bottleArray.push(firstBottleString,secondBottleString)
 
  }
  return bottleArray
};

console.log(sing())