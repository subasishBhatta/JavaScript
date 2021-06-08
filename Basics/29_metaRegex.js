console.log("This is tutorial on metacharacter on regular expression");

/*
There are different meta characters we can use in the regular expression
1. ^ - The string should begin with the specified word written after this character.

2. $ - The string should end with the specified word written before this character.

3. . - This meta character can allow only one any character in its place and matches the string.

4. * - This meta character allows any number of character in its place and matches the string.

5. + - This character allows one or more preceding term
*/

let reg = /chintu/;
reg = /^chintu/;        // This matches only if the string started with chintu
reg = /chintu$/;        // This matches only if the string ends with chintu
reg = /ch.ntu/;        // This matches only one character in its place
reg = /ch*ntu/;        // This matches more than one character in its place
reg = /chi+ntu/;        // This matches more than one character in its place
reg = /chi?ntu/;        
reg = /chi?ntu?/;        

let str = "I know chintu very well, chintu lives in my neighbourhood.";
str = "chintu is chintud";
str = "chintu is chintu";
str = "chrentu is chrntu";       
str = "chrentu is chrentu";       
str = "qweuygwduqntu is chintu";       
str = "chiiiintu is chintu";       
str = "chntu is chintu";       
str = "chentu is chintu";       
str = "chentu is chnt";       

let result = reg.exec(str);
console.log("The result from exec() is ", result)

if (reg.test(str)) {
    console.log(`The string ${str} matches with the regular expresion "${reg.source}"`);
}
else
{
    console.log(`The string doesn't matches the regular expression "${reg.source}"`);
}
