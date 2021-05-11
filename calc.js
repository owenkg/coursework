const prompt = require('prompt-sync')();

let calc = function () {
    let values = [];
    let signs = [];
    let bstack = [];
    let invalid = "Invalid Input";
    let answer;

    //THIS FUNCTION SETS THE ACCURACY OF THE RETURNED ANSWER (NO. OF DECIMAL PLACES)
    let setPrecision = function () {
        precision = prompt("Set Precision (Decimal Places): ");
        if (isNaN(precision)) {
            console.log("Value Input is NOT a Number");
            setPrecision();
        }
    }

    //THIS FUNCTION RETURNS THE SUM OF ARG1 AND ARG2 (ARG1 + ARG2)
    let addition = function (arg1, arg2) {
        if (isNaN(Number(arg1) + Number(arg2))) {
            console.log(invalid);
            calc();
        }
        else {
            return (Number(arg1) + Number(arg2));
        }
    }

    //THIS FUNCTION RETURNS THE DIFFERENCE BETWEEN ARG1 AND ARG2 (ARG1 - ARG2)
    let subtraction = function (arg1, arg2) {
        if (isNaN(Number(arg1) - Number(arg2))) {
            console.log(invalid);
            calc();
        }
        else {
            return (Number(arg1) - Number(arg2));
        }
    }

    //THIS FUNCTION RETURNS THE PRODUCT OF ARG1 AND ARG2 (ARG1 * ARG2)
    let multiplication = function (arg1, arg2) {
        if (isNaN(Number(arg1) * Number(arg2))) {
            console.log(invalid);
            calc();
        }
        else {
            return (Number(arg1) * Number(arg2));
        }
    }

    //THIS FUNCTION CARRIES OUT DIVISION (ARG1 / ARG2)
    let division = function (arg1, arg2) {
        if (isNaN(Number(arg1) / Number(arg2))) {
            console.log(invalid);
            calc();
        }
        else {
            return (Number(arg1) / Number(arg2));
        }
    }

    //THIS FUNCTION RETURNS ARG1 TO THE POWER ARG2 (ARG1 ^ ARG2)
    let exponent = function (arg1, arg2) {
        if (isNaN(Math.pow(Number(arg1), Number(arg2)))) {
            console.log(invalid);
            calc();
        }
        else {
            return (Math.pow(Number(arg1), Number(arg2)));
        }
    }

    //THS FUCNTION CARRIES OUT THE ACTUAL CALCULATION
    let solve = function () {

        //IF THE STRING HAS MORE THAN TWO BUT LESS THAN FOUR ARGUMENTS
        if (signs.length > 1) {
            //ORDER OF APPEARANCE
            //EXPONENT FIRST
            if (signs[0] === "^" && signs[1] === "^") {
                result1 = exponent(values[1], values[2])
                result2 = exponent(values[0], result1);

                return result2;

            }
            else if (signs[0] === "^" && signs[1] === "-") {
                result1 = exponent(values[0], values[1])
                result2 = subtraction(result1, values[2]);

                return result2;
            }
            else if (signs[0] === "^" && signs[1] === "+") {
                result1 = exponent(values[0], values[1])
                result2 = addition(result1, values[2]);

                return result2;
            }
            else if (signs[0] === "^" && signs[1] === "/") {
                result1 = division(values[1], values[2])
                result2 = exponent(values[0], result1);

                return result2;
            }
            else if (signs[0] === "^" && signs[1] === "*") {
                result1 = multiplication(values[1], values[2])
                result2 = exponent(result1, values[2]);

                return result2;
            }
            //SUBTRACTION FIRST
            else if (signs[0] === "-" && signs[1] === "^") {
                result1 = exponent(values[1], values[2])
                result2 = subtraction(values[0], result1);

                return result2;
            }
            else if (signs[0] === "-" && signs[1] === "-") {
                result1 = subtraction(values[0], values[1])
                result2 = subtraction(result1, values[2]);

                return result2;
            }
            else if (signs[0] === "-" && signs[1] === "+") {
                result1 = addition(values[1], values[2])
                result2 = subtraction(values[0], result1);

                return result2;
            }
            else if (signs[0] === "-" && signs[1] === "/") {
                result1 = division(values[1], values[2])
                result2 = subtraction(values[0], result1);

                return result2;
            }
            else if (signs[0] === "-" && signs[1] === "*") {
                result1 = multiplication(values[1], values[2])
                result2 = subtraction(values[0], result1);

                return result2;
            }
            else if (signs[0] === "-" && signs[1] === "*") {
                result1 = multiplication(values[1], values[2])
                result2 = subtraction(values[0], result1);

                return result2;
            }
            //ADDITION FIRST
            else if (signs[0] === "+" && signs[1] === "^") {
                result1 = exponent(values[1], values[2])
                result2 = addition(values[0], result1);

                return result2;
            }
            else if (signs[0] === "+" && signs[1] === "-") {
                result1 = addition(values[0], values[1])
                result2 = subtraction(result1, values[2]);

                return result2;
            }
            else if (signs[0] === "+" && signs[1] === "+") {
                result1 = addition(values[0], values[1])
                result2 = addition(result1, values[2]);

                return result2;
            }
            else if (signs[0] === "+" && signs[1] === "/") {
                result1 = division(values[1], values[2])
                result2 = addition(values[0], result1);

                return result2;
            }
            else if (signs[0] === "+" && signs[1] === "*") {
                result1 = multiplication(values[1], values[2])
                result2 = addition(values[0], result1);

                return result2;
            }
            //DIVISION FIRST
            else if (signs[0] === "/" && signs[1] === "^") {
                result1 = exponent(values[1], values[2])
                result2 = division(values[0], result1);

                return result2;
            }
            else if (signs[0] === "/" && signs[1] === "-") {
                result1 = division(values[0], values[1])
                result2 = subtraction(result1, values[2]);

                return result2;
            }
            else if (signs[0] === "/" && signs[1] === "+") {
                result1 = division(values[0], values[1])
                result2 = addition(result1, values[2]);

                return result2;
            }
            else if (signs[0] === "/" && signs[1] === "/") {
                result1 = division(values[0], values[1])
                result2 = division(result1, values[2]);

                return result2;
            }
            else if (signs[0] === "/" && signs[1] === "*") {
                result1 = division(values[0], values[1])
                result2 = multiplication(result1, values[2]);

                return result2;
            }
            //MULTIPLICATON FIRST
            else if (signs[0] === "*" && signs[1] === "^") {
                result1 = exponent(values[1], values[2])
                result2 = multiplication(values[0], result1);

                return result2;
            }
            else if (signs[0] === "*" && signs[1] === "-") {
                result1 = multiplication(values[0], values[1])
                result2 = subtraction(result1, values[2]);

                return result2;
            }
            else if (signs[0] === "*" && signs[1] === "+") {
                result1 = multiplication(values[0], values[1])
                result2 = addition(result1, values[2]);

                return result2;
            }
            else if (signs[0] === "*" && signs[1] === "/") {
                result1 = multiplication(values[0], values[1])
                result2 = division(result1, values[2]);

                return result2;
            }
            else if (signs[0] === "*" && signs[1] === "*") {
                result1 = multiplication(values[0], values[1])
                result2 = multiplication(result1, values[2]);

                return result2;
            }
            else {
                console.log("One or both symbol(s) given is NOT an operator!")
            }
        }
        //IF THE STRING HAS ONLY TWO ARGUMENTS
        else {
            if (signs[0] === "^") {
                result2 = exponent(values[0], values[1]);

                return result2;
            }
            else if (signs[0] === "-") {
                result2 = subtraction(values[0], values[1]);

                return result2;
            }
            else if (signs[0] === "+") {
                result2 = addition(values[0], values[1]);

                return result2;
            }
            else if (signs[0] === "/") {
                result2 = division(values[0], values[1]);

                return result2;
            }
            else if (signs[0] === "*") {
                result2 = multiplication(values[0], values[1]);

                return result2;
            }
            else {
                console.log("Symbol given is NOT an operator!")
            }
        }

        //return result2
    }

    //THIS FUNCTION PARSES THE STRING THAT HAS BEEN INPUT BY THE USER AND SPLITS INTO NUMBERS AND SYMBOLS.IT ALSO TERMINATES THE PROGRAM
    let string_split = function () {
        let text = prompt("Input: ");
        let part1, part2, part3, part4, part5, part6;

        if (text.includes("(")) {
            if (text.includes(")") === true) {
                
                let regExp = /\(([^)]+)\)/g;
                //let txt = "I have five in  the brackets(5)";
                let matches = text.match(regExp);
                //THIS LOOP FILTERS OUT THE CONTENTS INSIDE BRACKETS AND PLACES THEN IN AN ARRAY (BSTACK)
                for (let i = 0; i < matches.length; i++) {
                    let str = matches[i];
                    bstack.push(str.substring(1, str.length - 1))
                    //console.log(str.substring(1, str.length - 1));
                }

                //THIS LOOP FILTERS OUT THE OPERANDS OUTSIDE THE BRACKETS AND PLACES THEN IN AN ARRAY (SIGNS)
                for (let j = 0;j < text.length;j++){
                    //let end = ")";
                    if (text[j] === ')') {
                        if (j != (text.length-1)){
                            signs.push(text[j+1]);
                        }
                    }
                }

                //IN THIS LOOP THE RESULTS OF THE STATEMENTS ARE CALCULATED AND PLACED IN ANOTHER ARRAY (VALUES)
                for (let k = 0;k < bstack.length;k++){
                    if (bstack[k].includes("^")) {
                        b_val1 = bstack[k].slice(0, bstack[k].indexOf("^"));
                        b_val2 = bstack[k].slice((bstack[k].indexOf("^") + 1));
                        b_res = exponent(b_val1, b_val2);
                        values.push(b_res);
                    }
                    else if (bstack[k].includes("-")) {
                        b_val1 = bstack[k].slice(0, bstack[k].indexOf("-"));
                        b_val2 = bstack[k].slice((bstack[k].indexOf("-") + 1));
                        b_res = subtraction(b_val1, b_val2);
                        values.push(b_res);
                    }
                    else if (bstack[k].includes("+")) {
                        b_val1 = bstack[k].slice(0, bstack[k].indexOf("+"));
                        b_val2 = bstack[k].slice((bstack[k].indexOf("+") + 1));
                        b_res = addition(b_val1, b_val2);
                        values.push(b_res);
                    }
                    else if (bstack[k].includes("/")) {
                        b_val1 = bstack[k].slice(0, bstack[k].indexOf("/"));
                        b_val2 = bstack[k].slice((bstack[k].indexOf("/") + 1));
                        b_res = division(b_val1, b_val2);
                        values.push(b_res);
                    }
                    else if (bstack[k].includes("*")) {
                        b_val1 = bstack[k].slice(0, bstack[k].indexOf("*"));
                        b_val2 = bstack[k].slice((bstack[k].indexOf("*") + 1));
                        b_res = multiplication(b_val1, b_val2);
                        values.push(b_res);
                    }
                    else {
                        console.log("One or both symbol(s) given is NOT an operator!")
                    }
                }
            }
            else {
                console.log("Input String has unterminated brackets!");
                //calc();
            }
        }
        else if (text === "0") {
            console.log("Program Terminated!")
            process.exit(0)
        }
        else {
            if (text.includes("^") === true) {
                part1 = text.slice(0, text.indexOf("^"));
                part2 = text.slice((text.indexOf("^") + 1));
                values.push(part1);
                signs.push("^");

                if (isNaN(part2)) {
                    if (part2.includes("+") === true) {
                        part3 = part2.slice(0, part2.indexOf("+"));
                        part4 = part2.slice((part2.indexOf("+") + 1));
                        values.push(part3);
                        signs.push("+");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("-") === true) {
                        part3 = part2.slice(0, part2.indexOf("-"));
                        part4 = part2.slice((part2.indexOf("-") + 1));
                        values.push(part3);
                        signs.push("-");

                        if (isNaN(part4)) {
                            if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part5);
                                signs.push("+");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part4);
                                signs.push("*");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("*") === true) {
                        part3 = part2.slice(0, part2.indexOf("*"));
                        part4 = part2.slice((part2.indexOf("*") + 1));
                        values.push(part3);
                        signs.push("*");

                        if (isNaN(part4)) {
                            if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part5);
                                signs.push("+");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part4);
                                signs.push("*");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("/") === true) {
                        part3 = part2.slice(0, part2.indexOf("/"));
                        part4 = part2.slice((part2.indexOf("/") + 1));
                        values.push(part3);
                        signs.push("/");

                        if (isNaN(part4)) {
                            if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part5);
                                signs.push("+");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part4);
                                signs.push("*");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("^") === true) {
                        part3 = part2.slice(0, part2.indexOf("^"));
                        part4 = part2.slice((part2.indexOf("^") + 1));
                        values.push(part3);
                        signs.push("^");

                        if (isNaN(part4)) {
                            if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part5);
                                signs.push("+");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part4);
                                signs.push("*");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else {
                        console.log("No or Wrong operand given !!");
                        calc();
                    }
                }
                else {
                    //do nothing
                    values.push(part2);
                }
                //values.push(part1);
            }
            else if (text.includes("+") === true) {
                part1 = text.slice(0, text.indexOf("+"));
                part2 = text.slice((text.indexOf("+") + 1));
                values.push(part1);
                signs.push("+");

                if (isNaN(part2)) {
                    if (part2.includes("+") === true) {
                        part3 = part2.slice(0, part2.indexOf("+"));
                        part4 = part2.slice((part2.indexOf("+") + 1));
                        values.push(part3);
                        signs.push("+");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("-") === true) {
                        part3 = part2.slice(0, part2.indexOf("-"));
                        part4 = part2.slice((part2.indexOf("-") + 1));
                        values.push(part3);
                        signs.push("-");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("*") === true) {
                        part3 = part2.slice(0, part2.indexOf("*"));
                        part4 = part2.slice((part2.indexOf("*") + 1));
                        values.push(part3);
                        signs.push("*");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("/") === true) {
                        part3 = part2.slice(0, part2.indexOf("/"));
                        part4 = part2.slice((part2.indexOf("/") + 1));
                        values.push(part3);
                        signs.push("/");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("^") === true) {
                        part3 = part2.slice(0, part2.indexOf("^"));
                        part4 = part2.slice((part2.indexOf("^") + 1));
                        values.push(part3);
                        signs.push("^");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else {
                        console.log("No or Wrong operand given !!");
                        calc();
                    }

                }
                else {
                    //do nothing
                    values.push(part2);
                }
                //values.push(part1);
            }
            else if (text.includes("/") === true) {
                part1 = text.slice(0, text.indexOf("/"));
                part2 = text.slice((text.indexOf("/") + 1));
                values.push(part1);
                signs.push("/");

                if (isNaN(part2)) {
                    if (part2.includes("+") === true) {
                        part3 = part2.slice(0, part2.indexOf("+"));
                        part4 = part2.slice((part2.indexOf("+") + 1));
                        values.push(part3);
                        signs.push("+");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("-") === true) {
                        part3 = part2.slice(0, part2.indexOf("-"));
                        part4 = part2.slice((part2.indexOf("-") + 1));
                        values.push(part3);
                        signs.push("-");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("*") === true) {
                        part3 = part2.slice(0, part2.indexOf("*"));
                        part4 = part2.slice((part2.indexOf("*") + 1));
                        values.push(part3);
                        signs.push("*");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("/") === true) {
                        part3 = part2.slice(0, part2.indexOf("/"));
                        part4 = part2.slice((part2.indexOf("/") + 1));
                        values.push(part3);
                        signs.push("/");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("^") === true) {
                        part3 = part2.slice(0, part2.indexOf("^"));
                        part4 = part2.slice((part2.indexOf("^") + 1));
                        values.push(part3);
                        signs.push("^");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else {
                        console.log("No or Wrong operand given !!");
                        calc();
                    }

                }
                else {
                    //do nothing
                    values.push(part2);
                }
                //values.push(part1);
            }
            else if (text.includes("*") === true) {
                part1 = text.slice(0, text.indexOf("*"));
                part2 = text.slice((text.indexOf("*") + 1));
                values.push(part1);
                signs.push("*");

                if (isNaN(part2)) {
                    if (part2.includes("^") === true) {
                        part3 = part2.slice(0, part2.indexOf("^"));
                        part4 = part2.slice((part2.indexOf("^") + 1));
                        values.push(part3);
                        signs.push("^");
                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part5);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("-") === true) {
                        part3 = part2.slice(0, part2.indexOf("-"));
                        part4 = part2.slice((part2.indexOf("-") + 1));
                        values.push(part3);
                        signs.push("-");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("+") === true) {
                        part3 = part2.slice(0, part2.indexOf("+"));
                        part4 = part2.slice((part2.indexOf("+") + 1));
                        values.push(part3);
                        signs.push("+");
                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("/") === true) {
                        part3 = part2.slice(0, part2.indexOf("/"));
                        part4 = part2.slice((part2.indexOf("/") + 1));
                        values.push(part3);
                        signs.push("/");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("*") === true) {
                        part3 = part2.slice(0, part2.indexOf("*"));
                        part4 = part2.slice((part2.indexOf("*") + 1));
                        values.push(part3);
                        signs.push("*");

                        if (isNaN(part4)) {
                            if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part5);
                                signs.push("+");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part4);
                                signs.push("*");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else {
                        console.log("No or Wrong operand given !!");
                        calc();
                    }

                }
                else {
                    //do nothing
                    values.push(part2);
                }
                //values.push(part1);
            }
            else if (text.includes("-") === true) {
                part1 = text.slice(0, text.indexOf("-"));
                part2 = text.slice((text.indexOf("-") + 1));
                values.push(part1);
                signs.push("-");

                if (isNaN(part2)) {
                    if (part2.includes("+") === true) {
                        part3 = part2.slice(0, part2.indexOf("+"));
                        part4 = part2.slice((part2.indexOf("+") + 1));
                        values.push(part3);
                        signs.push("+");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("-") === true) {
                        part3 = part2.slice(0, part2.indexOf("-"));
                        part4 = part2.slice((part2.indexOf("-") + 1));
                        values.push(part3);
                        signs.push("-");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("*") === true) {
                        part3 = part2.slice(0, part2.indexOf("*"));
                        part4 = part2.slice((part2.indexOf("*") + 1));
                        values.push(part3);
                        signs.push("*");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("/") === true) {
                        part3 = part2.slice(0, part2.indexOf("/"));
                        part4 = part2.slice((part2.indexOf("/") + 1));
                        values.push(part3);
                        signs.push("/");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else if (part2.includes("^") === true) {
                        part3 = part2.slice(0, part2.indexOf("^"));
                        part4 = part2.slice((part2.indexOf("^") + 1));
                        values.push(part3);
                        signs.push("^");

                        if (isNaN(part4)) {
                            if (part4.includes("^") === true) {
                                part5 = part4.slice(0, part4.indexOf("^"));
                                part6 = part4.slice((part4.indexOf("^") + 1));
                                values.push(part5);
                                signs.push("^");
                            }
                            else if (part4.includes("-") === true) {
                                part5 = part4.slice(0, part4.indexOf("-"));
                                part6 = part4.slice((part4.indexOf("-") + 1));
                                values.push(part5);
                                signs.push("-");
                            }
                            else if (part4.includes("+") === true) {
                                part5 = part4.slice(0, part4.indexOf("+"));
                                part6 = part4.slice((part4.indexOf("+") + 1));
                                values.push(part4);
                                signs.push("+");
                            }
                            else if (part4.includes("/") === true) {
                                part5 = part4.slice(0, part4.indexOf("/"));
                                part6 = part4.slice((part4.indexOf("/") + 1));
                                values.push(part5);
                                signs.push("/");
                            }
                            else if (part4.includes("*") === true) {
                                part5 = part4.slice(0, part4.indexOf("*"));
                                part6 = part4.slice((part4.indexOf("*") + 1));
                                values.push(part5);
                                signs.push("*");
                            }
                            else {
                                console.log("No or Wrong operand given !!");
                                calc();
                            }

                        }
                        else {
                            //do nothing
                            values.push(part4);
                        }
                    }
                    else {
                        console.log("No or Wrong operand given !!");
                        calc();
                    }

                }
                else {
                    //do nothing
                    values.push(part2);
                }
                //values.push(part1);
            }
            else {
                console.log("No or Wrong operand given !!");
                calc();
            }
        }

        //console.log(bstack);
        //console.log(values);
        //console.log(signs);
    }

    console.log("");
    console.log("Javascript Calculator");
    setPrecision();
    string_split();

    try {
        answer = solve();
        console.log(answer.toFixed(precision));
        //throw new Error("Answer is undefined! Check input and try again.")
    }
    catch (e) {
        console.log("Answer is undefined! Check input and try again.");
    }


    calc();
}
calc();