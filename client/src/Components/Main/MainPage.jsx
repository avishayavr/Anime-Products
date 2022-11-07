import React from 'react'
import {auth} from '../FirebaseSingup/firebaseConfig'
import {signOut} from 'firebase/auth'

const logOut = () => {
  console.log(auth);
  signOut(auth);
}

// const handleSignOut = async () => {
//   try {
//     await logOut();
//   } catch (error) {
//     console.log(error);
//   }
// };


export default function MainPage() {
  return (
    <div>
      <button onClick={logOut} style={{border:'1px solid black'}}>log out</button>
    </div>
  )
}
