import { useEffect } from 'react'
import { Head } from '../../components/Head/Head'
import { UseTitle } from '../../components/Title/useTitle'
import { Container } from './styles'

const Termos = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head title='Termos' description='Termos e condições.' />
      <UseTitle />
      <Container aria-label='Termos e condições'>
        <div className='terms container'>
          <h2>1. Política de estornos</h2>
          <p>
            1.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à
            vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões
            de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.
          </p>
          <p>
            1.2 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à
            vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões
            de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.
          </p>
          <p>
            1.3 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à
            vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões
            de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.
          </p>
          <h2>2. Conta do Usuário</h2>
          <p>
            2.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à
            vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões
            de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.
          </p>
          <h2>3. Seguro Bikcraft</h2>
          <p>
            3.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à
            vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões
            de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.
          </p>
        </div>
      </Container>
    </>
  )
}

export default Termos
