// function orderPizza() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("🍕 Pizza ready");
//         },3000);
//     });
// }
function orderPizza(){
 return new Promise(resolve => {
      setTimeout(() => {
        resolve("Pizza Ate")
      },2000);

 }
 );


}
// Simple call 
let food = orderPizza();

console.log(food);
console.log("Eating");

// .then method to execute 
orderPizza().then(food => {
    console.log(food);
    console.log("Eating");
});
// await async method to exeute
async function eat() {
    let food =await orderPizza();
    console.log(food);
    console.log("Ate")
    
}
eat();