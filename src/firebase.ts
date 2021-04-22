
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBZcQ9imVfFpJRd3yF70jo7ZgboYyTO4BU",
    authDomain: "expenseapp-a2a69.firebaseapp.com",
    projectId: "expenseapp-a2a69",
    storageBucket: "expenseapp-a2a69.appspot.com",
    messagingSenderId: "185168840662",
    appId: "1:185168840662:web:6fde997f2061b68cd38677"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;