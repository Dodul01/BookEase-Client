import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4igux6NCavNfLzJQv11mY5Y1peAIRtHY",
  authDomain: "bookease-537ed.firebaseapp.com",
  projectId: "bookease-537ed",
  storageBucket: "bookease-537ed.appspot.com",
  messagingSenderId: "690683026081",
  appId: "1:690683026081:web:78aee23dfb89c3ea9caee0"
};

const app = initializeApp(firebaseConfig);

export default app;