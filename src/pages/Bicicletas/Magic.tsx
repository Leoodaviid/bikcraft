import React from 'react'
import { Article } from '../Home/styles'
import { Bik } from '../../components/Bik/Bik'
import { Head } from '../../components/Head/Head'
import { UseTitle } from '../../components/Title/useTitle'
import { BikSubTitle } from '../../components/BikTitle/BikSubTitle'
import { BikListHome } from '../../components/BikList/BikListHome'
import { SafeBanner } from '../../components/Safe/SafeBanner'

const Magic = () => {
  return (
    <>
      <Head title='Magic' />
      <UseTitle />
      <Bik BikNumber={1} name={'Magic Might'} km={45} />
      <Article>
        <BikSubTitle className='container'>Escolha a sua</BikSubTitle>
        <BikListHome />
      </Article>
      <SafeBanner />
    </>
  )
}

export default Magic
