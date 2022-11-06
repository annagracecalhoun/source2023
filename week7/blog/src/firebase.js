// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1PmIcyiGIFuFOXTs_VPJgXce7EO9K_zE",
  authDomain: "blog-92a36.firebaseapp.com",
  projectId: "blog-92a36",
  storageBucket: "blog-92a36.appspot.com",
  messagingSenderId: "645561008282",
  appId: "1:645561008282:web:459cda210c8be1fddb9f23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}

