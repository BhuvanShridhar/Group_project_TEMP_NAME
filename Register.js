// Import the functions you need from the SDKs you need
// Remove ES module imports for browser CDN usage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANIq2xkC0gPP9XD-VcC0ftrY_B_TaBCYU",
  authDomain: "boysproject-6e53f.firebaseapp.com",
  projectId: "boysproject-6e53f",
  storageBucket: "boysproject-6e53f.firebasestorage.app",
  messagingSenderId: "144804608650",
  appId: "1:144804608650:web:90e93cd51b9ab81567cb73",
  measurementId: "G-BRE2FE56HV"
};


// Initialize Firebase
// Initialize Firebase using global firebase object from CDN
firebase.initializeApp(firebaseConfig);

// DOMContentLoaded ensures the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Get form and input elements
  const form = document.querySelector('form');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Get values inside the submit handler
      const username = usernameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;

      alert('Creating account...');
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          alert('Account created successfully!');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Account creation failed: ' + errorMessage);
        });
    });
  }
});