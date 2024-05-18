// import the "inquirer" module, which is command line interface for Node.js
import inquirer from "inquirer";
// Declare a constant `answere` and asign it to the result of the `inquirer.prompt` function
const answere = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words: ",
    }
]);
const words = answere.sentence.trim().split(" ");
//print the aaray of words to the console
console.log(words);
//print the word count of the sentence to the console
console.log(`your sentence is word count is ${words.length}`);
