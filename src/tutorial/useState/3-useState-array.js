import React from 'react'
import { data } from '../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) => {
    // const newPeople = people.filter((item) => item.id !== id)
    // setPeople(newPeople)

    setPeople((oldPeople) => {
      const newPeople = oldPeople.filter((item) => item.id !== id)
      return newPeople
    })
  }
  const clearItem = () => {
    setPeople([])
  }
  return (
    <>
      {people.map((item) => {
        return (
          <div key={item.id} className='item'>
            <h4>{item.name}</h4>
            <button onClick={() => removeItem(item.id)}>remove</button>
          </div>
        )
      })}
      <button type='button' className='btn' onClick={clearItem}>
        clear item
      </button>
    </>
  )
}

export default UseStateArray
