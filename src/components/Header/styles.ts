import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  nav {
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
    }
    li {
      a {
        color: ${({ theme }) => theme.colors.white};
        display: inline-block;
        padding: 1rem 0;
        font-size: 18px;
        position: relative;
        font-family: ${({ theme }) => theme.fontFamily.heading};
        font-weight: 400;
      }
    }
    li {
      a::after {
        content: '';
        display: block;
        height: 2px;
        width: 0px;
        background: ${({ theme }) => theme.colors.white};
        margin-top: 4px;
        transition: 0.3s;
        position: absolute;
      }
    }
    li {
      a:hover::after {
        width: 100%;
      }
    }
  }
  @media (max-width: 800px) {
    nav {
      ul {
        gap: 20px;
      }
      li {
        a {
          background: ${({ theme }) => theme.colors.gray900};
          padding: 0.75rem 1rem;
          border-radius: 0.25rem;
        }
      }
      li {
        a:hover {
          background-color: ${({ theme }) => theme.colors.gray700};
        }
      }
      li {
        a::after {
          display: none;
        }
      }
    }
  }
  @media (max-width: 600px) {
    nav {
      ul {
        gap: 12px;
      }
      li {
        a {
          padding: 0.5rem 0.75rem;
          font-size: 14px;
        }
      }
    }
  }
`
