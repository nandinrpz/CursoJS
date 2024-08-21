/* 
Funções
*/
//declaração de função (Function hoisting)
falaOi();
function falaOi() {
    console.log('oie');
}

//first-class objects 
//Function expression
const souUmDado = function(){
    console.log('sou um dado.');
}
souUmDado();

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//dentro de um objeto
const obj = {
    falar() {
        console.log('estou falando...');
    }
};
obj.falar();