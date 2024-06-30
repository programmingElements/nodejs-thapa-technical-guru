import chalk from "chalk";
import validator from "validator";

// console.log(chalk.blue('Hello World!'));

// console.log(chalk.blue.italic('Hello World!'));

// console.log(chalk.blue.underline('Hello World!'));

// console.log(chalk.green.underline.inverse('Hello World!'));

// console.log(chalk.red.underline.inverse('false'));

const res = validator.isEmail('chakri.j66@gmail.com');

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res)); // true

console.log();

const res02 = validator.isEmail('chakri.j66');

console.log(res02 ? chalk.green.inverse(res02) : chalk.red.inverse(res02)); // false