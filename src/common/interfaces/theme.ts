interface colors {
  background: {
    card: string
    button: string
    body: string
  }
  primary: {
    white: string
    black: string
    gold: string
  }
  Amarelo: {
    background: string
    color: string
  }
  Branco: {
    background: string
    color: string
  }
  Preto: {
    background: string
    color: string
  }
}

export default interface themeProps {
  name: string
  colors: colors
}
