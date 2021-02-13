//Prompt 1
var num1 = prompt('Please enter a number');
//Prompt 2
var num2 = prompt('Please enter a second number');
//Solution Prompt1
const response = prompt('The solution is:');
console.log(num1 * num2);
//Array
var alphabet =['a', 'b', 'c','d','e', 'f'];
console.log(alphabet);
console.log(alphabet[0]);//a
console.log(alphabet[1]);//b
console.log(alphabet[2]);//c
console.log(alphabet[3]);//d
console.log(alphabet[4]);//e
console.log(alphabet[5]);//f
//remove "f"
alphabet[5] = "undefined";
console.log(alphabet);
//add "g"
alphabet[5] = 'g';
console.log(alphabet);
//remove "a"
alphabet[0] = "undefined";
console.log(alphabet);
//add "1"
alphabet[0] = '1';
console.log(alphabet);