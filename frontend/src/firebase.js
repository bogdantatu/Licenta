import firebase from "firebase/app";
import "firebase/auth";


 const config = {
    apiKey: "AIzaSyAGDBZH2sQW3_8DivSqaiUSsTkDJ1trutg",
    authDomain: "sharing-is-caring-d2537.firebaseapp.com",
    projectId: "sharing-is-caring-d2537",
    storageBucket: "sharing-is-caring-d2537.appspot.com",
    messagingSenderId: "838368867036",
    appId: "1:838368867036:web:8106d597d67b4d9532ba19"
  };

  const firebaseConfig = firebase.initializeApp(config);
  

export default firebaseConfig;
