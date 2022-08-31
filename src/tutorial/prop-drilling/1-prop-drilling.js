import React, { useState } from 'react'
import { data } from '../../data'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    setPeople((oldPeople) => {
      return oldPeople.filter((person) => person.id !== id)
    })
  }
  return (
    <section>
      <h2>prop drilling</h2>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button type='button' onClick={() => removePerson(id)}>
        remove person
      </button>
    </div>
  )
}

export default PropDrilling
