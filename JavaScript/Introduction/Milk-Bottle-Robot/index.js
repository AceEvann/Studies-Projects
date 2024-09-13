// Main function
function getMilk(money, costPerBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUP");
    console.log("moveUP");
    console.log("moveUP");
    console.log("moveUP");
    console.log("moveRight");
    console.log("moveRight");
    //Console with the initial request
    console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk.");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("entereHouse");

    // Return the calcChange function
    return calcChange(money, costPerBottle);
}

// Function to know how many bottles could be bought
function calcBottles(startingMoney, costPerBottle) {

    // Variable that do the division
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);

    // Return the variable
    return numberOfBottles;
}

// Function that calculates the change
function calcChange(startingAmount, costPerBottle) {

    // Variable that take the rest of the division
    var change = startingAmount % costPerBottle;

     // Return the variable
    return change;
}

// Final console
console.log("Hello sir, here is your " + getMilk(5, 3) + "$ of change.");
