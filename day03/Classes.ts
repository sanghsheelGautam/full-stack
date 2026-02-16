class Person{
    name:string;
    age:number;
    constructor(n1:string,n2:number){
        this.name = n1;
        this.age = n2;
    }
}

const obj1 = new Person("Badshah",20);
console.log(obj1);


class employee extends Person{
    salery:number;
    constructor(salery:number,name:string,age:number){
        super(name,age)
        this.salery = salery;
    }
} 

const E1 = new employee(420,"Rock",20,)
console.log(E1);

// Generic : Template

function value<Template>(a:Template):Template{
    return a;
}

console.log(10);
console.log("Badshah");
console.log(value([10,20,30]));
console.log(true)