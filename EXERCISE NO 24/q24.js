//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
console.log("Is string1 equal to string2? I predict False.");
console.log(string1 == string2);
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 != string2);
// Tests using the lower case function
var str1 = "HELLO";
var str2 = "hello";
console.log("Is str1 equal to str2 after converting both to lowercase? I predict True.");
console.log(str1.toLowerCase() == str2.toLowerCase());
console.log("Is str1 equal to str2 ? I predict False.");
console.log(str1 == str2);
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
var a = 5;
var b = 10;
var c = 15;
console.log("Is a less than b AND b less than c? I predict True.");
console.log(a < b && b < c);
console.log("Is b less than a OR b greater than c? I predict False.");
console.log(b < a || b > c);
// Test whether an item is in an array
var fruits = ["apple", "banana", "orange"];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes("banana"));
console.log("Is 'pear' in the fruits array? I predict False.");
console.log(fruits.includes("pear"));
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes("grape"));
console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(!fruits.includes("apple"));
