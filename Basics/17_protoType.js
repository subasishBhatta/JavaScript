console.log("This is the exercise for prototype");

// Object literal prototype - Object.prototype
// This object is created over the existing object prototype
let obj = {
    name: "subasish",
    lang: "python",
    id: 4,
    read: function () {
        console.log("This is a object");
    }
}

console.log(obj);

// Here Object is created using constructor 
// Here we have our own protype where we can add our extra methods
function Obj(newName) {
    this.name = newName;
}

// Here we can set extra methods using constructor prototype
Obj.prototype.getName = function () {
    return this.name;
}

Obj.prototype.setName = function (name) {
    this.name = name;
}

let newObj = new Obj("Chintu");
console.log(newObj);
