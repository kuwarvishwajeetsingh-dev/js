function download(callback){
  setTimeout(() => {
    callback("Game data downloaded");
  },3000);
}
download(function(result){

    console.log(result);
    console.log("it will print first bcz we didn't used promise concpet here!");
});


function download(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve("game Data Downloaded");
        },3000);
    });
    
}
download().then(result =>{
    console.log(result)
});
console.log("it will print first bcz we didn't used promise concpet here!");
function  download(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Game data  Downloaded!")
        },3000);
    });
}

async function call() {
    let result = await download();
    console.log(result);
    console.log("All 3 Concept over#");
}
call();
