'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const total = []

for(let i = 0;i < bills.length ;i++){
    tips[i] = calcTip(bills[i])
    total[i] = tips[i] + bills[i]
}

function calcTip(bills){
    let tip = bills >= 50 && bills <= 300 ? bills*0.15 : bills*0.2
    return tip 
}

function calcAverage(arr){
    let sum = 0
    for(let i = 0 ; i <  arr.length ; i++){
        sum += arr[i]
    }
    return sum/arr.length
}

console.log(bills)
console.log(tips)
console.log(total)
console.log(calcAverage(total))
