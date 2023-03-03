import { Div } from './styles'
import { ChangeEvent, FocusEvent } from 'react'

interface InputProps {
  className?: string
  name?: string
  label?: string
  placeholder?: string
  type?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  erro?: string
}
export const Input = ({
  className,
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  erro,
  ...rest
}: InputProps) => {
  return (
    <Div className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />

      {erro}
    </Div>
  )
}
