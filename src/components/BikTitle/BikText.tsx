import { ReactNode } from 'react'
import { Text } from './styles'

interface SubTitleProps {
  children: ReactNode
}

export const BikText = ({ children }: SubTitleProps) => {
  return <Text>{children}</Text>
}
