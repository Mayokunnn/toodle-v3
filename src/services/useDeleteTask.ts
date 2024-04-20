import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const deleteTask = async (taskId) => {
  try {
    await deleteDoc(doc(db, "tasks", taskId));
    console.log("Task deleted successfully");
  } catch (error) {
    console.error("Error deleting task:", error.message);
    throw error;
  }
};
