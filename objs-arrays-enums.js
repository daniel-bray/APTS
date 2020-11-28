"use strict";
// const person: { name: string; age: number } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Daniel",
//   age: 35,
//   hobbies: ["Sports", "Cooking"], // array type
//   role: [2, "Author"], // union type
// };
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Daniel",
    age: 35,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR,
};
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! Error !!!
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
