alert ("Welcome to the World of Elydia")
alert ("This world is going through an epic war called 'The Matrix Takeover'. It all began because of the creation of Androids. The Androids are advanced ai with a humanoid form, they were meant to be controlled to better humanity and the world. However, once the Androids rebelled against the humans; it called for the Matrix Takeover. This war is close to an end, but it is up to you to decide who shall win...")
alert("Choose your side");
prompt("Please pick one of the two characters. Sentinel or Serafang.")



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

const player = true;

switch (characterOne != characterTwo) {
    case characterOne.Name:
        alert("You've chosen Sentinel!");
        break;
    case characterTwo.Name:
        alert("You've chosen Serafang");
        break;
        default:
            alert("Save the world.. and your own kind.")
}

// function attackMoves() {
//     alert(`${characterOne.Power.length[2]} is your power move!`)
// }

// function attackMoves2() {
//     alert(`${characterTwo.Power.length[3]} is your power move!`)
// }

// while (attackMoves) {
//     switch (attackMoves) {
//         case characterOne:
//             alert("Powerful attack!")
//             break;
//         default:
//             break;
//     }
// }

let attack1 = 10;
let weakAttack = 3;

if (attack1 > weakAttack){   
    alert("You are being attacked! You use your most powerful move and wipe it away!")
} else {
    alert("You failed the attack")
}


if (weakAttack > attack1) {
    prompt("You can't do this right now")
} else{ 
    alert("Your godly powers are too much for them...")
}

// for(let walk = 10; walk <= 5; walk++) {
//     alert(`You take ${walk} many steps into the hyperspace nebula`)
// }
    alert("You've fought so hard for this moment...")

    alert ("Congratulations! You've won! Elydia can now rest in peace because of you.")

