import { Section } from './styles'
import IntroducaoImg from '../../assets/introducao.jpg'
import LinkButton from '../../components/LinkButton/LinkButton'

const Home = () => {
  return (
    <Section>
      <div className='introducao'>
        <div className='introducao-conteudo'>
          <h1>
            Bicicletas feitas sob medida <span>.</span>
          </h1>
          <p>
            Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore
            o mundo na sua velocidade com a Bikcraft
          </p>
          <LinkButton to={'bicicletas'}>Escolha a sua</LinkButton>
        </div>
        <div>
          <img src={IntroducaoImg} alt='Bicicleta elétrica preta' />
        </div>
      </div>
    </Section>
  )
}

export default Home
