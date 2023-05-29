// flat y flatmap se puede manipular arrays que tiene arrays adentro

const matriz = [
    [1, 2, 3,
        [
            0, 0, 0
        ]

    ],
    [4, 5, 6],
    [7, 8, 9]
];
// con cada array interno se debe hacer un for
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
const rta = matriz.flat(3);
console.log("for", newArray);
console.log('flat', rta);