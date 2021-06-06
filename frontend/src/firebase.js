import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAGDBZH2sQW3_8DivSqaiUSsTkDJ1trutg",
  authDomain: "sharing-is-caring-d2537.firebaseapp.com",
  databaseURL: "https://sharing-is-caring-d2537-default-rtdb.firebaseio.com",
  projectId: "sharing-is-caring-d2537",
  storageBucket: "sharing-is-caring-d2537.appspot.com",
  messagingSenderId: "838368867036",
  appId: "1:838368867036:web:8106d597d67b4d9532ba19"
};


firebase.initializeApp(firebaseConfig);


export default firebase;
