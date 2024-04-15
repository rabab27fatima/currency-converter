#! /usr/bin/env node
import inquirer from "inquirer";
let currencies = {
    "PKR": {
        "USD": 0.0036,
        "UAE": 0.0013,
        "IR": 0.30,
        "SR": 0.013,
        "PKR": 1
    },
    "USD": {
        "USD": 1,
        "UAE": 3.67,
        "IR": 83.44,
        "SR": 3.75,
        "PKR": 277.89
    },
    "UAE": {
        "USD": 0.27,
        "UAE": 1,
        "IR": 22.72,
        "SR": 1.02,
        "PKR": 75.67
    },
    "IR": {
        "USD": 0.012,
        "UAE": 0.044,
        "IR": 1,
        "SR": 0.045,
        "PKR": 3.33
    },
    "SR": {
        "USD": 0.27,
        "UAE": 0.98,
        "IR": 22.24,
        "SR": 1,
        "PKR": 74.08
    }
};
let answer = await inquirer.prompt([
    {
        name: "amount", type: "number", message: "Enter your amount:"
    },
    {
        name: "from", type: "list", message: "Select your currency:", choices: ["PKR", "USD", "UAE", "IR", "SR"]
    },
    {
        name: "to", type: "list", message: "Select your convertion currency:", choices: ["PKR", "USD", "UAE", "IR", "SR"]
    }
]);
let { from, to, amount } = answer;
if (from && to && amount) {
    let result = currencies[from][to] * amount;
    console.log(`Your result from ${from} to ${to} ${result}`);
}
else {
    console.log("Invalid input");
}
