import { addBaz } from "./baz";

const testFun = function() {
  const app = document.getElementById("foo") as HTMLParagraphElement;

  app.innerHTML = "Hello Typescript World! Foo";
  addBaz(app);
};

testFun();