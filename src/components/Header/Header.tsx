import { NavLink, Link } from 'react-router-dom'
import { Container } from './styles'
import BikcraftIcon from '../../assets/bikcraft.svg'

const Header = () => {
  return (
    <Container>
      <div>
        <Link to={'/'}>
          <img src={BikcraftIcon} alt='Bikcraft' />
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
