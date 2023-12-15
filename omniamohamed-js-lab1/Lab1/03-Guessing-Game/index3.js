var number = prompt("Guess number!");
var output;
if (number < 7) {
    output = "Too low !. Try again";
}
else if (number > 7) {
    output = "Too high !. Try again";
}
else if (number == 7) {
    output = "You guessed it!!!";
}
else {
    output = "invalid input !";
}
alert(output);
console.log(output);