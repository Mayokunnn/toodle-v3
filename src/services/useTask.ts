import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db, auth } from "./firebase"; // Assuming db is your Firestore instance and auth is your Firebase Auth instance

const listenForUserTasks = () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("User not logged in");
    }

    const q = query(collection(db, "tasks"), where("uid", "==", user.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tasks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Tasks:", tasks);
      // Do something with the tasks
    });

    // Return a function that unsubscribes and returns a value
    return () => {
      unsubscribe(); // Unsubscribe from updates
      return "Unsubscribed"; // Return a custom value
    };
  } catch (error) {
    console.error("Error listening for tasks:", error.message);
    throw error;
  }
};

// Usage
const unsubscribe = listenForUserTasks();

// To stop listening for updates and get a value
// const result = unsubscribe();
// console.log(result); // 'Unsubscribed'
