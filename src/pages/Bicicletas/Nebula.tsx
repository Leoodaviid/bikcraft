import { Bik } from '../../components/Bik/Bik'
import { BikListHome } from '../../components/BikList/BikListHome'
import { BikSubTitle } from '../../components/BikTitle/BikSubTitle'
import { Head } from '../../components/Head/Head'
import { SafeBanner } from '../../components/Safe/SafeBanner'
import { UseTitle } from '../../components/Title/useTitle'
import { Article } from '../Home/styles'

const Nebula = () => {
  return (
    <>
      <Head title='Nebula' />
      <UseTitle />
      <Bik BikNumber={2} name={'Nebula Cosmic'} nickname='nebula' km={40} />
      <Article>
        <BikSubTitle className='container'>Escolha a sua</BikSubTitle>
        <BikListHome />
      </Article>
      <SafeBanner />
    </>
  )
}

export default Nebula
