import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCYVSx7ov3c2S_1MdUK54HCUdNN-UQzmOA",
  authDomain: "profile-by-bbncreative.firebaseapp.com",
  databaseURL: "https://profile-by-bbncreative.firebaseio.com",
  projectId: "profile-by-bbncreative",
  storageBucket: "",
  messagingSenderId: "677029636638"
};
firebase.initializeApp(config);
export default firebase;