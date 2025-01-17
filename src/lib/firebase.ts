import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7EKwMwz8hj8RFkMF5HVRYfpOz8hlaLJ4",
  authDomain: "korolux-real.firebaseapp.com",
  projectId: "korolux-real",
  storageBucket: "korolux-real.firebasestorage.app",
  messagingSenderId: "537762108870",
  appId: "1:537762108870:web:a85a677db6810e91b94ec7",
  measurementId: "G-1X6WK6QLSZ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);