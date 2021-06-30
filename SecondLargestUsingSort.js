let numArr = new Array();
for(let i = 0; i < 10; i++){
    numArr.push(Math.floor(Math.random() * 900) + 100)
}
numArr.sort();
console.log(numArr);
console.log(numArr[numArr.length - 2]);
console.log(numArr[1]);