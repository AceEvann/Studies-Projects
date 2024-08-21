//Based on the Stanford Karel

//1 Move To The Top
function main(){
    moveFourTimes();
    turnLeft();
    moveFourTimes();
 }

 // Function created to move four times foward and reduce redundance
 function moveFourTimes(){
    move();
    move();
    move();
    move();
 }

 //2 Diagonal Line
 function main(){
    putBeeper();
    zigZag();
    zigZag();
    zigZag();
    zigZag();
 }
 
 // Function created to place the beepers in a diagonal line
 function zigZag(){
    turnLeft();
    move();
    turnRight();
    move();
    putBeeper();
 }

 //3 Chess Board Pattern
 function main(){
    moveAndBeep();
    toTheLeft();
    beepAndMoove();
    toTheRight();
    moveAndBeep();
    toTheLeft();
    beepAndMoove();
    toTheRight();
    moveAndBeep();
 }
 
// Function to turn left
 function toTheLeft(){
    turnLeft();
    move();
    turnLeft();
 }
 
// Function to turn right
 function toTheRight(){
    turnRight();
    move();
    turnRight();
 }
 
// Function to put three beepers in a row
 function moveAndBeep(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
 }

// Function to put two beepers in a row
 function beepAndMoove(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }
