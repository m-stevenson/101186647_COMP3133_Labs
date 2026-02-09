console.log("Week 1 - Buffer Examples");

// Create buffer from string data
let buf1 = Buffer.from("Hello");
console.log(buf1);

buf1 = Buffer.from("Jigisha");
console.log(buf1);

console.log(`Jigisha - ${buf1}`);
console.log("Jigisha - ", buf1);

console.log(buf1.toJSON());
console.log(`number of elements in buffer: ${buf1.length}`);
