import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHGIuKoD-w5KbU3r7V1vaPbxsrArKzPk4",
    authDomain: "gasagency-2025.firebaseapp.com",
    projectId: "gasagency-2025",
    storageBucket: "gasagency-2025.firebasestorage.app",
    messagingSenderId: "372011854940",
    appId: "1:372011854940:web:9c4e02a2addfb76e04ca99",
    measurementId: "G-SQN4XN7EJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analystics = getAnalytics(app)

export { app, db, analystics, collection, addDoc }