import React from 'react'
import { useState } from 'react'
// import LoginPage from './LoginPage'
// import SingUpPage from './SingupPage'

export default function InitialPage() {

    const [display, setDisplay] = useState(true)

  return (
    <div>
        <button onClick={setDisplay(!display)}>InitialPage</button><br/>
        {/* <LoginPage  />
        <SingUpPage /> */}
    </div>
  )
}
