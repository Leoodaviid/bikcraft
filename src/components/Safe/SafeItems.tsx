import { Safe } from './styles'
import { LinkButton } from '../LinkButton/LinkButton'

export interface SafeItemsProps {
  level?: string
  price?: string
  benefits?: string[]
  button?: string
}
export const SafeItems = ({ level, price, benefits, button }: SafeItemsProps) => {
  const tipo = 'seguro'
  return (
    <>
      <Safe level={level}>
        <h3>{level}</h3>
        <span>
          {price}
          <span className='flat'>mensal</span>
        </span>
        <ul>
          {benefits?.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <LinkButton className={button} to={`/orcamento?tipo=${tipo}&produto=${level}`}>
          Inscreva-se
        </LinkButton>
      </Safe>
    </>
  )
}
