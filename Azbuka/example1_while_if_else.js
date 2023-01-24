function firstTask() {
    let num = 5;
    while(num <= 10) {
        console.log(num);
        num++;
    }
       
   }

   function secondTask() {
    for (let i = 20; i >= 10; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
    }
}

function thirdTask() {
    for (let i = 2; i <= 10; i = i + 2) {
      console.log(i);
    }
  }
 
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


let i = 2;
 
function fourthTask() {
    let i = 2;
    while (i <= 16) {
     if (i % 2 === 0) {
        i++;
        continue;
        } else {
            console.log(i);
        }
        i++;
    }
   }

//    const numberArray = [];
//    numberArray[0] = 5;
//    numberArray[1] = 6;
//    numberArray[2] = 7;
//    numberArray[3] = 8;
//    numberArray[4] = 9;
//    numberArray[5] = 10;
//  for (let i = 5; i < 11; i++) {
//     numberArray[i - 5] = i;
//    console.log(numberArray);
//  }

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask()