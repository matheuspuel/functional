import * as f from './index'

const raw = [
  { id: 4, descricao: {} },
  { id: 5, descricao: null },
  { id: 4, descricao: undefined },
  { id: 5, descricao: 4 },
  { id: 2, descricao: 4 },
  { id: 3, descricao: -13 },
  { id: 1, descricao: true },
  { id: 8, descricao: 'true' },
  { id: 3, descricao: 'True' },
  { id: 1, descricao: '' },
]

const res = f.pipe(raw)(
  f.map(g => g.id),
  f.max,
)

console.log(res)
