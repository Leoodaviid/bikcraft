import styled from 'styled-components'

export const Title = styled.h1`
  font: 600 ${({ theme }) => theme.fontSize['5xl']} / 1.125
    ${({ theme }) => theme.fontFamily.heading};

  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize['4xl']};
  }
  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
  }
`
export const SubTitle = styled.h2`
  font: 600 ${({ theme }) => theme.fontSize['5xl']} / 1.125
    ${({ theme }) => theme.fontFamily.heading};

  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize['4xl']};
  }
  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
  }
`
export const Text = styled.p`
  font: 400 ${({ theme }) => theme.fontSize['2xl']} / 1.5 ${({ theme }) => theme.fontFamily.rob};
  color: ${({ theme }) => theme.colors.gray500};

  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`
