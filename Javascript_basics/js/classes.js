//classes
const { log } = console;
//syntax
class ClassName {}

class Person {
  //constructor that sets the blue print
  constructor(name = "john", friends = []) {
    this.name = name; //dynamic parameter
    this.company = "itskillcenter"; //default parameter
    this.friends = friends;
  }

  //methods
  getBooksFromStore() {
    const data = [{ name: "john", age: 35 }];
    // localStorage.setItem("bookskillsceter", JSON.stringify(data));
  }

  //static functino
  static addition(a) {
    return a + a;
  }

  //getter - gets ite fro the constructor
  get g() {
    return this.friends;
  }

  //gsetter - sets ite fro the constructor
  set s(name) {
    this.friends.push(name);
  }
}

Person.prototype.course = "javascript";
//every class must be instantiated in order to create an object fro the class
const NoParameter = new Person();
log(NoParameter.getBooksFromStore(), "getBooksFromStore()");
const Camsy = new Person("Camsy");
const Rock = new Person("Rock");
const Banji = new Person("Banji");
log(NoParameter);
log(Camsy, "a");
log(Rock, "b");
log(Banji, "c");

//static
// log(ClassName.addition(8), "static");

//prototype
log(Banji.course, "course");

//getter
// const friends = Banji.f;
// log(friends);

//setter
Banji.s = "moji";

log(Banji.g);

//inheritance - transfer of properties and methods from a parent class to a child class
class ParentClass {
  constructor() {
    this.class = "javascript";
  }
}

class ChildClass extends ParentClass {}
const inherited = new ChildClass();
log(inherited.class, "inherited");

class Father {
  constructor(hometown, occupation, surname) {
    this.hometown = hometown;
    this.occupation = occupation;
    this.surname = surname;
  }
  voice() {
    return "cracked";
  }
}

class Child extends Father {
  constructor(hometown, occupation, surname, skinColor) {
    super(hometown, occupation, surname);
    this.skinColor = skinColor;
  }
}

const Ola = new Child("Lagos", "Teaching", "Banji", "light");
log(Ola, "Ola");
