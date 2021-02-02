const numbers = [1,2,3,4,8,5,11]


// function square (element){
//     return element*element;
// }

//  const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);

// const result = numbers.map(y => y * y);
// console.log(result);

// const bigger = numbers.filter(x => x < 5);
// console.log(bigger);

const bigger = numbers.filter(x => x > 5);
console.log(bigger);