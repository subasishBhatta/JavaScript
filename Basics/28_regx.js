console.log("This is the tutorial for regular expression");


/*
There are different methods we can use in regular expression in javaScript
1. exec() - This method will executes a search for a match in a string. It returns an array of information or null on a mismatch.

2. test() - This method tests for a match in a string. It returns true or false.

3. match() - This method will return an array containing all of the matches, including capturing groups, or null if no match is found.

4. search() - This method will tests for a match in a string. It returns the index of the match, or -1 if the search fails.

5. replace() - This method will executes a search for a match in a string, and replaces the first matched substring with a replacement substring but it replaces all the matched substring if the global flag is on.

6. split() - This method uses a regular expression or a fixed string to break a string into an array of substrings.
*/


let reg = /chintu/;

// We can also use flag in the regular expression in order to maximise our search result
// reg = /chintu/g;            // g - Global flag
// reg = /chintu/gi;            // i - Case insensitive

let str = "I know chintu very well, chintu lives in my neighbourhood.";
// let str2 = "I know chintu very well, ChiNtu lives in my neighbourhood.";

// Function-1 = exec()
let result1 = reg.exec(str);
// console.log(result1);
// console.log(result1.index);
// console.log(result1[0]);
// console.log(result1.input);

//This gives other matches in the string if the regx has global flag
// let result = reg.exec(str);
// console.log(result);


//This gives case insensitive matches in the string if the regx has i flag
// let result = reg.exec(str);
// console.log(result);


// Function - 2 = test()
let result2 = reg.test(str);
// console.log(result2);

//////// String Functions------------------

// Function - 3 = match() - This function is a string function i.e it is appied on the string not on the regular expression. This function do its magic if the global flag is on.
let result3 = str.match(reg);
// console.log(result3);


// Function - 4 = search() - This will give the index of first matched substring
let result4 = str.search(reg);
// console.log(result4);


// Function - 5 = replace()
let result5 = str.replace(reg, "vicky");
// console.log(result5);


// Function - 6 = split() - It will split the string where it will find the regular expression and returns all the part as an array.
let result6 = str.split(reg);
console.log(result6);

// Here the extra number limit the output to that number, here it limits the output to 2.
let result7 = str.split(reg, 2);
console.log(result7);
