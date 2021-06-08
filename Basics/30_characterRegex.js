console.log("This is the tutorial for character set in regular expression");

// Character set in regular expression

// For character set in regular expression we use []
let reg = /chintu/;
reg = /ch[iwe]ntu/;                 // It matches only characters i, w, and e
reg = /ch[a-z]ntu/;
reg = /ch[a-zA-z]ntu/;              
reg = /ch[a-zA-z]ntu[0-9]/;         // It matches all the characters from a-z, A-Z and at the end from 0-9
reg = /ch[^wer]ntu[0-9]/;           // It matches all the characters that are not w, e, r
reg = /ch[wz0-9]ntu[0-9]/;


// Quantifiers - To use quantifiers we use {}
reg = /chi{2}ntu/;              // It matches if there are two i in the word
reg = /chi{0,3}ntu/;            // It matches if there are 0, 1, 2 or 3 no of i the word


// Grouping - For grouping we use ()
reg = /(chi){2}ntu/;            // It matches if there are two (chi) group i.e it forms a group of chi
reg = /(chi){0,2}ntu/;

reg = /(chi){2}([0-9]r){3}ntu/;     // This is a complex regular expression uses all the sets


let str = "My name is chintu";
str = "My name is chwntu";
str = "My name is chQntu";
str = "My name is chQntu9";
str = "My name is chwntu8";
str = "My name is ch8ntu8";
str = "My name is chiintu";
str = "My name is chintu";
str = "My name is chiiintu";
str = "My name is chichintu";
str = "My name is chintu";
str = "My name is chichi1r2r3rntu";

let result = reg.exec(str);
console.log("The result from exec() is ", result)

if (reg.test(str)) {
    console.log(`The string ${str} matches with the regular expresion "${reg.source}"`);
}
else
{
    console.log(`The string doesn't matches the regular expression "${reg.source}"`);
}

