import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import Home from './pages/Home/Home'
import Bicicletas from './pages/Bicicletas/Bicicletas'
import Seguros from './pages/Seguros/Seguros'
import Contato from './pages/Contato/Contato'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Home />} />
        <Route path='bicicletas' element={<Bicicletas />} />
        <Route path='seguros' element={<Seguros />} />
        <Route path='contato' element={<Contato />} />
      </Route>
    </Routes>
  )
}
