import { Container } from './styles'
import { ReactComponent as Seta } from '../../assets/icons/seta.svg'
import { Biks } from '../Helper/BiksList'
import InconEletrica from '../../assets/icons/eletrica.svg'
import InconCarbono from '../../assets/icons/carbono.svg'
import InconVelocidade from '../../assets/icons/velocidade.svg'
import InconRastreador from '../../assets/icons/rastreador.svg'
import LinkButton from '../LinkButton/LinkButton'

const BikList = () => {
  return (
    <>
      {Biks.map(({ id, img, price, name, description, km, to }) => (
        <Container key={id}>
          <div className='bik container'>
            <div className='bik-image'>
              <img src={img} alt='' />
              <span>{price}</span>
            </div>
            <div className='bik-content'>
              <h2>{name}</h2>
              <p>{description}</p>
              <ul>
                <li>
                  <img src={InconEletrica} />
                  Motor elétrico
                </li>
                <li>
                  <img src={InconCarbono} />
                  Fibra de carbono
                </li>
                <li>
                  <img src={InconVelocidade} />
                  {km} km/h
                </li>
                <li>
                  <img src={InconRastreador} />
                  Rastreador
                </li>
              </ul>
              <LinkButton to={to}>
                Mais Sobre <Seta />
              </LinkButton>
            </div>
          </div>
        </Container>
      ))}
    </>
  )
}

export default BikList
