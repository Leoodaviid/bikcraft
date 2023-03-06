import { useEffect } from 'react'
import { Head } from '../../components/Head/Head'
import { UseTitle } from '../../components/Title/useTitle'
import BikList from '../../components/BikList/BikList'

const Bicicletas = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head
        title='Bicicletas'
        description='Bicicletas elétricas de alta qualidade, muito mais performace na hora do pedal'
      />
      <UseTitle />
      <BikList />
    </>
  )
}

export default Bicicletas
