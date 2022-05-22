import { useState } from 'react'

export default function InputExample () {
  const [name, setName] = useState('Seyit')
  const [surname, setSurname] = useState('Erdemir')

  const [form , setForm] = useState({name:"", surname:""})


  const onChangeInput = e => {
      setForm({...form , [e.target.name]:e.target.value })
    console.log(e.target.name);
  }

//   const onChangeSurname = event => {
//     setSurname(event.target.value)
//   }

  return (
    <div>
      please enter a bane <br />
      <input name="name" value={form.name} onChange={onChangeInput}></input>
       <br/>
       <br/>


       please enter a bane <br />
      <input name="surname" value={form.surname} onChange={onChangeInput}></input>
       <br/>

       {form.name} {form.surname}
    </div>
  )
}
