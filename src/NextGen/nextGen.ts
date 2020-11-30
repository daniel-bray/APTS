const userName = "daniel";
// username = "bob";
let age = 30;

age = 28;

const add3 = (a: number, b: number = 4) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add3(5));

const hobbies = ["Sports", "Cooking"];

const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  firstName: "daniel",
  age4: 30,
};

const copiedPerson = { ...person };

console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.8);

console.log(addedNumbers);

const [hobby1, hobby2] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName, age4 } = person;

console.log(person, firstName, age4);
