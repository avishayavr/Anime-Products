import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDtCMzcCYALY4eZyepvzuG37DdV_l6iicA",
  authDomain: "singin-authentication-6dbd2.firebaseapp.com",
  projectId: "singin-authentication-6dbd2",
  storageBucket: "singin-authentication-6dbd2.appspot.com",
  messagingSenderId: "833291514671",
  appId: "1:833291514671:web:289a95ba73b735c0e027da",
  measurementId: "G-T8JENSH1SY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);