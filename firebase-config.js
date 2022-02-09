import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1n5pY33pgeZKyblJTK6wlfVTnfSi4z7o",
    authDomain: "crud-79051.firebaseapp.com",
    projectId: "crud-79051",
    storageBucket: "crud-79051.appspot.com",
    messagingSenderId: "423563988804",
    appId: "1:423563988804:web:d15af4b8a82de954d2d111",
    measurementId: "G-TJ5GDFL9G0"
  };
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);