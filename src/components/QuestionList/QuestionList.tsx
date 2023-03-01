import { useState } from 'react'
import { Dl, Div } from './styles'

interface QuestionsListProps {
  id: number
  question: string
  response: string
}
const Questions = [
  {
    id: 1,
    question: 'Qual forma de pagamento vocês aceitam?',
    response:
      'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },
  {
    id: 2,
    question: 'Como posso entrar em contato?',
    response:
      'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },
  {
    id: 3,
    question: 'Vocês possuem algum desconto?',
    response:
      'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },
  {
    id: 4,
    question: 'Qual a garantia que possuo?',
    response:
      'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },
  {
    id: 5,
    question: 'Posso parcelar no boleto?',
    response:
      'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },
  {
    id: 6,
    question: 'Quantas trocas posso fazer ao ano?',
    response:
      'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },
] as QuestionsListProps[]

export const QuestionList = () => {
  const [open, setOpen] = useState<number | boolean | null>(false)

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

  return (
    <Dl>
      {Questions.map(({ id, question, response }) => (
        <Div key={id} onClick={() => toggle(id)}>
          <dt>{question}</dt>
          {open === id ? <dd>{response}</dd> : null}
        </Div>
      ))}
    </Dl>
  )
}
