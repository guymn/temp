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

document.addEventListener('DOMContentLoaded', () => {
  const toursContainer = document.getElementById('tours');

  fetch(myModule.tourDatabase)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      displayTours(data.data);
    })
    .catch(error => {
      console.error('Error fetching tours data:', error);
    });

  function displayTours(toursData) {
    toursData.forEach(tour => {
      const tourCard = createTourCard(tour);
      tourCard.addEventListener('click', () => {
        console.log(tour);
        showDescription(tour);
      });
      toursContainer.appendChild(tourCard);
    });
  }

  function createTourCard(tour) {
    const tourCard = document.createElement('div');
    tourCard.classList.add('tour-card');
    const tourCardText = document.createElement('div');
    const tourCardImg = document.createElement('div');
    tourCard.appendChild(tourCardImg);
    tourCard.appendChild(tourCardText);

    tourCardText.classList.add('textTour');
    tourCardImg.classList.add('imgTour');
    tourCardImg.style.backgroundImage = `url(${tour.imageCover})`;

    const headElement = [
      { label: 'Name', value: `${tour.name}` },
      { label: 'Price', value: `${tour.price} $` },
    ];

    const tourFields = [
      { label: 'Duration', value: `${tour.duration} days` },
      { label: 'Group Size', value: `${tour.maxGroupSize} people` },
      { label: 'Difficulty', value: tour.difficulty },
      {
        label: 'Ratings',
        value: `${tour.ratingsAverage} (${tour.ratingsQuantity} reviews)`,
      },
    ];

    const tourFieldsMore = [
      { label: 'Start Dates', value: tour.startDates.join(', ') },
      { label: 'Description', value: `${tour.description.replace(/\n/g, '')}` },
    ];

    const textElement = [headElement, tourFields];

    const fieldClass = ['fieldElement', 'headClass', 'labelClass'];
    for (let text of textElement) {
      appendTourFieldsToCard(text, tourCardText, fieldClass);
    }
    return tourCard;
  }
});

async function appendTourFieldsToCard(tourFields, tourCardText, fieldClass) {
  try {
    for (const field of tourFields) {
      let label = field.label;
      let value = field.value;

      const fieldElement = document.createElement('div');
      fieldElement.classList.add(fieldClass[0]);

      const labelElement = document.createElement('label');
      labelElement.textContent = `${label}:`;
      labelElement.classList.add(fieldClass[1]);
      fieldElement.appendChild(labelElement);

      const valueElement = document.createElement('span');
      valueElement.textContent = value;
      valueElement.classList.add(fieldClass[2]);
      fieldElement.appendChild(valueElement);

      await tourCardText.appendChild(fieldElement);
    }
    return Promise.resolve(tourCardText);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function showDescription(tour) {
  try {
    await myModule.showSwal(`The Forest Hiker`, `Description : ${tour.description}`, tour.imageCover);
  } catch (error) {
    throw error;
  }
}
