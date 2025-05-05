// I placed code in a seperate file for clarity (for myself, to reduce errors and confusion when I encounter errors).

// references to the form and the thank-you message elements
const form = document.getElementById('orderForm');
const thankYou = document.getElementById('thankYouMessage');

form.addEventListener('submit', function (e) {
e.preventDefault();

// Clear existing error messages
document.querySelectorAll('.error').forEach((el) => el.textContent = '');

// Validation to track if inputs are valid
let valid = true;

// Get trimmed values from the form fields. 
const name = form.name.value.trim();
const email = form.email.value.trim();
const phone = form.phone.value.trim();
const cakeType = form.cakeType.value;
const flavor = form.flavor.value;
const date = form.date.value;


// Validate email, phone number, cake type selection, flavor selection, and pickup date.
if (!name) {
    document.getElementById('nameError').textContent = 'Name is required.';
    valid = false;
}
if (!email || !email.includes('@')) {
    document.getElementById('emailError').textContent = 'Valid email is required.';
    valid = false;
}
if (!phone || phone.length < 7) {
    document.getElementById('phoneError').textContent = 'Valid phone number is required.';
    valid = false;
}
if (!cakeType) {
    document.getElementById('cakeTypeError').textContent = 'Please select a cake type.';
    valid = false;
}
if (!flavor) {
    document.getElementById('flavorError').textContent = 'Please select a flavor.';
    valid = false;
}
if (!date) {
    document.getElementById('dateError').textContent = 'Please select a pickup date.';
    valid = false;
}

// If all the fields are valid, simulate AJAX submission
if (valid) {
    setTimeout(() => {
    form.reset();
    form.style.display = 'none';
    thankYou.style.display = 'block';
    }, 500);
}
});