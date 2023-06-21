'use strict';
const dolphinsScoresData1 = [44, 23, 71];
const koalasScoresData1 = [ 65, 54, 49];

const dolphinsScoresData2 = [85, 54, 41];
const koalasScoresData2 = [23, 34, 27];

function calcAverage(scoresArray){
    let sum = 0
    for(let i = 0 ; i <  scoresArray.length ; i++){
        sum += scoresArray[i]
    }
    return sum/scoresArray.length
}



function checkWinner(avgDolhins, avgKoalas) {
    if(avgDolhins > 2*avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`)
    }
    else if(2*avgDolhins < avgKoalas) {
        confirm.log(`Koalas win (${avgDolhins} vs. ${avgKoalas})`)
    }
    else {
        console.log('no team win')
    }
}
checkWinner(calcAverage(dolphinsScoresData1), calcAverage(koalasScoresData1))
checkWinner(calcAverage(dolphinsScoresData2), calcAverage(koalasScoresData2))
