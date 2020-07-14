import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyDrp8pAaiSzI1iaH1OjTSyawwWFUUsf_RQ",
  authDomain: "meuapp-e3534.firebaseapp.com",
  databaseURL: "https://meuapp-e3534.firebaseio.com",
  projectId: "meuapp-e3534",
  storageBucket: "meuapp-e3534.appspot.com",
  messagingSenderId: "952956231124",
  appId: "1:952956231124:web:223c9d7b6edd998775ca41",
  measurementId: "G-WP6D89W99H",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
