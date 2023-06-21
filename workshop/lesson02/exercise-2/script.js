'use strict';

const bill = [275, 40, 430]
for(let i = 0;i < bill.length ;i++){
    let tip = bill[i] >= 50 && bill[i] <= 300 ? `The bill ias ${bill[i]}, the tip was ${bill[i] * 0.15}, and the total value ${bill[i]+(bill[i]*0.15)}`
                                              : `The bill ias ${bill[i]}, the tip was ${bill[i] * 0.2}, and the total value ${bill[i]+(bill[i]*0.2)}`
    console.log(tip)
}
