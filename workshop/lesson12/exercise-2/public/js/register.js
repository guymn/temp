import * as myModule from './script.js';
const backElement = document.getElementById('back');

backElement.addEventListener('click', async function () {
  console.log('h');
  myModule
    .navigateToAnotherPage(myModule.indexURL)
    .then(() => {
      console.log('Page navigation successful');
    })
    .catch(error => {
      console.error('Error while navigating:', error);
    });
});

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('registerForm')
    .addEventListener('submit', async function (event) {
      event.preventDefault();
      const userName = document.getElementById('userName').value;
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const password = document.getElementById('password').value;
      const passwordConfirm = document.getElementById('confirm_password').value;

      if (password == passwordConfirm) {
        postData(userName, firstName, lastName, password)
          .then(async data => {
            myModule.success(`Successfully register`, 1.5);
            await myModule.wait(1.8);
            console.log('Success');
            myModule.navigateToAnotherPage(myModule.indexURL)
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      }
      else {
        myModule.oops('Error..', `The password and confirmation password do not match.`, '');
      }
    });
});

function postData(userName, fName, lName, pass) {
  return new Promise((resolve, reject) => {
    const data = {
      FristName: fName,
      LastName: lName,
      password: pass,
      userName: userName,
    };

    fetch(myModule.userDatabase, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.ok) {
          resolve(response.json());
        } else {
          response.json().then(data => {
            myModule.oops('Error..', `${data.error}`, '');
          });
        }
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}
