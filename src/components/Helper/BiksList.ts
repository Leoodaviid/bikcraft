import BikMagic from '../../assets/img/magic.jpg'
import BikNimbus from '../../assets/img/nimbus.jpg'
import BikNebula from '../../assets/img/nebula.jpg'
import BikNimbusHome from '../../assets/img/nimbus-home.jpg'
import BikMagicHome from '../../assets/img/magic-home.jpg'
import BikNebulaHome from '../../assets/img/nebula-home.jpg'

interface BikListProps {
  id: number
  img: string
  imgHome: string
  price: string
  name: string
  description: string
  km: number
  to: string
}

export const Biks = [
  {
    id: 1,
    img: BikNimbus,
    imgHome: BikNimbusHome,
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
    imgHome: BikMagicHome,
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
    imgHome: BikNebulaHome,
    price: 'R$ 3999',
    name: 'Nebula Cosmic',
    description:
      'A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
    km: 50,
    to: '/bicicletas/nebula',
  },
] as BikListProps[]
