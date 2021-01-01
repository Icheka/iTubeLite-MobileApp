import * as firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";


// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCXrsQnF-L6zeoA20EP6LUAjWoKf3fNLSo",
  authDomain: "itubelite.firebaseapp.com",
  databaseURL: "https://itubelite-default-rtdb.firebaseio.com",
  projectId: "itubelite",
  storageBucket: "itubelite.appspot.com",
  messagingSenderId: "452008461181",
  appId: "1:452008461181:web:bee0dffe2fc0dfe4498214",
  measurementId: "G-BWSF3SFBYT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;