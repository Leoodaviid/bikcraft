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
  h1,h2, h3, h4, ul, p{
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
  img[src$='.jpg']{
    border-radius: 0.25rem;
  }
  .container{
    box-sizing: border-box;
    max-width: 1200px;
    padding: 0 1.25rem 0 1.25rem;
    margin: 0 auto;
  }
  .title {
    font: 600 ${({ theme }) => theme.fontSize['5xl']}/1.125
    ${({ theme }) => theme.fontFamily.heading} ;
  }
  .point{
    color: ${({ theme }) => theme.colors.yellow};
  }
  .sub-title{
    font: 400 ${({ theme }) => theme.fontSize['2xl']}/1.5
    ${({ theme }) => theme.fontFamily.rob} ;
  }

  /* Responsivodade */
  @media (max-width: 1200px) {
    .title {
      font-size: ${({ theme }) => theme.fontSize['4xl']};
    }
    .sub-title {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
  }
  @media(max-width:800px){
    .title {
      font-size: ${({ theme }) => theme.fontSize['3xl']};
    }
  }

`
