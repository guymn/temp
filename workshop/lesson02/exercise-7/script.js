'use strict';
  
const description1 = describeCountry('Finland', 6, 'Helsinki');
const description2 = describeCountry('United States', 331, 'Washington, D.C.');
const description3 = describeCountry('Japan', 126, 'Tokyo');
  

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(description1);
console.log(description2);
console.log(description3);

const populations = {
    China: { name: "China", pop: 1441 },
    Thai: { name: "Thai", pop: 7 },
    USA: { name: "USA", pop: 332 },
    Indai : { name: "Indai", pop: 1432 }

}
  
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
  
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};
  
const percentageOfWorld3 = population => (population / 7900) * 100;

function describePopulation(country, population){
    return `${country} has ${population} million people, so it's about ${percentageOfWorld1(population)}of the world population`
}
if(Object.keys(populations).length === 4){
    for(let list in populations){
        console.log(describePopulation(populations[list].name, populations[list].pop))
    }
}

const neighbours = ['France', 'Spain', 'Italy'];
neighbours.push('Utopia');
neighbours.pop();

if (!neighbours.includes('Germany')) {
  console.log("Probably not a central European country :D");
}

const swedenIndex = neighbours.indexOf('Spain');
if (swedenIndex !== -1) {
  neighbours[swedenIndex] = 'Republic of Sweden';
}

console.log(neighbours);

const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: neighbours,
    describe: function() {
        console.log(`The country of ${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries, and a capital called ${this.capital}.`);
      },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
      }
  };
  
  console.log(`Finland has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
  
myCountry.population += 2
myCountry['population'] -= 2

myCountry.describe(); 
myCountry.checkIsland();
console.log(myCountry.isIsland); 

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

const percentages2 = [];
for (let country in populations) {
  const population = populations[country].pop;
  const percentage = percentageOfWorld1(population);
  percentages2.push(percentage);
}

console.log(percentages2);

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
  const neighbours = listOfNeighbours[i];
  for (let j = 0; j < neighbours.length; j++) {
    console.log(`Neighbour: ${neighbours[j]}`);
  }
}

let tempPopulations = [1441, 7 ,332 ,1432]
const percentages3 = [];
let country = 0;
while(country < tempPopulations.length){
    const population = tempPopulations[country];
    const percentage = percentageOfWorld1(population);
    percentages3.push(percentage);
    country++
}

console.log(percentages3);

