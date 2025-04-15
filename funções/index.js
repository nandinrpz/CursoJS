function soma(x = 0, y = 0){
    const resultado = x + y ;
    return resultado;
}


console.log(soma( 1));
// forma de arrow function duas formas de declarar uma função
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}

const pessoa1 = criaPessoa ('luiz', 'miranda', 25);
const pessoa2 = criaPessoa ('Fernando', 'Girão', 26);

console.log(pessoa1.nome, pessoa2.sobrenome);
