import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)

  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'

  return (
    <>
      {/* <h1>asd:{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      {/* in case of false will show the content */}
      <h1>{text || 'John doe'}</h1>
      {/* in case of true will show the content  */}
      <button className='btn' onClick={() => setIsError(!isError)}>
        Change state
      </button>
      {isError && <h1>Error... </h1>}
      {/* {!text && <h1>Hello world!</h1>} */}
    </>
  )
}

export default ShortCircuit
