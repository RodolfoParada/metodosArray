const totals = [1, 2, 3, 4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);


const item = [1, 3, 2, 3];

const rta2 = item.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {})
console.log(rta2)

const data = [{
    name: "Nicolas",
    level: "low",
}, {
    name: "Andrea",
    level: "medium",
}, {
    name: "Zulema",
    level: "hight",
}, {
    name: "Santiago",
    level: "low",
}, {
    name: "Valentina",
    level: "medium",
}, {
    name: "Lucia",
    level: "hight",
}, ];
const rta1 = data.map(item => item.level).reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rta1);


const array = ['1', '2', '3'];
const rta9 = array.find(item => item === 1)

console.log(rta9)