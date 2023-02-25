import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 600px;
  }
  ::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-track{
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
}
::-webkit-scrollbar-thumb{
  background: ${({ theme }) => theme.colors.yellow};
  border-radius: 10px;
}
  h1, ul, p{
    margin: 0px;
  }
  ul{
    padding: 0px;
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  img{
    max-width: 100%;
    display: block;
  }

`
