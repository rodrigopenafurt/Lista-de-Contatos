import * as enums from '../utils/enums/Contato'

class Contato {
  contato: string
  categoria: enums.Categoria
  descricao: string
  id: number

  constructor(
    contato: string,
    categoria: enums.Categoria,
    descricao: string,
    id: number
  ) {
    this.contato = contato
    this.categoria = categoria
    this.descricao = descricao
    this.id = id
  }
}

export default Contato
