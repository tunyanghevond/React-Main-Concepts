import React, { useState } from 'react'

const UseStateBasics = () => {
  const [title, setTitle] = useState('Random title')

  const handleClick = () => {
    if (title === 'Random title') {
      setTitle('Hello user')
    } else {
      setTitle('Random title')
    }
  }
  return (
    <div>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change title
      </button>
    </div>
  )
}

export default UseStateBasics
