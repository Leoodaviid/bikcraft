import { ButtonHTMLAttributes } from 'react'
import { Button } from './styles'

export const FormButton = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>{children}</Button>
}
