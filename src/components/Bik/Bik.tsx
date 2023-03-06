import { Container } from './styles'
import { BikText } from '../BikTitle/BikText'
import { Biks } from '../Helper/BikImg'
import { LinkButton } from '../LinkButton/LinkButton'
import { MouseEvent, useEffect, useState } from 'react'
import EntregaIcon from '../../assets/icons/entrega.svg'
import EstoqueIcon from '../../assets/icons/estoque.svg'
import InconEletrica from '../../assets/icons/eletrica.svg'
import InconCarbono from '../../assets/icons/carbono.svg'
import InconVelocidade from '../../assets/icons/velocidade.svg'
import InconRastreador from '../../assets/icons/rastreador.svg'

interface BikProps {
  BikNumber: number
  name: string
  nickname: string
  km: number
}

export const Bik = ({ BikNumber, name, nickname, km }: BikProps) => {
  const [container, setContainer] = useState<Element | null>()

  useEffect(() => {
    const galery = document.querySelector('.bik-images')
    setContainer(galery)
  }, [])

  const changeImage = ({ target }: MouseEvent) => {
    const img = target as Node
    const media = matchMedia('(min-width: 930px)').matches

    if (container && media) {
      container.prepend(img)
    }
  }
  return (
    <Container>
      <div className='bik container'>
        <div className='bik-images'>
          {Biks.map(({ id, img }) => (
            <img onClick={changeImage} key={id} src={img[BikNumber]} alt='' />
          ))}
        </div>
        <div className='bik-content'>
          <BikText>
            A {name} é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os
            melhores acessórios, o que garante maior velocidade.
          </BikText>
          <div className='bik-sale'>
            <LinkButton to={`/orcamento?tipo=bikcraft&produto=${nickname}`}>
              Comprar agora
            </LinkButton>
            <span>
              <img src={EntregaIcon} /> entrega em 5 dias
            </span>
            <span>
              <img src={EstoqueIcon} /> 20 em estoque
            </span>
          </div>

          <h2>Informações</h2>
          <ul className='bik-information'>
            <li>
              <img src={InconEletrica} alt='' />
              <h3>Motor elétrico</h3>
              <p>Permite você viajar distâncias inimaginaveis com a sua bike.</p>
            </li>
            <li>
              <img src={InconVelocidade} alt='' />
              <h3>{km} Km/h</h3>
              <p>A mais rápida bicicleta elétrica disponível hoje no mercado.</p>
            </li>
            <li>
              <img src={InconRastreador} alt='' />
              <h3>Rastreador</h3>
              <p>Rastreador e sistema anti-furto para garantir o seu sossego.</p>
            </li>
            <li>
              <img src={InconCarbono} alt='' />
              <h3>Fibra de Carbono</h3>
              <p>Maior proteção possível para a sua Bikcraft com fibra de carbono.</p>
            </li>
          </ul>
          <h2>Ficha técnica</h2>
          <ul className='bik-datasheet'>
            <li>
              Peso <span>9 kg</span>
            </li>
            <li>
              Altura <span>60 cm</span>
            </li>
            <li>
              Largura <span>120 cm</span>
            </li>
            <li>
              Profundidade <span>10 cm</span>
            </li>
            <li>
              Marchas <span>16</span>
            </li>
            <li>
              Roda <span>29</span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
