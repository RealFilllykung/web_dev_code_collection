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
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,3).toUpperCase());