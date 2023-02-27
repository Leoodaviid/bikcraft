import { ReactNode } from 'react'
import { Title } from './styles'

interface TitleProps {
  children: ReactNode
}
export const BikTitle = ({ children }: TitleProps) => {
  return <Title>{children}</Title>
}
