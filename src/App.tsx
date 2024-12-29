import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ListaDeContatos />
        <BarraLateral />
      </Container>
    </Provider>
  )
}

export default App
