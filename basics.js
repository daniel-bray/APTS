"use strict";
function adding(n1, n2, showResult, phrase) {
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //   throw new Error("incorrect input");
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResults = true;
var resultPhrase = "Result is: ";
var result = adding(number1, number2, printResults, resultPhrase);
