//alert('Hello');
//อันนีืคือ command ที่มันจะ popup alert มาให้ในหน้าเว็บเรา

//ตรงนี้คือมันจะ print คำที่เราใส่ไว้เข้าไปใน console
console.log('Hello');
console.log('This loop has ended');
console.log('This is the error');

//วิธีประกาศตัวแปล
let a;
a = 30;
console.log(a);

//ตั้งค่าตัวแปลแบบ constant, ตัวแปลนี้ไม่สามารถแก้ค่าได้
const b = 100;
console.log(b);
//b = 20;

//String Numbers Boolean null undefined
let name = "Fill";
let myNumber = 20;
let mySingleStatus = true;
let myGF = null;
let myUndefined = undefined;

//ถ้าเราใช้ var เราต้องประกาศตัวแปลก่อนที่เราจะเอาไปใช้กับ console.log
var myname = "Fill";
//undefined คือตัวแปลที่เอาไว้ไม่ให้มันถูกแก้ค่าได้

//Print ว่าตัวแปลนี้เป็นตัวแปลชนิดอะไร
console.log(typeof name);

//อันนี้คือการใช้ console.log แบบเบื้องต้น
console.log("My name is " + name);
console.log(name.length);
console.log(myname.toLowerCase());
console.log(name.substring(0,3).toUpperCase());

//วิธีการสร้าง array
var OOPArray = new Array(); //OOP style
var StaticArray = [3,4,5,6,7];
let emptyArray = [];

OOPArray.push(3,4,5,6,7); //Stack Mechanism
emptyArray.push(3,4); //ยัดเข้าไปใน array ที่ไม่ได้ใช้ OOP style ก็ได้

console.log(OOPArray);
console.log(StaticArray);
console.log(OOPArray.pop());

OOPArray.reverse(); //ทำให้ Stack กลายเป็น queue ด้วยการ reverse
console.log(OOPArray.pop());

//วิธีสร้าง queue ใน JS
var myQueue = [];
myQueue.push(3);
myQueue.push(4);
myQueue.shift(); //shift = left shift ง่ายๆคือทำให้ค่าที่อยู่หน้าสุดหลุดออกไป

//วิธีสร้าง object literals (ไม่ใช่ class นะ คิดซะว่าอันนี้คล้ายๆ structure)
const myPerson = {
    fname: "Tharathep",
    lname: "Klinla-or",
    age: 20,
    address: {
        street: "ถนนสักที่ในไทย",
        city: "Nonthaburi",
        country: "Thailand"
    }
}

//ลอง print ค่าที่อยู่ใน myPerson
console.log(myPerson.fname + ' ' + myPerson.lname);
console.log(myPerson.fname,myPerson.lname);
console.log(myPerson.address);

//ลอง copy ค่าจาก myPerson เข้าไปในตัวแปล
const {fname,lname,address: {street,city} } = myPerson;
console.log(street);

//เพิ่ม structure ให้ myPerson
myPerson.email = "myMail@somedomain.com";
console.log(myPerson.email);

//Array ของ Structure
var todoList = [
    {
        id: 1,
        todo: "ซื้อของ"
    },
    {
        id: 2,
        todo: "กิน"
    },
    {
        id: 3,
        todo: "นอน"
    }
];

console.log(todoList[0]);

//Loops

//For Loop
for(let i = 0; i < 5; i++){
    console.log("Hello");
}

//While Loop
todoList.reverse();
while(todoList.length != 0){
    console.log(todoList.pop());
}

//forEach
todoList.forEach((todoList)=>{
    console.log(todoList);
});

//if statement
var x = 20;
if (x == 10){
    console.log("x is 10");
}
else{
    console.log("x is " + x);
}

if (x >= 10){
    console.log("x is greater than 10")
}
else{
    console.log("x is less than 10");
}

if (x == 10 || x == 20){
    console.log("x is either 10 or 20");
}

//short hand if
x > 10 ? console.log("x is greater than 10") : console.log("x is less than 10");

//switch case
switch(x){
    case 10: console.log("x = 10");
    break;

    case 20: console.log("x = 20");
    break;

    default: console.log("x เป็นอะไรไม่รู้");
    break;
}

//การสร้าง function
function addNumber(num1,num2){
    return num1+num2;
}

var testVariable = addNumber(10,20);
console.log(testVariable);

//function แบบตัวแปร default ถ้าไม่ pass argument
function addTwoNumber(num1 = 1, num2 = 1){
    console.log(num1 + num2);
}
addTwoNumber(3);

//Constructor function
//ถ้าไม่ถนัด stype function prototyle ให้ใช้ระบบ class (OOP) แทน
function person(fname,lname,age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;

    this.getBirthdate = function(){
        var today = new Date();
        console.log(today.getFullYear() - age);
    }
}

var AnotherPerson = new person("Fill","LastName",20);
console.log(AnotherPerson);


//Class
class PersonClass{
    constructor(fname,lname,age){
        this.firstName = fname;
        this.lastName = lname;
        this.PersonAge = age;
    }

    getBirthdate(){
        var today = new Date();
        console.log(today.getFullYear() - this.PersonAge);
    }

    getName(){
        return this.firstName + " " + this.lastName;
    }
}

var PersonC = new PersonClass("Tharathep","Klinla-or",20);
PersonC.getBirthdate();
var FullNamePersonC = PersonC.getName();
console.log(FullNamePersonC);