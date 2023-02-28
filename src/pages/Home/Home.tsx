import { Introduction, List, Technology, Partners } from './styles'
import { Link } from 'react-router-dom'
import { PartnersItems } from '../../components/Partners/PartnersItems'
import { BikSubTitle } from '../../components/BikTitle/BikSubTitle'
import { BikTitle } from '../../components/BikTitle/BikTitle'
import BikMagic from '../../assets/img/magic-home.jpg'
import BikNimbus from '../../assets/img/nimbus-home.jpg'
import BikNebula from '../../assets/img/nebula-home.jpg'
import IntroducaoImg from '../../assets/img/introducao.jpg'
import TechnologyImg from '../../assets/img/tecnologia.jpg'
import LinkButton from '../../components/LinkButton/LinkButton'
import InconEletrica from '../../assets/icons/eletrica.svg'
import InconRastreador from '../../assets/icons/rastreador.svg'

const Home = () => {
  return (
    <>
      <Introduction aria-label='Introdução'>
        <div className='introducao container'>
          <div className='introducao-content'>
            <BikTitle>
              Bicicletas feitas sob medida<span className='point'>.</span>
            </BikTitle>
            <BikSubTitle>
              Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você.
              Explore o mundo na sua velocidade com a Bikcraft
            </BikSubTitle>
            <LinkButton to={'bicicletas'}>Escolha a sua</LinkButton>
          </div>
          <div>
            <img src={IntroducaoImg} alt='Bicicleta elétrica preta' />
          </div>
        </div>
      </Introduction>
      <List>
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
      </List>
      <Technology>
        <div className='technology container'>
          <div className='techonology-content'>
            <span>Tecnologia Avançada</span>
            <h2 className='title'>
              Você escolhe as suas cores e componentes<span className='point'>.</span>
            </h2>
            <BikSubTitle>
              Cada Bikcraft é única e possui a sua identidade. As medidas serão exataspara o seu
              corpo e altura, garantindo maior conforto e ergonomia na sua pedalada. Você pode
              também personalizar complemtamente as suas cores.
            </BikSubTitle>
            <LinkButton to={'bicicletas'}>Escolha um modelo</LinkButton>
            <div className='technology-benefits'>
              <div>
                <img src={InconEletrica} alt='' />
                <h3>Motor Elétrico</h3>
                <p>
                  Toda Bikcraft é equipada com um motor elétrico que possui duraçao de até 120h. A
                  bateria é recarregada com a sua energia gasta ao pedalar.
                </p>
              </div>
              <div>
                <img src={InconRastreador} alt='' />
                <h3>Rastreador</h3>
                <p>
                  Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e
                  sistemas anti-furto para garantir o seu sossego.
                </p>
              </div>
            </div>
          </div>
          <div className='technology-img'>
            <img src={TechnologyImg} alt='' />
          </div>
        </div>
      </Technology>
      <Partners aria-label='Nossos Parceiros'>
        <h2 className='title container'>
          Nossos parceiros<span className='point'>.</span>
        </h2>
        <PartnersItems />
      </Partners>
    </>
  )
}

export default Home
