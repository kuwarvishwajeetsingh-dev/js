const fruits = ["Banana", "Orange", "Apple", "Mango"];
const a=fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
// to delete---> spice returns deleted Elements!!
const b=fruits.splice(2, 3, "Lemon", "Kiwi");
console.log(b);
