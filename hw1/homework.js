let pop = prompt("Do you want to know your fortune?");

const myFortune = [
  "A good life waits for you",
  "bad luck for the next 5 years",
  "You will die today",
  "Yup, doomed.",
];
const randomFortune =
  Math.floor(Math.random() * myFortune.length) % myFortune.length;

if (myFortune != null) {
  alert(myFortune[randomFortune]);
} else {
  alert("Return to the pit of despair");
}