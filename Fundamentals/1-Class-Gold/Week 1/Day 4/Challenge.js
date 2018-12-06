//replace with FizzBuzz
/*for(let x = 0; x <= 100; x++)
{
    if(x%3 == 0 && x%5 == 0 )
    {
        console.log("FizzBuzz");
    }
    else if(x%3 == 0)
    {
        console.log("Fizz");
    }
    else if(x%5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(x);
    }
}*/


//calculator return

function tipCalc(bill)
{
    let tip = (bill * .20)
    return tip.toFixed(2);
}

let totalTip = tipCalc(20.00);
console.log(totalTip);