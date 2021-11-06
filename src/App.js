
import { useEffect, useState } from 'react';
import ListaPaises from './components/ListaPaises';
import './App.css';
import servicePaises from './services/getPaises'
import serviceUsers from './services/serviceUsers';

function App() {
  
  const [paises, setPaises] = useState([])
  const [selectedPais, setSelectedPais] = useState('')
  const [name, setName] = useState('')
  useEffect(()=>{
    servicePaises.get().then((data)=>{
      setPaises(data)
    })
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    if(selectedPais!=='' && name !== ''){

      console.log('Submit')
      console.log(selectedPais, name)
      serviceUsers.post({
        nombre:name,
        pais:selectedPais
      })
        .then((data)=>{
          console.log(data)
          setName('')
          // setSelectedPais('')

        })
    }
    
  }
  const handleChangePais = (event) => {
    setSelectedPais(event.target.value)
  
  }
  const handleChangeName = (event) => {
    setName(event.target.value)

  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input onChange={handleChangeName} value={name} required/>
      <select onChange={handleChangePais}>
        <option disabled>Pais</option>
        <option></option>
        {paises.map((pais) => (
          <ListaPaises key={pais.name.common} text={pais.name.common} value={pais.name.common}/>
        ))}
      </select>
      <button>Hola</button>
      </form>
    </div>
  );
}

export default App;
