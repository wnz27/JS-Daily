var message: string = "Hello World";
console.log(message);
let str: string = "12345";
console.log(str);

class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");
console.log(greeter(user));
