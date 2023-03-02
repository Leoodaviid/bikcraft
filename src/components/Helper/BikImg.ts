import BikNimbus1 from '../../assets/img/nimbus1.jpg'
import BikNimbus2 from '../../assets/img/nimbus2.jpg'
import BikNimbus3 from '../../assets/img/nimbus3.jpg'

interface BikImgProps {
  id: number
  img: string[]
}

export const Biks = [
  {
    id: 1,
    img: [BikNimbus1, BikNimbus2, BikNimbus3],
  },
  {
    id: 2,
    img: [BikNimbus2, BikNimbus3, BikNimbus1],
  },
  {
    id: 3,
    img: [BikNimbus3, BikNimbus1, BikNimbus2],
  },
] as BikImgProps[]
