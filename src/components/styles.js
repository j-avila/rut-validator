import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-block;
  .holder {
    border: ${({ border }) => border};
    background: ${({ background }) => background};
    color: ${({ txtColor }) => txtColor};
    padding: 6px 8px;
    input {
      border: 0;
      &:focus {
        outline: -webkit-focus-ring-color auto 0px;
      }
    }
    i {
      color: olivedrab;
    }
  }
  span {
    display: inline-block;
    margin: 1rem 0;
    &.success {
      color: olivedrab;
    }
    &.error {
      color: tomato;
    }
  }
`
