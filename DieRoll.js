let DieRollMap = new Map();
function checkfor10value(){
    for(let value of DieRollMap.values()){
        if(value == 10){
            return false;
        }
    }
    return true;
}
function getByValue(DieRollMap, searchValue) {
    for (let [key, value] of DieRollMap.entries()) {
      if (value === searchValue){
          return key;
      }
    }
}
function getMin(minimum, number){
    if(number < minimum){
        minimum = number;
    }
    return minimum;
}
while(checkfor10value()){
    let num = Math.floor((Math.random() * 6) + 1);
    if(DieRollMap.has(num)){
        DieRollMap.set(num,DieRollMap.get(num) + 1);
    }else{
        DieRollMap.set(num,1);
    }
}
console.log(DieRollMap);
console.log(getByValue(DieRollMap,10));
let min = Array.from(DieRollMap.values()).reduce(getMin, 1000);
console.log(getByValue(DieRollMap,min));

