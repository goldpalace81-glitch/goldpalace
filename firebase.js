import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvA_Y6jqOhJPYDXpi98_q7z47RSsWGesI",
  authDomain: "goldpalace-c42a6.firebaseapp.com",
  projectId: "goldpalace-c42a6",
  storageBucket: "goldpalace-c42a6.firebasestorage.app",
  messagingSenderId: "501646710464",
  appId: "1:501646710464:web:65c8757f0981de6306bf25"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
