const prompt = require('prompt-sync')();
/*
function testFunc() {
    let inputString;
    inputString = prompt('Type any string: ');
    let value1 = inputString.slice(0, 2);
    let op = inputString.slice(2, 3);
    let value2 = inputString.slice(3);
    console.log(inputString);
    console.log(value1);
    console.log(op);
    console.log(value2);
    console.log(Number(value1) + Number(value2));
}
//testFunc();
*/

function Calculator() {
    let inputLine, precision;
    let invalid = "Invalid Input";

    let regTest = function (inString) {
        let val1, val2, stack1 = [], stack2 = [], stack3 = [], stack4 = [];

        let isMatchingBrackets = function (str) {
            let stack = [];
            let map = {
                '(': ')',
                '[': ']',
                '{': '}'
            }
        
            for (let i = 0; i < str.length; i++) {
        
                // If character is an opening brace add it to a stack
                if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
                    stack.push(str[i]);
                }
                //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
                else {
                    let last = stack.pop();
        
                    //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
                    if (str[i] !== map[last]) { return false };
                }
            }
            // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
            if (stack.length !== 0) { return false };
        
            return true;
        }

        if (inString.includes("(")) {
            if (isMatchingBrackets === true) {
                let regExp = /\(([^)]+)\)/g;
                //let txt = "I have five in  the brackets(5)";
                let matches = inString.match(regExp);
                for (let i = 0; i < matches.length; i++) {
                    let str = matches[i];
                    stack1.push(str.substring(1, str.length - 1))
                    console.log(str.substring(1, str.length - 1));
                }
            }
            else {
                console.log("Input String has unterminated brackets!");
                Calculator();
            }

            for (let i = 0; i < stack1.length; i++) {
                let aResult;
                if (stack1[i].includes("+")) {
                    val1 = stack1[i].slice(0, stack1[i].indexOf("+"));
                    val2 = stack1[i].slice((stack1[i].indexOf("+") + 1));
                    aResult = addition(val1, val2);
                    stack2.push(aResult);
                }
                else if (stack1[i].includes("-")) {
                    val1 = stack1[i].slice(0, stack1[i].indexOf("-"));
                    val2 = stack1[i].slice((stack1[i].indexOf("-") + 1));
                    aResult = subtraction(val1, val2);
                    stack2.push(aResult);
                }
                else if (stack1[i].includes("*")) {
                    val1 = stack1[i].slice(0, stack1[i].indexOf("*"));
                    val2 = stack1[i].slice((stack1[i].indexOf("*") + 1));
                    aResult = multiplication(val1, val2);
                    stack2.push(aResult);
                }
                else if (stack1[i].includes("/")) {
                    val1 = stack1[i].slice(0, stack1[i].indexOf("/"));
                    val2 = stack1[i].slice((stack1[i].indexOf("/") + 1));
                    aResult = division(val1, val2);
                    stack2.push(aResult);
                }
                else if (stack1[i].includes("^")) {
                    val1 = stack1[i].slice(0, stack1[i].indexOf("^"));
                    val2 = stack1[i].slice((stack1[i].indexOf("^") + 1));
                    aResult = exponent(val1, val2);
                    stack2.push(aResult);
                }
            }

            for (let j = 0; j < inString.length; j++) {
                let operand;
                if (inString[j] === "+") {
                    operand = inString[j];
                    stack3.push(operand);
                }
                else if (inString[j] === "-") {
                    operand = inString[j];
                    stack3.push(operand);
                }
                else if (inString[j] === "*") {
                    operand = inString[j];
                    stack3.push(operand);
                }
                else if (inString[j] === "/") {
                    operand = inString[j];
                    stack3.push(operand);
                }
                else if (inString[j] === "^") {
                    operand = inString[j];
                    stack3.push(operand);
                }

            }

            stack4.push("0");
            for (let k = 0; k < stack3.length; k++) {
                if (k % 2 != 0) {
                    stack4.push(stack3[k]);
                }
                else {
                    //do nothing
                }
            }

            add = stack4.indexOf("+");
            sub = stack4.indexOf("-");
            div = stack4.indexOf("/");
            mul = stack4.indexOf("*");
            exp = stack4.indexOf("^");
            let temp;
            console.log(plus, sub, div, mul, exp);
            console.log(stack2);
            for (let n = 0; n < stack4.length; n++) {
                if (mul > 0) {
                    temp = multiplication(stack2[mul - 1], stack2[mul]);
                    stack2.splice(stack2.indexOf(stack2[mul - 1]), 2, temp);
                    console.log(stack2);
                    console.log(stack2[mul - 1]);
                    console.log(stack2[mul]);
                    console.log(temp);
                }
                else if (div > 0) {
                    temp = division(stack2[div - 1], stack2[div]);
                    stack2.splice(stack2.indexOf(stack2[div - 1]), 2, temp);
                    console.log(stack2);
                    console.log(stack2[div - 1]);
                    console.log(stack2[div]);
                    console.log(temp);
                }
                else if (add > 0) {
                    temp = addition(stack2[add - 1], stack2[add]);
                    stack2.splice(stack2.indexOf(stack2[add - 1]), 2, temp);
                    console.log(stack2);
                    console.log(stack2[add - 1]);
                    console.log(stack2[add]);
                    console.log(temp);
                }
                else if (sub > 0) {
                    temp = subtraction(stack2[sub - 1], stack2[sub]);
                    stack2.splice(stack2.indexOf(stack2[sub - 1]), 2, temp);
                    console.log(stack2);
                    console.log(stack2[sub - 1]);
                    console.log(stack2[sub]);
                    console.log(temp);
                }
                else if (exp > 0) {
                    temp = exponent(stack2[exp - 1], stack2[exp]);
                    stack2.splice(stack2.indexOf(stack2[exp - 1]), 2, temp);
                    console.log(stack2);
                    console.log(stack2[exp - 1]);
                    console.log(stack2[exp]);
                    console.log(temp);
                }
                else {
                    console.log("Error");
                }
                //stack2.push(temp);
            }
            //console.log(stack1);
            //console.log(stack2);
            //console.log(stack3);
            //console.log(stack4);
            //console.log(temp);
        }
        else {
            //console.log("The string doesnt have bracket expressions!");
            solve();
        }
    }

    let setPrecision = function () {
        precision = prompt("Set Precision (Decimal Places):");
        if (isNaN(precision)) {
            console.log("Value Input is NOT a Number");
            setPrecision();
        }
    }

    console.log("Javascript Calculator");
    setPrecision();
    //precision = prompt("Input Precision (Number of decimal places): ");
    //if (isNaN(precision)){
    //    console.log("error");
    //    precision = prompt("Input Precision (Number of decimal places): ");
    //}
    //console.log("");
    inputLine = prompt("Write Instruction:");
    regTest(inputLine);
    //let val1 = inputLine.slice(0, inputLine.indexOf("+"));
    //let val2 = inputLine.slice((inputLine.indexOf("+")+1));
    //console.log(val1);
    //console.log(val2);

    function solve() {

        let result, x, y, sec, a, b, c;

        let addition = function (arg1, arg2) {
            if (isNaN(Number(arg1) + Number(arg2))) {
                console.log(invalid);
                Calculator();
            }
            else {
                return (Number(arg1) + Number(arg2));
            }
        }

        let subtraction = function (arg1, arg2) {
            if (isNaN(Number(arg1) - Number(arg2))) {
                console.log(invalid);
                Calculator();
            }
            else {
                return (Number(arg1) - Number(arg2));
            }
        }

        let multiplication = function (arg1, arg2) {
            if (isNaN(Number(arg1) * Number(arg2))) {
                console.log(invalid);
                Calculator();
            }
            else {
                return (Number(arg1) * Number(arg2));
            }
        }

        let division = function (arg1, arg2) {
            if (isNaN(Number(arg1) / Number(arg2))) {
                console.log(invalid);
                Calculator();
            }
            else {
                return (Number(arg1) / Number(arg2));
            }
        }

        let exponent = function (arg1, arg2) {
            if (isNaN(Math.pow(Number(arg1), Number(arg2)))) {
                console.log(invalid);
                Calculator();
            }
            else {
                return (Math.pow(Number(arg1), Number(arg2)));
            }
        }

        if (inputLine.includes("+") === true) {
            x = inputLine.slice(0, inputLine.indexOf("+"));
            y = inputLine.slice((inputLine.indexOf("+") + 1));

            /*if (y.includes("+") === true && y.includes("-") === false && y.includes("*") === false && y.includes("/") === false && y.includes("^") === false) {
                //console.log("its true");
                sec = y.slice(0, y.indexOf("+"));
                a = y.slice(y.indexOf("+") + 1);
                b = a.slice(0, a.indexOf("+"));
                c = a.slice(a.indexOf("+") + 1);

                //console.log(a);
                //console.log(b);
                //console.log(c);
                result1 = addition(x, sec);
                result2 = addition(b, c);
                fresult = addition(result1, result2);
                resulting = fresult.toFixed(precision);
                console.log(inputLine + " = " + String(resulting));
            }
            else if (y.includes("+") === false && y.includes("-") === true && y.includes("*") === false && y.includes("/") === false && y.includes("^") === false) {
                //console.log("its true");
                sec = y.slice(0, y.indexOf("-"));
                a = y.slice(y.indexOf("-") + 1);
                b = a.slice(0, a.indexOf("-"));
                c = a.slice(a.indexOf("-") + 1);

                //console.log(a);
                //console.log(b);
                console.log(c);
                result1 = addition(x, sec);
                result2 = subtraction(result1, c);
                console.log(result2);
                //fresult = addition(result1, result2);
                //let resulting = fresult.toFixed(precision);
                //console.log(inputLine + " = " + String(resulting));
            }*/
            let aResult = addition(x, y);
            result = aResult.toFixed(precision);
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
    //solve();

    Calculator();

}
Calculator();

/*
let isMatchingBrackets = function (str) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {

        // If character is an opening brace add it to a stack
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let last = stack.pop();

            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (str[i] !== map[last]) { return false };
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
    if (stack.length !== 0) { return false };

    return true;
}
//console.log(isMatchingBrackets("()("));

let bracketTest = function (testString) {
    if (testString.includes("(")) {
        if (testString.includes(")")) {
            let fpart = testString.slice(0, 2)
            let lpart = testString.slice(1)
            console.log(fpart, lpart)
        }
    }
}
//bracketTest("(1+2)");

/*
let addition = function (arg1, arg2) {
    if (isNaN(Number(arg1) || isNaN(Number(arg2)))) {
        console.log(invalid);
    }
    else {
        return (Number(arg1) + Number(arg2));
    }
}

let subtraction = function (arg1, arg2) {
    if (isNaN(Number(arg1) || isNaN(Number(arg2)))) {
        console.log(invalid);
    }
    else {
        return (Number(arg1) - Number(arg2));
    }
}

let multiplication = function (arg1, arg2) {
    if (isNaN(Number(arg1) || isNaN(Number(arg2)))) {
        console.log(invalid);
    }
    else {
        return (Number(arg1) * Number(arg2));
    }
}

let division = function (arg1, arg2) {
    if (isNaN(Number(arg1) || isNaN(Number(arg2)))) {
        console.log(invalid);
    }
    else {
        return (Number(arg1) / Number(arg2));
    }
}

let exponent = function (arg1, arg2) {
    if (isNaN(Number(arg1) || isNaN(Number(arg2)))) {
        console.log(invalid);
    }
    else {
        return (Math.pow(Number(arg1), Number(arg2)));
    }
}


let regTest = function (inString) {
    let val1, val2, stack1 = [], stack2 = [], stack3 = [], stack4 = [];

    if (inString.includes("(")) {
        let regExp = /\(([^)]+)\)/g;
        //let txt = "I expect five hundred dollars ($500 and another fifty(50)) and seventy (70).";
        let matches = inString.match(regExp);
        for (let i = 0; i < matches.length; i++) {
            let str = matches[i];
            stack1.push(str.substring(1, str.length - 1))
            console.log(str.substring(1, str.length - 1));
        }
    }
    else {
        console.log("The string doesnt have bracket expressions!")
    }

    for (let i = 0; i < stack1.length; i++) {
        let aResult;
        if (stack1[i].includes("+")) {
            val1 = stack1[i].slice(0, stack1[i].indexOf("+"));
            val2 = stack1[i].slice((stack1[i].indexOf("+") + 1));
            aResult = addition(val1, val2);
            stack2.push(aResult);
        }
        else if (stack1[i].includes("-")) {
            val1 = stack1[i].slice(0, stack1[i].indexOf("-"));
            val2 = stack1[i].slice((stack1[i].indexOf("-") + 1));
            aResult = subtraction(val1, val2);
            stack2.push(aResult);
        }
        else if (stack1[i].includes("*")) {
            val1 = stack1[i].slice(0, stack1[i].indexOf("*"));
            val2 = stack1[i].slice((stack1[i].indexOf("*") + 1));
            aResult = multiplication(val1, val2);
            stack2.push(aResult);
        }
        else if (stack1[i].includes("/")) {
            val1 = stack1[i].slice(0, stack1[i].indexOf("/"));
            val2 = stack1[i].slice((stack1[i].indexOf("/") + 1));
            aResult = division(val1, val2);
            stack2.push(aResult);
        }
        else if (stack1[i].includes("^")) {
            val1 = stack1[i].slice(0, stack1[i].indexOf("^"));
            val2 = stack1[i].slice((stack1[i].indexOf("^") + 1));
            aResult = exponent(val1, val2);
            stack2.push(aResult);
        }
    }

    for (let j = 0; j < inString.length; j++) {
        let operand;
        if (inString[j] === "+") {
            operand = inString[j];
            stack3.push(operand);
        }
        else if (inString[j] === "-") {
            operand = inString[j];
            stack3.push(operand);
        }
        else if (inString[j] === "*") {
            operand = inString[j];
            stack3.push(operand);
        }
        else if (inString[j] === "/") {
            operand = inString[j];
            stack3.push(operand);
        }
        else if (inString[j] === "^") {
            operand = inString[j];
            stack3.push(operand);
        }

    }

    stack4.push("0");
    for (let k = 0; k < stack3.length; k++) {
        if (k % 2 != 0) {
            stack4.push(stack3[k]);
        }
        else {
            //do nothing
        }
    }

    plus = stack4.indexOf("+");
    sub = stack4.indexOf("-");
    div = stack4.indexOf("/");
    mul = stack4.indexOf("*");
    exp = stack4.indexOf("^");
    let temp;
    console.log(plus, sub, div, mul, exp);
    console.log(stack2);
    for (let n = 0; n < stack4.length; n++) {
        if (mul > 0) {
            temp = multiplication(stack2[mul - 1], stack2[mul]);
            stack2.splice(stack2.indexOf(stack2[div - 1]), 2, temp);
            console.log(stack2);
            console.log(stack2[mul - 1]);
            console.log(stack2[mul]);
            console.log(temp);
        }
        else if (div > 0) {
            temp = division(stack2[div - 1], stack2[div]);
            stack2.splice(stack2.indexOf(stack2[div - 1]), 2, temp);
            console.log(stack2);
            console.log(stack2[div - 1]);
            console.log(stack2[div]);
            console.log(temp);
        }
        else if (add > 0) {
            temp = addition(stack2[add - 1], stack2[add]);
            stack2.splice(stack2.indexOf(stack2[add - 1]), 2, temp);
            console.log(stack2);
            console.log(stack2[add - 1]);
            console.log(stack2[add]);
            console.log(temp);
        }
        else if (sub > 0) {
            temp = subtraction(stack2[sub - 1], stack2[sub]);
            stack2.splice(stack2.indexOf(stack2[sub - 1]), 2, temp);
            console.log(stack2);
            console.log(stack2[sub - 1]);
            console.log(stack2[sub]);
            console.log(temp);
        }
        else if (exp > 0) {
            temp = exponent(stack2[exp - 1], stack2[exp]);
            stack2.splice(stack2.indexOf(stack2[exp - 1]), 2, temp);
            console.log(stack2);
            console.log(stack2[exp - 1]);
            console.log(stack2[exp]);
            console.log(temp);
        }
        else {
            console.log("Error");
        }
        stack2.push(temp);
    }




    console.log(stack1);
    console.log(stack2);
    //console.log(stack3);
    console.log(stack4);
    console.log(temp);
}
//regTest("(2*4)*(3/6)+(3*2)-(5/7)");
//regTest("1+2+3+4");
*/