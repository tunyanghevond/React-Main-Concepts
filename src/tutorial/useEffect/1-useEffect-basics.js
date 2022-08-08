import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('run useEffect')
    if (value > 3) {
      document.title = `New Message(${value})`
    }
  }, [])
  console.log('render component')

  return (
    <>
      <h3>{value}</h3>
      <button type='button' onClick={() => setValue(value + 1)} className='btn'>
        click me
      </button>
    </>
  )
}

export default UseEffectBasics
