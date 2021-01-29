/* Types of data: */

// Boolean:
const isFatching : boolean = true;
const isLoading : boolean = false;

// Strings:
const message : string = 'Hello TypeScript';

// Numbers:
const int : number = 123;
const float : number = 5.5;
const num : number = 3e54;

// Arrays:
//v1:
const numberList : number[] = [1,2,3,4];

//v2:
const numberList2 : Array<number> = [1,2,3,4,5];

const textList : string[] = ['text','text2'];

// Tuple type:
const mixList : [string,number] = ['hello',123];

// Any type - allow reasining:
const mixList2 : any[] = ['hello',12312,123123,'hello'];
let reasignedVariable : any = 'Text';
reasignedVariable = 12;


/* Functions */
// void - because this function does not return any value:
function sayMyName (name : string) : void {
    console.log(name);
}

sayMyName('Hello Dima');

// never - when function return:
// * an error and never end somethisng;
// * or when do something continuasly;
function throwError (errorMessage : string) : never {
    
    throw new Error(errorMessage);
    
}
throwError('message');


function infinite (res : boolean) : never{
    
    while(true){
        console.log('text');
    };
};


/* Type: */
type Login = string;

const userName : Login = 'Dima';
// const password : Login = 123 --> non!;

type ID = number | string;
const password : ID = 'text123text';
const password2 : ID = 123455;
//const password3 : ID = true --> non!;

type someType = string | null | undefined;
