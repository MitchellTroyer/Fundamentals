/*for(let i = 0; i < 100; i++)//(variable; what it wants and when to break; what to change)
{
    console.log(i);
}

for(let x = 0; x <= 20; x+=2)
{
    console.log(x);
}

for(let b = 0; b >= -24; b-=2)
{
     console.log(b);
}



//function in a loop
function looped()
{
    console.log("hi");
}

for(let a = 0; a <= 3; a++)
{
    looped();
}*/


//display indiviual characters
/*let name = "Mitch";

for (let x = 0; x < name.length; x++)//.length shows the length of the name.
{
    let myName = name.charAt(x);//charAt pulls the character from the word that is in the brackets.
    console.log(myName);//x=name's length so it will print it over and over till it reaches the end of names array.
}*/

sum = 0;

for(let x = 1; x <= 50; x++)
{
   sum = sum + x;
}
console.log(sum);