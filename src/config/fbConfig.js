import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCZYYxp4sPHcwplEwk1S2QNnObv4WLWKGQ",
    authDomain: "react-marioplan-d5ad3.firebaseapp.com",
    projectId: "react-marioplan-d5ad3",
    storageBucket: "react-marioplan-d5ad3.appspot.com",
    messagingSenderId: "453111539444",
    appId: "1:453111539444:web:1077ae6baf35654ae660a1",
    measurementId: "G-Y84K801XLQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;