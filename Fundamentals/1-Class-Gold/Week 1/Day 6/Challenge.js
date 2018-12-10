let c = "I like learning at eleven fifty";

function caps(longString)
{
    let broken = longString.split(' ');//split will split by whatever is in the parentheses split(e) wil; make array values seperated by e's
    let newString = '';
    for(i = 0; i < broken.length; i++)
    {
        let rest = broken[i].slice(1);//start at this point in the string[1] and go after that
        let letter = broken[i].charAt(0).toUpperCase();
        newString += letter + rest + ' ';
    }
    return newString;
}

console.log(caps(c));