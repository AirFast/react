import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey:  process.env.REACT_APP_API_KEY, // "AIzaSyCjREgB1nJY7gM2jdgaAUbpsey7ekIXFl0"
    authDomain:  process.env.REACT_APP_AUTH_DOMAIN, // "react-airfast.firebaseapp.com"
    databaseURL: process.env.REACT_APP_DATABASE_URL, // "https://react-airfast-default-rtdb.firebaseio.com"
    projectId:  process.env.REACT_APP_ID, // "react-airfast"
    storageBucket:  process.env.REACT_APP_STORAGE_BUCKET, // "react-airfast.appspot.com"
    messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID, // "858855958783"
    appId:  process.env.REACT_APP_ID, // "1:858855958783:web:56e1d7850f1747397d44ca"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;