//argumentos que sustenta todos os argumentos enviados
function funcao(){
    let total = 0
    for(argumento of arguments){
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

//
function funcaoDois(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
}
funcaoDois(1, 2, 3, 4,);

//
function funcaoTres(a, b = 2, c = 4){
    console.log(a + b + c);

}
funcaoTres(2, undefined, 20);