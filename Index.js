const Aluno = require('./Modelos/Aluno')
const Turma = require('./Modelos/Turma')
const TurmaPresencial = require('./Modelos/TurmaPresencial')

const aluno0 = new Aluno('Marcelo Gregório', 'marcelov', '2454408')
const turma0 = new Turma('AS64B', 10)
const turmapresencial0 = new TurmaPresencial('AS64B', 10, 75)

console.log(aluno0)
console.log(`Aprovado na Turma ${turma0.codigo}: ${turma0.aprovado()}`)
console.log(`Aprovado na Turma Presencial ${turmapresencial0.codigo}: ${turmapresencial0.aprovado()}`)