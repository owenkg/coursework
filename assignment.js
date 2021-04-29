const prompt = require('prompt-sync')();

function testFunc() {
    var inputString;
    inputString = prompt('Type any string: ');
    var value1 = inputString.slice(0, 2);
    var op = inputString.slice(2, 3);
    var value2 = inputString.slice(3);
    console.log(inputString);
    console.log(value1);
    console.log(op);
    console.log(value2);
    console.log(Number(value1) + Number(value2));
}
//testFunc();

function Calculator() {
    var inputLine,precision;
    console.log("Javascript Calculator")
    console.log("");
    inputLine = prompt("Write Instruction:");
    //var val1 = inputLine.slice(0, inputLine.indexOf("+"));
    //var val2 = inputLine.slice((inputLine.indexOf("+")+1));

    //console.log(val1);
    //console.log(val2);

    function solve() {

        var result, x, y;


        if (inputLine.includes("+") === true) {
            x = inputLine.slice(0, inputLine.indexOf("+"));
            y = inputLine.slice((inputLine.indexOf("+") + 1));
            result = addition(x, y);
            console.log(inputLine + " = " + String(result));
        }
        else if (inputLine.includes("-") === true) {
            x = inputLine.slice(0, inputLine.indexOf("-"));
            y = inputLine.slice((inputLine.indexOf("-") + 1));
            result = subtraction(x, y);
            console.log(inputLine + " = " + String(result));
        }
        else if (inputLine.includes("/") === true) {
            x = inputLine.slice(0, inputLine.indexOf("/"));
            y = inputLine.slice((inputLine.indexOf("/") + 1));
            result = division(x, y);
            console.log(inputLine + " = " + String(result));
        }
        else if (inputLine.includes("*") === true) {
            x = inputLine.slice(0, inputLine.indexOf("*"));
            y = inputLine.slice((inputLine.indexOf("*") + 1));
            result = multiplication(x, y);
            console.log(inputLine + " = " + String(result));
        }
        else if (inputLine.includes("^") === true) {
            x = inputLine.slice(0, inputLine.indexOf("^"));
            y = inputLine.slice((inputLine.indexOf("^") + 1));
            result = exponent(x, y);
            console.log(inputLine + " = " + String(result));
        }
        else {
            console.log("Error! No operand given.");
            Calculator();
        }
    }
    solve();


    function addition(arg1, arg2) {
        return (Number(arg1) + Number(arg2));
    }

    function subtraction(arg1, arg2) {
        return (Number(arg1) - Number(arg2));
    }

    function multiplication(arg1, arg2) {
        return (Number(arg1) * Number(arg2));
    }

    function division(arg1, arg2) {
        return (Number(arg1) / Number(arg2));
    }

    function exponent(arg1, arg2) {
        return (Math.pow(Number(arg1), Number(arg2)));
    }
    Calculator();

}
Calculator();