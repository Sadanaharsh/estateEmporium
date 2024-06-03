// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8llSxsPpiMeLZFvfKizrj69AEKG3LxZY",
  authDomain: "estate-emporium.firebaseapp.com",
  projectId: "estate-emporium",
  storageBucket: "estate-emporium.appspot.com",
  messagingSenderId: "808481607594",
  appId: "1:808481607594:web:ee1dcfd07fd34d00b1a5d3",
  measurementId: "G-Z1MS4F30QT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);