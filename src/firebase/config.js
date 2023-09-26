
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACTD_JsZ02uEWQegP_0wl4yJuJ4hZZd8E",
  authDomain: "test-7677f.firebaseapp.com",
  projectId: "test-7677f",
  storageBucket: "test-7677f.appspot.com",
  messagingSenderId: "742252805069",
  appId: "1:742252805069:web:24df2c14398865455ea284",
  measurementId: "G-TVVNV4HV10"
};

export const app =  initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


   // Export app and auth as named exports
