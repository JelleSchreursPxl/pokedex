// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: {API_KEY},
  authDomain: {AUTH_DOMAIN},
  projectId: {PROJECT_ID},
  storageBucket: {STORAGE_BUCKET},
  messagingSenderId: {MESSAGING_SENDER_ID},
  appId: {APP_ID},
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
} 

const auth = firebase.auth();

export { firebase, auth };