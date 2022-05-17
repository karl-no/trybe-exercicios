let car = {
    type: 'Fiat',
    model: '500',
    color: 'white'
}

// let car = ['Fiat', '500', 'white'];

for (let index in car) {
    console.log(index, car[index]);
}