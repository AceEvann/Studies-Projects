function lifeInWeeks(age) {   
        
        // Subtract 90 by the age 
        var yearsRemaining = 90 - age;

        // Count the days
        var days = yearsRemaining * 365;

        // Count the weeks
        var weeks = yearsRemaining * 52;

        // Count the months
        var months = yearsRemaining * 12;
        
        // Console with the asked message
        console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
    }
    
lifeInWeeks(56)
