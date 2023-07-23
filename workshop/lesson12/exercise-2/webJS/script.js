// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('login-form');
//     loginForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const userName = document.getElementById('userName').value;
//       const password = document.getElementById('password').value;
  
//       fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ userName, password }),
//       })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           alert('Login successful!');
//           // You can redirect the user to another page here if needed
//         } else {
//           alert('Login failed. Please check your credentials.');
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//     });
//   });
