const calc = (a : number, b : number) : number => {
    return a + b;
}

const toUpperCase = (text : string) : string => {
    return text.trim().toUpperCase()
}

interface values {
    a : number | undefined,
    b : number | undefined
}

interface valuesWithDefault extends values {
    default : string
}

function calcValues () : values;
function calcValues (a : number) : valuesWithDefault;
function calcValues (a : number, b : number) : values;

function calcValues(a? : number, b? : number) {
    if(!a && !b){
        return {a : undefined, b : undefined}
    }
    if (a && !b){
        return {a : a, b : undefined, default : 'default'}
    }

    return {a : a, b : b}
}


console.log('Empty: ', calcValues());
console.log('With one val: ', calcValues(10));
console.log('With two val: ', calcValues(10, 20));