import { useSelector } from 'react-redux'

import Contato from '../../components/Contatos'
import { Aviso, Container, Site } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <Aviso>
        <Site>Lista de Contatos</Site>2 contatos marcados como:
        &quot;categoria&ldquo; e &quot;termo&ldquo;
      </Aviso>
      <ul>
        {itens.map((t) => (
          <li key={t.contato}>
            <Contato
              id={t.id}
              contato={t.contato}
              categoria={t.categoria}
              descricao={t.descricao}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
