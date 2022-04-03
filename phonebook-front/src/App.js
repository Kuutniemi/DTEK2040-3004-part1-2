import React, { useState } from 'react' //useEffect
import Contact from './contents/Contact'
import Alert from './contents/Alert'
import axios from 'axios'

//import axios from 'axios'

const App = () => {
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [alert, setAlert] = useState(null)
  //const [showAll, setShowAll] = useState(true)

  const eventHandler = (response) => {
    console.log('promise fulfilled')
    //setNewName({ name: response.data })
    //setNewNumber({number: response.data})
  }
  
  const promise = axios.get('http://localhost:3001/persons')
  
  promise.then(eventHandler)
  
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
      setAlert(newName)
    } else 
    { setAlert(null)
      const ContactObject = {
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
      <Alert alert={alert}></Alert>
      <form onSubmit={addContact}>
        Nimi: <input value={newName} onChange={handleNameChange} required/> <div>
        Numero<input value={newNumber} onChange={handleNumberChange} required/></div>
        <button type="submit">save</button>
      </form>  
      <h1>Yhteystiedot</h1> 
      <Contact data={contacts}/>    
    </div>
  )
}

export default App