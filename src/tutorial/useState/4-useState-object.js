import React, { useState } from 'react'

const UseStateObject = () => {
  const [user, setUser] = useState({
    name: 'Alex',
    age: 25,
    message: 'Hi people',
  })
  const changeMess = () => {
    // setUser({ ...user, message: 'hello world' })
    setUser((prev) => {
      return { ...prev, message: 'hello world' }
    })
  }
  return (
    <>
      <h5>{user.name}</h5>
      <h5>{user.age}</h5>
      <h5>{user.message}</h5>
      <button type='button' className='btn' onClick={changeMess}>
        change the message
      </button>
    </>
  )
}

export default UseStateObject
