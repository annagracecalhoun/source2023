import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCnJtFM8_SG1K5AYBSM42tUBQItwIa2UjQ",
  authDomain: "twitter-project-a739b.firebaseapp.com",
  projectId: "twitter-project-a739b",
  storageBucket: "twitter-project-a739b.appspot.com",
  messagingSenderId: "422219500104",
  appId: "1:422219500104:web:4865381ae590afa38a267d",
  measurementId: "G-17TXK7VTH5"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); 
  const analytics = getAnalytics(app);

  export {db}; 