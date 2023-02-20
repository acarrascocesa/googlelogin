// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBKx-wLbxxCOLtJmkWJpmjdcetzNgdTiE",
  authDomain: "login-6e16e.firebaseapp.com",
  projectId: "login-6e16e",
  storageBucket: "login-6e16e.appspot.com",
  messagingSenderId: "939044193181",
  appId: "1:939044193181:web:c7b1f3d08a27337bd8e574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)