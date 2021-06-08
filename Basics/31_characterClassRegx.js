console.log("This is the tutorial for character class in regular expression");

// Character class

let reg = /\whintu/;            // \w (word character) - _ or alphabet or numbers
reg = /\w+hintu/;            // \w+ means one or more word character
reg = /\Whintu/;            // \W means non word character (means any thing except _or alphabet or number)
reg = /\W+hintu/;            // \W+ means one or more non word character
reg = /number \d680/;            // \d means digit
reg = /number \d+80/;            // \d+ means one or more digit
reg = /number \D80/;            // \D means non digit
reg = /number \D+80/;            // \D+ means one or more non digit
reg = /\snumber/;            // \s means it matches white space character
reg = /\s+number/;            // \s+ means it matches one or more than one white space character
reg = /\Snumber/;            // \S means it matches non white space character
reg = /\S+number/;            // \S+ means it matches one or more non white space character
reg = /mobile\b/;            // \b means it matches the word boundry

// Assertions
reg = /c(?=h)/;             // It means it matches where there is an h after c
reg = /c(?!h)/;             // It means it matches where there is not an h after c

let str = "chintu is 94";
str = "asadecedehintu is 94";
str = "casdadgeyehintu is 94";
str = "casdad999geyehintu @#hintu is 94";
str = "casdad999geyehintu @#hintu is 94";
str = "casdad999geyehintu @#hintu mobile number 8680";
str = "casdad999geyehintu @#hintu mobile number 9439234680";
str = "casdad999geyehintu @#hintu mobile number istlsd80";
str = "casdad999geyehintu @#hintu mobile number istlsd80";
str = "casdad999geyehintu @#hintu mobile           number istlsd80";
str = "casdad999geyehintu @#hintu mobile @#$%^number istlsd80";
str = "casdad999geyehintu @#hintu mobile @#$%^number istlsd80";
str = "casdad999geyehintu @#chintu mobile @#$%^number istlsd80";


let result = reg.exec(str);
console.log("The result from exec() is ", result)

if (reg.test(str)) {
    console.log(`The string ${str} matches with the regular expresion "${reg.source}"`);
}
else
{
    console.log(`The string doesn't matches the regular expression "${reg.source}"`);
}

