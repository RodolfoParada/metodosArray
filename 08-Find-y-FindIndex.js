const numbers = [1, 30, 49, 29, 10, 13];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

    if (element === 30) {
        rta = element;
        break
    }
}

console.log('for', rta);
const rta2 = numbers.find(item => item === 30)
console.log('find', rta2);

// find encuentra un elemento o devuelve el objeto en el que está ese elemento