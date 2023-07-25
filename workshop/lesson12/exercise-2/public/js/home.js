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

    const tourFields = [
      { label: 'Duration', value: `${tour.duration} days` },
      { label: 'Group Size', value: `${tour.maxGroupSize} people` },
      { label: 'Difficulty', value: tour.difficulty },
      {
        label: 'Ratings',
        value: `${tour.ratingsAverage} (${tour.ratingsQuantity} reviews)`,
      },
      { label: 'Overall Rating', value: tour.rating },
      { label: 'Summary', value: tour.summary },
      { label: 'Start Dates', value: tour.startDates.join(', ') },
    ];

    const nameElement = document.createElement('div');
    nameElement.innerText = `Name: ${tour.name}`;
    nameElement.style.fontWeight = 'bold';
    tourCard.appendChild(nameElement);

    for (const field of tourFields) {
      let label = field.label;
      let value = field.value;
      const fieldElement = document.createElement('div');
      fieldElement.innerText = `${label}: ${value}`;
      tourCard.appendChild(fieldElement);
    }

    const descriptionElement = document.createElement('div');
    descriptionElement.innerText = `Description : ${tour.description.replace(/\n/g, '')}`;

    const readMoreLink = document.createElement('a');
    readMoreLink.href = '#'; // You can set the actual URL here
    readMoreLink.innerText = 'Read More';
    readMoreLink.addEventListener('click', () => {
      descriptionElement.style.display = 'block'; // Show the full description
      readMoreLink.style.display = 'none'; // Hide the "Read More" link
    });
    let temp = document.createElement('div');
    temp.appendChild(descriptionElement);
    temp.appendChild(readMoreLink);

    // Initially hide the full description and show the "Read More" link
    descriptionElement.style.display = 'none';
    readMoreLink.style.display = 'inline';
    tourCard.appendChild(temp);

    return tourCard;
  }
});
