//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const colors: string[] = ["red", "green", "blue"];

// Intentional error: accessing an index that doesn't exist
console.log(colors[3]); // This will throw an error

// Correcting the error by accessing a valid index
console.log(colors[2]); // This will print "blue"
