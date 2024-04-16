import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH54FX8Eh4C26s91sPw7hRWCCLXgMk59Q",
  authDomain: "toodle-v3.firebaseapp.com",
  projectId: "toodle-v3",
  storageBucket: "toodle-v3.appspot.com",
  messagingSenderId: "131670646674",
  appId: "1:131670646674:web:d1db612ce4fca75f1e6b4b",
  measurementId: "G-R5BTJ6GK6F",
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// init service 
const db = getFirestore(app);

// collection ref
const colRef = collection(db, 'tasks')

// get collection data


export {colRef}