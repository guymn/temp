import * as myModule from './script.js';
const backElement = document.getElementById('back');

const navigateToAnotherPage = async function (page) {
  return new Promise((resolve, reject) => {
    try {
      window.location.href = page;
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

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
      if (checkData(userName, firstName, lastName, password, passwordConfirm)) {
        // postData(userName, firstName, lastName, password)
        //   .then(data => {
        //     console.log('Data successfully posted:', data);
        //   })
        //   .catch(error => {
        //     console.error('Error posting data:', error);
        //   });
        myModule.success('Success', 1.5);
        await myModule.wait(1.8);
      }
    });
});

async function checkData(userName, fName, lName, pass, passC) {
  let user = await myModule.useFetchUsers();
  let bool = false;
  await user.forEach(element => {
    if (userName == element.userName) {
      bool = true
      return 
    }
  });
  if(bool){
    myModule.oops('Wrong..', 'Duplicate username!', '');
    return false
  }
  if(pass != passC){
    myModule.oops('Wrong..', 'The password and confirmation password do not match!', '');
    return false
  }
  return true;
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
          reject(`Request failed with status: ${response.status}`);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
