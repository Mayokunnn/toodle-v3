import {  signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

const createUser = async (email, password, name) => {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const user = cred.user;
    console.log("User created:", user.uid);

    // Add user's name and email to the users table
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      email: email,
    });

    return user;
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};
const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User logged in:", user.uid);
    return user;
  } catch (error: any) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export { createUser, loginUser };
