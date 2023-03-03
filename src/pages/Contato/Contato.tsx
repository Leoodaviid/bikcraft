import { Container, Form, Article } from './styles'
import { Head } from '../../components/Head/Head'
import { UseTitle } from '../../components/Title/useTitle'
import { Input } from '../../components/Form/Input'
import { TextArea } from '../../components/Form/TextArea'
import { FormButton } from '../../components/Button/Button'
import { BikSubTitle } from '../../components/BikTitle/BikSubTitle'
import InstagramIcon from '../../assets/icons/instagram-p.svg'
import FacebookIcon from '../../assets/icons/facebook-p.svg'
import HorarioIcon from '../../assets/icons/horario.svg'
import YouTubeIcon from '../../assets/icons/youtube-p.svg'
import RjImg from '../../assets/img/rj.jpg'
import SpImg from '../../assets/img/sp.jpg'

const Contato = () => {
  return (
    <>
      <Head title='Contato' />
      <UseTitle />
      <Container>
        <div className='contact container'>
          <section className='contact-data' aria-label='Endereço'>
            <h2>Loja Online</h2>
            <div className='contact-address'>
              <p>Rua Ali Perto, 42</p>
              <p>Rio de Janeiro - RJ</p>
              <p>Brasil - Terra - Via Láctea</p>
            </div>
            <address>
              <a href='mailto:contato@bikcraft.com'>contato@bikcraft.com</a>
              <a href='mailto:assistencia@bikcraft.com'>assistencia@bikcraft.com</a>
              <a href='tel:+5585999999999'>55 85 99999-9999</a>
            </address>
            <div className='contact-social'>
              <a href='/'>
                <img src={InstagramIcon} alt='Instagram' />
              </a>
              <a href='/'>
                <img src={FacebookIcon} alt='Facebook' />
              </a>
              <a href='/'>
                <img src={YouTubeIcon} alt='YouTube' />
              </a>
            </div>
          </section>
          <section className='contact-form' aria-label='Formulário'>
            <Form>
              <Input label='Nome' type='text' name='nome' placeholder='Seu nome' />
              <Input label='Telefone' type='text' name='telefone' placeholder='(85) 99999-9999' />
              <Input
                className='col-2'
                label='Email'
                type='email'
                name='email'
                placeholder='contato@email.com'
              />
              <TextArea
                className='col-2'
                name='mensagem'
                rows={5}
                placeholder=' O que você precisa?'
              />
              <FormButton className='col-2'>Enviar mensagem</FormButton>
            </Form>
          </section>
        </div>
      </Container>
      <Article>
        <BikSubTitle className='container'>Lojas Locais</BikSubTitle>
        <div className='store container'>
          <div className='store-item'>
            <img
              src={RjImg}
              alt='mapa marcando o endereço em Rua Ali Perto, 42 - Rio de Janeiro - RJ'
            />
            <div className='store-content'>
              <h3>Rio de Janeiro</h3>
              <div className='store-data'>
                <p>Rua Ali Perto, 42</p>
                <p>Rio de Janeiro - RJ</p>
              </div>
              <div className='store-data'>
                <a href='mailto:rj@bikcraft.com'>rj@bikcraft.com</a>
                <a href='tel:+5585999999999'>55 85 99999-9999</a>
              </div>
              <p className='store-time'>
                <img src={HorarioIcon} alt='' /> 08/18h de seg à dom
              </p>
            </div>
          </div>
          <div className='store-item'>
            <img src={SpImg} alt='mapa marcando o endereço em Rua Ali Perto, 25 - São Paulo - SP' />
            <div className='store-content'>
              <h3>São Paulo</h3>
              <div className='store-data'>
                <p>Rua Ali Perto, 25</p>
                <p>São Paulo - SP</p>
              </div>
              <div className='store-data'>
                <a href='mailto:sp@bikcraft.com'>sp@bikcraft.com</a>
                <a href='tel:+5585999999999'>55 85 99999-9999</a>
              </div>
              <p className='store-time'>
                <img src={HorarioIcon} alt='' /> 08/18h de seg à dom
              </p>
            </div>
          </div>
        </div>
      </Article>
    </>
  )
}

export default Contato
