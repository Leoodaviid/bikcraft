import { Section, Article } from './styles'
import BikMagic from '../../assets/magic-home.jpg'
import BikNimbus from '../../assets/nimbus-home.jpg'
import BikNebula from '../../assets/nebula-home.jpg'
import IntroducaoImg from '../../assets/introducao.jpg'
import LinkButton from '../../components/LinkButton/LinkButton'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Section>
        <div className='introducao container'>
          <div className='introducao-conteudo'>
            <h1 className='title'>
              Bicicletas feitas sob medida<span className='point'>.</span>
            </h1>
            <p className='sub-title'>
              Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você.
              Explore o mundo na sua velocidade com a Bikcraft
            </p>
            <LinkButton to={'bicicletas'}>Escolha a sua</LinkButton>
          </div>
          <div>
            <img src={IntroducaoImg} alt='Bicicleta elétrica preta' />
          </div>
        </div>
      </Section>
      <Article>
        <h2 className='container title'>
          Escolha a sua<span className='point'>.</span>
        </h2>
        <ul>
          <li>
            <Link to='bicicletas/magic'>
              <img src={BikMagic} alt='Bicicleta preta' />
              <h3>Magic Might</h3>
              <span>R$ 2499</span>
            </Link>
          </li>
          <li>
            <Link to='bicicletas/nimbus'>
              <img src={BikNimbus} alt='Bicicleta preta' />
              <h3>Nimbus Stark Might</h3>
              <span>R$ 4999</span>
            </Link>
          </li>
          <li>
            <Link to='bicicletas/nebula'>
              <img src={BikNebula} alt='Bicicleta preta' />
              <h3>Nebula Cosmic</h3>
              <span>R$ 3999</span>
            </Link>
          </li>
        </ul>
      </Article>
    </>
  )
}

export default Home
