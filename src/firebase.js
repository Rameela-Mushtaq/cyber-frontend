// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDlEMEhY7bo2py8x_pHTF5Ann8l5CkcHLE",
    authDomain: "cyber-51ef7.firebaseapp.com",
    projectId: "cyber-51ef7",
    storageBucket: "cyber-51ef7.firebasestorage.app",
    messagingSenderId: "750916731824",
    appId: "1:750916731824:web:458c4c31f9c461fdab8c75",
    measurementId: "G-CTJWJT39H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


