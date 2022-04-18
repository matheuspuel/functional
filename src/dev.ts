import * as f from './index'

const raw = {
  4: { id: 4, descricao: {} },
  5: { id: 5, descricao: null },
  14: { id: 4, descricao: undefined },
  15: { id: 5, descricao: 4 },
  2: { id: 2, descricao: 4 },
  3: { id: 3, descricao: -13 },
  1: { id: 1, descricao: true },
  8: { id: 8, descricao: 'true' },
  13: { id: 3, descricao: 'True' },
  11: { id: 1, descricao: '' },
}

const res = f.pipe(raw)(
  f.pick(['1', '2', '5', '8', '11', '13', '15']),
  f.omit([5, 11, 2]),
  f.keys,
  // f.size,
)

console.log(res)
