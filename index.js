// function User() {}
// console.log(User.prototype); // { constructor: User }

// const mango = new User();
// console.log(User.prototype.isPrototypeOf(mango)); // true

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// User.prototype.getEmail = function () {
//   return this.email;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// console.log(mango.getEmail()); // mango@mail.com
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function () {
  return this.price;
};

Car.prototype.changePrice = function (newPrice) {
  return (this.price = newPrice);
};

const newCar = new Car({ brand: "Audi", model: "Q3", price: 36000 });

console.log(newCar.getPrice());

console.log(newCar.changePrice(35000));
