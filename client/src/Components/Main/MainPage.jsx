import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'

export default function MainPage() {

      const [open, setOpen] = useState(true)

  return (
    <div>
      <Navbar/>
    </div>
  )
}
