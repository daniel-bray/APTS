let userInput: unknown;
let userName2: string;

userInput: 5;
userInput: "Daniel";
if (typeof userInput === "string") {
  userName2 = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);
