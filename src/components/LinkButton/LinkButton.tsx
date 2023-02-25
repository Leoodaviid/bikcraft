import { ReactNode } from 'react'
import { Button } from './styles'

interface ButtonLinkProps {
  to: string
  children: ReactNode
}
const LinkButton = ({ to, children }: ButtonLinkProps) => {
  return <Button to={to}>{children}</Button>
}

export default LinkButton
