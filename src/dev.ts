import * as f from './index'

// const grupos = _(produtos)
//   .keyBy(p => p.grupoId)
//   .map(g => ({ id: g.grupoId, descricao: g.descricaoGrupo }))
//   .sortBy(g => g.descricao.toLowerCase())
//   .value()

const raw = [
  { id: 1, descricao: 3 },
  { id: 2, descricao: 'a' },
  { id: 3, descricao: null },
  { id: 4, descricao: undefined },
  { id: 5, descricao: {} },
]

const res = f.pipe(raw)(
  f.map(g => g),
  f.sortBy(g => g.descricao),
)

console.log(res)
