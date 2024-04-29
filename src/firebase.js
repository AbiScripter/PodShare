import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZMnd6sZW5BDOlmvq8pZK_8E10TpeU3A0",
  authDomain: "podcast-50fc8.firebaseapp.com",
  projectId: "podcast-50fc8",
  storageBucket: "podcast-50fc8.appspot.com",
  messagingSenderId: "1062688292946",
  appId: "1:1062688292946:web:ea68834995b25235165f8b",
  measurementId: "G-JVZJ7BZ8MP",
};

// Initialize Firebase
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
