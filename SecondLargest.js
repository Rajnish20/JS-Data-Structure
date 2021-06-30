let numArr = new Array();
function findfirstLargest(largest, number){
    if(number > largest){
        largest = number;
    }
    return largest;
}
function findsecondLargest(secondLargest,number){
    if(number != first && number > secondLargest){
        secondLargest = number;
    }
    return secondLargest;
}
function findFirstMin(minimum,number){
    if(number < minimum){
        minimum = number;
    }
    return minimum;
}
function findSecondMin(secondMin, number){
    if(number != firstMin && number < secondMin){
        secondMin = number;
    }
    return secondMin;
}
for(let i = 0; i < 10; i++){
    numArr.push(Math.floor(Math.random() * 900) + 100)
}
console.log(numArr);
let first = numArr.reduce(findfirstLargest,0);
let second = numArr.reduce(findsecondLargest,0);
console.log(second);

let firstMin = numArr.reduce(findFirstMin,1000);
let secMin = numArr.reduce(findSecondMin,1000);
console.log(secMin);


