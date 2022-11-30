// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYWy6QeUalHZANB0P5OnPxH-bvU6mmAA4",
    authDomain: "portfolioo-bc21e.firebaseapp.com",
    projectId: "portfolioo-bc21e",
    storageBucket: "portfolioo-bc21e.appspot.com",
    messagingSenderId: "51429915406",
    appId: "1:51429915406:web:3f5199421c4372e8a9b55f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)