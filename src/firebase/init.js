import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Initialize Firebase
let config = {
    apiKey: "AIzaSyAOmLf8zB8OzCOs7SkwG1VMHzTX7HbZSz8",
    authDomain: "vchat-app-68335.firebaseapp.com",
    databaseURL: "https://vchat-app-68335.firebaseio.com",
    projectId: "vchat-app-68335",
    storageBucket: "",
    messagingSenderId: "805821065461"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore();