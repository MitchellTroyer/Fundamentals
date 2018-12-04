function hello()
{
    console.log("Hello World!"); 
}

hello();
hello();

function numberEntered(x)
{
    console.log("The number entered was: ", x);
}

numberEntered(27);

function addAnyTwoNumbers(x , y)
{
    console.log(x + y);
}

addAnyTwoNumbers(19 , 31);

function subtractsTwoNumbers (firstNum , secondNum)
{
    console.log(secondNum - firstNum);
}

subtractsTwoNumbers(45 , 91);


function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z)
{
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total;
}
getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);