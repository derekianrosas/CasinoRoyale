console.log("Welcome to DiamondBack Casino");
console.log(
  "Home to our infamous slot machines, where you may or may not win something!"
);
function slotMachine() {
  let status = "active";
  const slotOne = Math.floor(Math.random() * 10);
  const slotTwo = Math.floor(Math.random() * 10);
  const slotThree = Math.floor(Math.random() * 10);
  let totalCash = prompt(
    "Let's get you started, how much money do you wanna risk?"
  );
  console.log(`Holy cow! $${totalCash}? that's a ton of money!`);
  let inquiryOne = prompt("Is this your first time playing? (y/n)");
  if (inquiryOne === "y") {
    return "Alright, yellowbelly! The rules are simple, you place your bet(the more the better)\nIf the numbers on the slot match, you get double your bet, get two matching, you get nothing, get no matching, you lose double";
  } else {
    ("Okay hotshot! Let's get to bettin!");
  }
  let betPrompt = prompt("How much you wanna lose?");
  console.log(`That's it? a measly $${betPrompt}?`);
}

slotMachine();
