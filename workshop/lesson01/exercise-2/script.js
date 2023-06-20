'use strict';

const country = 'Portugal'
const continent = 'Europe'
const population = 40
const isIsland = false
let language

console.log(country+'\n'+continent+'\n'+population+'\n'+isIsland);

language = 'portuguese'

console.log(`A half population of ${country} is ${population/2}`)
console.log(`Population of ${country} is ${population+1}`)
console.log(`Finland has a population more than ${country} is ${population > 6}`)
console.log(`${country} have less people than 33 million people that is the average population of a country is ${population < 33}`)

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description)

if(population > 33){
    console.log('Portugal is population is above average')
}
else {
    console.log('Portugal is population is 22 million below average')

}
console.log('9' - '5')
console.log('19' - '13' + '17')
console.log('19' - '13' + 17)
console.log('123' < 57)
console.log(5 + 6 + '4' + 9 - 4 - 2)

// let numNeighbours = prompt('How many neighbour countries does your country have?')
// numNeighbours = parseInt(numNeighbours);
// if(numNeighbours === 1){
//     console.log('Only 1 border!')
// }
// else if(numNeighbours > 1){
//     console.log( 'More than 1 border')
// }
// else {
//     console.log('No borders')
// }
if(population < 50 && !isIsland){
    console.log('You should live in Portugal :)')
}
else{
    console.log('Portugal does not meet your criteria :(')
}
switch (language) {
    case 'chinese':
    case 'mandarin':
      console.log('MOST number of native speakers!');
      break;
    case 'spanish':
      console.log('2nd place in number of native speakers');
      break;
    case 'english':
      console.log('3rd place');
      break;
    case 'hindi':
      console.log('Number 4');
      break;
    case 'arabic':
      console.log('5th most spoken language');
      break;
    default:
      console.log('Great language too :D');
      break;
}

const ternary  = population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`;
console.log(ternary)
