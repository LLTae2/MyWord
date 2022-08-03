import React, { useState } from 'react'
import "../style/Header.css"

const Header = () => {

  const [word, setWord] = useState('')

  const HandleChange = (e) => {
    console.info(e.target.value);
  }

  return (
    <div className='Header'>
      <div className='Input_box'>
        <label>입력</label>
        <input type='text' onChange={HandleChange}></input>
      </div>
    </div>
  )
}

export default Header