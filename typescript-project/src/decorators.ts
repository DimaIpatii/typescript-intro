const Log = (constructor : Function) : void => {
    /* console.log(constructor); */
}

const LogText = (target : any, propName : string | Symbol) : void => {
    /* console.log(target);
    console.log(propName); */
}

const LogMethod = (target : any, propName : string | Symbol, descriptor : PropertyDescriptor) => {
   /*  console.log(target);
    console.log(propName);
    console.log(descriptor); */
}


@Log
class PersonClass {
    @LogText
    name : string;
    
    constructor(name : string){
        this.name = name;
    }

    @LogMethod
    get getName() {
        return this.name;
    }
}


/* ******************************** */

interface ComponentDecorator{
    selector : string,
    template : string
}
/* *************************** */

// Decorator Bind:
function Bind(_ : any, _2 : any, descriptor : PropertyDescriptor) : PropertyDescriptor{
    const original = descriptor.value;
    return {
        configurable : true,
        enumerable : true,
        get(){
            return original.bind(this);
        }
    }
}

const Component = (config : ComponentDecorator) => {
    return function <T extends { new(...args: any[]) : object}> (Constructor : T) {
        return class extends Constructor{
            constructor (...args : any[]){
                super(...args);
                
                const card = document.querySelector(config.selector)!;
                card.innerHTML = config.template;
            }
        }
    }
}

@Component({
    selector : "#block",
    template : `
    <div class="card">
        <div class="card-content">
            <h2 class="card-title">Decorators Component</h2>
        </div>
    </div>
    `
})

class Block {
    constructor(private name : string){

    }
    @Bind
    displayName (){
        console.log(`My name is: ${this.name}`);
    }
}

const card = new Block('My card');





const btn = document.querySelector('#btn')!;
btn.addEventListener('click', card.displayName);
