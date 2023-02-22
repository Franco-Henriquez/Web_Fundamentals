var x = 0;
for(var i=1; i<=15; i++) {
    var multipleOfThree = i % 3 == 0;
    var multipleOf5 = i % 5 == 0;
    if(multipleOfThree) {
        console.log("Fizz");
    } else if (multipleOf5) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
