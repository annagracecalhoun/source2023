import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyCfkeB_k0DxyPPzLaS3vWgrp5T2HKifDnI",
    authDomain: "blog-91565.firebaseapp.com",
    projectId: "blog-91565",
    storageBucket: "blog-91565.appspot.com",
    messagingSenderId: "524353291368",
    appId: "1:524353291368:web:7182574976413fcd3667dd"
  };

const app = initializeApp(firebaseConfig); 
const db = getFirestore(app); 

export {db}
