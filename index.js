function* generatorFunction() {
  console.log("first attempt!");
  yield "hello";
  console.log("second attempt");
  yield "World";
}

const generatorObject = generatorFunction();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
