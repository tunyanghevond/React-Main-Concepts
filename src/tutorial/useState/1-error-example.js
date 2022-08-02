import React from 'react'

const ErrorExample = () => {
  const title = 'random title'
  const handleClick = () => {
    console.log('hello world')
  }
  return (
    <div>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </div>
  )
}

export default ErrorExample
