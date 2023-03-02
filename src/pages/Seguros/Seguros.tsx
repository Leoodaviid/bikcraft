import { Head } from '../../components/Head/Head'
import { UseTitle } from '../../components/Title/useTitle'
import { Safe } from '../Home/styles'
import { SafeItems } from '../../components/Safe/SafeItems'
import { Benefits, Questions } from './styles'
import { BikSubTitle } from '../../components/BikTitle/BikSubTitle'
import { BenefitsList } from '../../components/BenefitsList/BenefitsList'
import { QuestionList } from '../../components/QuestionList/QuestionList'

const Seguros = () => {
  return (
    <>
      <Head title='Seguros' />
      <UseTitle />
      <Safe id='seguro'>
        <div className='safe container'>
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
      <Benefits>
        <div className='container'>
          <BikSubTitle>Vantagens</BikSubTitle>
          <BenefitsList />
        </div>
      </Benefits>
      <Questions>
        <div className='container'>
          <BikSubTitle>Perguntas Frequentes</BikSubTitle>
          <QuestionList />
        </div>
      </Questions>
    </>
  )
}

export default Seguros
