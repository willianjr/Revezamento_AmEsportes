import styled from 'styled-components'

interface ContainerProps {
  color?: string
  equipe: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  background-color: ${({ theme: { colors }, equipe }) => colors[equipe].background};
  padding: 0.5rem;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  margin: 0.25rem;
`

export const TituloEquipe = styled.h2<ContainerProps>`
  display: flex;
  width: 100%;
  font-size: 2.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid ${({ theme: { colors }, equipe }) => colors[equipe].color};
  color: ${({ theme: { colors }, equipe }) => colors[equipe].color};
  align-items: flex-start;
  justify-content: space-around;
`
export const Contador = styled.h3<ContainerProps>`
  display: flex;
  /* width: 100%; */
  font-size: 15rem;
  letter-spacing: -0.15rem;
  color: ${({ theme: { colors }, equipe }) => colors[equipe].color};
  @media screen and (max-width: 800px) {
    font-size: 5rem;
  }
`
export const ContainerBotao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const BotaoContador = styled.button<ContainerProps>`
  display: flex;
  padding: 0.25rem;
  border: none;
  flex: 1;
  border-radius: 0.25rem;
  margin: 0.25rem;
  align-items: center;
  justify-content: center;
  > svg {
    font-size: 2rem;
  }
  :hover {
    > svg {
      opacity: 0.65;
    }
  }
`
export const BotaoPrivacidade = styled.button`
  display: flex;
  padding: 0.25rem;
  border: none;

  border-radius: 0.25rem;
  margin: 0.25rem;
  align-items: center;
  justify-content: center;
  > svg {
    font-size: 2rem;
  }
  :hover {
    > svg {
      opacity: 0.65;
    }
  }
`
