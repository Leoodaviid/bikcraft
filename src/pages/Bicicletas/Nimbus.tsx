import { Article } from '../Home/styles'
import { Head } from '../../components/Head/Head'
import { UseTitle } from '../../components/Title/useTitle'
import { Bik } from '../../components/Bik/Bik'
import { BikSubTitle } from '../../components/BikTitle/BikSubTitle'
import { BikListHome } from '../../components/BikList/BikListHome'
import { SafeBanner } from '../../components/Safe/SafeBanner'

const Nimbus = () => {
  return (
    <>
      <Head title='Nimbus' />
      <UseTitle />
      <Bik BikNumber={0} name={'Nimbus Stark'} nickname='nimbus' km={50} />
      <Article>
        <BikSubTitle className='container'>Escolha a sua</BikSubTitle>
        <BikListHome />
      </Article>
      <SafeBanner />
    </>
  )
}

export default Nimbus
