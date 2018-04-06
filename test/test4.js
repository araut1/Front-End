// your code goes here
var cry = function sad()
{
  return "boohoo!"  
};

console.log(cry());




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



var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90,
29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

// your code goes here
var totals = bills.map(function(bill) {
  bill = bill * 0.15 + bill; 
  return Number(bill.toFixed(2)); //--> toFixed() need toFixed(2) to show how many decimal. 
});
console.log(totals);












 /*   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var row = 0; row < numbers.length; row++) {
    for (var column = 0; column < numbers[row].length; column++) {
      if( numbers[row][column] % 2 === 0)
      {
        numbers[row][column]="even";
      }
      else{
        numbers[row][column] = "odd";
      }
    }
  }

// your code goes here
console.log(  numbers);






