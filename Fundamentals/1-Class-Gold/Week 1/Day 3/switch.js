//Switch statements help choose between several options for a variable and a default
/*Four main parts
    switch(arguement being evaluated),
    case(one of the options for the variable to be), 
    break(breaks us out of the switch statement once we hit our case),
    default()*/

var friend = "Dave";

switch (friend)
{
    case "Autumn":
        console.log("Hey Autumn, when are you going rock climbing");
        break;
    case "Dave":
        console.log("Hey Dave, how is Cooper?");
        //break;
    case "Dave":
        console.log("Hey Dave, how is Cooper?");
        break;
    case "Alecx":
        console.log("Hey Alecx, when are we playing DnD?");
        break;

    default:
        console.log(`I'm sorry, ${friend}, but do i know you?`); //dollar sign and bracket shows there is a variable in a string
}

//like an if statement but instead of asking in the top line if something equals something it asks for a variable it asks for a variable then goes through the table of names for a particular one.
//without a break it will not stop on the line that is right and it will check all the ones until the end or a break.

var friend = "David";

switch (friend)
{
    case "David":
        console.log("Hey man, how Divison 2?");
        break;
    case "Christian":
        console.log("Hey Lore Master, hows Breana?");
        break;
    case "Kara":
        console.log("Hi hun, what time you of work today?");
        break;
    
    default:
        console.log(`Sorry, ${friend}, but do i know you?`);
}

//multiple condition switch

let yep = 0;

switch(true)
{
    case(yep === 0):
    case(yep === -8):
        console.log('worked');
        break;
    case(yep > 0):
        console.log("worked!");
        break;
    
    default:
        console.log("didnt work");
}