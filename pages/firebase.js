import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWMgJulmGA-KRz4CcFcehK6mbFzkKT6PE",
  authDomain: "school-mangement-b42bd.firebaseapp.com",
  databaseURL: "https://school-mangement-b42bd-default-rtdb.firebaseio.com",
  projectId: "school-mangement-b42bd",
  storageBucket: "school-mangement-b42bd.appspot.com",
  messagingSenderId: "124294905825",
  appId: "1:124294905825:web:1feac2a528f704671e5ca0",
  measurementId: "G-ELEWJNRNL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database=getFirestore(app);
 