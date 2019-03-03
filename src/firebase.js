import firebase from 'firebase/app';
import 'firebase/auth';
import {FIREBASE_API_KEY, FIREBASE_MESSAGING_ID} from "./secrets";

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "profile-by-bbncreative.firebaseapp.com",
  databaseURL: "https://profile-by-bbncreative.firebaseio.com",
  projectId: "profile-by-bbncreative",
  storageBucket: "",
  messagingSenderId: FIREBASE_MESSAGING_ID
};
firebase.initializeApp(config);
export default firebase;