// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC39mjQyio9vulhgEd9xP6FT_jFviBtzXs",
  authDomain: "fir-contact-app-19283.firebaseapp.com",
  projectId: "fir-contact-app-19283",
  storageBucket: "fir-contact-app-19283.appspot.com",
  messagingSenderId: "1017046696707",
  appId: "1:1017046696707:web:7ebbaf46b969009d459f36",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);