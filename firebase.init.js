// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMSZ7dzNHuZ7UhPUpNndJ7lw2uQgHs11I",
  authDomain: "horizonzon-a8a96.firebaseapp.com",
  projectId: "horizonzon-a8a96",
  storageBucket: "horizonzon-a8a96.appspot.com",
  messagingSenderId: "234538430994",
  appId: "1:234538430994:web:d17b5473a84092e1ad1ecb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default (auth);