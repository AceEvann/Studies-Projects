// 1
var tweet = prompt("Write your tweet: ");

// Use .length to count tweet characters
var tweetCount = tweet.length;

// Show how many characters were written, then subtract the limit from them 
alert("You have written " + tweetCount + " characters, you have " + 
    (140 - tweetCount) + " characters left");

/////////////////////////////////////////////////////////////////////////////

// 2
var tweet = prompt("Write your tweet: ");

// Use .slice to imitate how many characters a tweet will show
alert(tweet.slice(0,141));
