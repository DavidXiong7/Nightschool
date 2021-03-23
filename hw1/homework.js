let pop = prompt("Do you want to know your fortune?");

const myFortune = [
  "A good life waits for you",
  "bad luck for the next 5 years",
  "You will die today",
  "Yup, doomed.",
];
const randomFortune =
  Math.floor(Math.random() * myFortune.length) % myFortune.length;

  function theFortune() {}
if (myFortune != null) {
  alert(myFortune[randomFortune]);
} else {
  alert("Return to the pit of despair");
}

theFortune()

// I look at the front-end and back-end like this: Front-end is the human body and the back-end is the brain because the front-end sends information to the back-end and it’s like the brain processes the information to return what the front-end is looking for.