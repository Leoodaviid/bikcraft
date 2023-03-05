import { Container, ListaBikBudget } from './styles'
import { LinkButton } from '../LinkButton/LinkButton'
import { Biks } from '../Helper/BiksList'
import { ReactComponent as Seta } from '../../assets/icons/seta.svg'
import InconEletrica from '../../assets/icons/eletrica.svg'
import InconCarbono from '../../assets/icons/carbono.svg'
import InconVelocidade from '../../assets/icons/velocidade.svg'
import InconRastreador from '../../assets/icons/rastreador.svg'

interface BikListProps {
  bikName?: string
}
const BikList = ({ bikName }: BikListProps) => {
  const newBik = Biks.filter((value) => {
    if (bikName) return value.name.includes(bikName)
  })
  return bikName && newBik ? (
    <>
      {newBik.map(({ id, img, km }) => (
        <>
          <ListaBikBudget key={id}>
            <li>
              <img src={InconEletrica} />
              Motor Elétrico
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
          </ListaBikBudget>
          <img src={img} alt='' />
        </>
      ))}{' '}
    </>
  ) : (
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
