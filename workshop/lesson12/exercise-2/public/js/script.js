const userDatabase = 'http://127.0.0.1:3000/api/v1/users/';
const tourDatabase = 'http://127.0.0.1:3000/api/v1/tours/';
const homeURL = 'http://127.0.0.1:3000/page/home.html';
const indexURL = 'http://127.0.0.1:3000/';

const wait = function (time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Awet time: 2 seconds have passed!');
    }, time * 1000);
  });
};

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

const oops = async function (title, text, titleFooter) {
  Swal.fire({
    icon: 'error',
    title: title,
    text: text,
    footer: `<a href="">${titleFooter}</a>`,
  });
};

const success = async function (title, time) {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: title,
    showConfirmButton: false,
    timer: time * 1000,
  });
};

async function fetchUsers() {
  const response = await fetch(userDatabase);
  const data = await response.json();
  return data;
}

async function useFetchUsers() {
  try {
    const data = await fetchUsers();
    return data.data;
  } catch (error) {
    console.error('Error:', error);
    return;
  }
}

async function checkSeal(bool, doTrue, doFlase) {
  if (bool) {
    doTrue();
  } else {
    doFlase();
  }
}
export {
  userDatabase,
  tourDatabase,
  homeURL,
  indexURL,
  oops,
  success,
  wait,
  checkSeal,
  navigateToAnotherPage,
  useFetchUsers,
};
