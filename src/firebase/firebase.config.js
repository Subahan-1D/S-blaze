// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCqlQ4QYO1Fpaendd8VYIIgg7nQN30Xvdg",
  authDomain: "pratice-project-3f57a.firebaseapp.com",
  projectId: "pratice-project-3f57a",
  storageBucket: "pratice-project-3f57a.firebasestorage.app",
  messagingSenderId: "723584248543",
  appId: "1:723584248543:web:6fb498658e649d2f83176a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
