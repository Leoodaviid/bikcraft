import { ReactNode } from 'react'
import { SubTitle } from './styles'

interface SubTitleProps {
  children: ReactNode
}

export const BikSubTitle = ({ children }: SubTitleProps) => {
  return <SubTitle>{children}</SubTitle>
}
