var numberList = [1, 2, 3, 4, 5];
var stringList = ["one", "two", "three"];
var mixedList = ["one", 2, 3, "four"];
var reverseList = function (list) {
    return list.reverse();
};
console.log(reverseList(numberList));
console.log(reverseList(stringList));
console.log(reverseList(mixedList));
