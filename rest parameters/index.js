/*
function openfridge(...foods) {
console.log(...foods)
}

function getFood(...foods){
  return foods;
}

const food1 = "dosa"
const food2 = "idli"
const food3 = "buns"
const food4 = "puffs"
const food5 = "chapati"

openfridge(food1,food2,food3, food4, food5)

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);
*/

/*
function sum(...numbers){
  let result = 0;
  for(let number of numbers){
    result += number;
  }
  return result;
}


function getAverage(...numbers){
  let result = 0;
  for(let number of numbers){
    result += number;
  }
  return result / numbers.length;
}

const average = getAverage(3, 9, 5);
console.log(average);
*/

function combineStrings(...strings){
  return strings.join(" ");
}

const lyrics = combineStrings("Who", "lives", "a", "pineapple", "under", "the", "sea");

console.log(lyrics)