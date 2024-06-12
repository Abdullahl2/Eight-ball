let eightBall = document.getElementById("8-ball");
let inputEl = document.getElementById("user-question");

eightBall.addEventListener("click", giveResponse);

function giveResponse() {
  let inputValue = document.getElementById("Input").value;
  inputValue = inputValue.toLowerCase();
  let resposeEl = document.getElementById("output");

  let rand = Math.floor(Math.random() * 5 + 1);

  if (inputValue == `Does magic ball work?` || inputValue == `is this legit?`) {
    resposeEl.innerHTML = "How dare you doubt me ";
  } else if (inputValue == `Of course`) {
    resposeEl.innerHTML = "LEAVE AT ONCE";
  } else if (inputValue == `Maybe, Maybe not`) {
    resposeEl.innerHTML = "Is Mohamad a good person";
  } else if (inputEl.toLowerCase() == "Will Mohamad become millionaire") {
    resposeE1l.innerHTML = "I dunno. This is an 8-ball, not a calculator!";
  } else if (inputValue == ``) {
    resposeEl.innerHTML = "Please ask a question...";
  } else if (rand == 1) {
    resposeEl.innerHTML = "Without a doubt!";
  } else if (rand == 2) {
    resposeEl.innerHTML = "Im not too sure about that...";
  } else if (rand == 3) {
    resposeEl.innerHTML = "Dont count on it";
  } else if (rand == 4) {
    resposeEl.innerHTML = outputEl.innerHTML = "Try again";
    ("Yes! I mean no! Wait... uhh, im not sure... go ask an 8-ball or something.");
  } else if (rand == 5) {
    resposeEl.innerHTML = "The answer you seek is behind you.";
  }
}
