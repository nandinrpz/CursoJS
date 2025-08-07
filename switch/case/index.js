const data = new Date();
const diasemana = data.getDay();
let diaSemanaTexto;

/*if (diasemana === 0) {
    diaSemanaTexto = 'Domingo';
}else if (diasemana === 1) {
    diaSemanaTexto = 'Segunda-feira';
}else if (diasemana === 2) {
    diaSemanaTexto = 'Terça-feira';
}else if (diasemana === 3) {
    diaSemanaTexto = 'Quarta-feira';
}else if (diasemana === 4) {
    diaSemanaTexto = 'Quinta-feira';
}else if (diasemana === 5) {
    diaSemanaTexto = 'Sexta-feira';
}else if (diasemana === 6) {
    diaSemanaTexto = 'Sábado';
}*/
switch (diasemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';
}

console.log(diasemana, diaSemanaTexto);
