import { useState } from 'react'
import './App.css'

function App () {
  const [name, setName] = useState('Seyit')
  const [age, setAge] = useState(22)
  const [friends, setFriends] = useState(['seyit', 'Seyit 2'])
  const [address,setAddress] = useState({title:"Konya" , zip:424242})

  return (
    <div className='App'>
      <h1>Merhaba {name} </h1>
      <h2>{age} </h2>

      <button onClick={() => setName('deneme')}>Change Name</button>
      <button onClick={() => setAge(12)}>Change Age</button>

      <hr></hr>
       <br></br>
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <br></br>
      <button onClick={() => setFriends([ "seyit 3" , ...friends , "sonra seyit"])}>Add new Friend</button>

      <hr></hr>
       <br></br>
      <h2>Address</h2>
      <div  >{address.title} -- {address.zip}</div>
      <br></br>
      <button onClick={() => setAddress({ ...address , title:"KONYA XX" , zip:123})}>Change address</button>
      

    </div>
  )
}

export default App
