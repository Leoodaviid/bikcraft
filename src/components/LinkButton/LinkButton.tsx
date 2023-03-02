import { ReactNode } from 'react'
import { Button } from './styles'

interface ButtonLinkProps {
  className?: string
  to: string
  children: ReactNode
}
export const LinkButton = ({ className, to, children }: ButtonLinkProps) => {
  return (
    <Button className={className} to={to}>
      {children}
    </Button>
  )
}
