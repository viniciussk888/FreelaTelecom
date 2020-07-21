import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCZcbcDgfMZaWrMqycvmXMl-7TaGL1UesE",
  authDomain: "freelatelecom-c8670.firebaseapp.com",
  databaseURL: "https://freelatelecom-c8670.firebaseio.com",
  projectId: "freelatelecom-c8670",
  storageBucket: "freelatelecom-c8670.appspot.com",
  messagingSenderId: "121776618994",
  appId: "1:121776618994:web:aef9502821c596dbb93f6b"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);