// ==UserScript==
// @name     Hello Brendan
// @version  1
// @grant    none
// @include  *cnn.com/
// ==/UserScript==
setTimeout(function() {
    alert("Welcome to CNN, Brendan")
}, 1000);

var input1 = document.createElement("input");
input1.type = "button";
input1.value = "BUTTON NAME";
input1.onclick = ButtonFunction1;
input1.setAttribute("style", "font-size:12px;position:fixed;top:15px;right:0px;background-color: lime;");
document.body.appendChild(input1);

function ButtonFunction1() {
    alert("Hello World!")
}
