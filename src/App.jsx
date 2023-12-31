import './App.css'
import { Link, Route, Routes } from 'react-router-dom' 
import { Chart1 } from './components/charts/Chart1'
import { Simulacion } from './components/datosFilter/simulacion'
import { TurnTable } from './components/turns/turnsTable'

const Home = () => <h1>HOME</h1>

function App () {
  return (
    <div className="App">
      <p>HOLAAA</p>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link> </li>
          <li><Link to='/simulacionPpal'>Simulacion</Link> </li>
          <li><Link to='/charts'>Charts</Link> </li>
          <li><Link to='/turns'>Turnos</Link> </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SimulacionPpal' element={<Simulacion />} />
        <Route path='/Charts' element={<Chart1 />} />
        <Route path='/Turns' element={<TurnTable />} />
      </Routes>

    </div>
  )
}

export default App
