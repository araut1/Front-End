
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




var facebookProfile = {
  name: "Natalie Cyreus",
  friends: 927,
  messages: ["In Buenos Aires!", "In Stockholm!", "In New York!"],
  postMessage(message) {
    facebookProfile.messages.push(message); 
  }, 
  deleteMessage(index) {
    facebookProfile.messages.splice(index,1);  
  }, 
  addFriend() {
    facebookProfile.friends += 1; 
  },
  removeFriend() {
   facebookProfile.friends = facebookProfile.friends -1; 
  }, 
}; 

facebookProfile.removeFriend();
facebookProfile.friends;



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
