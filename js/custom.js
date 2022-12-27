/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
/*!
 * Custom JS by Zachri
 */


// Activate SimpleLightbox plugin for snapshot items
window.addEventListener('DOMContentLoaded', event => {

    new SimpleLightbox({
        elements: '#snapshot a.snapshot-box'
    });

});

// Pass form submissions to GSheet
window.addEventListener("load", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      sendData();
    });
    function sendData() {
      const FD = new FormData(form);

      let url = form.dataset.gfUrl;
      for(let [key, value] of FD) {
        url = url.replace(key, value);
      }
      let opts = {
          method: "POST",
          mode: "no-cors",
          redirect: "follow", 
          referrer: "no-referrer"
      }
        return fetch(url, opts);
    
    }

});

// Disable form submissions if there are invalid fields
(function () {
    'use strict'

  // Fetch all the forms to apply custom Bootstrap validation styles
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })

})()
