import { Div } from './styles'
import { ChangeEvent, FocusEvent } from 'react'

interface TextAreaProps {
  className?: string
  name?: string
  label?: string
  rows?: number
  placeholder?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void
  erro?: string
}
export const TextArea = ({
  className,
  name,
  label,
  rows,
  placeholder,
  value,
  onChange,
  onBlur,
  ...rest
}: TextAreaProps) => {
  return (
    <Div className={className}>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      ></textarea>
    </Div>
  )
}
