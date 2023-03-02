import { Link } from 'react-router-dom'
import { Ul } from './styles'
import { Biks } from '../Helper/BiksList'

interface BikListHomeProps {
  bikNameOne?: string
}

export const BikListHome = ({ bikNameOne }: BikListHomeProps) => {
  const newBiks = Biks.filter((value) => {
    if (bikNameOne) return value.name.includes(bikNameOne)
  })

  {
    return bikNameOne && newBiks ? (
      <Ul className='bik-list'>
        {newBiks.map(({ id, imgHome, name, price, to }) => (
          <li key={id} className='newBiks'>
            <Link to={to}>
              <img src={imgHome} alt='Bicicleta preta' />
              <h3>{name}</h3>
              <span>{price}</span>
            </Link>
          </li>
        ))}
      </Ul>
    ) : (
      <Ul>
        {Biks.map(({ id, imgHome, name, price, to }) => (
          <li key={id}>
            <Link to={to}>
              <img src={imgHome} alt='Bicicleta preta' />
              <h3>{name}</h3>
              <span>{price}</span>
            </Link>
          </li>
        ))}
      </Ul>
    )
  }
}
