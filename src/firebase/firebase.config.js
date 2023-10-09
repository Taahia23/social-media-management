// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB38M0_rjhpHeLpjT7IvdP36OgocwVq7wU",
  authDomain: "my-social-event-management.firebaseapp.com",
  projectId: "my-social-event-management",
  storageBucket: "my-social-event-management.appspot.com",
  messagingSenderId: "508364404488",
  appId: "1:508364404488:web:e98fc0f18ae8d211aa5ebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;