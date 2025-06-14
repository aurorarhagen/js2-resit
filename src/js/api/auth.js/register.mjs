import { API_BASE_URL } from "../constants.mjs";

async function registerUser(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Validate email ends with @stud.noroff.no
  if (!/^[\w.-]+@stud\.noroff\.no$/.test(email)) {
    alert('Email must end with @stud.noroff.no');
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY
      },
      body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
      const error = await response.json();
      alert('Registration failed: ' + (error.message || response.statusText));
      return;
    }
   alert('Registration successful!');
   window.location.href = "profile";

  } catch (error) {
    alert('An error occurred: ' + error.message);
  }
}

document.getElementById('registerForm').addEventListener('submit', registerUser);

