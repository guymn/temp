'use strict';

const imgContrainer = document.querySelector('.images');

const wait = function (second) {
  return new Promise(function (reslove) {
    setTimeout(reslove, second * 1000);
  });
};

////////////////////////////////////////
// ### PART 1

// 1. Create a function 'createImage' which receives 'imgPath' as an input. This function returns a promise which creates a new image (use `document.createElement('img')`) and sets the `.src` attribute to the provided image path.
const imgElm = document.querySelector('.images');
// 2. When the image is done loading (listen for the `'load'` event), append it to the DOM element with the `'images'` class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the `'error'` event), reject the promise.

const createImage = function (imgPath) {
  //http://127.0.0.1:5500/workshop/lesson09/exercise-2/img/img-1.jpg
  return new Promise(function (reslove, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgElm.append(img);
      reslove(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image failed to load'));
    });
  });
};

// ### PART 2

// 4. Consume the promise using `.then` and also add an error handler.
createImage(`http://127.0.0.1:5500/workshop/lesson09/exercise-2/img/img-1.jpg`)
  .then(function () {
    console.log('1');
    return wait(2);
  })
  .then(function () {
    const currentImg = imgElm.querySelector('img');
    currentImg.style.display = 'none';
    return createImage(
      `http://127.0.0.1:5500/workshop/lesson09/exercise-2/img/img-2.jpg`
    );
  })
  .then(function (img) {
    console.log('2');
    return wait(2);
  })
  .then(function () {
    const currentImg = imgElm.querySelector('img');
    currentImg.style.display = 'none';
  })
  .catch(function (error) {
    console.log('Error loading image:', error);
  });
// 5. After the image has loaded, pause execution for 2 seconds using the provided `wait(...)` function, the function is already created for you.

// 6. After the 2 seconds have passed, hide the current image (set `display` CSS property to `'none'`), and load a second image (Hint: Use the image element returned by the `'createImage'` promise to hide the current image. You will need a global variable for that 😉).

// 7. After the second image has loaded, pause execution for 2 seconds again.

// 8. After the 2 seconds have passed, hide the current image

// ### Test data for bonus:

// Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G” in the dev tools Network tab, otherwise images load too fast

////////////////////////////////////////
