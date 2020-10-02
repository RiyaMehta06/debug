import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk07W1VNnoIGa7fdruqociOxB10sOBQj0",
  authDomain: "buzzer-a7db9.firebaseapp.com",
  databaseURL: "https://buzzer-a7db9.firebaseio.com",
  projectId: "buzzer-a7db9",
  storageBucket: "buzzer-a7db9.appspot.com",
  messagingSenderId: "423504603945",
  appId: "1:423504603945:web:614f54bdae6292787f6538",
  measurementId: "G-QBKQ2MLNYZ"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()