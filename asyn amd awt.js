// Suppose we make a function n call it by setTimeout() n print it as it 
// is it will resul in undefied if time is notified  like
// setTimeout(...,3000)------->> To solve this issues here comes Promise
function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received");
        },3000);
    });
}

async function run() {
    let result = await getData();

    console.log(result);
}

run();
