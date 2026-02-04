document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Simple simulation of submission
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = `Success! User ${username} registered with ${email}.`;

    // Clear form
    document.getElementById('registrationForm').reset();
});
