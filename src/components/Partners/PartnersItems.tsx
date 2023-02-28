import { Partner } from './styles'
import CaravanSvg from '../../assets/icons/caravan.svg'
import RanekSvg from '../../assets/icons/ranek.svg'
import HandelSvg from '../../assets/icons/handel.svg'
import DogsSvg from '../../assets/icons/dogs.svg'
import LesConeSvg from '../../assets/icons/lescone.svg'
import FlexBlogSvg from '../../assets/icons/flexblog.svg'
import WildBeastSvg from '../../assets/icons/wildbeast.svg'
import SurfBotSvg from '../../assets/icons/surfbot.svg'

interface PartnersItemProps {
  name: string
  svg: string
}

const partners = [
  { name: 'Caravan', svg: CaravanSvg },
  { name: 'Ranek', svg: RanekSvg },
  { name: 'Handel', svg: HandelSvg },
  { name: 'Dosgs', svg: DogsSvg },
  { name: 'Lescone', svg: LesConeSvg },
  { name: 'FlexBlog', svg: FlexBlogSvg },
  { name: 'WildBeast', svg: WildBeastSvg },
  { name: 'SurfBot', svg: SurfBotSvg },
] as PartnersItemProps[]

export const PartnersItems = () => {
  return (
    <Partner>
      {partners.map(({ name, svg }) => (
        <li key={name}>
          <img src={svg} alt={name} />
        </li>
      ))}
    </Partner>
  )
}
