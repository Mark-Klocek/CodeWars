// 7kyu Genetic Algorithm Series - #3 crossover
const crossover = (chromosome1, chromosome2, index) => {
  
return [
    chromosome1.slice(0,index)+chromosome2.slice(index),
    chromosome2.slice(0,index)+chromosome1.slice(index)
]
};

console.log(crossover('0000011111','1111100000',5))