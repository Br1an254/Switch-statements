//const day = prompt ('enter day monday,tuesday,wednesday,thursday,friday,saturday,sunday')
 let day = prompt ("Enter day of the week");
switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log(`${day} is a weekday`);
        break;
    case  "saturday":
    case "sunday":
        console.log(`${day} is a weekend`);
        break;
    default:
        console.log("Invaild input");
        
}

    

