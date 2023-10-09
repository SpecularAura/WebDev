function* generatorFunc() {
    console.log("1. code before first yield");
    yield 100;
    console.log("2. code before the second yield");
    yield 200;
    console.log("3. code after the second yield");
}
const generator = generatorFunc();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


