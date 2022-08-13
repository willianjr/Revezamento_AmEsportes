import React, { useEffect, useState } from 'react'
import { GrSubtractCircle } from 'react-icons/gr'
import { RiAddCircleFill, RiEyeLine, RiEyeOffFill } from 'react-icons/ri'

import { BotaoContador, BotaoPrivacidade, Contador, Container, ContainerBotao, TituloEquipe } from './styles'

interface IEquipeProps {
  color: '#FFFF00' | '#FAFAFA' | '#111'
  name: 'Amarelo' | 'Branco' | 'Preto'
}

export const Equipe: React.FC<IEquipeProps> = ({ color, name }) => {
  const [contador, setContador] = useState<number>(0)
  const [privacidade, setPrivacidade] = useState<boolean>(false)

  const renderContador = () => {
    return privacidade ? '*'.repeat(Array.from(contador.toString()).length) : contador
  }
  const setContadorMemoria = (type: string) => {
    setContador((prev) => {
      const valor = type === '+' ? prev + 1 : prev - 1
      window.localStorage.setItem(name, valor.toString())
      return valor
    })
  }
  const confirmAction = () => {
    if (confirm(`Deseja realmente retirar uma volta de ${name}?`) === true) {
      setContadorMemoria('-')
    }
  }
  useEffect(() => setContador(+(window.localStorage.getItem(name) || 0)), [])
  return (
    <Container color={color} equipe={name}>
      <TituloEquipe equipe={name}>
        {name}
        <BotaoPrivacidade onClick={() => setPrivacidade((prev) => !prev)}>
          {privacidade ? <RiEyeOffFill /> : <RiEyeLine />}
        </BotaoPrivacidade>
      </TituloEquipe>
      <Contador equipe={name}>{renderContador()}</Contador>
      <ContainerBotao>
        <BotaoContador equipe={name} onClick={() => setContadorMemoria('+')}>
          <RiAddCircleFill />
        </BotaoContador>
        <BotaoContador equipe={name} onClick={confirmAction}>
          <GrSubtractCircle />
        </BotaoContador>
      </ContainerBotao>
    </Container>
  )
}
