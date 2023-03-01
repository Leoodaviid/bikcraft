import { List } from './styles'
import InconEletrica from '../../assets/icons/eletrica.svg'
import InconCarbono from '../../assets/icons/carbono.svg'
import InconSustentavel from '../../assets/icons/sustentavel.svg'
import InconRastreador from '../../assets/icons/rastreador.svg'
import InconSeguranca from '../../assets/icons/seguro.svg'
import InconVelocidade from '../../assets/icons/velocidade.svg'

interface BenefitsListProps {
  svg: string
  name: string
  description: string
}

const Benefits = [
  {
    svg: InconEletrica,
    name: 'Reparo Elétrico',
    description:
      'Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra.',
  },
  {
    svg: InconCarbono,
    name: 'Carbono',
    description:
      'Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar.',
  },
  {
    svg: InconSustentavel,
    name: 'Sustentável',
    description:
      'Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto.',
  },
  {
    svg: InconRastreador,
    name: 'Rastreador',
    description:
      'Utilizamos o GPS da sua Bikcraft em conjunto com especialistas em segurança para efetuarmos a recuperação.',
  },
  {
    svg: InconSeguranca,
    name: 'Segurança',
    description:
      'Com o seguro Bikcraft você pode ficar tranquilo em saber que o seu dinheiro não será perdido em casos de roubo.',
  },
  {
    svg: InconVelocidade,
    name: 'Rapidez',
    description:
      'A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais.',
  },
] as BenefitsListProps[]

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
