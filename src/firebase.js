


  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7fsvrC9sZA-0mRqDmLcrukkma6zR8SRg",
    authDomain: "todo-app-d4ac2.firebaseapp.com",
    projectId: "todo-app-d4ac2",
    storageBucket: "todo-app-d4ac2.appspot.com",
    messagingSenderId: "45465630226",
    appId: "1:45465630226:web:4289bcac50f0a32e9f8acb",
    measurementId: "G-JMN6TGSC7V"
  });

  const db = firebaseApp.firestore();

  export default db;