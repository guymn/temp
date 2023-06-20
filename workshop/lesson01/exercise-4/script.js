'use strict';

const massMark = 1.88;
const heightMark = 95;

const massJohn = 1.76;
const heightJohn = 85;

const BMI_Mark = massMark / heightMark
const BMI_John = massJohn / heightJohn

const markHigherBMI = BMI_Mark > BMI_John

console.log(markHigherBMI)

const highterBNI = markHigherBMI ? `Mark's BMI (${BMI_Mark}) is higher than John's BMI (${BMI_John})!` 
                                 : `John's BMI (${BMI_John}) is higher than Mark's BMI (${BMI_Mark})!`
console.log(highterBNI)