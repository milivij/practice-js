

document.addEventListener('DOMContentLoaded', function() {
    const useBillingCheckbox = document.querySelector('input[name="useBilling"]');
    const billing = document.getElementById('billing');
    const hom = document.getElementById('home');
  
  
    useBillingCheckbox.addEventListener('change', function() {
      if (useBillingCheckbox.checked) {
        hom.value = billing.value;
      } else {
        hom.value = none;
      }
    });
  });