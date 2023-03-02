import { List } from './styles'
import { Benefits } from '../Helper/BenefitsList'

export const BenefitsList = () => {
  return (
    <List>
      {Benefits.map(({ svg, name, description }) => (
        <li key={name}>
          <img src={svg} />
          <h3>{name}</h3>
          <p>{description}</p>
        </li>
      ))}
    </List>
  )
}
