import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA-oNkPbM-cX4GsxHHy2uTZT0zCcxe0hsc",
    authDomain: "crown-clothing-db-56f32.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-56f32.firebaseio.com",
    projectId: "crown-clothing-db-56f32",
    storageBucket: "crown-clothing-db-56f32.appspot.com",
    messagingSenderId: "80945372773",
    appId: "1:80945372773:web:c7e7392ee7e6ebf175308c",
    measurementId: "G-MVWTEFBM4N"
  };

  firebase.initializeApp(config)


  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({prompt: "select_account"})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase