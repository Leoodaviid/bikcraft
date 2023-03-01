import { ReactNode } from 'react'
import { SubTitle } from './styles'

interface TitleProps {
  children: ReactNode
  className?: string
}
export const BikSubTitle = ({ children, className }: TitleProps) => {
  return (
    <SubTitle className={className}>
      {children}
      <span className='point'>.</span>
    </SubTitle>
  )
}
