import styled from 'styled-components'

export const Div = styled.div`
  label {
    display: block;
    font: 600 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.heading};
    margin-bottom: 0.25rem;
  }
  input[type='text'],
  input[type='email'],
  textarea {
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    background: ${({ theme }) => theme.colors.gray100};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    padding: 0.75rem;
    border-radius: 0.25rem;
    width: 100%;
    box-sizing: border-box;
  }
  input[type='text']:focus,
  input[type='email']:focus,
  textarea:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.yellow};
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 2px #fea;
  }
`
