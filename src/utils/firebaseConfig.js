import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2wOFQJirdN-yXNJ-o8uFE6JHxT2DZcLg",
  authDomain: "tienda-de-egiptologia.firebaseapp.com",
  projectId: "tienda-de-egiptologia",
  storageBucket: "tienda-de-egiptologia.appspot.com",
  messagingSenderId: "409800245692",
  appId: "1:409800245692:web:554d072ed6c1506e47abb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;