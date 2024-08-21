// 1
var tweet = prompt("Write your tweet: ");

// Use .length to count tweet charecters
var tweetCount = tweet.length;

// Show how much characters was written and then subtrect the limit with them 
alert("You have written " + tweetCount + " characters, you have " + 
    (140 - tweetCount) + " characters left");

/////////////////////////////////////////////////////////////////////////////

// 2
var tweet = prompt("Write your tweet: ");

// Use .slice to limitate how much characters tweet will show
alert(tweet.slice(0,141));
