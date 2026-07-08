const user = {  // --> Object is mutable but due to const,
                 //  we cannot reassign the variable user 
                 // to a new object but we can change the 
                 // properties of the object. all hindrance 
                 // can be overcome by using Object.freeze()
                 //  method which will make the object
                 //  immutable.
  name: "John",
  age: 20,

  greet() {
    console.log("Hello");
  }
};
user.greet();
console.log(user);
console.log("-------------------");
// let allow u to craete a variable that can be reassigned 
// to a new value.
///$$$$$Constructor Function (old way)$$$$$///---> Always called with new keyword
function Usser(name , age){
    this.name = name;
    this.age = age;
}
const user1 = new Usser("John", 20);

// ---> Shifting to ES6 Classes (new way) $$$$$
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    greet() {
    console.log(`Hi ${this.name}`);
    }
}
const user2 =  new User("John", 20);
user2.greet();
const user3 =  new User("Jane", 25);
user3.greet();
const user4 =  new User("Jack", 30);
user4.greet();
console.log("-------------------");
// Now Getters & Setters ⭐
// Setter act as gate keeper