import BikList from '../../components/BikList/BikList'
import { Head } from '../../components/Head/Head'
import { UseTitle } from '../../components/Title/useTitle'

const Bicicletas = () => {
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
