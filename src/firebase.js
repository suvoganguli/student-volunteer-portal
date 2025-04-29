// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkBvE7IRjH0IzR5D2jH5LYmKPuggGhNOU",
  authDomain: "student-volunteer-portal.firebaseapp.com",
  projectId: "student-volunteer-portal",
  storageBucket: "student-volunteer-portal.firebasestorage.app",
  messagingSenderId: "864186744639",
  appId: "1:864186744639:web:cc3a81c849d57d12b91d8a",
  measurementId: "G-Y4FDVYEMDM",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
