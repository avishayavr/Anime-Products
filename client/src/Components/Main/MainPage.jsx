import React from 'react'
import {auth} from '../FirebaseSingup/firebaseConfig'
import {signOut} from 'firebase/auth'

// function to logout 
const logOut = () => {
  console.log(auth);
  signOut(auth);
}


export default function MainPage() {
  return (
    <div>
      <button onClick={logOut} style={{border:'1px solid black'}}>log out</button>
    </div>
  )
}
