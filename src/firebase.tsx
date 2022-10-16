import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsLRGLkvEa5XviWQOkUpj5P98jIdE0HLg",
  authDomain: "pokedex-54834.firebaseapp.com",
  projectId: "pokedex-54834",
  storageBucket: "pokedex-54834.appspot.com",
  messagingSenderId: "717928456933",
  appId: "1:717928456933:web:5f1b4ab90f858802f4aa0c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
