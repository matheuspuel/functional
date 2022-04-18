import * as f from './index'

// const grupos = _(produtos)
//   .keyBy(p => p.grupoId)
//   .map(g => ({ id: g.grupoId, descricao: g.descricaoGrupo }))
//   .sortBy(g => g.descricao.toLowerCase())
//   .value()

const raw = [
  { id: 4, descricao: {} },
  { id: 5, descricao: null },
  { id: 4, descricao: undefined },
  { id: 5, descricao: 4 },
  { id: 2, descricao: 4 },
  { id: 3, descricao: -13 },
  { id: 1, descricao: true },
  { id: 1, descricao: 'true' },
  { id: 1, descricao: 'True' },
  { id: 1, descricao: '' },
]

const res = f.pipe(raw)(
  f.map(g => g),
  f.sortBy([g => g.descricao, { desc: g => g.id }]),
  f.find(
    (o): o is typeof o & { descricao: string } =>
      typeof o.descricao === 'string',
  ),
  // f.filter(
  //   (o): o is typeof o & { descricao: string } =>
  //     typeof o.descricao === 'string',
  // ),
  // o => o?.descricao,
)

console.log(res)
