
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
