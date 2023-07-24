document.addEventListener('DOMContentLoaded', () => {
  const formGroups = document.querySelectorAll('.form-group');

  formGroups.forEach(group => {
    const input = group.querySelector('input');
    const label = group.querySelector('label');

    input.addEventListener('focus', () => {
      label.classList.add('active');
      input.classList.add('active');

    });

    input.addEventListener('blur', () => {
      if (input.value === '') {
        label.classList.remove('active');
        input.classList.remove('active');
      }
    });


    if (input.value !== '') {
      label.classList.add('active');
      input.classList.add('active');
    }
  });

});
