function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        
        altura : altura ,
        peso : peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criarPessoa('luiz', 'otavio', 1.8, 80);
console.log(p1.imc());
console.log(p1.fala('falando sobre js'));