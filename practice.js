
<----------CLASS----------->

Class: A class is a blueprint for creating objects that defines their common structure and behavior. It encapsulates data (attributes) and functions (methods) that operate on that data.


class person{
    constructor(name,age){
        this. name=name,
        this.age=age
    }
    greet(){
       return console.log(`person is ${this.name}`)
    }
}
 let Newperson=new person("ram",25)


 Newperson.greet()


<----------INHERETANCE----------->


Inheritance: Inheritance allows one class to inherit properties and methods from another class. It promotes code reuse and the creation of hierarchical relationships between classes.

class student extends person{
    constructor(name,age,grade){
        super(name,age);
this.grade=grade;
    }

    details(){
        console.log(`student is ${this.name} and his grade is ${this.grade}`)
    }
}
let Newperson=new student("ram",25,"A")

Newperson.greet()
Newperson.details()




<----------POLYMORPHISM----------->



Polymorphism: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables methods to be overridden in the derived class, providing different implementations while maintaining a consistent interface.



class shape {
    calculateArea(){
        return 0;
        }
}
class rectangle extends shape{
    constructor(length,breath){
        super();
        this.length=length;
        this.breath=breath;
    }
    calculateArea(){
        return this.length*this.breath;
    }
}

class circle extends shape{
    constructor(radius){
        super();
        this.radius=radius;
       
    }
    calculateArea(){
        return Math.PI*this.radius*this.radius ;
    }
}

let person=new rectangle(5,3);
let person2=new circle(2);
console.log(person.calculateArea());
console.log(person2.calculateArea());




<----------ENCAPSULATION----------->


Encapsulation: Encapsulation involves bundling data and related methods together, hiding internal implementation details and providing access through well-defined interfaces. It helps in achieving data abstraction and protection.
javascript



class bankacount{
    constructor(accountNumber){
        this.accountNumber=accountNumber;
        this.balance=0

    }
    deposit(amount){
this.balance+=amount;
    }

    withdraw(amount){
if(amount>this.balance){
    return "Insufficiant balance"
}
else{
    this.balance-=amount;
}


    }

    getBalance(){
        return this.balance;
    }
}

const account=new bankacount("215461656");
account.deposit(600);
console.log(account.getBalance())
console.log(account.withdraw(900));
console.log(account.getBalance())
account.withdraw(100);
console.log(account.getBalance())




<----------ABSTRACTION----------->


Abstraction: Abstraction focuses on representing essential features while hiding unnecessary details. It allows you to create abstract classes or interfaces that define a contract for subclasses to follow.



class Animal{
    constructor(name){
this.name=name
    }


makeSound(){
    throw new Error("This method should be implemented")
}

}

class Dog extends Animal{
    makeSound(){
        console.log("Woof!")
    }
}
class Sheep extends Animal{
   
}

class Cat extends Animal{
    makeSound(){
        console.log("Meow!")
    }
}
const DogSound=new Dog("Sheru");
DogSound.makeSound()

const CatSound=new Cat("Sheru");
CatSound.makeSound()

const sheepSound=new Sheep("bubble")
sheepSound.makeSound()




