//else if
let age = 19;

if(age >= 25)
{
    console.log('you can rent a car');
}
else if(age >= 21)
{
    console.log('you cna drink');
}
else if(age >= 18)
{
    console.log('you can drive');
}
else
{
    console.log('you are a minor');
}


//if else
let name = "mitcH"

if(name[0] == name[0].toUpperCase)
{
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
}
else
{
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}