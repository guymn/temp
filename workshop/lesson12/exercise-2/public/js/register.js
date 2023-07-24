const backElementId = 'back';
const pageURL = 'http://127.0.0.1:3000/';

navigateToAnotherPage(backElementId, pageURL);

function navigateToAnotherPage(id, page) {
  const element = document.getElementById(id);
  return new Promise((resolve, reject) => {
    element.addEventListener('click', async function () {
      try {
        window.location.href = page;
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('registerForm')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const userName = document.getElementById('userName').value;
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const password = document.getElementById('password').value;
      const passwordConfirm = document.getElementById('confirm_password').value;
      checkData(userName, firstName, lastName, password, passwordConfirm)
      postData(userName, firstName, lastName, password)
        .then(data => {
          console.log('Data successfully posted:', data);
        })
        .catch(error => {
          console.error('Error posting data:', error);
        });
    });
});

function checkData(userName, fName, lName, pass, passC){

}

function postData(userName, fName, lName, pass) {
  return new Promise((resolve, reject) => {
    // Prepare the data to be sent in the request body
    const data = {
      userName: userName,
      firstName: fName,
      lastName: lName,
      password: pass,
    };

    // Make the POST request using Fetch API
    fetch('http://127.0.0.1:3000/api/v1/users/', {
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
          reject(`Request failed with status: ${response.status}`);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
