function lifeInWeeks(age) {   
        
        // Subtract age by 90 
        var yarsRemaining = 90 - age;

        // Count the days
        var days = yarsRemaining * 365;

        // Count the weeks
        var weeks = yarsRemaining * 52;

        // Count the months
        var months = yarsRemaining * 12;
        
        // Console with the asked message
        cconsole.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
    }
    
lifeInWeeks(56)
