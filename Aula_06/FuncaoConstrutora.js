// Função Construtora
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}


const p1 = new Pessoa ('Fernando', 'Girão');
const p2 = new Pessoa ('Zoe', 'Girão');

console.log(p1.nome);
