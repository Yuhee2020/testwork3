import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCCBBL8XM3EsU28TpGRONxpyWMZ9Q2qQVU",
    authDomain: "todolist-d9e70.firebaseapp.com",
    databaseURL: "https://todolist-d9e70-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todolist-d9e70",
    storageBucket: "todolist-d9e70.appspot.com",
    messagingSenderId: "857214889215",
    appId: "1:857214889215:web:c10d968d328fb0a7d570ca",
    measurementId: "G-BPVV80VTVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);