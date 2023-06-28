'use strict';

const textArea = document.createElement('textarea');
const clickBtn = document.createElement('button');

clickBtn.textContent = 'OK';
clickBtn.addEventListener('click', function () {
  const value = textArea.value;
  const lines = value.split('\n');

  for (let line of lines) {
    const words = line.trim().split('_');
    let result = words[0];

    for (let i = 1; i < words.length; i++) {
      const capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
      result += capitalizedWord;
    }

    console.log(result.padEnd(20));
  }
});

document.body.append(textArea);
document.body.append(clickBtn);
