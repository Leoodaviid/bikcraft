import { NavLink, Link } from 'react-router-dom'
import { Container } from './styles'
import BikcraftIcon from '../../assets/icons/bikcraft.svg'

const Header = () => {
  return (
    <Container>
      <div className='container'>
        <Link to={'/'}>
          <img src={BikcraftIcon} width='136' height='32' alt='Bikcraft' />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to={'bicicletas'}>Bicicletas</NavLink>
            </li>
            <li>
              <NavLink to={'seguros'}>Seguros</NavLink>
            </li>
            <li>
              <NavLink to={'contato'}>Contato</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default Header
