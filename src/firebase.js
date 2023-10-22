// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-81a40.firebaseapp.com",
  projectId: "mern-estate-81a40",
  storageBucket: "mern-estate-81a40.appspot.com",
  messagingSenderId: "1018186987637",
  appId: "1:1018186987637:web:75f8216288600cbdf4603c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);