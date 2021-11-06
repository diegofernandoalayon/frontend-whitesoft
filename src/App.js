
import { useEffect, useState } from 'react';
import ListaPaises from './components/ListaPaises';
import './App.css';
import get from './services/getPaises'


function App() {
  
  const [paises, setPaises] = useState([])
  const [selectedPais, setSelectedPais] = useState('')
  const [name, setName] = useState('')
  useEffect(()=>{
    get.paises().then((data)=>{
      setPaises(data)
    })
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submit')
    console.log(selectedPais, name)
    
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
      <input onChange={handleChangeName} required/>
      <select onChange={handleChangePais}>
        <option value = ''>Seleccione pais</option>
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
