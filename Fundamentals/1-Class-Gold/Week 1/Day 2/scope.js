var x = 12;

function one()
{
    var x = 33;
    console.log(x);
}
one();
console.log(x);


//const will not change value at all
//let can change but will not bleed into the next ß


//if else statement
function run()
{
    if(3==1)
    {
        console.log("hi");
    }
    else if(3==2)
    {
        console.log("hello");
    }
    else
    {
        console.log("Hello World");
    }
}

run();