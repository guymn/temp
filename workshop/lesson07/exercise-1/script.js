'use strict';

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//    - Display a prompt window for the user to input the number of the
//      selected option. The prompt should look like this:
//      ```
//      What is your favourite programming language?
//      0: JavaScript
//      1: Python
//      2: Rust
//      3: C++
//      (Write option number)
//      ```
//    - Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.

// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?


const poll = {
  question: 'What is your favorite programming language?\n',
  options: ['JavaScript', 'Python', 'Rust', 'C++'],
  answers: [0, 0, 0, 0],
  
  registerNewAnswer() {
    let prom = this.question;
    poll.options.forEach((value) => {
      prom += value + '\n'
    }); 
    const input = prompt(prom)
    const selectedOption = Number(input);

    if (selectedOption >= 0 && selectedOption < this.options.length && Number.isInteger(selectedOption)) {
      this.answers[selectedOption]++;
    } else {
      alert('Invalid option. Please try again.');
      this.registerNewAnswer();
    }

    this.displayResults();
  },

  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
      console.log(...this.answers);
    }
  }
};

const pollBtn = document.querySelector('.poll');
pollBtn.addEventListener('click', function(){
  poll.registerNewAnswer();
});

// Test data for bonus
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: data1 }, 'array');
poll.displayResults.call({ answers: data1 }, 'string');
poll.displayResults.call({ answers: data2 }, 'array');
poll.displayResults.call({ answers: data2 }, 'string');
