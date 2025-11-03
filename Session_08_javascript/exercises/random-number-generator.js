function randomNumberMinMax(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

console.log(randomNumberMinMax(10, 100))