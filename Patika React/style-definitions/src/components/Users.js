import { useState, useEffect } from 'react'
import axios from 'axios'

function Users () {
  const [users, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  //fetch ile yapılan
  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(res => res.json())
  //       .then(data => {
  //         setUser(data)
  //         setIsLoading(false)
  //       })
  //       .catch(err => console.log(err))
  //       .finally( ()=>setIsLoading(false))
  //   }, [])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUser(res.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div> Is Loading...</div>}

      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default Users
