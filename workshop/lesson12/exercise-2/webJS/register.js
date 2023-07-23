const back = document.getElementById('back');

function navigateToAnotherPage(page) {
  return new Promise((resolve, reject) => {
    back.addEventListener('click', async function() {
      try {
        window.location.href = page;
        resolve(); // Resolving the promise when navigation is successful
      } catch (error) {
        reject(error); // Rejecting the promise if there's an error
      }
    });
  });
}

navigateToAnotherPage("/workshop/lesson12/exercise-2/webHtml/loginPage.html")