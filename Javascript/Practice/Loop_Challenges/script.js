//1
// for ( i = 0; i < 20 ; i++) {
//     var offNumbersOnly = i % 2 == 1;
//     if(offNumbersOnly) {
//         console.log("Result: " + i);
//     }
// }

//2
// for ( i = 100; i > 0 ; i--) {
//     var offNumbersOnly = i % 3 == 0;
//     if(offNumbersOnly) {
//         console.log("Result: " + i);
//     }
// }

//3
// for(var i=4; i>-4; i-=1.5) {
//     console.log("Result: " + i);
// }


//4 for loop version
// var sum = 1;
// var sumResult = 0;

// for (var i=1 ; i<=100 ; i++) {
//     var sum = sum + " + " + i;
//     var sumResult = sumResult + i;
// }
// console.log("Result: " + sum);
// console.log("Result: " + sumResult);

//4 while loop version
// var start = 0;
// var end = 100;
// var sum = 1;
// var sumResult = 0;
    
// while(start <= end) {
//     var sum = sum + " + " + start;
//     var sumResult = sumResult + start;
//     start++;
// }
// console.log("Result: " + sum);
// console.log("Result: " + sumResult);

//5
var product = 1;
var productResult = 1;

for (var i=1 ; i<=12 ; i++) {
    var product = product + " * " + i;
    var productResult = productResult * i;
}
console.log("Result: " + product);
console.log("Result: " + productResult);