let birthMap = new Map();
for(let i = 0; i < 50; i++){
    let birthMonth = Math.floor((Math.random() * 12) + 1);
    if(birthMap.has(birthMonth)){
        birthMap.set(birthMonth,birthMap.get(birthMonth) + 1);
    }else{
        birthMap.set(birthMonth,1);
    }
}
console.log(birthMap);

