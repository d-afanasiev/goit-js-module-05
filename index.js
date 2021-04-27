// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User({ name: "Манго", email: "mango@mail.com" });
// const poly = new User({ name: "Поли", email: "poly@mail.com" });

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const newCar = new Car({ brand: "Audi", model: "Q3", price: 36000 });

console.log(newCar);
