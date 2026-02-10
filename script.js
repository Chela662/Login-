const loginForm = document.getElementById('loginForm');

// Hardcoded demo user
const demoUser = {
    username: 'Cynthia',
    password: '12345'
};

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission to URL

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if(usernameInput === demoUser.username && passwordInput === demoUser.password){
        alert('Login Successful! Redirecting...');
        window.location.href = 'welcome.html'; // Make a welcome page
    } else {
        alert('Invalid username or password');
        
    }
});
