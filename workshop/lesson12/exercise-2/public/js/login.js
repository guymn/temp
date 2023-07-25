import * as myModule from './script.js';
let USER;
window.onload = async function () {
  USER = await myModule.useFetchUsers();
  console.log(USER);
};

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('loginForm')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const userName = document.getElementById('userName').value;
      const password = document.getElementById('password').value;
      findUser(userName, password);
    });
});

async function findUser(userName, password) {
  try {
    let bool = false;
    USER.forEach(element => {
      if (userName === element.userName && password === element.password) {
        bool = true;
        return;
      }
    });
    myModule.checkSeal(
      bool,
      async () => {
        myModule.success('Success', 1.5);
        await myModule.wait(1.8);
        myModule.navigateToAnotherPage(myModule.homeURL);
      },
      async () => {
        myModule.oops('Wrong..', 'Invalid username or password!', '');
      }
    );
  } catch (error) {
    console.log(error.message);
  }
}
