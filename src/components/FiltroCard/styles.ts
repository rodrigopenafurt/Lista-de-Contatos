import styled from 'styled-components'

import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 12px 0;
  border: 1px solid ${(props) => (props.ativo ? '#fff' : '#45a29e')};
  border-radius: 10px;
  color: ${(props) => (props.ativo ? '#fff' : '##66fcf1')};
  background-color: ${(props) => (props.ativo ? '##45a29e' : '##66fcf1')};
`

export const Contador = styled.div`
  font-weight: bold;
  display: block;
  font-size: 24px;
  text-align: center;
  padding-bottom: 10px;
  border-radius: 8px;
`

export const Label = styled.div`
  font-size: 14px;
  text-align: center;
`
