const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace with your actual authentication logic (e.g., call to backend API)
  if (username === 'admin' && password === 'password123') {
    // Login successful
    window.location.href = "dashboard.html"; // Redirect to dashboard on success
  } else {
    alert('Invalid username or password!');
  }
});

const signUpLink = document.querySelector('a[href="signup.html"]'); // Select the sign-up link

signUpLink.addEventListener('click', (event) => {
  // Prevent default link behavior (avoids unnecessary page reload)
  event.preventDefault();

  // Redirect to signup.html
  window.location.href = "signup.html";
});
