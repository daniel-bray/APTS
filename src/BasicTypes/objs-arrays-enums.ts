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

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Daniel",
  age: 35,
  hobbies: ["Sports", "Cooking"], // array type
  role: Role.AUTHOR,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! Error !!!
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
