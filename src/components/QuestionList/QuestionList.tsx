import { useState } from 'react'
import { Dl, Div } from './styles'
import { Questions } from '../Helper/QuestionsList'

export const QuestionList = () => {
  const [open, setOpen] = useState<number | boolean | null>(false)

  const toggle = (pergunta: number) => {
    if (open === pergunta) {
      setOpen(null)
    }
    setOpen(pergunta)
  }

  return (
    <Dl>
      {Questions.map(({ id, question, response }) => (
        <Div key={id}>
          <dt>
            <button aria-expanded={id === open ? true : false} onClick={() => toggle(id)}>
              {question}
            </button>
          </dt>
          {open === id ? <dd>{response}</dd> : null}
        </Div>
      ))}
    </Dl>
  )
}
