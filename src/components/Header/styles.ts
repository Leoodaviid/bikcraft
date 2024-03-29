import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
  div {
    padding: 1.25rem 1.25rem;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
  }
  nav {
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      li {
        a {
          color: ${({ theme }) => theme.colors.white};
          display: inline-block;
          padding: 1rem 0;
          font-size: 18px;
          position: relative;
          font-family: ${({ theme }) => theme.fontFamily.heading};
          font-weight: 400;

          &::after {
            content: '';
            display: block;
            height: 2px;
            width: 0px;
            background: ${({ theme }) => theme.colors.yellow};
            margin-top: 4px;
            transition: 0.3s;
            position: absolute;
          }
          &.active {
            &::after {
              width: 100%;
            }
          }
        }
      }
    }
  }
  @media (max-width: 800px) {
    nav {
      ul {
        gap: 20px;
        li {
          a {
            background: ${({ theme }) => theme.colors.gray900};
            padding: 0.75rem 1rem;
            border-radius: 0.25rem;
            &::hover {
              background-color: ${({ theme }) => theme.colors.gray700};
            }
            &.active {
              &::after {
                display: none;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    nav {
      ul {
        gap: 12px;
        li {
          a {
            padding: 0.5rem 0.75rem;
            font-size: 14px;
          }
        }
      }
    }
  }
`
