interface Person {
    myName : string,
    myAge : number
}

type PersonKey =  keyof Person;
 
let key : PersonKey = 'myName';
key = "myAge";

type User = {
    _id : number,
    name : string,
    age : number,
    password : number,
    email : string
}

type UserLogIn = Exclude <keyof User, '_id' | 'age' | 'name'>
type UserSignUp = Pick <User, '_id' | 'age' | 'name' | 'email' >

let user1password : UserLogIn = 'password';
let user1email : UserLogIn = 'email';

console.log(user1password);
console.log(user1email);





