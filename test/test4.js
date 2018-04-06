/*
 * Programming Quiz: Cry (5-5)
 */

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
