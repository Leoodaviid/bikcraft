import { Container } from './styles'
import { Head } from '../../components/Head/Head'
import { UseTitle } from '../../components/Title/useTitle'
import { Input } from '../../components/Form/Input'
import { InputRadio } from '../../components/Form/InputRadio'
import { Form } from '../Contato/styles'
import { Button } from '../../components/Button/styles'
import BikList from '../../components/BikList/BikList'

const Orcamento = () => {
  return (
    <>
      <Head title='Orçamento' />
      <UseTitle />
      <Container aria-label='Formulário'>
        <div className='container'>
          <Form className='budget'>
            <div className='budget-product'>
              <h2>Bikcraft ou Seguro?</h2>
              <InputRadio
                id='bikcraft'
                type='radio'
                name='type'
                value='bikcraft'
                label='Bikcraft'
              />
              <InputRadio id='seguro' type='radio' name='type' value='seguro' label='Seguro' />
              <div className='budget-content' id='budget-bikcraft'>
                <h2>Escolha a sua</h2>
                <InputRadio
                  id='nimbus'
                  type='radio'
                  name='produto'
                  value='nimbus'
                  label='Nimbus Stark'
                  price='R$ 4999'
                />
                <div className='budget-details'>
                  <BikList bikName='Nimbus Stark' />
                </div>
                <InputRadio
                  id='magic'
                  type='radio'
                  name='produto'
                  value='magic'
                  label='Magic Might'
                  price='R$ 2499'
                />
                <div className='budget-details'>
                  <BikList bikName='Magic Might' />
                </div>
                <InputRadio
                  id='nebula'
                  type='radio'
                  name='produto'
                  value='nebula'
                  label='Nebula Cosmic'
                  price='R$ 3999'
                />
                <div className='budget-details'>
                  <BikList bikName='Nebula Cosmic' />
                </div>
              </div>
              <div className='budget-content' id='budget-seguro'>
                <h2>Escolha o Plano</h2>
                <InputRadio
                  id='prata'
                  type='radio'
                  name='produto'
                  value='prata'
                  label='Prata'
                  price='R$ 199'
                />
                <InputRadio
                  id='ouro'
                  type='radio'
                  name='produto'
                  value='ouro'
                  label='Ouro'
                  price='R$ 299'
                />
              </div>
            </div>
            <div className='budget-data'>
              <h2 className='col-2'>Dados pessoais</h2>
              <Input type='text' name='nome' label='Nome' />
              <Input type='text' name='sobrenome' label='Sobrenome' />
              <Input
                className='col-2'
                type='text'
                name='cpf'
                label='CPF'
                placeholder='000.000.000-00'
              />
              <Input className='col-2' type='email' name='email' label='Email' />
              <h2 className='col-2'>Entrega</h2>
              <Input type='text' name='cep' label='CEP' />
              <Input type='text' name='numero' label='Número' />
              <Input type='text' name='logradouro' label='Logradouro' />
              <Input type='text' name='bairro' label='Bairro' />
              <Input type='text' name='cidade' label='Cidade' />
              <Input type='text' name='estado' label='Estado' />
              <Button className='col-2'>Solicitar Orçamento</Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default Orcamento
