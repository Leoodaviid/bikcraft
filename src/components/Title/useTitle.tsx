import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BikTitle } from '../BikTitle/BikTitle'
import { Container } from './styles'

export const UseTitle = () => {
  const [title, setTitle] = useState('')
  const [paragraph, setParagraph] = useState('')
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location
    switch (pathname) {
      case '/termos':
        setParagraph('Termos de uso')
        setTitle('Termos e condições')
        break
      case '/bicicletas':
        setParagraph('Escolha a melhor para Você')
        setTitle('Nossas bicicletas')
        break
      case '/seguros':
        setParagraph('Escolha o seguro')
        setTitle('Você seguro')
        break
      case '/bicicletas/nimbus':
        setParagraph('R$ 4999')
        setTitle('Nimbus Stark')
        break
      default:
        setParagraph('')
        setTitle('')
    }
  }, [location])
  return (
    <Container>
      <div className='titulo container'>
        <p>{paragraph}</p>
        <BikTitle>{title}</BikTitle>
      </div>
    </Container>
  )
}
