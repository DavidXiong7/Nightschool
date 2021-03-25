alert ("Welcome to the World of Elydia")
alert ("This world is going through an epic war called 'The Matrix Takeover'. It all began because of the creation of Androids. The Androids are advanced ai with a humanoid form, they were meant to be controlled to better humanity and the world. However, once the Androids rebelled against the humans; it called for the Matrix Takeover. This war is close to an end, but it is up to you to decide who shall win...")
alert("Choose your side");
var character = prompt("Please pick one of the two characters: Sentinel or Serafang.")
console.log(character)



let characterOne = {
    Name: "Sentinel",
    Age: 999,
    Power: ["Unlimited Strength", "Self-upgrade", "Heat Vision", "Technological Manipulation", "Hyperspace Travel"],
    Race: "Android Deity",
    Gender: "Unknown"
};

let characterTwo = {
    Name: "Serafang",
    Age: 22,
    Power: ["Godly Powers", "God's Wrath", "Taste Vengeance", "All-Righteous Might", "World-ender form"],
    Race: "Human Deity",
    Gender: "Female"
};



switch (character) {
    case characterOne.Name:
        alert("You've chosen Sentinel!");
        break;
        case
     characterTwo.Name:
        alert("You've chosen Serafang!");
        break;
        default:
        break;
}

function alertUserStoryline([characterOne], [characterTwo]) {
switch (character){
    case characterOne.Name:
        alert("Destroy Humanity! and save Elydia!")
        break;
        case characterTwo.Name:
            alert("Protect Humanity! and save Elydia!")
            break;
            default:
                while (character) {
                    alert("Best of luck to you!")
                }
                break;
}
}

// if (characterOne == "Sentinel"){
//     alert("Robot")
// } else if (characterTwo == "Serafang"){
//     alert("Human")
// } else {
//     while (chosen) {
//         alert("Go!")
//     }
//     console.log("Player has not chosen.")
// }



function promptTravel() {
let fastTravel = prompt("Go into battle");
let yes = "Yes";
let no = "No";
    if (yes) {
        alert ("Goodluck and win!")
    } else if (no) {
        alert("Sorry, but you have to fight anyway! haha")
    }
    while (fastTravel) {
        prompt("Choose now")
    }
    while (fastTravelOption) {
        prompt("Do you want to continue?")
    }
}





let attack1 = 10;
let weakAttack = 3;

if (attack1 > weakAttack){   
    alert("You are being attacked! You use your most powerful move and wipe it away!")
} else {
    for (let attack = 1; characterOne < characterOne.length; i++) {
        const attackmove = Power[2];
    }
    alert("You failed the attack")
}


if (weakAttack > attack1) {
    prompt("You can't do this right now")
} else{ 
    alert("You have proven to be too much for them...")
}

let endGame = alert("Your journey ends here...");

    alert("...")
    alert ("You've won! Elydia can now rest in peace because of you.")

    function ending() {
       end = prompt("This is the end")
        while (theEnding) {
            alert("Thanks for playing my game.. I will improve it in the future")
        }
    }