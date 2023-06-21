'use strict';
const dolphinsScoresData1 = [96, 108, 89];
const koalasScoresData1 = [88, 91, 110];

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

function averageScore(scoresArray){
    let sum = 0
    for(let i = 0 ; i <  scoresArray.length ; i++){
        sum += scoresArray[i]
    }
    return sum/scoresArray.length
}

let bonus = (score) => {
    if(score >= 100){
        return true
    }
    return false
}


function findWiner(scoresDol, scoresKoa, bonusDol, bonusKoa) {
    if(scoresDol > scoresKoa && bonusDol && bonusKoa) {
        return 'Dolphins'
    }
    else if(scoresDol < scoresKoa && bonusDol && bonusKoa) {
        return 'Koalas'
    }
    else if (scoresDol == scoresKoa && bonusDol && bonusKoa){
        return 'Draw'
    }
}

console.log(findWiner(averageScore(dolphinsScoresData1), 
                    averageScore(koalasScoresData1), 
                    true, 
                    true))
                    
console.log(findWiner(averageScore(dolphinsScoresBonus1), 
                    averageScore(koalasScoresBonus1), 
                    bonus(averageScore(dolphinsScoresBonus1)), 
                    bonus(averageScore(koalasScoresBonus1))))

console.log(findWiner(averageScore(dolphinsScoresBonus2), 
                    averageScore(koalasScoresBonus2), 
                    bonus(averageScore(dolphinsScoresBonus2)), 
                    bonus(averageScore(koalasScoresBonus2))))