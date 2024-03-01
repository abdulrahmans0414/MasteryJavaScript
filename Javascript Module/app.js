import { fName } from "./utils/fname.js";
import { age } from "./utils/age.js";
import { Person } from "./utils/Person.js";

console.log(fName, age);

const person = new Person ("Abdul", "Rahman", 22);
person.info();
console.log(person);