/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
 *
 *     F = C x 1.8 + 32
 *
 * Log the fahrenheit variable to the console.
 *
 */

var celsius = 12;
var fahrenheit = celsius * 1.8 + 32;

console.log(/* print out result here */fahrenheit);

/*
 * Programming Quiz: All Tied Up (2-5)
 */

var joke = "Why couldn\'t the shoes go out and play? \nThey were all \"tied\" up!"
console.log(joke);

var thingOne ="red";
var thingTwo  ="blue";
console.log(thingOne + " "+ thingTwo);

var bill = 10.25 + 3.99 + 7.15; 
var tip = bill * 0.15;
var total = bill + tip;
console.log("$"+total.toFixed(2));

var firstName = "Julia";
var interest = "cats";
var hobby = "play video games";
var awesomeMessage = "Hi, my name is "+firstName+". I love "+interest+". In my spare time, I like to "+hobby+"." ;
console.log(awesomeMessage);



var musicians = 1;

// your code goes here


if (musicians <=0 ) {
  console.log("not a group");
} 
else if (musicians ===1 ) {
  console.log("solo");
}
else if (musicians === 2) {
  console.log("duet");
}
else if (musicians === 3) {
  console.log("trio");
}
else if (musicians === 4) {
  console.log("quartet");
}
else {
console.log("this is a large group");
}

var eatsPlants = false;
var eatsAnimals = true;

var category = (eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore": ""));

// "herbivore" if an animal eats plants
// "carnivore" if an animal eats animals
// "omnivore" if an animal eats plants and animals
// undefined if an animal doesn't eat plants or animals


console.log(category);


