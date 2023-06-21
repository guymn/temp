'use strict';

const bill = [125, 555, 44]
const tips = []
const total = []

for(let i = 0;i < bill.length ;i++){
    tips[i] = calcTip(bill[i])
    total[i] = tips[i] + bill[i]
}

function calcTip(bill){
    let tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2
    return tip 
}

console.log(bill)
console.log(tips)
console.log(total)
