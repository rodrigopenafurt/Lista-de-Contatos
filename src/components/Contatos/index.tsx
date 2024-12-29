import * as S from './styles'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import * as enums from '../../utils/enums/Contato'

import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ contato, categoria, descricao, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{contato}</S.Titulo>
      <S.Tag categoria={categoria}>{categoria}</S.Tag>
      <S.Linha></S.Linha>
      <S.Campo>Nome:</S.Campo>
      <S.Inputlabel />
      <S.Campo>Telefone:</S.Campo>
      <S.Inputlabel />
      <S.Campo>Email:</S.Campo>
      <S.Inputlabel />
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao onClick={() => dispatch(remover(id))}>Excluir</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato

// aula configure redux até 12:38
