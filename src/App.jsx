import { useEffect, useState } from 'react'
import './App.css'
import pratos from './data/pratos.json'
import api from './api'

import { Card } from 'primereact/card';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const pizzas = pratos.pizza 




function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img style={{width:'100%'}} src="./img/Banner.jpg" alt="" />
      <TabelaPizza />
      </header>
    </div>
  )
}

  function TabelaPizza() {
    const dadosApi = new api();
    const [pratos, setPratos] = useState([])
    
    useEffect(() => {
      dadosApi.listarPratos().then(pizza => setPratos(pizza))
    })
    return(
      <div className="card" style={{width:"90%"}}>
        <h2>Pizzas</h2>
        <DataTable style={{width:"100%"}} value={pratos}>
          <Column field="nome"header="Pizza"></Column>
          <Column field="preco" header="Preço"></Column>
        </DataTable>
      </div>
    )
  }


export default App
