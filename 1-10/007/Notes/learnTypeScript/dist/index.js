"use strict";
// Basic types
let myId = 5;
let company = "Mink Inc.";
let isPublished = true;
let x = "hello";
let ids = [1, 2, 3, 4];
let arr = [1, true, "item"];
// Tuple
let person = [1, "str", true];
// Tuple arr
let employee;
employee = [
    [1, "mink"],
    [2, "joe"],
    [3, "harry"],
];
// Union
let id = 22;
id = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Down";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Joe",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
log("Hello");
const user1 = {
    id: 3,
    name: "Harry",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Implement
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, "Shawn", "Developer");
console.log(emp.name, emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(["joe", "mink", "shaawn"]);
