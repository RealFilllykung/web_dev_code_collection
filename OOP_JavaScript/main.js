//Basic ของ OOP นั้นส่วนมากจะมองภาพ variable ของเราเป็น class
class People{
    constructor(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    greeting = function(){
        console.log("A person name " + this.fname + " " + this.lname + " with an age of " + this.age + " say hi to you");
    }
}

var p1 = new People("Thartahep","Klinka-or",20);
p1.greeting();

class student extends People{
    constructor(fname,lname,age,gpa){
        super(fname,lname,age);
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gpa = gpa;
    }

    greeting = function(){
        console.log("A student name " + this.fname + " " + this.lname + " with a gpa of " + this.gpa + " say hi to you");
    }
}

var p2 = new student("Hello","World",18,3.45);
p2.greeting();