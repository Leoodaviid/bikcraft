import { Banner } from './styles'
import ImgSeguros from '../../assets/img/seguros.jpg'
import { SubTitle } from '../BikTitle/styles'
import { BikText } from '../BikTitle/BikText'
import { LinkButton } from '../LinkButton/LinkButton'

export const SafeBanner = () => {
  return (
    <Banner>
      <div className='safe container'>
        <div className='safe-image'>
          <img src={ImgSeguros} alt='Pessoa parada em cima de uma bicicleta.' />
        </div>
        <div className='safe-content'>
          <SubTitle>
            Pedale mais tranquilo com nosso <span className='point'>seguro.</span>
          </SubTitle>
          <BikText>
            Inscreva-se em um dos planos do nosso seguro Bikcraft e aproveite diversos beneficios.
          </BikText>
          <LinkButton to='seguros'>Conheça Mais</LinkButton>
        </div>
      </div>
    </Banner>
  )
}
