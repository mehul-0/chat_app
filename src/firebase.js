import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhUNuZcBKHyiNs7SKOtnj-sS9u5AEaS1M",
  authDomain: "chat-app-b0a20.firebaseapp.com",
  projectId: "chat-app-b0a20",
  storageBucket: "chat-app-b0a20.appspot.com",
  messagingSenderId: "837426270312",
  appId: "1:837426270312:web:73f6eee08c595cc6572bdd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
