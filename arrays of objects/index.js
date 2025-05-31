const fruits = [ {name: "apple", color: "red", calories: 96},
                 {name: "banana", color: "yellow", calories: 120}, 
                 {name: "orange", color: "orange", calories: 49}, 
                 {name: "watermelon", color: "green", calories: 100},
                {name: "pineapple", color: "yellow", calories: 150}]

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFood = fruits.filter(fruit => fruit.calories <= 100);

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? 
                                                fruit : max );
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? 
                                                fruit : min );
console.log(maxFruit)
console.log(minFruit)

