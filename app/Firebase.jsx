import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAPIxIyN4ZrmXIUPGosAThb2IxL7uMk4Io",
    authDomain: "bitirmeprojesi-d2f5e.firebaseapp.com",
    projectId: "bitirmeprojesi-d2f5e",
    storageBucket: "bitirmeprojesi-d2f5e.firebasestorage.app",
    messagingSenderId: "956108108377",
    appId: "1:956108108377:web:ab48ebb7324f9244c9f748"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);