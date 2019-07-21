var myForm = document.querySelector("#my-form");
var depositInput = document.querySelector("#amount");

myForm.addEventListener('submit',Deposit);

function Deposit(e){
    e.preventDefault();
    alert("You have deposited: " + depositInput.value);
}