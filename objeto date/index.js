//const data = new Date('2019-04-20 20:20:59'); // a, m, d, h, m, s, ms
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toISOString()); // Formato ideal para banco de dados
console.log(data.toString());
console.log(Date.now()); // Timestamp atual

function formataData(data) {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

const data = new Date();
formataData(data); // '20/04/2019'
const dataBrasil = formataData(data);
console.log(dataBrasil); // '20/04/2019'