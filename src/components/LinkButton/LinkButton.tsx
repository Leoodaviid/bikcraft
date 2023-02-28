import { ReactNode } from 'react'
import { Button } from './styles'

interface ButtonLinkProps {
  className?: string
  to: string
  children: ReactNode
}
const LinkButton = ({ className, to, children }: ButtonLinkProps) => {
  return (
    <Button className={className} to={to}>
      {children}
    </Button>
  )
}

export default LinkButton
