import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjxbVevRmlxBqQSWIKBpoO6kU44ieKJGk",
  authDomain: "react-ecommerce-528d0.firebaseapp.com",
  projectId: "react-ecommerce-528d0",
  storageBucket: "react-ecommerce-528d0.firebasestorage.app",
  messagingSenderId: "1096411062234",
  appId: "1:1096411062234:web:8bcba30c0afa5f89f0eae3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
