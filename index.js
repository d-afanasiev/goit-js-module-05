function Storage(items) {
  this.items = items;
}
Storage.prototype.getItems = function () {
  return this.items;
};
Storage.prototype.addItem = function (addItem) {
  return this.items.push(addItem);
};
Storage.prototype.removeItem = function (removeItem) {
  const indexEl = this.items.indexOf(removeItem);
  return this.items.splice(indexEl, 1);
};
// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
