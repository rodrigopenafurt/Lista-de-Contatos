import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  contato,
  categoria,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [campoContato, setContato] = useState('')
  const [campoTelefone, setTelefone] = useState('')
  const [campoEmail, setEmail] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  return (
    <S.Card>
      <S.Titulo>{contato}</S.Titulo>
      <S.Tag categoria={categoria}>{categoria}</S.Tag>
      <S.Linha></S.Linha>
      <S.Campo>Nome:</S.Campo>
      <S.Inputlabel
        disabled={!estaEditando}
        value={campoContato}
        onChange={(evento) => setContato(evento.target.value)}
      />
      <S.Campo>Telefone:</S.Campo>
      <S.Inputlabel
        disabled={!estaEditando}
        value={campoTelefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      />
      <S.Campo>Email:</S.Campo>
      <S.Inputlabel
        disabled={!estaEditando}
        value={campoEmail}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao
              onClick={() => {
                setEstaEditando(false)
                setDescricao(descricaoOriginal)
              }}
            >
              Cancelar
            </S.Botao>
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

// edite uma tarefa até 6:33
