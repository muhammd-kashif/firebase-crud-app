// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDMozEvkHoQ2jtwqR2CWUKxExhZmOhJvXk",
  authDomain: "crud-app-2aeda.firebaseapp.com",
  databaseURL: "https://crud-app-2aeda-default-rtdb.firebaseio.com",
  projectId: "crud-app-2aeda",
  storageBucket: "crud-app-2aeda.appspot.com",
  messagingSenderId: "800795342800",
  appId: "1:800795342800:web:003300ba8c6cbd9816ebd5",
  measurementId: "G-VWK48WT9YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
export const db = getFirestore(app);
