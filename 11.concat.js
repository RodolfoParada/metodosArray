// concat no mofifica el arrau original sino crea una copia

const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element)

}
const rta = elements.concat(othersElements);
console.log("for", newArray);
console.log("concat", rta)