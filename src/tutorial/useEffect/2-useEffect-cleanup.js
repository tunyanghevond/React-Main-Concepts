import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    console.log('useEffect')

    window.addEventListener('resize', checkSize)
    // return () => {
    //   console.log('cleanup')
    //   window.removeEventListener('resize', checkSize)
    // }
  }, [])
  console.log('render')

  return (
    <h2>
      useEffect cleanup
      <p>{size}</p>
    </h2>
  )
}

export default UseEffectCleanup
