//declaration
//hi();//run declaration
//console.log(hi);//run var
function hi()
{
    console.log("hi");
}

//expression
var hi = function hi()
{
    console.log("I already said hi");
}

//declaration are hoisted
//expression not hoisted

//function calling

//hi();
//hi();
//hi();

function hey()
{
    console.log("Dave, tell cooper I said hi");
}

//hey();
//console.log(hey());//will not work

function numb()
{
    for(x = 1; x <= 10; x++)
    {
        console.log(x);
    }
}

//numb();

function countByHand()
{
    console.log(1, 2, 3);
    console.log(2);
    console.log(3);
}

//countByHand();

let arr = ["This", "Is", "Really", "Cool"]

function arrayList()
{
    for (list of arr)
    {
        console.log(list);
    }
}

//arrayList();