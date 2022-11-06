import React from 'react'
import {auth} from '../FirebaseSingup/firebaseConfig'
import {signOut} from 'firebase/auth'

const logOut = () => {
  signOut(auth);
}

const handleSignOut = async () => {
  try {
    await logOut();
  } catch (error) {
    console.log(error);
  }
};


export default function MainPage() {
  return (
    <div>
      <button onClick={handleSignOut}>log out</button>
    </div>
  )
}
