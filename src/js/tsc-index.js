import { addBaz } from "./baz.js";
var testFun = function () {
    var app = document.getElementById("foo");
    app.innerHTML = "Hello Typescript World! Foo";
    addBaz(app);
};
testFun();
