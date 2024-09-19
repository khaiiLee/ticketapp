// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-6c7ee.firebaseapp.com",
  projectId: "taskmanager-6c7ee",
  storageBucket: "taskmanager-6c7ee.appspot.com",
  messagingSenderId: "336851448008",
  appId: "1:336851448008:web:13c2f378c2c639d46df5fd",
  measurementId: "G-KXC69D97KH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);