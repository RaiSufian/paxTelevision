import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8ZT94rNPZWF8k_gLakdbjQo3XNPci3eY",
    authDomain: "paxtv-a567c.firebaseapp.com",
    // databaseURL: 'https://paxtv-a567c.firebaseio.com',
    projectId: "paxtv-a567c",
    storageBucket: "paxtv-a567c.appspot.com",
    messagingSenderId: "321173531334",
    appId: "1:321173531334:web:e1a2f723154da5126c05c7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
