export function addBaz(p) {
    var baz = document.createElement("p");
    baz.textContent = "It is Baz";
    p === null || p === void 0 ? void 0 : p.appendChild(baz);
}
