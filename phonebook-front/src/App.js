import React, { useState, useEffect } from 'react'
import Contact from './contents/Contact'

//import axios from 'axios'

const App = () => {
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  //const [showAll, setShowAll] = useState(true)

  /*useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')*/

  const addContact = (event) => {
    event.preventDefault()
    const checkIfExist = obj => obj.name === newName;
    if (contacts.some(checkIfExist)) 
    {
      alert("Nimellä löytyy jo yhteystieto")
    } else 
    { const ContactObject = {
      name: newName,
      number: newNumber,
      //id: contacts.length + 1,
    }
    console.log(contacts)

    setContacts(contacts.concat(ContactObject))
    setNewName('')
    setNewNumber('')}

    //console.log(contacts.some(checkIfExist))

   
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  /*const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)*/

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <form onSubmit={addContact}>
        Nimi: <input value={newName} onChange={handleNameChange}/> <div>
        Numero<input value={newNumber} onChange={handleNumberChange}/></div>
        <button type="submit">save</button>
      </form>  
      <h1>Yhteystiedot</h1>
      <ul>
        {contacts.map(yht => 
            <Contact key={yht.name} yht={yht} />
        )}
      </ul>
    </div>
  )
}

export default App