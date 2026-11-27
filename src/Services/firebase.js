import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoM6m32bYsPDwGzbrq9Jy32bxijKUW0_E",
  authDomain: "medremindcarelink.firebaseapp.com",
  projectId: "medremindcarelink",
  storageBucket: "medremindcarelink.firebasestorage.app",
  messagingSenderId: "656157531301",
  appId: "1:656157531301:web:b60884f25bb40c0f5bc14c",
  measurementId: "G-CQRDFTNMC2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);