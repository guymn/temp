import * as myModule from './script.js';
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
    tourCardImg.style.backgroundImage = `url(${tour.imageCover})`

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
      appendTourFieldsToCard(text, tourCardText, ...fieldClass);
    }
    return tourCard;
  }
});

function appendTourFieldsToCard(
  tourFields,
  tourCardText,
  fieldClass,
  labelClass,
  valueClass
) {
  return new Promise((resolve, reject) => {
    try {
      for (const field of tourFields) {
        let label = field.label;
        let value = field.value;
        const fieldElement = document.createElement('div');
        const labelElement = document.createElement('div');
        const valueElement = document.createElement('div');
        labelElement.innerText = `${label}:`;
        valueElement.innerText = `${value}`;
        labelElement.classList.add(labelClass);
        valueElement.classList.add(valueClass);

        fieldElement.appendChild(labelElement);
        fieldElement.appendChild(valueElement);
        fieldElement.classList.add(fieldClass);
        tourCardText.appendChild(fieldElement);
      }
      resolve(tourCardText);
    } catch (error) {
      reject(error);
    }
  });
}

function addStlyeBold(fieldElement) {
  return new Promise((resolve, reject) => {
    try {
      fieldElement.style.fontWeight = 'bold';
      resolve(fieldElement);
    } catch (error) {
      reject(error);
    }
  });
}
