
var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here

    close: function ()
    {
        if (umbrella.isOpen === false) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia close the umbrella!";
        }
    }
};




var breakfast = {
  name : "The Lumberjack",
  price : 9.95 ,
  ingredience :["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
}

console.log(breakfast); 



var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary() {
   return("Welcome!\nYour balance is currently $"+savingsAccount.balance+" and your interest rate is "+ savingsAccount.interestRatePercent+"%."); 
  },
}; 

savingsAccount.printAccountSummary();
