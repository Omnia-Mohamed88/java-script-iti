var text1 = document.getElementById("text1")/**/
var text2 = document.getElementById("text2")/**/
var h2 = document.getElementById("h2")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
text1.addEventListener('keyup', function (event) {/**/
    value = text1.value;
    text2.innerHTML = value;
    /if(ev)/
});
btn1.addEventListener('click', function (event) {
    text2.className = "btn1"
    h2.innerHTML = 'Font Name :lobster'
});
btn2.addEventListener('click', function (event) {
    text2.className = "btn2"
    h2.innerHTML = 'Font Name :wallpet'
});
btn3.addEventListener('click', function (event) {
    text2.className = "btn3"
    h2.innerHTML = 'Font Name :shadows'
});
btn4.addEventListener('click', function (event) {
    text2.className = "btn4"
    h2.innerHTML = 'Font Name :zcool'
});