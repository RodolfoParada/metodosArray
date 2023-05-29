const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
// includes sirve para string pero es complicado utilizarlo para objetos ya que no tiene array function
const rta = pets.includes('dog')
console.log('for', includeInArray);
console.log('includes', rta);