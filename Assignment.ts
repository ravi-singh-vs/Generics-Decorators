//------------- Question1 --------------------

// A generic class to implement queue data structure?

class Queue<T>{

    private queue : T[]
    private size : number

    constructor(size:number){
        this.queue = [];
        this.size = size;
    }

    push(input : T):undefined|never{
        if(this.isFull()) throw new Error("Queue is full");
        this.queue.push(input);
    }
    isEmpty():boolean{
        return this.queue.length===0;
    }
    isFull () : boolean {
        return this.queue.length>=this.size;
    }

    pop():T|never{
        if(this.isEmpty())
        throw new Error("No element to remove");
    
        const poppedElement = this.queue[0];
        this.queue.shift();
        return poppedElement;
    }

    peek():T|never{
        if(this.isEmpty()) 
        throw new Error("Queue is empty");

        return this.queue[0];
    }
    
    display():undefined{
        this.queue.forEach((e)=>{
            console.log(e);
        })
    }

}
const Q = new Queue<number>(10);

Q.push(1);
Q.push(2);

console.log(Q.pop())

Q.display();


// ---------------Question 2-----------------

// A generic function to work only with that types that have charAtMethod in it?

interface HasCharAtMethod {
    charAt(index: number): string;
}
type funType = (index :number) => string;

function stringProcess<T extends HasCharAtMethod>(input: T): void {

    console.log(input.charAt(0));
}


const myString = "Ravi Singh";
stringProcess(myString);



//--------------------- Question 3 --------------
// Decorators

// Implement  all decorators types.

function classDecorator(constructor:Function)
{
    console.log("Class Decorator",constructor);
}

function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Method Decorator,", target, propertyKey, descriptor);
}

function propertyDecorator(target: any, propertyKey: string){
   console.log("Property Decorator", target,propertyKey)
}
function accessorDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
   console.log("Accessor Decorator ", target, propertyKey, descriptor);
}

function parameterDecorator(target: any, propertyKey: string | symbol, parameterIndex: number) {
   console.log("Parameter Decorator", target, propertyKey, parameterIndex);
}
@classDecorator
class Person {
   @propertyDecorator
     private name  : string;
     private age : number;
     constructor(name:string,age : number)
     {
        this.name = name;
        this.age = age;
     }

     @methodDecorator
     showDetails(){
        console.log("Student name : ",this.name);
        console.log("Student age :",this.age)
     }

    @accessorDecorator
    get Name() {
        return this.name;
    }

    changeName(@parameterDecorator newName : string){
      this.name = newName
    }
     
}

const obj = new Person("Ravi Singh",21);


