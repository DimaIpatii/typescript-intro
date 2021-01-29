/* const textList : string[] = ['text','one','two'];
const textList2 : Array<string> = ['Hello', 'World', '!'];


const getData = async ()  => {
    const data = await new Promise<string> ((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello!')
        }, 1000);
    }).then((res) => {
        return res;
    });
    
    console.log(data);
}

getData(); */


/* Generic Types: */
const createObject = <TA extends object, TB extends object>(a : TA, b : TB) : object => {
    return Object.assign({}, a, b);
}

const apple = createObject({name : 'apple'}, {color : 'green'});
const strawberry = createObject({name : 'strawberry'}, {color : 'red'});

/* *********************************** */
interface ILength {
    length : number
}

const countLength = <TV extends ILength>(value : TV) : {value : TV, countedLenght : string} => {
    return {
        value,
        countedLenght : `The value has ${value.length} caracters.`
    };
}

/* console.log(countLength('Text'));
console.log(countLength(['Hello', 'World', '!']));
// console.log(countLength(20)); --> None!!;
console.log(countLength({length : 20})); */

/* *********************************** */
interface Person {
    name : string,
    age : number,
    job : string
}

const getObjValue = <T extends Person, R extends keyof T>(obj : T, key : R) : any => {
    return obj[key];
}

getObjValue({name : 'name', age : 20, job : 'some job'},'name');

/* *********************************** */

class Collection <T extends string | number | boolean>{

    constructor(private props : T[] = []){
    }

    add(file : T){
        this.props.push(file);
    }

    remove(file : T){
        this.props = this.props.filter(item =>  item !== file);
    }

    get display() : T[]{
        return this.props;
    }
}


const listOfStrings = new Collection<string>(['one','two','three']);
listOfStrings.add('five');
listOfStrings.remove('two');
/* console.log(listOfStrings.display); */

const listOfNumbers = new Collection<number>();
listOfNumbers.add(2);
listOfNumbers.add(3);
listOfNumbers.add(4);
listOfNumbers.remove(3);
/* console.log(listOfNumbers.display);  */

/* 
const listOfObjects = new Collection();
listOfObjects.add({id : 1});
listOfObjects.add({id : 2});
listOfObjects.add({id : 3});
listOfNumbers.remove({id : 2});
console.log(listOfObjects.display); */


/* *********************************** */
interface Car {
    model : string,
    year : number,
    color : string
}

const findCar = (model : string, year : number) : Car => {
    const car : Partial<Car> = {};
    
    if(model.length > 3){
        car.model = model;
        car.color = 'red';
    }
    
    if(year > 2000){
        car.year = year;
    }
    
    return car as Car;
}


findCar('Mercedess', 2001);

/* *********************************** */
// Reacd Only for Objects & Arrays:
/* *********************************** */

const list : Readonly<Array<any>> = [123,2,'text',12,4,'Hello'];
// list.push('last'); --> none!


const myCar : Readonly<Car> = {
    model : 'Audi',
    year : 2005,
    color : 'blumoon'
}

// myCar.color = 'red'; --> none!
