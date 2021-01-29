// Enum with Index:
var Smartphones;
(function (Smartphones) {
    Smartphones[Smartphones["Nokia"] = 0] = "Nokia";
    Smartphones[Smartphones["Samsung"] = 1] = "Samsung";
    Smartphones[Smartphones["iPhone"] = 2] = "iPhone";
})(Smartphones || (Smartphones = {}));
;
var myPhone = Smartphones.iPhone;
// Reverse Emun:
var yourPhone = Smartphones[1];
console.log(myPhone);
console.log(yourPhone);
var Laptopes;
(function (Laptopes) {
    Laptopes["Asus"] = "Asus";
    Laptopes["Sony"] = "Sony";
    Laptopes["Apple"] = "Apple";
    Laptopes["HP"] = "HP";
})(Laptopes || (Laptopes = {}));
var myLaptop = Laptopes.Apple;
console.log(myLaptop);
