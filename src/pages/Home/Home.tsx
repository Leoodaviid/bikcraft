import { Introduction, Article, Technology, Partners, Testimony, Safe } from './styles'
import { LinkButton } from '../../components/LinkButton/LinkButton'
import { PartnersItems } from '../../components/Partners/PartnersItems'
import { BikSubTitle } from '../../components/BikTitle/BikSubTitle'
import { BikText } from '../../components/BikTitle/BikText'
import { BikTitle } from '../../components/BikTitle/BikTitle'
import { SafeItems } from '../../components/Safe/SafeItems'
import { Head } from '../../components/Head/Head'
import { BikListHome } from '../../components/BikList/BikListHome'
import DepoimentoImg from '../../assets/img/depoimento.jpg'
import IntroducaoImg from '../../assets/img/introducao.jpg'
import NimbusImg from '../../assets/img/nimbus.jpg'
import TechnologyImg from '../../assets/img/tecnologia.jpg'
import InconEletrica from '../../assets/icons/eletrica.svg'
import InconRastreador from '../../assets/icons/rastreador.svg'

const Home = () => {
  return (
    <>
      <Head
        title='Bicicletas sob medida'
        description='Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para o cliente. Explore o mundo na sua velocidade com a Bikcraft.'
      />
      <Introduction aria-label='Introdução'>
        <div className='introducao container'>
          <div className='introducao-content'>
            <BikTitle>Bicicletas feitas sob medida</BikTitle>
            <BikText>
              Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você.
              Explore o mundo na sua velocidade com a Bikcraft
            </BikText>
            <LinkButton to={'bicicletas'}>Escolha a sua</LinkButton>
          </div>
          <picture>
            <source media='(max-width:800px)' srcSet={NimbusImg} />
            <img src={IntroducaoImg} alt='Bicicleta elétrica preta' />
          </picture>
        </div>
      </Introduction>
      <Article>
        <BikSubTitle className='container'>Escolha a sua</BikSubTitle>
        <BikListHome />
      </Article>
      <Technology>
        <div className='technology container'>
          <div className='techonology-content'>
            <span>Tecnologia Avançada</span>
            <BikSubTitle>Você escolhe as suas cores e componentes</BikSubTitle>
            <BikText>
              Cada Bikcraft é única e possui a sua identidade. As medidas serão exataspara o seu
              corpo e altura, garantindo maior conforto e ergonomia na sua pedalada. Você pode
              também personalizar complemtamente as suas cores.
            </BikText>
            <LinkButton to={'bicicletas'}>Escolha um modelo</LinkButton>
            <div className='technology-benefits'>
              <div>
                <img src={InconEletrica} width='24' height='24' alt='' />
                <h3>Motor Elétrico</h3>
                <p>
                  Toda Bikcraft é equipada com um motor elétrico que possui duraçao de até 120h. A
                  bateria é recarregada com a sua energia gasta ao pedalar.
                </p>
              </div>
              <div>
                <img src={InconRastreador} width='24' height='24' alt='' />
                <h3>Rastreador</h3>
                <p>
                  Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e
                  sistemas anti-furto para garantir o seu sossego.
                </p>
              </div>
            </div>
          </div>
          <div className='technology-img'>
            <img src={TechnologyImg} width='1200' height='1920' alt='' />
          </div>
        </div>
      </Technology>
      <Partners aria-label='Nossos Parceiros'>
        <BikSubTitle className='container'>Nossos parceiros</BikSubTitle>
        <PartnersItems />
      </Partners>
      <Testimony aria-label='Depoimento'>
        <div>
          <img
            src={DepoimentoImg}
            width='1560'
            height='1360'
            alt='Pessoa pedalando uma biciceta Bikcraft'
          />
        </div>
        <div className='testimony-content'>
          <blockquote>
            <p>
              Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi intensificar o
              meu amor por esta atividade. Recomendo à todos que amo.
            </p>
          </blockquote>
          <span>Ana Júlia</span>
        </div>
      </Testimony>
      <Safe>
        <div className='safe container'>
          <BikSubTitle>Seguros</BikSubTitle>
          <SafeItems
            level='prata'
            price='R$199'
            benefits={[
              'Duas trocas por ano',
              'Assistência técnica',
              'Suporte 08h ás 18h',
              'Cobertura estadual',
            ]}
            button='secondary'
          />
          <SafeItems
            level='ouro'
            price='R$299'
            benefits={[
              'Cinco trocas por ano',
              'Assistência especial',
              'Suporte 24h',
              'Cobertura nacional',
              'Desconto em parceiros',
              'Acesso ao clube Bikcraft',
            ]}
          />
        </div>
      </Safe>
    </>
  )
}

export default Home
