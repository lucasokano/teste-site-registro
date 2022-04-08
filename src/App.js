import './App.css';
import React, {useState} from 'react';

function App() {

  const[input1, setInput1] = useState('')
  const[input2, setInput2] = useState('')
  const[input3, setInput3] = useState('')
  
  const[clientes, setClientes] = useState([])

  const handleChange1 = e => {
    setInput1(e.target.value);
  }
  const handleChange2 = e => {
    setInput2(e.target.value);
  }
  const handleChange3 = e => {
    setInput3(e.target.value);
  }

  const handleSubmit = e => {
      e.preventDefault();

      setClientes([...clientes, {nome:input1, email:input2, cel:input3, id:Math.floor(Math.random()*10000)}])
     
   

      setInput1('');
      setInput2('');
      setInput3('');

  }

  return (
    <div className="App">

      <form >
            <label>Nome</label>
            <input type="text" value={input1} onChange={handleChange1}></input>
            <label>Email</label>
            <input type="text" value={input2} onChange={handleChange2}></input>
            <label>Telefone</label>
            <input type="text" value={input3} onChange={handleChange3}></input>

            <button type="submit" onClick={handleSubmit}>CADASTRAR</button>
      </form>

      <ul>
        {clientes.map((cliente)=>{
          return(
          <li key={cliente.id}>
          {cliente.nome} / {cliente.email} /{cliente.cel}
          </li>

        )})}
      </ul>

    </div>
  );
}

export default App;
