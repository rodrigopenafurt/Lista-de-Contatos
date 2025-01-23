import { StringSupportOption } from 'prettier'
import styled from 'styled-components'

type TagProps = {
  categoria?: string
  status?: string
}

export const Card = styled.div`
  background-color: #a9d18e; /* Verde suave mais escuro */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 10px;
  color: #4a4a4a; /* Cinza escuro */
  margin-bottom: 32px;
  font-family: Trebuchet MS;
  text-align: center;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  background-color: #a9d18e;
  color: #4a4a4a; /* Cinza escuro */
  font-family: Trebuchet MS;
  margin-bottom: 4px;
`

export const Tag = styled.span<TagProps>`
  background-color: #f4f4f4; /* Cinza muito claro */
  font-weight: bold;
  color: #4a4a4a; /* Cinza escuro */
  padding: 4px 8px;
  font-size: 10px;
  border-radius: 3px;
  border-right: 2px solid black;
  display: inline-block;
  font-family: Trebuchet MS;
  margin-bottom: 10px;
`

export const Linha = styled.hr`
  background-color: #a5a5a5; /* Cinza claro */
  margin-bottom: 4px;
`

export const Descricao = styled.textarea`
  background-color: rgb(252, 255, 250);
  color: rgb(26, 15, 15); /* Cinza escuro */
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 150px;
  resize: none;
  border: none;
  text-align: center;
  margin: 0 auto;
`

export const Inputlabel = styled.textarea`
  background-color: #000c30;
  height: 20px;
  width: 162px;
  margin-bottom: 4px;
  resize: none;
  border: none;
  padding: 2px;
`

export const Campo = styled.label`
  background-color: #a9d18e;
  color: black;
  display: block;
  border-radius: 3px;
  margin-right: 4px;
`

export const Dados = styled.input`
  border-radius: 3px;
  margin-bottom: 10px;
  text-align: center;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  background-color: #a9d18e;
  font-family: Trebuchet MS;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #005a8d; /* Azul escuro */
  border-radius: 8px;
  margin-right: 8px;
  font-family: Trebuchet MS;

  &:hover {
    background-color: #007b9a; /* Azul médio */
  }
`
