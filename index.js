// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.legs); // 4

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = "Jason";
child.age = 27;
