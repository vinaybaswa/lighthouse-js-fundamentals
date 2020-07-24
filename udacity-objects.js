// Umbrella
const umbrella = {
  color: "pink",
  isOpen: false,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  close: function () {
    if (umbrella.isOpen === true) {
      umbrella.isOpen = false;
      return "Julia closes the umbrella";
    } else {
      umbrella.isOpen = true;
      return "The umbrella is already closed!";
    }
  },
};

console.log(umbrella.color);

// Bank Accounts 1
const savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
      return ("thank you for depositing money\nYour new balance is $" + savingsAccount.balance + ".");
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
      return ("thank you for withdrawing money\nYour new balance is $" + savingsAccount.balance + ".");
    }
  },
  printAccountSummary: function AccountSummary() {
    return ("Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.")
  },
};

console.log(savingsAccount.printAccountSummary());
console.log(savingsAccount.withdraw(100));
console.log(savingsAccount.deposit(200));

// Facebook Friends
const facebookProfile = {
  name: "Vinay",
  friends: 1075,
  messages: ["Hello Everyone", "I love Boating", "This restaurant is awesome", "Good Night"],
  postMessage: function addMessage(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function removeMessage(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function makeFriend() {
    facebookProfile.friends += 1;
  },
  removeFriend: function unFriend() {
    facebookProfile.friends -= 1;
  },
};

// Donuts Revisited
const donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach((donut) => {
  console.log (donut.type + " donuts cost $" + donut.cost + " each");
});
