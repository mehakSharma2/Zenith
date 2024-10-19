// firebaseconfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCvay-D0aP6bm4F0wQzGMdMWpgcokwoxA0",
    authDomain: "roadmap-be81c.firebaseapp.com",
    databaseURL: "https://roadmap-be81c-default-rtdb.firebaseio.com",
    projectId: "roadmap-be81c",
    storageBucket: "roadmap-be81c.appspot.com",
    messagingSenderId: "1001590553566",
    appId: "1:1001590553566:web:117c12e3bb6c5e67d9bb4f",
    measurementId: "G-W7YRPRTWG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
