import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { Container } from './styles'

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
