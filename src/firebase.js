// import {firebase} from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = 
{
  apiKey: "AIzaSyAkasBc72gGADNoFrfE5UYjbrOWx21P8VQ",
  authDomain: "netflix-clone-ffdc3.firebaseapp.com",
  projectId: "netflix-clone-ffdc3",
  storageBucket: "netflix-clone-ffdc3.appspot.com",
  messagingSenderId: "355151885621",
  appId: "1:355151885621:web:cbdf78c23f1ee18e59087c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;