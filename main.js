import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from,",
        message: "enter from currency",
        types: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    },
    {
        name: "to",
        message: "enter to currency",
        types: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    },
    {
        name: "currency",
        message: "enter your amount",
        types: "number",
    }
]);
console.log(user_answer);
