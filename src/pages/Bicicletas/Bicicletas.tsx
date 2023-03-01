import BikList from '../../components/BikList/BikList'
import { Head } from '../../components/Head/Head'
import { UseTitle } from '../../components/Title/useTitle'

const Bicicletas = () => {
  return (
    <>
      <Head title='Bicicletas' />
      <UseTitle />
      <BikList />
    </>
  )
}

export default Bicicletas
