

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const email = document.getElementById('emailBox');

    toggle.addEventListener('change', function() {
      if (toggle.checked) {
        email.classList.remove('hidden'); //showing the email
      } else {
        email.classList.add('hidden'); // hidin the email
      }
    });
  });