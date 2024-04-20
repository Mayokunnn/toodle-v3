import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebase";



const addNewTask = async (task) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("User not logged in");
    }

    const newTask = {
      task,
      uid: user.uid,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "tasks"), newTask);
    console.log("Task added successfully");
  } catch (e) {
    console.error("Error adding task: ", e);
  }
};