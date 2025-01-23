import * as enums from '../utils/enums/Contato'

class Contato {
  contato: string
  categoria: enums.Categoria
  descricao: string
  nome?: string
  tel?: number
  id: number

  constructor(
    contato: string,
    categoria: enums.Categoria,
    descricao: string,
    nome: string,
    tel: number,
    id: number
  ) {
    this.contato = contato
    this.categoria = categoria
    this.descricao = descricao
    this.nome = nome
    this.id = id
    this.tel = tel
  }
}

export default Contato
