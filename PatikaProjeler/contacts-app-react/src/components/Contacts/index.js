import { useState, useEffect } from 'react'
import   './style.css'

import List from './List'
import Form from './Form'


function Contacts () {
  const [contacts, setContacts] = useState([
    { fullname: 'Seyit ', phone_number: '123' },
    { fullname: 'Deneme', phone_number: '456' },
    { fullname: 'Patates', phone_number: '789' },
    { fullname: 'Armut', phone_number: '000' }
  ])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <div id="container">
        <h1>Contacts</h1>
      <List contacts={contacts}></List>
      <Form addContact={setContacts} contacts={contacts}></Form>
    </div>
  )
}

export default Contacts
