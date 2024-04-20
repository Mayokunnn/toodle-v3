import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

const editTask = async (taskId, newData) => {
  try {
    await updateDoc(doc(db, "tasks", taskId), newData);
    console.log("Task updated successfully");
  } catch (error) {
    console.error("Error updating task:", error.message);
    throw error;
  }
};
