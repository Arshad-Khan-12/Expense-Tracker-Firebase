// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7YIz9s10HtJXaIdg1QbMBxr8mhiqYFcM",
  authDomain: "expense-tracker-57b7e.firebaseapp.com",
  projectId: "expense-tracker-57b7e",
  storageBucket: "expense-tracker-57b7e.firebasestorage.app",
  messagingSenderId: "781614830457",
  appId: "1:781614830457:web:34c116f52d6a43772e95a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

//firebase login
//firebase init
//firebase deploy
