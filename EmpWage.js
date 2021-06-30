const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let dailyWageArr = new Array();
let dailyWageMap = new Map();
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_FULL_TIME:
           return FULL_TIME_HOURS;
        case IS_PART_TIME:
           return PART_TIME_HOURS;
        default:
           return 0;
       }
}

function calculateDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

let totalWorkingDays = 0;
let totalEmpHours = 0;
while(totalWorkingDays < WORKING_DAYS && totalEmpHours <= MAX_WORKING_HOURS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHours += empHrs;
    dailyWageArr.push(calculateDailyWage(empHrs));
    dailyWageMap.set(totalWorkingDays,calculateDailyWage(empHrs));
}
let empWage = calculateDailyWage(totalEmpHours);

console.log(dailyWageMap);

function totalWages(totalEmpWage, dailyWage){
    return totalEmpWage + dailyWage;
}
console.log(Array.from(dailyWageMap.values()).reduce(totalWages,0));

//calculate total wage using foreach traversal
let totalWage = 0;
function sum(dailyWage){
    return totalWage += dailyWage;
}
dailyWageArr.forEach(sum);
console.log(totalWage);

//calculate total wage using reduce method
console.log(dailyWageArr.reduce(totalWages, 0));

//map day wih wage earned
let dailyCounter = 0;
function mapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter +" = "+ dailyWage;
}
let mapDayWithWageArr = dailyWageArr.map(mapDayWithWage);
console.log(mapDayWithWageArr);

// Find full time wage earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log(fullDayWageArr);

//Find first full time wage was earned
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log(mapDayWithWageArr.find(findFullTimeWage));

//check if there is any part time wage was earned
function isPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log(mapDayWithWageArr.some(isPartTimeWage));

//find how many days employee worked
function workDays(totalDays, dailyWage){
    if(dailyWage > 0){
        return totalDays + 1;
    }
    return totalDays;
}

console.log(dailyWageArr.reduce(workDays,0));