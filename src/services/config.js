// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDn_lvyPWhm9kJTsaZDuMAUQRovA-u8qCY",
    authDomain: "eliyashauly-4c7a9.firebaseapp.com",
    projectId: "eliyashauly-4c7a9",
    storageBucket: "eliyashauly-4c7a9.firebasestorage.app",
    messagingSenderId: "630425561690",
    appId: "1:630425561690:web:3130892598ae2f3cfc0663"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);