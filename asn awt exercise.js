async function test() {
    console.log("A");

    await Promise.resolve("B");

    console.log("C");
}

test();

console.log("D");