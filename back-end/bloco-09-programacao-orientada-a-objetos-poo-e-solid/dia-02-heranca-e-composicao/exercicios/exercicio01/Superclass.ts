class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
 }

const myFunc = (superclass: Superclass) => {
  superclass.sayHello();
  console.log(superclass.isSuper ? "Super!" : "Sub!");
  
}

const superClass1 = new Superclass();
const subClass1 = new Subclass();

myFunc(superClass1);
myFunc(subClass1);