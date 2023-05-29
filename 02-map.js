const letters = ['a', 'b', 'c'];

// const newArray = [];
// for (let index = 0; index < letters.length; index++){
//     const element = letters[index];
//     newArray.push(element + '++');
// }

const newArray = letters.map(item => item + '++')


console.log('original', letters);
console.log('new', newArray);

const products = [{
        title: 'BUrger',
        price: 121
    },
    {
        title: 'Pizza',
        price: 20
    },
];

const app = document.getElementById('app');
const lis = products.map(product => {
    return `<li>${product.title}-${product.price}</li>`
})
app.innerHTML = lis.join('');
// join es la forma de tomar un array y ponerlo en el html solo


const orders = [{
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]
console.log('original', orders);
const rta = orders.map(item => item.total)
console.log('rta', rta)


const rta2 = orders.map(item => {
    return {
        ...item,
        tax: .19
    };
})
console.log('rta2', rta2)
console.log('original', orders);