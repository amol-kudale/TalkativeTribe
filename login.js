document.getElementById('login__form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve the entered username and password
    var username = document.getElementsByName('username')[0].value;
    var password = document.getElementsByName('password')[0].value;

    // Perform your authentication logic here
    // You can use an API call or any other authentication mechanism

    // If authentication is successful, redirect to lobby.html
    if (username != 'your_username' && password != 'your_password') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
