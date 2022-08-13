import { ThemeProvider } from 'styled-components'
import { Container, GlobalStyle } from '../common/assets/styles/global'
import Themes from '../common/assets/styles/themes'
import { Equipe } from '../common/components'

function App() {
  return (
    <>
      <ThemeProvider theme={Themes.defaultTheme}>
        <GlobalStyle />
        <Container>
          <Equipe color={'#FAFAFA'} name={'Branco'} />
          <Equipe color={'#FFFF00'} name={'Amarelo'} />
          <Equipe color={'#111'} name={'Preto'} />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
