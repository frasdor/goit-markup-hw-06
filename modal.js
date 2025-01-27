const modal = document.querySelector('.backdrop');
const closeButton = document.querySelector('.close-ellipse');


closeButton.addEventListener('click', function() {
    modal.classList.add('is-hidden');  
  });
