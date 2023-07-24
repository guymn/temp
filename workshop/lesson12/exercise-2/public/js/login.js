let USER;
window.onload = function () {
  useFetchUsers();
};

// ฟังก์ชันสำหรับเรียกใช้ API และรับข้อมูลผู้ใช้ทั้งหมด
function fetchUsers() {
  return fetch('http://127.0.0.1:3000/api/v1/users/')
    .then(response => response.json())
    .then(data => {
      return data; // คืนค่าข้อมูลผู้ใช้ทั้งหมด
    });
}

function useFetchUsers() {
  fetchUsers()
    .then(data => {
      console.log(data);
      USER = data.data;
      // console.log(USER[1].userName);
    })
    .catch(error => {
      console.error('Error:', error);
      return;
    });
}

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

function findUser(userName, password) {
  try {
    USER.forEach(element => {
      if (userName === element.userName && password === element.password) {
        const pageURL = '../page/home.html';
        // navigateToAnotherPage(pageURL);
        throw new Error('Login successful');
      }
    });
    alert('Invalid username or password!');
  } catch (error) {
    console.log(error.message);
  }
}

function navigateToAnotherPage(page) {
  return new Promise((resolve, reject) => {
    try {
      window.location.href = page;
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}
