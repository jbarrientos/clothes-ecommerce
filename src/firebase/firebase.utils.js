import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD0VQIGpRBvFvHlHwkv7JMVsAoO4OC_DdY",
  authDomain: "crwn-db-b9354.firebaseapp.com",
  projectId: "crwn-db-b9354",
  storageBucket: "crwn-db-b9354.appspot.com",
  messagingSenderId: "366967566889",
  appId: "1:366967566889:web:9bf7b4b96188a9b052e238"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;