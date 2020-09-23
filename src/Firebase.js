import * as firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC0ivj5exTXIt1QTQLyqyfYXvYIxFnWNP4",
  authDomain: "unimarc-recetas.firebaseapp.com",
  databaseURL: "https://unimarc-recetas.firebaseio.com",
  projectId: "unimarc-recetas",
  storageBucket: "unimarc-recetas.appspot.com",
  messagingSenderId: "876912343375",
  appId: "1:876912343375:web:06c0d3d3edfaa0d47aad3a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

