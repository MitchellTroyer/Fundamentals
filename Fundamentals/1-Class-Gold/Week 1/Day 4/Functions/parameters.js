//empty storage baxes we can name whatever we want. They use the same name inside of the function
//can use multiple parameters in a single function

let p = prompt("what type of pet do you have?","");
function pet(animal)
{
    console.log(`I have a ${animal} for a pet`);
}

//pet("dog");
//pet(p);

////////////////////////////////
function pet(owner, animal)
{
    console.log(`${owner} has a ${animal} for a pet`);
    alert("hi");
}

pet("Mitch", "Dog");


function name(first, last)
{
    fullName = first + " " +last;
    console.log(`Hello, my name is ${fullName} `);
}

//name("Mitchell", "Troyer");