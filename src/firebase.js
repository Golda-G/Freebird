// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDplsO_9VC7Sm-0TEVbqOvgA9eJrfBrVeA",
  authDomain: "freebird-7626d.firebaseapp.com",
  projectId: "freebird-7626d",
  storageBucket: "freebird-7626d.appspot.com",
  messagingSenderId: "474930412625",
  appId: "1:474930412625:web:aaffde1ea2246257eccc70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app)
export default db