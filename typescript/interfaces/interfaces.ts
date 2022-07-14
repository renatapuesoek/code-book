interface Fruit {
  name: string;
  color: string;
  sweetness?: number;
}

const fruitBasket: Fruit[] = [];

fruitBasket.push({ name: "Apple", color: "red" });

const sumSweetness = fruitBasket.reduce((accumulator, fruit: Fruit) => {
  if (fruit.sweetness) {
    return accumulator + fruit.sweetness;
  }
  return accumulator;
}, 0);

let acc = 0;
for (let i = 0; i < fruitBasket.length; i += 1) {
  if (fruitBasket[i].sweetness) {
    acc += fruitBasket[i].sweetness;
  }
}

let acc2 = 0;
const sumSweetness2 = fruitBasket.forEach((fruit) => {
  if (fruit.sweetness) {
    acc2 += fruit.sweetness;
  }
});
