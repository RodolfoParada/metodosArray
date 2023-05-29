const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join('--')
console.log('for', rtaFinal);
console.log('join', rta);
//join se usa para unir
//split se usa para separar

const title = 'Curso de manipulación de arrays';

const urlFinal = title.split('').join('-').toLocaleLowerCase();
console.log(urlFinal);