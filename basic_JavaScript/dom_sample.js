//ใน browser ปกติจะมี window option ที่ให้เราสามารถยุ่งเกี่ยวกับ browser ได้
console.log(window);

/*
alert();
window.alert();*/
//alert เป็นหนึ่งใน function ของ window เหมือนกัน งั้น 2 คำสั่งบนนั้นจะทำงานเหมือนกัน

//Single Element เลือกแค่ 1 ข้อมูลในเวลาเดียวกัน
console.log(document.getElementById("my-form"));
console.log(document.querySelector("h1")); //อันนี้มันจะเอาค่า h1 แรกที่มันเจอ

//Multiple Element เลือกมากกว่า 1 ข้อมูลในเวลาเดียวกัน
//console.log(document.querySelectorAll(".my-box")); //มันจะดึงค่าจาก class my-box ทั้งหมด

console.log(document.querySelectorAll(".my-item")); //แนะนำให้ใช้วิธีนี้เพราะมันเข้าใจง่ายและแปลงเป็น array ให้อัตโนมัติ

console.log(document.getElementsByClassName("my-item")); //วิธีนี้เก่ากว่าและใช้ยากกว่า
console.log(document.getElementsByTagName("label")); //วิธีนี้ก็เก่าเหมือนกันและใช้ยาก

//----------------- ตัวอย่างใช้จริงอยู่นี่ -----------------
//var ul = document.querySelectorAll(".item");
//ul.forEach((ul) => console.log(ul));

var ul = document.querySelector(".item");
//ul.firstElementChild.remove();
//ul.lastElementChild.remove();

ul.firstElementChild.textContent = "Hello World";
ul.children[1].textContent = "World";
ul.children[2].innerHTML = "<h1>label3</h1>"

var submitButton = document.querySelector(".btn");
//console.log(submitButton);
submitButton.style.backgroundColor = "red";

/*
submitButton.addEventListener("click", (e) => {
    e.preventDefault(); //ไว้หยุด event default
    console.log("click");
    console.log(e.target.className);
    if(document.querySelector("#my-form").style.backgroundColor == "lightgray"){
        document.querySelector("#my-form").style.backgroundColor = "white";
    }
    else{
        document.querySelector("#my-form").style.backgroundColor = "lightgray";
    }
    document.querySelector("body").classList.add("darkbg");
});*/

submitButton.addEventListener('mouseout', (e)=>{
    var aul = document.querySelector(".item");
    aul.children[1].textContent = "Change Word";
    aul.children[1].style.color = "red";
});

var myForm = document.querySelector("#my-form");
var NameInput = document.querySelector("#uname");
var pwInput = document.querySelector("#pw");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(NameInput.value);
    console.log(pwInput.value);
    
    if(NameInput.value == '' || pwInput.value == ''){
        alert("Please add the word into the field!");
    }
}