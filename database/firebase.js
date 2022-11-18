// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import Env from "../constants/Env";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Env.firebase.FB_API_KEY,
  authDomain: Env.firebase.FB_AUTH_DOMAIN,
  projectId: Env.firebase.FB_PROJECT_ID,
  storageBucket: Env.firebase.FB_STORAGE_BUCKET,
  messagingSenderId: Env.firebase.FB_MESSAGING_SENDER_ID,
  appId: Env.firebase.FB_APP_ID,
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };