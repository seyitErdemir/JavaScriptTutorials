import './App.css'
import A from './components/A'
import B from './components/B'

import Users from './components/Users'

function App () {
  return (
    <div className='App'>
      <br />
      <Users></Users>
      <br />
      <hr />
      <br />

      <A></A>
      <B></B>
      <br />

      <hr />
      <br />

      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ color: 'red', backgroundColor: 'grey', paddingTop: 50 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </div>

        <div className='alert alert-danger'>Deneme</div>
      </header>
    </div>
  )
}

export default App
