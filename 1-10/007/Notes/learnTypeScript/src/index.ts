// Basic types
let myId: number = 5;
let company: string = "Mink Inc.";
let isPublished: boolean = true;
let x: any = "hello";

let ids: number[] = [1, 2, 3, 4];

let arr: any[] = [1, true, "item"];

// Tuple
let person: [number, string, boolean] = [1, "str", true];

// Tuple arr
let employee: [number, string][];

employee = [
  [1, "mink"],
  [2, "joe"],
  [3, "harry"],
];

// Union
let id: string | number = 22;
id = "22";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Down",
}

// Objects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "Joe",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(a: number, b: number): number {
  return a + b;
}
function log(message: string | number): void {
  console.log(message);
}
log("Hello");

// Interfaces
interface UserInterface {
  readonly id: number; // readonly
  name: string;
  age?: number; // optional
}

const user1: UserInterface = {
  id: 3,
  name: "Harry",
};

interface Mathfunc {
  (x: number, y: number): number;
}

const add: Mathfunc = (x: number, y: number): number => x + y;
const sub: Mathfunc = (x: number, y: number): number => x - y;

// Classes

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Implement

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}

const mink = new Person(23, "mink");
const joe = new Person(22, "joe");

// Sub class
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(2, "Shawn", "Developer");
console.log(emp.name, emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(["joe", "mink", "shaawn"]);
