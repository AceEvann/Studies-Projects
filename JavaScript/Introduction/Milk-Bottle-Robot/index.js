function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUP");
    console.log("moveUP");
    console.log("moveUP");
    console.log("moveUP");
    console.log("moveRight");
    console.log("moveRight");

    var bottlesOfMilk = Math.floor(money / 1.5);
    var exchage = money % 1.5;
    
    console.log("buy " + bottlesOfMilk + " bottles of milk with " 
        + money + "$ and the bring  " + exchage+ "$ of exchange");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("entereHouse");
}

getMilk(15);
