console.log("Welcome to DiamondBack Casino");
console.log(
  "Home to our infamous slot machines, where you may or may not win something!"
);
function slotMachine() {
  var status = "active";
  let totalCash = prompt(
    "Let's get you started, how much money do you wanna risk?"
  );
  console.log(`Holy cow! $${totalCash}? that's a ton of money!`);
  let inquiryOne = prompt("Is this your first time playing? (y/n)");
  if (inquiryOne === "y") {
    console.log(
      "Alright, yellowbelly! The rules are simple, you place your bet(the more the better)\nIf the numbers on the slot match, you get double your bet, get two matching, you get nothing, get no matching, you lose double"
    );
  } else {
    console.log("Okay hotshot! Let's get to bettin!");
  }
  let betPrompt = prompt("How much you wanna lose?");
  console.log(`That's it? a measly $${betPrompt}?`);
  totalCash -= betPrompt;
  console.log(`Current total after bet $${totalCash}`);

  let promptSpin = prompt("Type 'spin' to pull the lever!");

  while ((status = true)) {
    const slotOne = Math.floor(Math.random() * 10);
    const slotTwo = Math.floor(Math.random() * 10);
    const slotThree = Math.floor(Math.random() * 10);
    console.log(slotOne, slotTwo, slotThree);
    if (slotOne === slotTwo || slotTwo === slotThree || slotOne === slotThree) {
      console.log("Winner! Here's your prize!");
      totalCash += betPrompt * 2;
      console.log(totalCash);
      answer = prompt("Would you like to spin again? (y/n)");
      if ((answer = "y")) {
        status = true;
      } else {
        status = false;
      }
    } else if (
      slotOne != slotTwo ||
      slotOne != slotThree ||
      slotTwo != slotThree
    ) {
      console.log("Loser! But at least you don't lose nothin!");
      console.log(totalCash);
      answer = prompt("Would you like to spin again? (y/n)");
      if ((answer = "y")) {
        status = "active";
      } else {
        status = false;
      }
    }
  }
}

slotMachine();
