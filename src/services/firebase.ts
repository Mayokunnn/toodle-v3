import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBH54FX8Eh4C26s91sPw7hRWCCLXgMk59Q",
  authDomain: "toodle-v3.firebaseapp.com",
  projectId: "toodle-v3",
  storageBucket: "toodle-v3.appspot.com",
  messagingSenderId: "131670646674",
  appId: "1:131670646674:web:d1db612ce4fca75f1e6b4b",
  measurementId: "G-R5BTJ6GK6F",
};

const app = initializeApp(firebaseConfig);

// init service 
const db = getFirestore(app);
const auth = getAuth()

// Set the persistence to local
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Local persistence successfully set
  })
  .catch((error) => {
    // Handle errors here
  });

export { auth,db}