document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Form validation
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;

    if (firstName && lastName && address && phone) {
        // Hide the form
        document.getElementById('appointment-form').style.display = 'none';

        // Show the confirmation message
        document.getElementById('confirmation-message').style.display = 'block';
    } 
    
    else {
        alert('Please fill in all fields.');
    }
});