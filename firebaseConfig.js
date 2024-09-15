// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp0jCQ1bPLV5Hk8tqw2kd6ROkwql5hTOk",
  authDomain: "itl-conference.firebaseapp.com",
  projectId: "itl-conference",
  storageBucket: "itl-conference.appspot.com",
  messagingSenderId: "23464938585",
  appId: "1:23464938585:web:eb176fd1d02d65d2663548",
  measurementId: "G-XR8KJ3TH16"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };