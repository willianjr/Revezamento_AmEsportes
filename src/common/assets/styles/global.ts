import styled, { createGlobalStyle } from 'styled-components'
import themeProps from '../../interfaces/theme'

export const GlobalStyle = createGlobalStyle<{ theme: themeProps }>`
  *{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size:1rem;
    box-sizing:border-box;
    padding: 0;
    margin: 0;


  }
body{
	  background: ${({ theme: { colors } }) => colors.background.body};
       min-height:100vh;
       overflow:auto;

	}

`
export const Container = styled.main`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  align-content: stretch;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
  }
`
