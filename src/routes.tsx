import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import Home from './pages/Home/Home'
import Bicicletas from './pages/Bicicletas/Bicicletas'
import Seguros from './pages/Seguros/Seguros'
import Contato from './pages/Contato/Contato'
import Magic from './pages/Bicicletas/Magic'
import Termos from './pages/Termos/Termos'
import Nimbus from './pages/Bicicletas/Nimbus'
import Nebula from './pages/Bicicletas/Nebula'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Home />} />
        <Route path='bicicletas' element={<Bicicletas />} />
        <Route path='bicicletas/nimbus' element={<Nimbus />} />
        <Route path='bicicletas/magic' element={<Magic />} />
        <Route path='bicicletas/nebula' element={<Nebula />} />
        <Route path='seguros' element={<Seguros />} />
        <Route path='contato' element={<Contato />} />
        <Route path='termos' element={<Termos />} />
      </Route>
    </Routes>
  )
}
