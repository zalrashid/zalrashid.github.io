/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Custom JS by Zachri (and the Magnificent ChatGPT)
//



// Activate SimpleLightbox plugin for snapshot items
window.addEventListener('DOMContentLoaded', event => {

    new SimpleLightbox({
        elements: '#snapshot a.snapshot-box'
    });
});

// Fetch the form element
var form = document.querySelector('.needs-validation');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Check if the form is valid
  if (form.checkValidity() === false) {
    // If the form is invalid, apply the custom feedback style
    event.stopPropagation();
    form.classList.add('was-validated');
  } else {
    // If the form is valid, submit the form and show the modal window
    sendData();
    $('#staticBackdrop').modal('show');
  }
});

// Function to submit the form data
function sendData() {
  // Create a new FormData object and append the form data
  const FD = new FormData(form);

  // Replace the placeholders in the form's data-gf-url attribute with the actual form data
  let url = form.dataset.gfUrl;
  for (let [key, value] of FD) {
    url = url.replace(key, value);
  }

  // Send the form data to Google Sheets using the fetch API
  let opts = {
    method: 'POST',
    mode: 'no-cors',
    redirect: 'follow',
    referrer: 'no-referrer',
  };
  return fetch(url, opts);
}
