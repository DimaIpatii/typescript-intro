class Person {
    readonly name : string;
    readonly age : number;

    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }

    present() : void {
        console.log(`Hi my name is ${this.name} and I am ${this.age}`)
    };
}

const john = new Person('John',35);
john.present();


/* Modificators: 
* public;
* private = is only available for the Class where it was declared;
* protected = is accesable in inherited Classes ;
* readonly;
*/

class Car {
    public readonly numberOfVeals : number;
    public readonly color : string;
    public readonly year : number;
    private carBrand : string;

    constructor(veals : number, color : string, year : number){
        this.numberOfVeals = veals;
        this.color = color;
        this.year = year;
        this.carBrand;
    }

    protected setBrand (brand : string) : void {
        this.carBrand = brand;
    }

    public carInfo () : void {
        console.log(`The ${this.carBrand} car is ${this.color}`);
    }
}

class CarBrand extends Car {
    protected readonly brand : string;
    
    constructor(veals : number, color : string, year : number, brand : string){
        super(veals, color, year);

        this.brand = brand;
        this.setBrand(this.brand);
    };

    public printInfo() : void {
        console.log(`The ${this.brand} has ${this.numberOfVeals} veals, year ${this.year} and is ${this.color}`);
    }
}


const redCar = new Car(4,'red', 1993);
redCar.carInfo(); // 'The undefined car is red';

const carBlue = new CarBrand(4,'blue',2002, "Lombargini");
carBlue.printInfo(); // 'The Lombargini has 4 veals, year 2002 and is blue'
carBlue.carInfo(); // "The Lombargini car is blue";


/* Abstract */

abstract class Article {
    abstract print() : string;
    abstract edit(text : string) : void;
}

class Page extends Article {
    text : string;

    constructor(){
        super();
        this.text;
    }

    print() : string {
        return this.text;
    };

    edit(text : string) : void {
        this.text = text;
    };
}


const HelloWorld = new Page();
HelloWorld.edit('Hello World!');
//console.log(HelloWorld.print());

