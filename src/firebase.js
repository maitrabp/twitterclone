import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCuUtLFlqkge19AXofQLNHJ-AAozf7hvEQ",
    authDomain: "twitter-clone-2ed0a.firebaseapp.com",
    databaseURL: "https://twitter-clone-2ed0a.firebaseio.com",
    projectId: "twitter-clone-2ed0a",
    storageBucket: "twitter-clone-2ed0a.appspot.com",
    messagingSenderId: "145969355889",
    appId: "1:145969355889:web:93e5610c58e291e57e8fd0",
    measurementId: "G-L5C51RTE7X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;