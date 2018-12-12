let numberArray = [1,2,3,4,5,6,7,8,9,10];

function numb(na)
{
    let oddArray = [];
    let evenArray = [];
    let newArray = [];
    
    for(i = 0; i < numberArray.length; i++)
    {
        if(na[i] % 2 === 0)
        {
            evenArray.push(na[i]);
        }
        else
        {
            oddArray.push(na[i]);
        }

        newArray = oddArray + " & " + evenArray;
    }
    //console.log(evenArray);
    //console.log(oddArray);
    return newArray;
}
console.log(numb(numberArray));