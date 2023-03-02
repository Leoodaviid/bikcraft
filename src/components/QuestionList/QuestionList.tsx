import { useState } from 'react'
import { Dl, Div } from './styles'
import { Questions } from '../Helper/QuestionsList'

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
