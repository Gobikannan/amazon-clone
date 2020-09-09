import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFK6DWXAR2lFBHaRd4hkS34RaMGGvKx3w",
  authDomain: "gobikannan-learning.firebaseapp.com",
  databaseURL: "https://gobikannan-learning.firebaseio.com",
  projectId: "gobikannan-learning",
  storageBucket: "gobikannan-learning.appspot.com",
  messagingSenderId: "476749152387",
  appId: "1:476749152387:web:1f2915afd8275492d31bb6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
