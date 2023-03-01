import { Container } from './styles'
import BikMagic from '../../assets/img/magic.jpg'
import BikNimbus from '../../assets/img/nimbus.jpg'
import BikNebula from '../../assets/img/nebula.jpg'
import InconEletrica from '../../assets/icons/eletrica.svg'
import InconCarbono from '../../assets/icons/carbono.svg'
import InconVelocidade from '../../assets/icons/velocidade.svg'
import InconRastreador from '../../assets/icons/rastreador.svg'
import { ReactComponent as Seta } from '../../assets/icons/seta.svg'
import LinkButton from '../LinkButton/LinkButton'

interface BikListProps {
  id: number
  img: string
  price: string
  name: string
  description: string
  km: number
  to: string
}

const Biks = [
  {
    id: 1,
    img: BikNimbus,
    price: 'R$ 4999',
    name: 'Nimbus Stark',
    description:
      'A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
    km: 50,
    to: '/bicicletas/nimbus',
  },
  {
    id: 2,
    img: BikMagic,
    price: 'R$ 2499',
    name: 'Magic Might',
    description:
      'A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
    km: 45,
    to: '/bicicletas/magic',
  },
  {
    id: 3,
    img: BikNebula,
    price: 'R$ 3999',
    name: 'Nebula Cosmic',
    description:
      'A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
    km: 50,
    to: '/bicicletas/nebula',
  },
] as BikListProps[]

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
