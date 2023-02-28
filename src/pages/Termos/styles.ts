import styled from 'styled-components'

export const Container = styled.div`
  padding: 5rem 0 5rem 0;
  h2 {
    font: 600 ${({ theme }) => theme.fontSize['2xl']} / 1.5
      ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 1.25rem;
  }
  p + h2 {
    margin-top: 2.5rem;
  }
  p {
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    color: ${({ theme }) => theme.colors.gray900};
    margin-bottom: 1.5rem;
    /* max-width: 75ch; */
  }
`
