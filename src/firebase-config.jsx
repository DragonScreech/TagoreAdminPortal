// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9VFvZsys1OuIr3Pn7R0EqqdsMoK5640M",
  authDomain: "tagore-project.firebaseapp.com",
  projectId: "tagore-project",
  storageBucket: "tagore-project.appspot.com",
  messagingSenderId: "1075554845738",
  appId: "1:1075554845738:web:2c8afd92507ea72bb0af53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)