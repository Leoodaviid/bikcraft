import { ChangeEvent, FocusEvent } from 'react'

interface InputRadioProps {
  id?: string
  name?: string
  label?: string
  placeholder?: string
  type?: string
  value?: string
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  price?: string
}
export const InputRadio = ({
  id,
  name,
  label,
  placeholder,
  type,
  value,
  checked,
  onChange,
  onBlur,
  price,
  ...rest
}: InputRadioProps) => {
  return (
    <>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      <label htmlFor={id}>
        {label}
        <span>{price}</span>
      </label>
    </>
  )
}
