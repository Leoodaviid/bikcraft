import { Container } from './styles'
import BikcraftIcon from '../../assets/bikcraft.svg'

const Header = () => {
  return (
    <Container>
      <div>
        <a href='#'>
          <img src={BikcraftIcon} alt='Bikcraft' />
        </a>
        <nav>
          <ul>
            <li>
              <a href='#'>Bicicletas</a>
            </li>
            <li>
              <a href='#'>Seguros</a>
            </li>
            <li>
              <a href='#'>Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default Header
