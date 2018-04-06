// your code goes here
var cry = function sad()
{
  return "boohoo!"  
};

console.log(cry());




/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression 
//1. Call emotions function  
//2. Add "happy" as a string in emotions function call 
//3. inline laugh function 
//3. In laugh(), create ha variable 
//4. Create for loop that says that while x = 0, x++ and it'll stop when x < num. 
//5. While the for loop is true, "ha" will be added to ha.  
/* NOTE: ha prints twice because the emotions function declaration states that  
what ever is in the myFunc argument should be printed twice*/
emotions("happy", function laugh(num){
    var ha = ""; 
    for (x = 0; x < num; x++){ 
        ha += "ha";
    }  
    return ha + "!";
});



var udaciFamily = ["Julia","James","dfs"];

for(var i=0;i<=2;i++)
{
    console.log(udaciFamily[i]);
}



/*
 * Programming Quiz: Joining the Crew (6-6)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here

crew.push(doctor, sister, shepherd); 
console.log(crew); 


//6-8




var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 
            19, 300, 3775, 299, 36, 209, 148, 169, 299, 
            6, 109, 20, 58, 139, 59, 3, 1, 139];

// Write your code here
test.forEach(function(num, index, array){
  if(num % 3 === 0){
    array[index] = num += 100; 
  }

});

console.log(test);


















