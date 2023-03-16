window.myClickFunction = function myClickFunction() {
    alert("Your first function!");
};

const button2 = document.getElementById("button2")

button2.addEventListene('click', window.myClickFunction)