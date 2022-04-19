import _ from 'lodash'
import f from './index'

type Obj = {
  id: number
  descricao: unknown
}

const raw: Record<string, Obj> = {
  4: { id: 4, descricao: {} },
  5: { id: 5, descricao: null },
  14: { id: 14, descricao: undefined },
  15: { id: 15, descricao: 4 },
  2: { id: 2, descricao: 4 },
  3: { id: 3, descricao: -13 },
  1: { id: 1, descricao: true },
  8: { id: 8, descricao: 'true' },
  13: { id: 13, descricao: 'True' },
  11: { id: 11, descricao: '' },
}

const res = f(raw)(
  //
  f.values,
  f.dropRight(3),
)

console.log(res)
