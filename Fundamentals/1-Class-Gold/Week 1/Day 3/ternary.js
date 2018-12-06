let x = 6;

(x>0) ? console.log("yes") : console.log("no");
//like an if statement
//? - true
//: - else    

if(x > 0)
{
    console.log("yes");
}
else{
    console.log("no");
}
//same thing

if(x == 0)
{
    console.log("hello");
}
else if(x < 0)
{
    console.log("hi");
}
else
{
    console.log("goodbye");
}

(x == 0)? console.log("hello") : (x < 0)? console.log("hi") : console.log("goodbye");

let age = 30;

//challenge
(age >= 25)? console.log("You can rent a car") : 
(age >= 21)? console.log("you can drink") : 
(age >= 18)? console.log("you can vote") : 
console.log("youre a minor");