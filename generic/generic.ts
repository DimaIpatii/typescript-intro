const numberList : Array<number> = [1,2,3,4,5];
const stringList : Array<string> = ["one", "two", "three"];
const mixedList : Array<any> = ["one",2,3,"four"];

const reverseList  = <T>(list : T[]) : T[] => {
    return list.reverse();
}
console.log(reverseList(numberList));
console.log(reverseList(stringList));
console.log(reverseList(mixedList));
