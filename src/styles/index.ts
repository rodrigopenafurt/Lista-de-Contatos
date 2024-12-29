import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    background-color: #000c30;
    color: #66FCF1;
    list-style: none;
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 224px;
`

export default EstiloGlobal
