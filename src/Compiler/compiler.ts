const button2 = document.querySelector("button")!;

function clickHandler(message: string) {
  console.log("Clicked " + message);
}

//a comment
if (button2) {
  button2.addEventListener("click", clickHandler.bind(null, "You/'re weclome"));
}
