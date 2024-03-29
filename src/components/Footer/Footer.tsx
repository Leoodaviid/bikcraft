import { Container } from './styles'
import BikcraftIcon from '../../assets/icons/bikcraft.svg'
import InstagramIcon from '../../assets/icons/instagram.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import YouTubeIcon from '../../assets/icons/youtube.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Container>
      <div className='footer container'>
        <Link to={'/'}>
          <img src={BikcraftIcon} width='136' height='32' alt='Bikcraft' />
        </Link>
        <div className='contact'>
          <h3>Contato</h3>
          <ul>
            <li>
              <a href='tel:+55859999999'>+55 85 9999-9999</a>
            </li>
            <li>
              <a href='mailto:contato@bikcraft.com'>contato@bikcraft.com</a>
            </li>
            <li>Rua Ali Perto, 42 - Cidade 2000</li>
            <li>Fortaleza - CE</li>
          </ul>
          <div className='social-media'>
            <a href='https://www.instagram.com/'>
              <img src={InstagramIcon} width='32' height='32' alt='Instagram' />
            </a>
            <a href='https://pt-br.facebook.com/'>
              <img src={FacebookIcon} width='32' height='32' alt='Facebook' />
            </a>
            <a href='https://www.youtube.com/'>
              <img src={YouTubeIcon} width='32' height='32' alt='Youtube' />
            </a>
          </div>
        </div>
        <div className='information'>
          <h3>Informações</h3>
          <nav>
            <ul>
              <li>
                <Link to={'bicicletas'}>Bicicletas</Link>
              </li>
              <li>
                <Link to={'seguros'}>Seguros</Link>
              </li>
              <li>
                <Link to={'contato'}>Contato</Link>
              </li>
              <li>
                <Link to={'termos'}>Termos e Condições</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className='copy'>Bikcraft &copy; Alguns direitos reservados.</p>
      </div>
    </Container>
  )
}

export default Footer
