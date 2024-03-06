import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzBtIP0LVngmne9axhanYP250HzMKXJac",
  authDomain: "react-hubomovie-app.firebaseapp.com",
  projectId: "react-hubomovie-app",
  storageBucket: "react-hubomovie-app.appspot.com",
  messagingSenderId: "863310381576",
  appId: "1:863310381576:web:3fc1d24c8ef60cd72bc7bd",
  measurementId: "G-P3RGYMJJN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);