// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCfAMpF_qZDXdaifB_fLoTKUiAHj-6pL8",
  authDomain: "ema-jhon-simple-bece5.firebaseapp.com",
  projectId: "ema-jhon-simple-bece5",
  storageBucket: "ema-jhon-simple-bece5.appspot.com",
  messagingSenderId: "644018166782",
  appId: "1:644018166782:web:1f2eb7ce988133a3babeaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const auth = getAuth(app)