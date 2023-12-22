import inquirer from "inquirer";
let randomNo = Math.floor(Math.random() * 10);
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: "Guess the number",
    },
]);
const { userguess } = answer;
console.log("Userguess:", userguess, "\n Random no:", randomNo);
if (userguess === randomNo) {
    console.log(userguess, "userguess", randomNo);
    console.log("Congratulations! \nYour answer is correct");
}
else {
    console.log("Please try again");
}
