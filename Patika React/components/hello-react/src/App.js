import './App.css'
import Header from './components/Header'
import User from './components/User'

const name = 'seyit'
const surName = 'erdemir'
const isLoggedIn = true
const friends = [
  { id: 1, name: 'Seyit' },
  { id: 2, name: 'SEYİT2' },
  { id: 3, name: 'sEYİT 3' },
  { id: 4, name: 'sEYİT 4' }
]

function App () {
  // return React.createElement('div' , null , "Hello")

  return (
    <div>

      <hr></hr>
      <p>2. props derslerinde yapılanlar </p>
      <User
        // name='Seyit'
        surName='Erdemir'
        isLoggedIn={true}
        age={29}
        friends={friends}
        address={{title:"Konya/Merkez" , zip : 424242}}
      ></User>

      <hr></hr>
      <p>1. companent derslerinde yapılanlar </p>
      <h1>{name}</h1>
      <h1>{surName}</h1>
      <h1> {`benim adım ${name} soyadım ${surName}`}</h1>
      <h1> 
        {isLoggedIn
          ? `benim adım ${name} soyadım ${surName} Giriş  yaptınız`
          : 'Giriş  yapmadınız'}{' '}
      </h1>
      <h1>Hello React </h1>
      <Header></Header>
      <hr></hr>
    </div>
  )
}

export default App
